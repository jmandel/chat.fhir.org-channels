# FHIR Health Care Surveys Reporting IG: Analysis

## 1. Objectives

This implementation guide aims to streamline the collection of data for national health surveys in the US. It aims to automate the process of extracting data from electronic health records (EHRs) and sending it securely to the National Center for Health Statistics (NCHS). This automation should reduce the burden on healthcare providers who participate in these surveys, improve the quality and timeliness of data, and reduce costs for both providers and NCHS.

## 2. Previous Approaches and Limitations

Previously, data for surveys like the National Ambulatory Medical Care Survey (NAMCS) and the National Hospital Care Survey (NHCS) were collected through manual chart abstraction or claims data. These methods were burdensome for providers, often lacked detailed clinical information, and were inefficient for NCHS. While a standard based on HL7 CDA was introduced to improve electronic data submission, it still proved challenging for some providers and presented data quality issues.

## 3. Technical Approach

This IG leverages the FHIR R4 standard for data exchange, specifically using APIs and profiles defined by US Core. It builds upon the MedMorph Reference Architecture, which provides a framework for automated data reporting. The process involves:

- **Knowledge Artifacts:** NCHS defines the data requirements for each survey as a "Knowledge Artifact."
- **HDEA:** A Health Data Exchange App (HDEA) retrieves the Knowledge Artifact and automatically creates subscriptions in the provider's EHR system.
- **Subscriptions:** These subscriptions trigger notifications when specific events occur, such as an encounter being closed.
- **Data Retrieval:** Upon receiving a notification, the HDEA retrieves the necessary patient data from the EHR using FHIR APIs.
- **Report Generation and Submission:** The HDEA packages the data into a standardized report and securely submits it to NCHS.

## 4. Important Considerations

- **Scope:** The IG focuses on hospital and ambulatory care settings, excluding other healthcare settings like nursing homes or home health agencies. It also excludes data quality assessment and consent management, as these are handled outside the scope of this IG.
- **Design Choices:** The IG relies heavily on FHIR profiles and the MedMorph architecture, requiring systems to conform to these standards. It also mandates the use of SMART on FHIR for authentication and authorization.
- **Contextual Factors:** This IG addresses a specific need within the US healthcare system for efficient and standardized data collection for national health surveys. Its success depends on the adoption of FHIR and the MedMorph architecture by EHR vendors and healthcare organizations. 
