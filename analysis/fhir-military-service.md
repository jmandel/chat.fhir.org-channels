# FHIR Military Service History and Status IG: Analysis

## 1. Objectives

This implementation guide aims to standardize the way information about military service history and status is shared between different computer systems. This will make it easier for healthcare providers, veterans, and other organizations to access and exchange this information securely and efficiently.  The goal is to improve healthcare for veterans by making their military service history readily available to clinicians. 

## 2. Previous Approaches and Limitations

Previously, the U.S. Department of Veterans Affairs (VA) used a custom API to verify veteran status and share military service history. This approach had limitations, as it was not based on widely adopted standards, making it difficult for other systems to interact with it. Additionally, there was no standardized way to record and exchange detailed information about military service, such as deployments and occupations.

## 3.  Technical Approach

This IG introduces a standardized approach using FHIR (Fast Healthcare Interoperability Resources), a widely recognized standard for exchanging healthcare information. It defines specific FHIR profiles and extensions to represent military service history, status, deployments, and occupations.  

Here's how it works:

- **Profiles:** The IG defines FHIR profiles that constrain and extend the standard FHIR Observation resource. These profiles specify the data elements and terminologies required to represent military service information.
- **Extensions:**  The IG defines FHIR extensions to add additional data elements to existing FHIR resources, such as a flag on the Patient resource to indicate veteran status.
- **Terminology:** The IG leverages existing terminologies like SNOMED CT and CDC ODH to ensure semantic interoperability. It also identifies gaps in these terminologies and proposes extensions where necessary.
- **Operations:**  The IG defines a custom FHIR operation called "$veteranStatus" to verify veteran status.
- **Capability Statements:** The IG outlines expectations for FHIR servers and clients in terms of the profiles, operations, and search parameters they should support.


## 4.  Key Decisions and Contextual Factors

- **Scope:** The IG focuses on sharing military service history and status for administrative and clinical purposes within the US realm.  It is designed to be extensible to other countries.
- **Reusability:** The IG reuses existing standards and profiles from US Core and Occupational Data for Health (ODH) to ensure harmonization and reduce redundancy.
- **Terminology Gaps:** The IG identifies gaps in existing terminologies related to discharge status, military branch, and pay grade. It proposes SNOMED CT extensions to address these gaps.
- **Verification API:** The IG proposes a FHIR-based verification API that replaces the existing VA API, enabling standards-based verification of veteran status and retrieval of military history information.
- **Testing Guidance:** The IG provides testing guidance and workflows to demonstrate how the proposed FHIR API can be used to verify veteran status and retrieve military service history. 
