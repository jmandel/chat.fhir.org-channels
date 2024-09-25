import { promises as fs } from 'fs';
import path from 'path';
import { VertexAI } from "@google-cloud/vertexai";

const repoPath = process.argv[2];
if (!repoPath) {
  console.error('Please provide the repository path as an argument.');
  process.exit(1);
}

await fs.mkdir('summaries', { recursive: true });
async function processRepo(repoPath: string) {
  const inputDir = path.join(repoPath, 'input');

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
  let content = '';

  async function processDirectory(currentDir: string) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (entry.isFile() && allowedExtensions.includes(path.extname(entry.name))) {
        content += `---:${fullPath}---\n`;
        content += await fs.readFile(fullPath, 'utf-8');
        content += '\n';
      }
    }
  }

  await processDirectory(dir);
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
Given the content of a FHIR Implementation Guide (IG), create a clear, concise summary for patients and non-experts. Follow these guidelines:
1. Start with a TL;DR. Example:
**TL;DR:** This guide helps apps share data from continuous glucose monitors (CGMs) with electronic health records (EHRs). It explains how apps can send CGM summaries, glucose readings, and device information to EHRs in a standard way, so doctors and patients can easily access this information.

2. Then provide direct statement of the IG's purpose and scope. Example:
The Argo Continuous Glucose Monitoring Implementation Guide (IG) aims to improve the sharing of CGM data between different healthcare systems. It focuses on standardizing how information from CGM devices and apps is sent to EHRs, allowing for better integration and use of this data in patient care.

2. Proceed to describe how the IG addresses specific healthcare ecosystem needs, explaining with clear, straightforward language.
3. Define technical terms or acronyms in context.
4. Aim for 200-400 words total, simple paragraphs of plain text.
5. Do not enumerate the files or profiles, just explain the important content.
Tone and Style Guide:
- Use clear, precise language without unnecessary elaboration.
- Maintain an objective, informative tone throughout.
- Focus on explaining the IG's content and purpose, not its format or nature as a document.
- Present information factually, including both capabilities and limitations.
- Use third-person perspective, referring to "patients," "healthcare providers," or specific user groups relevant to the IG.
- Assume the user is already aware of FHIR and aware that this IG uses FHIR.
- Aim for 9th grade reading level.
- Avoid promotional language or claims about benefits unless explicitly stated in the IG.
The goal is to provide a straightforward, factual explanation of the IG's purpose, content, and applications in healthcare, helping non-experts understand its role in health information technology without unnecessary commentary.`;

  const request = {
    contents: [
      { role: 'user', parts: [{ text: promptInstructions }] },
      { role: 'user', parts: [{ text: content }] }
    ]
  };

  try {
    const response = await generativeModel.generateContent(request);
    const summary = await response.response;
    console.log('Summary:', summary.candidates?.[0].content.parts[0].text);
    // Optionally, you can save the summary to a file in the repo
    await fs.writeFile(path.join('summaries', `${repoPath.split('/').pop()}.txt`), summary.candidates?.[0].content.parts[0].text || "");
  } catch (error) {
    console.error('Error generating summary:', error);
  }
}

processRepo(repoPath).catch(console.error);