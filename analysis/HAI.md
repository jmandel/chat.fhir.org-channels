# HL7 Implementation Guide for FHIR: Healthcare Associated Infection (HAI) Reports: Analysis

## 1. Objectives

This implementation guide aims to standardize how healthcare facilities electronically submit reports about infections acquired in healthcare settings (Healthcare Associated Infections or HAIs) to the CDC's National Healthcare Safety Network (NHSN). These reports help track and prevent HAIs. The guide defines how this information should be structured using the FHIR standard, a modern approach to exchanging healthcare data. 

## 2. Previous Approaches and Limitations

Previously, there was a CDA Implementation Guide for HAI reporting. However, with the introduction of new HAI report types, a parallel FHIR Implementation Guide was developed for better interoperability and to accommodate modern data exchange needs.

## 3. Approach

This IG utilizes FHIR Questionnaires and QuestionnaireResponses to represent HAI reports. This approach mirrors the structure of the actual NHSN forms, making it easier for healthcare facilities to transition to electronic reporting.  

**Technical Approach:**

* **Profiles:** The IG defines FHIR profiles for Questionnaires and QuestionnaireResponses specific to HAI reporting, constraining the data elements and their structure. 
* **Instances:**  It provides Questionnaire instances, which are like templates for different types of HAI reports (e.g., surgical site infections, bloodstream infections).
* **Examples:**  It includes example QuestionnaireResponse instances demonstrating how completed reports should look.
* **Value Sets:** It utilizes standardized terminologies (value sets) to ensure consistent coding of data elements (e.g., infection types, risk factors).

## 4. Scope, Design Choices, and Context

* **Scope:** The IG focuses on electronic submission of HAI reports to NHSN. It does not cover NHSN enrollment or reporting plan filing. 
* **Design Choices:** The Questionnaire-based approach leverages FHIR's capabilities for representing structured forms and data collection.
* **Contextual Factors:** The IG was developed in parallel with a CDA Implementation Guide, ensuring alignment between the two standards. Any changes made to one standard will be reflected in the other. 
* **Alignment with US Core:** The profiles align with the US Core FHIR profiles, particularly for representing patient demographics and other core data elements.
* **Evolution:** The IG is expected to evolve through several "STU" (trial use) releases before reaching a "Normative" (final) release. 
