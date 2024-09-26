# FHIR Patient Correction IG: Analysis

## 1. Objectives

This FHIR Implementation Guide (IG) aims to standardize how patients can electronically request corrections to their medical records. It seeks to create a streamlined and automated process for patients to identify and report errors or discrepancies in their health information, and for healthcare providers to review and address these requests.

## 2. Previous Approaches and Limitations

Traditionally, patients have relied on manual, paper-based methods like mail and phone calls to request corrections to their medical records. This process was fragmented, time-consuming, and lacked transparency for both patients and healthcare providers. Patients often experienced delays, lacked updates on the status of their requests, and encountered difficulties in getting errors resolved. 

The limitations of these previous approaches included:

* **Manual and paper-based:** Increased administrative burden and potential for errors.
* **Fragmented communication:** Lack of standardization and difficulty tracking requests.
* **Lengthy and burdensome:** Delays in processing and resolving corrections.
* **Lack of transparency:** Patients often unaware of the status of their requests.

## 3.  Technical Approach

This IG leverages the FHIR standard to enable electronic communication between patient applications (e.g., personal health records) and provider systems (e.g., EHRs) for correction requests. It introduces the following key approaches:

* **Standardized Communication:** Defines FHIR profiles for exchanging correction requests, updates, supporting information, and resolutions (acceptances, denials, or partial acceptances/denials).
* **Structured Workflow:** Uses the FHIR Task resource to track the status of correction requests within the provider system, enabling patients to monitor progress.
* **Bidirectional Communication:** Facilitates back-and-forth communication between patients and providers during the review and resolution process.
* **Logging Disagreements:** Provides a mechanism for patients to formally document their disagreement if a correction request is denied.

The IG defines specific FHIR profiles (Patient Correction Bundle, Patient Correction Communication, and Patient Correction Task) and operations ($correction-request) to support this workflow. It also specifies how different FHIR resources should be linked to track the entire correction request process.

## 4. Scope, Design Choices, and Contextual Factors

* **Scope:** The IG focuses on the communication standards between patients and providers, not on the internal processes within provider systems for handling corrections.
* **Polling vs. Subscriptions:** Currently, the IG relies on polling for patients to check the status of their requests. Future versions may incorporate subscription-based notifications.
* **Fulfiller Role:** Assumes the fulfiller is the organization with authority to correct the record, typically the provider or data custodian.
* **Manual Intervention:**  Expects manual intervention by healthcare professionals to evaluate and fulfill correction requests.
* **Security:** Emphasizes the importance of secure communication and authentication to protect patient data.
* **Regulatory Considerations:** Aligns with HIPAA and GDPR regulations regarding patient rights to data correction.
