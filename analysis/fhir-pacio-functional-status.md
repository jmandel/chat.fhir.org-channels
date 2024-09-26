# PACIO Functional Status: Analysis

## 1. Objectives 

This implementation guide aims to improve the way healthcare providers share information about a patient's ability to perform daily tasks, such as moving around, taking care of themselves, and managing household activities. This information is crucial for coordinating care effectively, especially when a patient moves between different healthcare settings (e.g., hospital to nursing home). 

The guide seeks to make this information easily accessible to everyone involved in the patient's care, including doctors, nurses, therapists, and even the patient and their family. This will allow for better-informed decisions and a more seamless transition between care settings.

## 2. Previous Approaches and Limitations

Previously, information about a patient's functional status was often not shared effectively between healthcare providers. This was because:

* **Incomplete and inaccurate information:** Providers often lacked complete and accurate information about a patient's functional abilities, leading to potential misunderstandings and care gaps. 
* **Timely manner:** Information was not always available when needed, causing delays and inefficiencies in care.
* **Lack of standardization:** Different healthcare settings used different methods and systems for recording and sharing this information, making it difficult to exchange data seamlessly.

A 2020 study revealed that skilled nursing facilities only received observational information about a patient's mobility, self-care, and domestic life from hospitals 60% of the time, highlighting a significant gap in information sharing during care transitions.

## 3.  Approaches Introduced

This guide introduces a standardized approach for exchanging information about a patient's functional status using the FHIR (Fast Healthcare Interoperability Resources) standard. This approach involves:

* **Standardized data elements and coding:**  The guide defines specific data elements and coding standards (LOINC and SNOMED) to ensure that information is captured and shared consistently across different systems.
* **FHIR resource profiles:**  The guide uses FHIR resource profiles to specify how information should be structured and packaged for exchange. This makes it easier for different systems to understand and process the data.
* **SMART-on-FHIR and OAuth2.0:**  These standards are used to ensure secure authentication and authorization, protecting patient privacy while enabling data sharing.

## 4. Scope Decisions and Design Choices

* **Focus on PAC transitions:** Initially, the guide focuses on exchanging functional status information during transitions involving post-acute care (PAC) settings, such as skilled nursing facilities, home health agencies, and inpatient rehabilitation facilities. However, the intention is to expand the scope to include other healthcare settings and home and community-based services (HCBS) in the future.
* **Observation data:** The guide focuses on exchanging observation data related to mobility, self-care, and domestic life functioning. It does not cover other aspects, such as diagnoses, care plans, or goals.
* **Flexibility and extensibility:** The data model is designed to be flexible and extensible, allowing for the exchange of various types of assessment data and accommodating future needs and advancements. 
