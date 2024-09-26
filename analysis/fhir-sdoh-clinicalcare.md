# SDOHCC: Analysis

## 1. Objectives

This implementation guide (IG) aims to standardize how healthcare and social service organizations exchange information about social determinants of health (SDOH). This includes things like housing, food security, transportation, and education that can impact a person's well-being. 

The goal is to make it easier for different systems to share this data, which would help:

- **Identify and track patients' social needs:** By capturing SDOH data in a standardized format, healthcare providers can better understand their patients' needs and connect them with appropriate resources.
- **Coordinate care between healthcare and social service providers:**  The IG defines a process for referrals and information sharing between these groups, facilitating a more holistic approach to care.
- **Analyze SDOH data for population health management:** Aggregated SDOH data can be used to identify trends and disparities, allowing for targeted interventions and programs.

## 2. Previous Approaches and Limitations

Previously, capturing and sharing SDOH data was challenging due to:

- **Lack of standardization:**  Information was often captured in unstructured formats, making it difficult to aggregate and analyze.
- **Terminology gaps and overlaps:** Existing codes and terminologies did not adequately represent SDOH-related activities.

These limitations hindered the ability to effectively use SDOH data to improve patient care and population health.

## 3. Technical Approach

This IG leverages the HL7 FHIR standard to:

- **Define profiles:**  These profiles constrain FHIR resources to meet specific SDOH requirements, ensuring data consistency. 
- **Develop standardized terminologies:** The IG uses and promotes the use of value sets published in the Value Set Authority Center (VSAC), providing a common language for SDOH data.
- **Establish workflows:**  The IG outlines detailed workflows for referrals and information exchange between providers, patients, and community-based organizations.
- **Support assessment instruments:**  The IG provides guidance on representing data from standardized assessment tools using FHIR resources.

## 4. Scope Decisions and Contextual Factors

- **Focus on US healthcare environment:**  The IG is primarily focused on the US healthcare system, leveraging US Core profiles and terminologies.
- **Privacy and consent:**  The IG recognizes the sensitivity of SDOH data and emphasizes the importance of HIPAA compliance and patient consent.
- **Interoperability with other IGs:**  The IG acknowledges the need to work with other FHIR IGs, such as the Data Exchange for Quality Measures IG, to address broader healthcare data exchange needs.
- **Ongoing terminology development:**  The IG acknowledges that SDOH terminology is still evolving and plans to update the IG regularly to reflect new developments.

This IG represents a significant step towards improving SDOH data interoperability. By providing a standardized framework for data exchange, the IG aims to facilitate a more comprehensive and coordinated approach to addressing social needs and improving health outcomes.
