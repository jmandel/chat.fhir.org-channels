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

  const promptInstructions = `# Direct IG Summary Prompt for Non-Experts
Given the FHIR Implementation Guide (IG) source files above, create a clear, concise summary for patients and non-experts. Follow these guidelines:
1. Aim for 150 words total, simple paragraphs of plain text without formatting.
2. Describe how the IG addresses specific healthcare ecosystem needs, explaining with clear, straightforward language.
3. Define technical terms or acronyms in context, if you need them.
4. Do not enumerate the files or profiles, just explain the important content.
Tone and Style Guide:
- Use clear, precise language without unnecessary elaboration.
- Maintain an objective, informative tone throughout.
- Focus on explaining the IG's content and purpose, not its format or nature as a document.
- Present information factually, including both capabilities and limitations.
- Use third-person neutral perspective, referring to "patients," "healthcare providers," or specific user groups relevant to the IG.
- Do not make claims about benefits or claims that the IG is the best or only solution.
- Assume the user is aware of FHIR and aware that this IG uses FHIR.
- Write for 9th grade reading level.
- Avoid promotional language or unverified claims about benefits
The goal is to provide a straightforward, factual explanation of the IG's purpose, content, and applications in healthcare, helping non-experts understand its role in health information technology without unnecessary commentary.`;

  const request = {
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
    const summary = await response.response;
    console.log('Summary:', summary.candidates?.[0].content.parts[0].text);
    // Save the summary to a file in the summaries directory
    await fs.writeFile(path.join('summaries', `${igName}.md`), summary.candidates?.[0].content.parts[0].text || "");
  } catch (error) {
    console.error('Error generating summary:', error);
  }
}

processRepo(repoPath).catch(console.error);