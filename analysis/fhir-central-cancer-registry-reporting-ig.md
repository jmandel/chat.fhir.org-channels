# FHIR Central Cancer Registry Reporting IG: Analysis

## 1. Objectives 

This implementation guide aims to automate the reporting of cancer cases from healthcare providers to central cancer registries. This automation seeks to improve the timeliness, completeness, and accuracy of cancer data, which is essential for cancer surveillance, research, and public health interventions.  The guide focuses on electronically capturing cancer diagnoses, treatments, and outcomes from sources like clinics and physician offices, which have historically been less standardized in their reporting compared to hospitals.

## 2. Previous Approaches and Limitations

Previously, reporting from ambulatory healthcare providers (e.g., clinics, physician offices) often relied on manual processes:

* Identifying reportable cases manually.
* Submitting paper-based medical records.
* Manual abstraction of information from records by registry staff.

**Limitations:** These methods are resource-intensive, time-consuming, prone to errors, and less secure, leading to underreporting of certain cancer types and treatment details. While the HL7 CDA standard was introduced for electronic reporting, it did not utilize the FHIR standard, potentially limiting interoperability.

## 3. Technical Approach

This IG leverages the FHIR standard to define how cancer-related information should be structured and exchanged electronically. Here's how it works:

* **Knowledge Artifacts:** Central cancer registries define specific criteria (e.g., cancer types, treatments) that trigger a report. These criteria are packaged as FHIR PlanDefinition resources and made accessible through a Knowledge Artifact Repository.
* **Health Data Exchange App (HDEA):** This backend application retrieves the Knowledge Artifacts and sets up subscriptions in the EHR system.  
* **Subscriptions and Triggers:** When a trigger event occurs in the EHR (e.g., a patient encounter with a reportable cancer diagnosis), the HDEA is notified.
* **Data Retrieval and Report Generation:** The HDEA then retrieves the necessary patient data from the EHR using FHIR APIs, packages it into a standardized report (using FHIR Bundle and Composition resources), and sends it to the central cancer registry. 
* **Standardized Data Exchange:** The guide utilizes existing FHIR profiles (e.g., US Core, mCode) to ensure the exchanged data is structured consistently.

## 4. Important Contextual Factors and Design Decisions

* **Legal Mandate:** Cancer reporting is legally mandated at the state level in the USA, making standardized and efficient reporting crucial.
* **HIPAA Compliance:** The guide emphasizes the need for implementations to comply with HIPAA regulations regarding patient data privacy and security.
* **Focus on Ambulatory Settings:** The IG primarily targets ambulatory care settings where electronic reporting is less established.
* **Reliance on MedMorph RA IG:** This IG builds upon the MedMorph Reference Architecture IG, leveraging its framework for data exchange and knowledge artifact management.
* **Phased Approach:** The IG acknowledges that data from sources like pathology reports might be integrated in future iterations, indicating a phased approach to expanding the scope of automated reporting.
* **Value Sets:** Central cancer registries are responsible for publishing and updating the value sets that define reportable conditions, ensuring consistency in reporting criteria.

By implementing this IG, healthcare providers and central cancer registries can transition towards a more automated and robust system for cancer reporting, ultimately benefiting cancer surveillance and public health efforts. 
