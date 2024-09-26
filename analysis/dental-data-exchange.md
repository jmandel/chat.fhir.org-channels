# HL7 FHIR® R4 Implementation Guide: Dental Data Exchange: Analysis

## 1. Objectives

This implementation guide aims to standardize how dental information is exchanged electronically between:

* **Medical providers and dental providers** (e.g., when a doctor refers a patient to a dentist)
* **Dental providers themselves** (e.g., when a general dentist refers a patient to a specialist)

The goal is to enable seamless sharing of relevant patient information, including:

* **Reasons for referral:** Why the patient needs to see another provider.
* **Medical and dental history:** Pre-existing conditions, allergies, medications, etc.
* **Dental findings:** Observations and measurements from dental exams.
* **Treatment plans:** Recommended procedures and appointments.

## 2. Previous Approaches and Limitations

Previously, dental referrals and consultations were often handled through **paper forms, faxes, or emails**, which were inefficient, prone to errors, and difficult to integrate into electronic health records (EHRs).

While some dental EHR systems used the **C-CDA standard for data exchange**, it was primarily designed for medical information and lacked the necessary structure for many dental data elements.

This lack of standardization led to **fragmented communication, administrative burdens, and potential delays in patient care**.

## 3. Technical Approach

This IG introduces a standardized approach using **FHIR resources** to represent dental information. It builds upon existing standards like:

* **FHIR US Core:** Provides a foundation for core patient data.
* **C-CDA on FHIR:** Defines structures for clinical documents like referral and consultation notes.

The IG defines:

* **New FHIR profiles:** Specialized versions of existing resources tailored for dental data, such as "Dental Referral Note," "Dental Consult Note," "Dental Condition," and "Dental Finding."
* **Value sets:** Lists of standardized codes for specific dental concepts, ensuring consistent terminology across systems.

The IG also recommends best practices for:

* **Mapping dental codes:** Using both SNOMED CT and SNODENT codes to ensure compatibility with medical and dental EHRs.
* **Including UDI details:** Providing information about dental devices and implants using Unique Device Identifiers.
* **Conveying caries risk assessments and patient goals:** Sharing information about the patient's risk of tooth decay and their self-management goals.

## 4. Contextual Factors and Design Decisions

* **Focus on interoperability:** The IG prioritizes compatibility with existing standards and systems to enable broad adoption and seamless data exchange.
* **Collaboration with stakeholders:** The development involved input from the Department of Defense, American Dental Association, CareQuest Institute for Oral Health, and industry leaders, ensuring relevance and practicality.
* **Emphasis on structured data:** The use of FHIR resources and value sets promotes the exchange of discrete, machine-readable data, enabling better analysis and decision-making.
* **Recognition of evolving needs:** The IG acknowledges that dental data exchange is a growing field and includes best practices to guide future development and address emerging concepts.

Overall, this IG represents a significant step towards improving the efficiency, accuracy, and completeness of dental data exchange, ultimately benefiting patient care and care coordination.
