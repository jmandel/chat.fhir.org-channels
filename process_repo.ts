import { promises as fs } from 'fs';
import path from 'path';
import { VertexAI } from "@google-cloud/vertexai";

const repoPath = process.argv[2];
if (!repoPath) {
  console.error('Please provide the repository path as an argument.');
  process.exit(1);
}
const igName = repoPath.split('/').pop();

await fs.mkdir('summaries', { recursive: true });
async function processRepo(repoPath: string) {
  const inputDir = path.join(repoPath, 'input');
  const outputFile = path.join('summaries', `${igName}.md`);

  // Check if output file already exists
  try {
    await fs.access(outputFile);
    console.log(`Summary for ${igName} already exists. Skipping this repo.`);
    return;
  } catch (error) {
    // File doesn't exist, continue processing
  }

  // Check if 'input' folder exists
  try {
    await fs.access(inputDir);
  } catch (error) {
    console.log(`No 'input' folder found in ${repoPath}. Skipping this repo.`);
    return;
  }

  // Concatenate all relevant files
  const fileContent = await concatenateFiles(inputDir);

  // Prepare and send prompt to Vertex AI
  await generateSummary(fileContent);
}

async function concatenateFiles(dir: string): Promise<string> {
  const allowedExtensions = ['.txt', '.md', '.plantuml', '.fsh'];
  let allFiles: { path: string; depth: number; name: string; isIndex: boolean; isPageContent: boolean }[] = [];

  async function collectFiles(currentDir: string) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        await collectFiles(fullPath);
      } else if (entry.isFile() && allowedExtensions.includes(path.extname(entry.name)) && entry.name !== 'ignoreWarnings.txt') {
        const relativePath = path.relative(dir, fullPath);
        const depth = relativePath.split(path.sep).length;
        const isIndex = entry.name.toLowerCase().includes('index');
        const isPageContent = relativePath.toLowerCase().includes('pagecontent');
        allFiles.push({ path: fullPath, depth, name: entry.name, isIndex, isPageContent });
      }
    }
  }

  await collectFiles(dir);

  // Sort all files once
  allFiles.sort((a, b) => {
    if (a.isPageContent !== b.isPageContent) return a.isPageContent ? -1 : 1;
    if (a.depth !== b.depth) return a.depth - b.depth;
    if (a.isIndex !== b.isIndex) return a.isIndex ? -1 : 1;
    return a.name.length - b.name.length;
  });

  // Process sorted files
  let content = '';
  const maxSize = 400 * 1024; // 400KB in bytes
  let currentSize = 0;

  for (const file of allFiles) {
    const fileContent = await fs.readFile(file.path, 'utf-8');
    const sourceContent = `<source path="${file.path}">\n${fileContent}</source>\n`;
    const sourceSize = Buffer.byteLength(sourceContent, 'utf-8');

    if (currentSize + sourceSize > maxSize) {
      console.log(`Skipping ${file.path} as it would exceed the 400KB limit.`);
      continue;
    }

    content += sourceContent;
    currentSize += sourceSize;

    if (currentSize >= maxSize) {
      console.log(`Reached 400KB limit. Stopping file processing.`);
      break;
    }
  }

  console.log(`Total content size: ${currentSize / 1024} KB`);
  return content;
}

