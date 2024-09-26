# Electronic Case Reporting (eCR) FHIR Implementation Guide: Analysis

## 1. Objectives

This implementation guide aims to standardize how healthcare providers electronically report cases of certain diseases to public health agencies. It uses a modern data standard called FHIR (Fast Healthcare Interoperability Resources) to make this reporting process more efficient and automated.

## 2. Current Practices and Limitations

Currently, reporting cases to public health agencies often involves manual processes, such as faxing or filling out online forms. This is time-consuming for healthcare providers and can lead to delays in reporting, which hinders public health surveillance and response efforts.

## 3. New Approaches

This IG introduces a standardized way to use FHIR for electronic case reporting, enabling:

- **Automated Triggering:** EHR systems can automatically detect potential cases based on specific codes (e.g., diagnosis codes) and trigger the reporting process.
- **Standardized Data Exchange:** The guide defines FHIR profiles for the information that should be included in case reports, ensuring consistency and interoperability.
- **Reportability Response:** Public health agencies can send back a standardized response to healthcare providers, confirming receipt, requesting additional information, or providing guidance.
- **Electronic Reporting and Surveillance Distribution (eRSD):**  This transaction facilitates sharing reporting guidance, trigger codes, and rules from public health agencies to healthcare providers.

## 4. Contextual Factors and Design Decisions

- **US Core Alignment:** The IG leverages existing FHIR profiles from the US Core Data for Interoperability (USCDI) where possible, promoting consistency with broader health information exchange standards.
- **Collaboration:** The IG is a product of collaboration between various stakeholders, including the Centers for Disease Control and Prevention (CDC), public health agencies, healthcare providers, and standards organizations.
- **Phased Implementation:** The IG recognizes that full automation of reporting rules may not be immediately feasible and provides guidance for both triggering-based and supplemental (rule-based) approaches.
- **Future Direction:** The IG anticipates the development of a US Public Health Library (USPHL) to harmonize FHIR artifacts across different public health implementation guides.
