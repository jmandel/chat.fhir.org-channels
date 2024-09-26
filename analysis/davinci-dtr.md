# Da Vinci Documentation Templates and Rules (DTR): Analysis

## 1. Objectives

The Da Vinci Documentation Templates and Rules (DTR) Implementation Guide aims to simplify and streamline the process of gathering medical documentation required by health insurance payers. It aims to reduce the burden on healthcare providers by automating the process of collecting information and ensuring it meets payer requirements.

## 2. Current Practices and Limitations

Currently, healthcare providers often struggle to understand and meet the documentation requirements of different payers. This process typically involves manual form-filling, which is time-consuming, prone to errors, and can lead to delays in prior authorization approvals and claim processing.

## 3. New Approaches

DTR introduces a standardized, automated approach using FHIR (Fast Healthcare Interoperability Resources) questionnaires. These questionnaires can be pre-populated with data from the patient's electronic health record (EHR), minimizing manual entry. They also include built-in logic and rules, ensuring the information collected meets payer specifications.

**Technical Approach:**

* **FHIR Questionnaires:** Payers define their documentation requirements using FHIR questionnaires.
* **CQL Logic:** Questionnaires embed Clinical Quality Language (CQL) logic to automatically extract relevant information from EHRs and guide the user through the questionnaire.
* **SMART on FHIR:** DTR functionality can be integrated into EHRs either as a SMART on FHIR app or as native functionality. 
* **Adaptive Forms:**  Allows for dynamic questionnaires where questions are tailored based on previous answers.

## 4. Important Contextual Factors

* **Interoperability:** DTR is designed to work with other Da Vinci Implementation Guides (CRD, PAS, CDex) to streamline prior authorization and data exchange processes.
* **Security and Privacy:**  DTR emphasizes the importance of protecting patient data and adhering to HIPAA regulations, especially when handling sensitive information.
* **Payer Variations:** Payers may have different requirements and workflows, so DTR supports both standard and adaptive questionnaires to accommodate these variations.
* **Enforcement Discretion:**  Recent CMS enforcement discretion allows for the use of FHIR-based prior authorization, further supporting DTR's relevance.

**Key Design Decisions:**

* **CQL for Population:**  CQL is used for pre-populating questionnaires, reducing manual data entry.
* **Support for Attestation:**  Allows providers to attest to the presence of certain documentation or conditions when discrete data is not available.
* **Questionnaire Expiry:**  Ensures documentation is current by specifying a validity period for questionnaires.
* **Error Reporting:** Provides mechanisms for reporting errors in questionnaires and CQL logic back to payers.
* **Standardization:**  DTR promotes standardization of payer documentation requirements and encourages the use of shared mappings and terminologies.