async function generateSummary(content: string) {
  const vertexAI = new VertexAI({
    project: "fhir-org-starter-project",
    location: "us-central1",
  });

  const generativeModel = vertexAI.getGenerativeModel({
    model: "gemini-pro-experimental",
    generationConfig: {
        temperature: 0.7,
    }
  });

  const promptInstructions = `# FHIR IG Analysis
Given the FHIR Implementation Guide (IG) source files above, provide a structured analysis addressing the following questions:

1. What is this IG trying to do? Articulate its objectives without using jargon.
2. How were the problems this IG addresses handled previously, and what limitations led to the development of this IG? (Only use information provided in the input files; do not speculate or make assumptions.)
3. What approaches does this IG introduce, and how does it work in terms of technicial approach?
4. What are important scope decisions, design choices, or contextual factors? (Only use information provided in the input files; do not speculate or make assumptions.)

Provide concise, factual responses to each question based on the content of the IG. Aim for clarity and precision in your analysis. Begin with "# $igName: Analysis"`;

  const request = {
    systemInstruction: "You are a health information technology expert.",
    contents: [
      { role: 'user', parts: [{ text: content + "\n\n" + promptInstructions }] },
    ]
  };

  // Create prompts directory if it doesn't exist
  await fs.mkdir('prompts', { recursive: true });

  // Write the full prompt request to a file
  await fs.writeFile(path.join('prompts', `${igName}.txt`), JSON.stringify(request, null, 2));

  try {
    const response = await generativeModel.generateContent(request);
    let analysis = response.response.candidates?.[0].content.parts[0].text || "";
    console.log('Initial Analysis:', analysis);

    // Create analysis directory if it doesn't exist
    await fs.mkdir('analysis', { recursive: true });

    // Save the initial analysis to a file in the analysis directory
    await fs.writeFile(path.join('analysis', `${igName}.md`), analysis);

    // Refinement stage
    const refinementPrompt = `
Here is the analysis of a FHIR Implementation Guide:

${analysis}

Use the analysis to create a plain language summary of the guide that adheres to these guidelines:
1. Explain the IG's purpose and how it works.
2. Write ~200 words in a single paragraph for a general audience.
3. Write in clear prose without jargon.
4. Use third-person perspective.
5. Maintain an objective, informative tone throughout.
6. Present information factually, including capabilities and (if any are noted in the analysis) limitations.
7. Avoid promotional language or unverified claims about benefits.

Provide only the refined summary as your response, without any additional explanations or comments.`;

    const refinementRequest = {
      systemInstruction: "You are a skilled communicator with expertise in health information technology and a knack for clear, concise writing.",
      contents: [
        { role: 'user', parts: [{ text: refinementPrompt }] },
      ]
    };

    await fs.writeFile(path.join('prompts', `${igName}-refinement.txt`), JSON.stringify(refinementRequest, null, 2));
    const refinementResponse = await generativeModel.generateContent(refinementRequest);
    let refinedSummary = refinementResponse.response.candidates?.[0].content.parts[0].text || analysis;
    console.log('Refined Summary:', refinedSummary);

    // Check if the refinedSummary contains explanations of FHIR, IG, or EHR
    const needsFinalRefinement = /(Fast Healthcare Interoperability Resources|Implementation Guide|Electronic Health Record)/i.test(refinedSummary);

    if (needsFinalRefinement) {
      // Additional refinement to avoid explaining FHIR, IG, and EHR
      const finalRefinementPrompt = `
Here's a summary of a FHIR Implementation Guide:

${refinedSummary}

Please revise this summary to adhere to the following guideline:
- Do not explain what FHIR is; do not expand the acronym FHIR; just call it FHIR.
- Do not explain what an IG is; do not expand the acronym IG; just call it an IG.
- Do not explain what an API is; do not expand the acronym API; just call it an API.
- Do not explain what an EHR is; do not expand the acronym EHR; just call it an EHR.

Retain the original summary and only revise it to avoid explaining FHIR, IG, and EHR.

Provide only the final refined summary as your response, without any additional explanations or comments.`;

      const finalRefinementRequest = {
        contents: [
          { role: 'user', parts: [{ text: finalRefinementPrompt }] },
        ]
      };

      await fs.writeFile(path.join('prompts', `${igName}-final-refinement.txt`), JSON.stringify(finalRefinementRequest, null, 2));
      const finalRefinementResponse = await generativeModel.generateContent(finalRefinementRequest);
      refinedSummary = finalRefinementResponse.response.candidates?.[0].content.parts[0].text || refinedSummary;
    console.log('Final Refined Summary:', refinedSummary);
    }

    
    // Save the final refined summary to a file in the summaries directory
    await fs.writeFile(path.join('summaries', `${igName}.md`), refinedSummary);
  } catch (error) {
    console.error('Error generating or refining summary:', error);
  }
}

processRepo(repoPath).catch(console.error);