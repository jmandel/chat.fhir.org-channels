# FHIR Medication REMS IG: Analysis

## 1. Objectives 

This implementation guide aims to improve how healthcare providers and systems interact with Risk Evaluation and Mitigation Strategy (REMS) programs. REMS programs are required by the FDA for certain medications with serious safety concerns to ensure they are used safely. 

The main goals are to:

* **Reduce manual steps for healthcare providers:** Make it easier for them to access information about REMS requirements and complete necessary steps electronically within their existing workflows.
* **Streamline the process for patients:** Minimize delays in getting REMS medications by enabling providers to address requirements upfront.
* **Improve communication and coordination:** Enable better exchange of information between healthcare providers and the organizations that manage REMS programs (REMS Administrators).
* **Improve safety:** Ensure that REMS requirements are met, leading to safer medication use.

## 2. Previous Approaches and Limitations

Previously, many REMS-related tasks involved manual processes like using separate websites or portals, paper forms, and phone calls. This was inefficient, time-consuming, and could lead to delays in patient care.

Specific limitations mentioned include:

* **Manual data entry:** Providers often had to enter the same patient information into multiple systems.
* **Prescription fulfillment delays:** Pharmacies could not dispense REMS medications until all requirements were met, often leading to delays if steps were missed by the provider.
* **Lack of integration:** REMS information was not readily available within providers' usual workflows, requiring them to seek it out from external sources.

## 3.  Technical Approach

This IG introduces a standardized way to exchange REMS-related information electronically using the FHIR standard. It leverages two key FHIR features:

* **CDS Hooks:** Allows REMS Administrators to provide alerts and guidance to providers within their electronic health record (EHR) systems at specific points in the workflow, such as when prescribing a medication.
* **SMART App Launch:** Enables providers to launch interactive applications provided by REMS Administrators from within their EHRs. These apps can guide providers through REMS requirements, such as patient enrollment, and pre-fill information from the patient's record to minimize manual entry.

**How it works:**

1. When a provider is working with a patient's record and a REMS drug is involved, the EHR sends a request to the REMS Administrator's system using CDS Hooks.
2. The REMS Administrator's system analyzes the request and may respond with information, alerts, or a link to a SMART app.
3. The EHR displays this information to the provider.
4. If a SMART app is launched, it can access relevant patient data from the EHR (with appropriate authorization) and guide the provider through the necessary REMS steps.

## 4. Scope, Design Choices, and Context

**Scope:**

* This version of the guide focuses primarily on the needs of prescribers and their interactions with REMS Administrators.
* It does not fully address the needs of other stakeholders like pharmacists or distributors, but suggests that the approaches may be adaptable to their workflows.

**Design Choices:**

* **Emphasis on EHR integration:** The guide prioritizes interactions that occur within the provider's EHR workflow using CDS Hooks and SMART App Launch.
* **Flexibility in implementation:** It does not mandate specific workflow events or require that all REMS steps be completed electronically.
* **Alignment with existing standards:** The guide aims to be consistent with other relevant FHIR implementation guides, particularly the Da Vinci Coverage Requirements Discovery (CRD) IG.
* **Use of US Core profiles:** It recommends using US Core FHIR profiles for exchanging common clinical data elements.

**Contextual Factors:**

* **REMS program variability:** The guide acknowledges that REMS programs have diverse requirements, and its approaches are intended to be flexible and adaptable.
* **Existing e-prescribing infrastructure:** The guide does not replace the existing methods for transmitting prescriptions electronically but aims to enhance them with REMS-related information.
* **Security and privacy:** The guide emphasizes the importance of adhering to FHIR security and privacy guidelines to protect patient data.
