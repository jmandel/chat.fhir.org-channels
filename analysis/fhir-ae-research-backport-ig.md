# FHIR AE Research Backport IG: Analysis

## 1. Objectives 

This implementation guide aims to standardize how adverse event information is captured and shared in clinical research. It wants to make it easier for different systems, like electronic health records and patient portals, to exchange this information using a common language (FHIR). This will improve efficiency in reporting adverse events to regulatory authorities like the FDA.

## 2. Previous Approaches and Limitations

Previously, there was no standardized way to capture and share adverse event data across different systems used in clinical research. This led to variations in definitions, workflows, and data requirements. As a result, data often had to be manually transcribed between systems, creating inefficiencies and potential for errors.

## 3. Technical Approach

This IG leverages the HL7 FHIR standard to define a consistent way to represent adverse event data. It introduces a specialized profile of the FHIR AdverseEvent resource, tailored for clinical research. This profile includes additional data elements and extensions to capture information relevant to clinical trials, such as:

* **Seriousness criteria:** Specific factors used to determine if an adverse event is considered serious.
* **Suspect entity:** The drug, procedure, or device suspected of causing the adverse event.
* **Causality assessment:** The likelihood that the suspect entity caused the adverse event.
* **Mitigating actions:** Actions taken to reduce harm after the adverse event occurred.
* **Workflow status:** The current stage of the adverse event in the reporting workflow.

## 4. Contextual Factors and Design Decisions

* **Pre- and post-market workflows:** The IG covers adverse event reporting for both pre-market clinical trials and post-market surveillance.
* **Data sources:** It considers adverse event data captured in various systems, including EHRs, PHRs, and patient-facing apps.
* **Regulatory requirements:** The IG aligns with regulatory standards like FDA's E2B(R3) and ICH guidelines.
* **Integration with MedWatch:** It serves as a foundation for a future MedWatch IG, enabling seamless electronic reporting to the FDA.
* **Backport from R5:** This IG backports features from the upcoming FHIR R5 version, making them available in the current R4 version. 
