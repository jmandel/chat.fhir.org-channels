# EBMonFHIR: Analysis

## 1. Objectives

The EBMonFHIR Implementation Guide aims to enable computers to understand and exchange scientific knowledge in a standardized way. This includes:

- **Identifying and referencing research papers and other knowledge artifacts:** Imagine a digital library where computers can easily find and understand the information in research papers.
- **Representing research study details:**  Think of a way for computers to understand the design of a research study, including who was eligible to participate and how the results were analyzed.
- **Sharing research findings:**  Picture a system where computers can exchange the results of research studies, including the specific findings, the people those findings apply to, and the level of confidence in those findings.
- **Evaluating research:** Imagine computers being able to assess the quality of research and understand the strengths and weaknesses of different studies.
- **Combining research findings:**  Envision a system where computers can bring together the results of multiple studies to provide a more complete picture of the evidence.
- **Developing recommendations:** Think of a way for computers to understand and share recommendations based on the best available evidence.

## 2. Previous Approaches and Limitations

Previously, scientific knowledge was often shared in ways that were difficult for computers to process:

- **Citations:** Existing citation formats were not flexible enough to handle all types of knowledge artifacts (e.g., datasets, software) and were not designed for integration with computer systems.
- **Evidence:** There was no standard way to represent evidence in a machine-readable format, making it difficult for computers to understand and exchange research findings.

## 3. Technical Approach

The EBMonFHIR IG uses the HL7 FHIR standard, a framework for exchanging healthcare information, to represent scientific knowledge. This involves:

- **Defining new FHIR resources:**  The IG introduces new FHIR resources specifically for representing citations, evidence, and other types of scientific knowledge.
- **Profiling existing FHIR resources:**  The IG modifies existing FHIR resources (e.g., Group, Composition) to better suit the needs of scientific knowledge exchange.
- **Creating value sets and code systems:** The IG defines standard terminologies for describing study designs, statistical methods, and other key concepts.

## 4. Context and Design Decisions

- **FHIR R5 and R6 compatibility:** The IG is built on FHIR version R5 but incorporates features from R6 to ensure smooth interoperability between systems using different FHIR versions.
- **Focus on computable representation:** The IG emphasizes representing scientific knowledge in a way that computers can process and understand, enabling automated analysis and decision support.
- **Support for complex research designs:** The IG provides structures for representing a wide range of research designs, including comparative studies, meta-analyses, and net effect analyses.
- **Emphasis on transparency and provenance:** The IG includes elements for documenting the source of evidence, the methods used to evaluate it, and the rationale for recommendations.
- **Alignment with evidence-based medicine principles:** The IG is designed to support the principles of evidence-based medicine, including the use of systematic reviews, the assessment of certainty of evidence, and the consideration of patient values and preferences. 
