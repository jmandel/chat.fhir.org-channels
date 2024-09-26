# Specialty Medication Enrollment: Analysis

## 1. Objectives 

This implementation guide aims to streamline the process of fulfilling prescriptions for specialty medications. These are typically high-cost drugs that require special handling and often have additional steps for prescribing and dispensing. The guide defines standards for exchanging patient data between healthcare providers (like doctors and clinics) and entities fulfilling prescriptions (like pharmacies, specialty hubs, and pharmaceutical manufacturers). This includes information like patient demographics, clinical data (e.g., allergies, conditions), insurance coverage, and patient consents.  

The goal is to reduce the time it takes for patients to receive their medications by making the information exchange process more efficient and automated.

## 2. Previous Approaches and Limitations

Previously, the process for exchanging information for specialty medication fulfillment was complex and manual. This often led to delays in patients receiving their medications, sometimes taking days or even weeks. The lack of an industry standard for exchanging the necessary clinical data was a major contributor to this problem. 

The existing NCPDP e-prescription standard only covers sending the prescription itself to pharmacies, and doesn't include the additional information required for specialty medications.

## 3. Introduced Approaches and Technical Approach

This implementation guide introduces a standardized way to exchange patient data using HL7 FHIR (Fast Healthcare Interoperability Resources), a widely recognized standard for healthcare data exchange. 

It defines two primary workflows:

* **Solicited Workflow:**  A pharmacy or other party fulfilling the prescription requests patient information from the prescriber's electronic health record system. This can be done using either standard FHIR RESTful searches or a specialized "Specialty Rx Query" message.
* **Unsolicited Workflow:** The prescriber's system proactively sends patient information to the fulfilling party alongside the prescription, without waiting for a request. This can also involve an intermediary that retrieves the information from the prescriber's system and forwards it to the fulfilling party.

The guide also defines profiles for specific FHIR resources (like Patient, MedicationRequest, Coverage) to ensure they contain the necessary information for specialty medication fulfillment. It also describes how to handle situations where data is missing.

## 4. Scope Decisions, Design Choices, and Contextual Factors

* **US Focus:** The guide is designed for use in the United States and reflects US pharmacy processes and conventions.
* **Specialty Medications Only:** It specifically addresses information exchange for specialty medications, not regular prescriptions.
* **Excludes Prescription Transmission:** It doesn't cover sending the initial prescription itself, which is handled by the existing NCPDP SCRIPT standard.
* **Support for Existing Infrastructure:** It allows for both RESTful and messaging-based exchanges, acknowledging that different participants may have varying capabilities and preferences.
* **Intermediary Role:**  Recognizing that pharmacies often work through intermediaries, it defines how an intermediary can facilitate information exchange between RESTful and messaging-based systems.
* **Consent Workflow:** It includes a detailed workflow for requesting and exchanging patient consents, addressing the need for specific authorizations often required for specialty medications.
* **SMART App Integration:** It describes how to use SMART applications to enable human interaction and information exchange when needed, like for requesting clarifications or additional information from the prescriber.
* **US Core Alignment:** It leverages the US Core FHIR Implementation Guide for search parameter requirements and resource profiles, ensuring consistency with broader US healthcare data exchange standards. 
