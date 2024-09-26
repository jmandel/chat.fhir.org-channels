# FHIR-us-pq-cmc-fda: Analysis

## 1. Objectives

This implementation guide aims to standardize how pharmaceutical companies submit drug information to the US Food and Drug Administration (FDA). It focuses on the technical details about drug quality, manufacturing, and controls, often referred to as "PQ/CMC" data. The goal is to make this submission process digital, using a structured format called FHIR (Fast Healthcare Interoperability Resources). This will allow the FDA to process information more efficiently and accurately.

## 2. Previous Approaches and Limitations

Previously, PQ/CMC data was submitted to the FDA using a format called eCTD (electronic Common Technical Document). While eCTD provided a framework for organizing submissions, it relied heavily on unstructured documents like PDFs. This made it difficult for the FDA to extract and analyze specific data points. The lack of structured data standards limited the efficiency of review processes.

## 3. Introduced Approaches and Technical Approach

This IG introduces a new approach by defining structured data elements for PQ/CMC information and mapping them to FHIR resources. It leverages FHIR's standardized data types, terminologies, and profiles to represent PQ/CMC information in a machine-readable format. The IG provides detailed guidance on how to use FHIR resources to represent specific PQ/CMC data elements, ensuring consistency and interoperability. 

The technical approach involves creating FHIR profiles that constrain and extend base FHIR resources to meet PQ/CMC requirements. These profiles define the data elements, value sets, and constraints necessary to represent PQ/CMC information accurately. The IG also includes examples and diagrams to illustrate how to use these profiles to create valid FHIR bundles for submission to the FDA.

## 4. Key Scope Decisions, Design Choices, and Contextual Factors

* **Phased Approach:** The development of this IG follows a phased approach, with PQ/CMC data elements being defined and mapped to FHIR resources in stages. This allows for iterative development and feedback from industry stakeholders.
* **Alignment with eCTD:** The FHIR profiles defined in this IG are aligned for use within eCTD version 4.0 or later. This ensures compatibility with the existing regulatory submission framework.
* **Initial Focus on Solid Oral Dosage Forms:** The Stage 1 CTD sections and FHIR profiles are currently limited to Solid Oral Dosage Forms (SODF), with support for other dosage forms planned for future iterations.
* **Exclusion of Co-packaged Products:** Co-packaged products, such as those containing diluents, are currently out of scope.
* **Human Readable Narratives:** The IG acknowledges the need for human-readable representations of PQ/CMC data and provides guidance on using the narrative element of the Composition resource to include human-readable content. It also provides a narrative transform tool to assist in generating XHTML narratives.
* **Focus on XML Format:** While the IG supports both XML and JSON formats, the emphasis is on XML as it's the required format for eCTD submissions to the FDA.
* **Use of Controlled Terminologies:** The IG leverages existing controlled terminologies like NCIt (NCI Thesaurus) and UNII (Unique Ingredient Identifier) to ensure semantic interoperability and accurate representation of PQ/CMC data.
* **Collaboration with HL7 BR&R Workgroup:** The development of this IG is a collaborative effort between the FDA and the HL7 Biomedical Research & Regulation (BR&R) workgroup, ensuring alignment with broader healthcare interoperability standards.
