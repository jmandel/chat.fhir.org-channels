import { readFileSync, writeFileSync, existsSync } from "fs";
import { VertexAI } from "@google-cloud/vertexai";

// Path to the input and output files
const inputFilePath = "db.json";
const outputFilePath = "summaries.json";

// Read existing summaries if the file exists
const existingSummaries = new Set(
  existsSync(outputFilePath)
    ? readFileSync(outputFilePath, "utf-8")
        .split("\n")
        .filter(line => line.trim() !== "")
        .map(line => JSON.parse(line).id)
    : []
);

// Read all lines from the input NDJSON file
const lines = readFileSync(inputFilePath, "utf-8").split("\n").filter(line => line.trim() !== "");

// Parse the lines into JSON objects
const data = lines.map(line => JSON.parse(line));

// Initialize the Google Cloud Vertex AI client
const vertexAI = new VertexAI({ 
    project: "fhir-org-starter-project",
    location: "us-central1",
});

// Function to generate summaries using Google Cloud Vertex AI
async function generateSummaries() {
  const generativeModel = vertexAI.getGenerativeModel({
    model: "gemini-pro-experimental",
  });

  const eighteenMonthsAgo = Date.now() - 18 * 30 * 24 * 60 * 60 * 1000; // Approximate 18 months in milliseconds

  for (const item of data) {
    // Skip if already summarized
    if (existingSummaries.has(item.id)) continue;
    // if (item.id !== 197113) continue

    // console.log(item);
    // Filter channels with at least 20 messages
    if ((item?.messages?.length ?? 0) < 20) continue;

    // Filter channels with most recent message within the past 18 months
    const mostRecentMessageTimestamp = Math.max(...item.messages.map(m => m.timestamp * 1000)); // Convert to milliseconds
    if (mostRecentMessageTimestamp < eighteenMonthsAgo) continue;

    const request = {
      generationConfig: {
          maxOutputTokens: 2048,
          temperature: 0.7,
          responseMimeType: "application/json",
      },
      contents: [
        {
          role: 'user',
          parts: [
            {
                text: `
Background on HL7 Workgroup acrynyms:

Code	System	Display	Definition
  aid	http://hl7.org/fhir/hl7-work-group	Application Implementation and Design	
Application Implementation and Design (http://www.hl7.org/Special/committees/java/index.cfm).

  arden	http://hl7.org/fhir/hl7-work-group	Arden Syntax	
Arden Syntax (http://www.hl7.org/Special/committees/arden/index.cfm)

  brr	http://hl7.org/fhir/hl7-work-group	Biomedical Research and Regulation	
Biomedical Research and Regulation (http://www.hl7.org/Special/committees/rcrim/index.cfm).ff

  cbcc	http://hl7.org/fhir/hl7-work-group	Community-Based Care and Privacy	
Community-Based Care and Privacy (http://www.hl7.org/Special/committees/homehealth/index.cfm).

  cdamg	http://hl7.org/fhir/hl7-work-group	CDA Management Group	
CDA Management Group (http://www.hl7.org/Special/committees/cdamg/index.cfm)

  cds	http://hl7.org/fhir/hl7-work-group	Clinical Decision Support	
Clinical Decision Support (http://www.hl7.org/Special/committees/dss).

  cg	http://hl7.org/fhir/hl7-work-group	Clinical Genomics	
Clinical Genomics (http://www.hl7.org/Special/committees/clingenomics/index.cfm).

  cgp	http://hl7.org/fhir/hl7-work-group	Cross-Group Projects	
Cross-Group Projects (http://www.hl7.org/Special/committees/cgp/index.cfm)

  cic	http://hl7.org/fhir/hl7-work-group	Clinical Interoperability Council	
Clinical Interoperability Council (http://www.hl7.org/Special/committees/cic/index.cfm).

  cimi	http://hl7.org/fhir/hl7-work-group	Clinical Information Modeling Initiative	
Clinical Information Modeling Initiative (http://www.hl7.org/Special/committees/cimi/index.cfm)

  claims	http://hl7.org/fhir/hl7-work-group	Payer/Provider Information Exchange Work Group	
Payer/Provider Information Exchange Work Group (http://www.hl7.org/Special/committees/claims/index.cfm)

  cqi	http://hl7.org/fhir/hl7-work-group	Clinical Quality Information	
Clinical Quality Information (http://www.hl7.org/Special/committees/cqi/index.cfm).

  dev	http://hl7.org/fhir/hl7-work-group	Health Care Devices	
Health Care Devices (http://www.hl7.org/Special/committees/healthcaredevices/index.cfm).

  education	http://hl7.org/fhir/hl7-work-group	Education	
Education (http://www.hl7.org/Special/committees/education/index.cfm).

  ehr	http://hl7.org/fhir/hl7-work-group	Electronic Health Records	
Electronic Health Records (http://www.hl7.org/Special/committees/ehr/index.cfm).

  ec	http://hl7.org/fhir/hl7-work-group	Emergency Care	
Emergency Care (http://www.hl7.org/Special/committees/emergencycare/index.cfm)

  fhir	http://hl7.org/fhir/hl7-work-group	FHIR Infrastructure	
FHIR Infrastructure (http://www.hl7.org/Special/committees/fiwg/index.cfm).

  fmg	http://hl7.org/fhir/hl7-work-group	FHIR Management Group	
FHIR Management Group (http://www.hl7.org/Special/committees/fhirmg/index.cfm)

  fm	http://hl7.org/fhir/hl7-work-group	Financial Management	
Financial Management (http://www.hl7.org/Special/committees/fm/index.cfm).

  hsi	http://hl7.org/fhir/hl7-work-group	Health Standards Integration	
Health Standards Integration (http://www.hl7.org/Special/committees/hsi/index.cfm).

  hsswg	http://hl7.org/fhir/hl7-work-group	Human and Social Services	
Human and Social Services (http://www.hl7.org/Special/committees/hsswg/index.cfm)

  hta	http://hl7.org/fhir/hl7-work-group	Terminology Authority	
Terminology Authority (http://www.hl7.org/Special/committees/termauth/index.cfm)

  ictc	http://hl7.org/fhir/hl7-work-group	Conformance	
Conformance (http://www.hl7.org/Special/committees/ictc/index.cfm)

  ii	http://hl7.org/fhir/hl7-work-group	Imaging Integration	
Imaging Integration (http://www.hl7.org/Special/committees/imagemgt/index.cfm).

  inm	http://hl7.org/fhir/hl7-work-group	Infrastructure And Messaging	
Infrastructure And Messaging (http://www.hl7.org/Special/committees/inm/index.cfm).

  its	http://hl7.org/fhir/hl7-work-group	Implementable Technology Specifications	
Implementable Technology Specifications (http://www.hl7.org/Special/committees/xml/index.cfm).

  lhs	http://hl7.org/fhir/hl7-work-group	Learning Health Systems	
Learning Health Systems (http://www.hl7.org/Special/committees/lhs/index.cfm)

  mnm	http://hl7.org/fhir/hl7-work-group	Modeling and Methodology	
Modeling and Methodology (http://www.hl7.org/Special/committees/mnm/index.cfm).

  mobile	http://hl7.org/fhir/hl7-work-group	Mobile Health	
Mobile Health (http://www.hl7.org/Special/committees/mobile/index.cfm)

  oo	http://hl7.org/fhir/hl7-work-group	Orders and Observations	
Orders and Observations (http://www.hl7.org/Special/committees/orders/index.cfm).

  pa	http://hl7.org/fhir/hl7-work-group	Patient Administration	
Patient Administration (http://www.hl7.org/Special/committees/pafm/index.cfm).

  pe	http://hl7.org/fhir/hl7-work-group	Patient Empowerment	
Patient Empowerment (http://www.hl7.org/Special/committees/patientempowerment/index.cfm)

  pc	http://hl7.org/fhir/hl7-work-group	Patient Care	
Patient Care (http://www.hl7.org/Special/committees/patientcare/index.cfm).

  pher	http://hl7.org/fhir/hl7-work-group	Public Health	
Public Health (http://www.hl7.org/Special/committees/pher/index.cfm).

  phx	http://hl7.org/fhir/hl7-work-group	Pharmacy	
Pharmacy (http://www.hl7.org/Special/committees/medication/index.cfm).

  sd	http://hl7.org/fhir/hl7-work-group	Structured Documents	
Structured Documents (http://www.hl7.org/Special/committees/structure/index.cfm).

  sec	http://hl7.org/fhir/hl7-work-group	Security	
Security (http://www.hl7.org/Special/committees/secure/index.cfm).

  soa	http://hl7.org/fhir/hl7-work-group	Services Oriented Architecture	
Services Oriented Architecture (http://www.hl7.org/Special/committees/soa/index.cfm)

  ti	http://hl7.org/fhir/hl7-work-group	Terminology Infrastructure	
Terminology Infrastructure (http://www.hl7.org/Special/committees/Vocab/index.cfm)

  tsmg	http://hl7.org/fhir/hl7-work-group	Terminology Services Management Group (TSMG)	
Terminology Services Management Group (TSMG) (http://www.hl7.org/Special/committees/tsmg/index.cfm)

  us	http://hl7.org/fhir/hl7-work-group	US Realm Steering Committee	
US Realm Taskforce (http://www.hl7.org/Special/committees/usrealm/index.cfm).

  v2	http://hl7.org/fhir/hl7-work-group	V2 Management Group	
V2 Management Group (http://www.hl7.org/Special/committees/v2management/index.cfm)

  vocab	http://hl7.org/fhir/hl7-work-group	Vocabulary	
Vocabulary (http://www.hl7.org/Special/committees/Vocab/index.cfm).`
            }
          ], 
        }, {
          role: 'user',
          parts: [
            {
                text: `Channel Data:{"id":179308,"name":"BRR - Pharmacy model","description":"This stream is intended for collaboration on the Common Medication Model and medication related resources currently under development","summaries":[{"subject":"Produced From  / Ingredient","extract":"<p><span class=\"user-mention silent\" data-user-id=\"192166\">Jean Duteau</span> <a href=\"#narrow/stream/179308-BRR--.20Pharmacy.20model/topic/Produced.20From.20.20.2F.20Ingredient/near/215420201\">said</a>:</p>\n<blockquote>\n<p>your problem is that you say <snipped for brevity>`
            }
          ], 
        }, {
          role: "assistant",
          parts: [{text: `Analyze the provided Zulip conversation transcript. Extract a list of **specific, relevant keywords** that characterize the discussion. 

* **Focus on tangible concepts directly related to the channel name and related conversation** 
* **Avoid generic FHIR terms** like "resource," "data," "profile," "implementation guide", "extension," or "interoperability" unless they are an explicit focus of this channel in particular.

* **Spell out all acronyms** for clarity.

Your job is to provide clarity to help individuals decide which channels they want to subscribe to.

Return the keywords in a JSON object with the following structure:

{
  "channelDescription": "Concise, authoritative description of the channel's primary focus. Describe what the channel is about in terms of real-world objects and activities related to medication data. Avoid starting with phrases like 'This channel is...' or 'Discussion about...'."  // base this on channel name, refined by what you see in conversation
  "keywords": [ "keyword1", ...], // start with the expanded channel name. One or more keywords needed to understand this channel, based on description
}`}]
        }, {
          role: "assistant",
          parts: [{text: JSON.stringify({
                "channelDescription": "Modeling and standardization of medication and pharmaceutical product data for regulatory, clinical, and supply chain use cases. Focuses on representing drug definitions, packaging, administration details, and related clinical information.",
                "keywords": [
                    "biomedical research and regulation",
                    "medication product definitions",
                    "pharmaceutical product identifiers",
                    "drug packaging",
                    "electronic product information",
                    "administrable product definitions",
                    "medicine regulatory data",
                    "medication request workflows"
                ]
})}]
        }, {
          role: "user",
          parts: [{
            text: `Channel Data: ${JSON.stringify({
                id: item.id,
                name: item.name,
                description: item.description,
                summaries: item.summaries
              })}`
          }]
        }
      ]
    };

    const resp = await generativeModel.generateContent(request);
    const contentResponse = await resp.response;
    const summary = JSON.stringify({...contentResponse, name: item.name, id: item.id});
    console.log(summary);

  }
}

// Run the summary generation
generateSummaries().catch((e) => {console.error(e); process.exit(1)});
