# Validated Healthcare Directory (VHDir) IG: Analysis

## 1. Objectives

The VHDir IG aims to standardize how healthcare directory data is shared between different systems. Imagine a central, reliable source of provider information that is constantly checked and updated. This source would then be available to hospitals, clinics, insurance companies, and other healthcare entities. They could use this accurate data for various purposes, like finding doctors for referrals, verifying provider credentials, or managing insurance plans. VHDir aims to create this central source and define how it communicates with other systems. 

## 2. Previous Approaches and Limitations

Previously, healthcare organizations managed their own directories, leading to duplication of effort, inconsistent data, and frequent errors. Providers often had to submit the same information to multiple organizations, and keeping data up-to-date was costly and inefficient. This situation resulted in inaccurate, outdated directories that hindered healthcare operations.

## 3. Technical Approach

The VHDir IG leverages the FHIR standard to define how data is structured and exchanged. It introduces:

- **Profiles:** Customized versions of standard FHIR resources (like Practitioner, Organization, Location) tailored for directory information.
- **Extensions:** Additional data elements added to FHIR resources to capture directory-specific information, such as provider availability, accessibility options, or validation details.
- **Search Parameters:** Specific criteria for querying the central directory to retrieve relevant subsets of data.
- **API:** A standardized method for local systems to request and receive data from the central directory using FHIR's RESTful API.

The IG emphasizes data validation, ensuring information is accurate and reliable. It outlines processes for attesting information (providers confirming their own data) and validating it against primary sources (like licensing boards).

## 4. Scope, Design Choices, and Context

- **Broad Scope:** VHDir encompasses all healthcare providers, not just licensed medical professionals, including community services and administrative staff.
- **Focus on Exchange:** The IG primarily defines how data is retrieved from the central directory. It doesn't specify how the central directory itself is built or maintained, leaving flexibility for implementers.
- **International Applicability:** While envisioned as a national system, the IG is designed to be adaptable for various jurisdictions and local needs.
- **Flexibility:** The IG avoids strict requirements to encourage adoption. However, it encourages jurisdictions to further refine the standard to meet their specific needs.
- **Emphasis on Validation:** The IG stresses the importance of data accuracy and provides detailed guidance on validating information against primary sources.
- **Accommodation for Restricted Data:** The IG includes provisions for handling sensitive information that might not be publicly accessible.
- **Openness to Future Expansion:** The IG acknowledges the need for future capabilities like subscriptions for real-time updates and mechanisms for pushing urgent notifications. 
