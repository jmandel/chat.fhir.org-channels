# FHIR US MCC: Analysis

## 1. Objectives

This implementation guide aims to improve healthcare for patients with multiple chronic conditions (like diabetes, heart disease, kidney disease, chronic pain, and Long Covid) by enabling electronic systems to better share and use their health information. 

The guide provides instructions for building electronic care plan systems that can:

* **Gather information from different healthcare providers and systems:** This creates a complete picture of the patient's health.
* **Help healthcare teams create care plans tailored to each patient's needs:** This ensures patients receive the right care at the right time.
* **Track the patient's progress and outcomes:** This helps the care team make adjustments as needed.
* **Make it easier for patients and their caregivers to access and understand their care plans:** This empowers them to actively participate in their care.

## 2. Previous Approaches and Limitations

Previously, care plans were often paper-based or, if electronic, not standardized. This made it difficult to share information between different healthcare providers and systems. 

Existing electronic care plans also often focused on single diseases, making them less useful for patients with multiple chronic conditions. 

This lack of standardization and interoperability limited the ability to:

* **Coordinate care effectively:** Information was often fragmented and poorly coordinated.
* **Track patient outcomes:** It was difficult to measure the effectiveness of care plans.
* **Conduct research:**  Limited access to standardized data hindered research on multiple chronic conditions.

## 3. Approaches and Technical Approach

This IG introduces a standardized approach for representing and exchanging electronic care plans using the FHIR (Fast Healthcare Interoperability Resources) standard. 

**Technical approach:**

* **Defines FHIR profiles:** These profiles specify how to structure and represent different types of care plan information, such as patient health concerns, goals, interventions, and outcomes.
* **Uses standard terminology codes:**  This ensures that different systems can understand and interpret the information.
* **Leverages existing US Core FHIR profiles:** This builds upon a foundation of widely adopted standards.
* **Provides detailed use cases:** These illustrate how the guide can be used in real-world scenarios.
* **Emphasizes data aggregation and sharing:** This facilitates care coordination and research.

## 4. Scope Decisions, Design Choices, and Contextual Factors

* **Focus on multiple chronic conditions:** The guide specifically addresses the needs of patients with multiple chronic conditions.
* **US-centric:**  The guide includes rules and requirements specific to the US healthcare system.
* **Reliance on Value Set Authority Center (VSAC):**  Implementations need to access VSAC for value sets, requiring a UMLS license.
* **Emphasis on resource referencing over in-line representation:**  This promotes data reuse and avoids duplication.
* **Recommendation of LHC FHIR Tools:**  The guide suggests using specific tools for structured data capture.
* **Integration with FHIR Questionnaires:** The guide encourages incorporating patient-generated data through questionnaires.

**Contextual factors:**

* **Increasing prevalence of multiple chronic conditions:**  This highlights the need for better care coordination and data sharing.
* **Aging population:**  The growing number of older adults with multiple chronic conditions further emphasizes the guide's importance.
* **Focus on patient-centered care:**  The guide promotes patient engagement and empowerment in care planning.
* **Growing adoption of FHIR:**  This standard is increasingly used for healthcare data exchange.
