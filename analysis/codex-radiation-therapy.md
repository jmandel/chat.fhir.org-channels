# CodeX™ Radiation Therapy: Analysis

## 1. Objectives

This implementation guide aims to standardize how radiation therapy information is recorded and shared between different health information systems. This means that patient data, such as treatment details, progress reports, and summaries, can be easily exchanged between systems like electronic health records (EHRs) and radiation oncology systems. This will improve care coordination, patient safety, and enable better reporting and research.

## 2. Current Practices and Limitations

Currently, radiation therapy information is often siloed within specific oncology systems, making it difficult for other healthcare providers to access. Treatment summaries are often created manually, leading to clinician burden and potential errors. The lack of standardized data formats makes it difficult to use this information for reporting or research purposes, requiring additional manual data entry.

## 3. New Approach

This IG leverages the Fast Healthcare Interoperability Resources (FHIR) standard to define a common language for exchanging radiation therapy data. This allows different systems to understand and share information seamlessly. The IG defines specific profiles for different types of radiation therapy data, such as treatment prescriptions, plans, and summaries, ensuring consistency and accuracy.

Technically, the IG utilizes FHIR resources like ServiceRequest and Procedure to represent different stages of the radiotherapy workflow, including prescriptions, planning, and delivery. It also defines extensions to capture specific radiotherapy details, like modality, technique, and dose. This structured data can be exchanged using FHIR APIs, allowing systems to communicate effectively.

## 4. Contextual Factors and Design Decisions

* **mCODE Foundation:** The IG builds upon the minimal Common Oncology Data Elements (mCODE) standard, which provides a foundation for representing oncology data in FHIR. 
* **IHE-RO XRTS Alignment:** The IG aligns with the Integrating the Healthcare Enterprise – Radiation Oncology (IHE-RO) Exchange of Radiotherapy Summaries (XRTS) specifications, ensuring compatibility with existing standards.
* **US Core Conformance:** The IG adheres to US Core conformance requirements, promoting interoperability within the US healthcare system.
* **Focus on Structured Data:** The emphasis on structured data enables automated data exchange, reporting, and analysis, reducing manual effort and improving accuracy.
* **Open Source and Collaborative Development:** The IG is an open-source project developed collaboratively with input from various organizations, including professional societies, vendors, and healthcare providers, ensuring broad adoption and community support. 
