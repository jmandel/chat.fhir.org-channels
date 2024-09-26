# National Directory of Healthcare Providers & Services (NDH) Implementation Guide: Analysis

## 1. Objectives

This implementation guide aims to establish a national source of truth for healthcare provider data in the US. This data includes information about individual providers, healthcare organizations, the services they offer, their relationships (e.g., which insurance networks they participate in), and how to connect with them electronically (e.g., find their Direct address or FHIR endpoint). This national directory would make it easier for patients, providers, and other stakeholders to find accurate, up-to-date information about healthcare providers and services, improving efficiency, care coordination, and patient access.

## 2. Previous Approaches and Limitations

Previously, healthcare directory information was fragmented and uncoordinated, with many different organizations (payers, providers, HIEs, etc.) maintaining their own directories. This led to several limitations:

* **High cost:**  Maintaining provider databases was estimated to cost the US healthcare industry at least $2 billion annually.
* **Inaccurate and outdated data:** Due to the cost and complexity of maintaining accurate data, many directories contained outdated or incorrect information.
* **Lack of interoperability:**  Different directories used different standards and formats, making it difficult to share data between them.

## 3. Technical Approach

This IG uses the HL7 FHIR standard as its foundation to create a consistent, interoperable data model for healthcare directory information. It defines:

* **FHIR Profiles:** These constrain existing FHIR resources to meet the specific needs of the national directory, ensuring consistent data structure and content.
* **FHIR Extensions:** These add additional data elements to FHIR resources to capture information not included in the base FHIR specification.
* **FHIR Search Parameters:** These enable users to query the national directory for specific information.
* **FHIR APIs:** These define standard ways for systems to interact with the national directory to exchange data.

The IG also provides guidance on:

* **Attestation:** The process by which providers and organizations submit information to the national directory.
* **Verification:** The process by which the national directory verifies the accuracy of the submitted information.
* **Bulk Data Export:**  A mechanism for efficiently transferring large amounts of data from the national directory to local directories.
* **Subscription:** A mechanism for local directories to receive real-time updates from the national directory.

## 4. Scope Decisions and Design Choices

* **Focus on interoperability:** The IG prioritizes the use of FHIR to ensure that data can be easily shared between the national directory and other systems.
* **Flexibility:** The IG does not mandate a specific technical architecture or capabilities for the national directory, allowing for a variety of implementations.
* **Data restriction:** The IG recognizes the need to protect sensitive information and provides guidance on using FHIR's Consent resource to manage data access restrictions.
* **US-centric:** The IG is specifically designed for the US healthcare system, leveraging US Core profiles and addressing US-specific data elements like NPIs.
* **Emphasis on verification:** The IG emphasizes the importance of verifying data accuracy and provides guidance on how to perform verification against primary sources.
* **Support for social services:** The IG includes profiles and guidance for representing social service organizations and their offerings, recognizing their importance in addressing social determinants of health.
* **Evolution from prior IGs:**  The NDH IG builds upon and consolidates concepts from previous implementation guides, including the Validated Healthcare Directory IG and the DaVinci PDex Plan Net IG.

## Conclusion

The NDH IG represents a significant step towards creating a more efficient and reliable national healthcare directory infrastructure in the US. By leveraging FHIR, it aims to address the limitations of previous approaches and improve data accuracy, interoperability, and access for all stakeholders. 
