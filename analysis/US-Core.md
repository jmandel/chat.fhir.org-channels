# US Core: Analysis

## 1. Objectives

The US Core Implementation Guide aims to standardize how healthcare data is exchanged electronically in the United States using the FHIR standard. It defines a baseline set of requirements, profiles, and best practices for sharing common clinical data like patient demographics, allergies, medications, lab results, and clinical notes. This common "floor" for implementation facilitates interoperability between different health IT systems, enabling seamless and secure data exchange.

## 2. Previous Approaches and Limitations

The US Core IG builds upon previous efforts like the Argonaut Data Query Implementation Guide, which was developed for FHIR DSTU2. However, the transition to FHIR R4 introduced significant changes to the core data models, necessitating a new IG. 

Limitations of previous approaches included:

- Lack of support for new data classes introduced in USCDI v2 and later (e.g., SDOH assessments, clinical notes).
- Limited search capabilities and inconsistent handling of missing data.
- Absence of a standardized approach for representing provenance information.
- Inconsistent handling of medication data due to changes in FHIR pharmacy resources.

## 3. Technical Approach

US Core addresses these limitations by:

- Defining a comprehensive set of profiles for common clinical data based on FHIR R4 resources.
- Specifying mandatory and "Must Support" elements for each profile, ensuring consistent representation of critical data.
- Establishing clear guidelines for handling missing data, including the use of DataAbsentReason codes.
- Introducing a US Core Provenance Profile and guidance for capturing and exchanging provenance information.
- Providing detailed guidance for accessing and representing medication data using MedicationRequest.
- Documenting required search parameters and operations, enhancing interoperability and data retrieval.
- Linking terminology directly to VSAC (Value Set Authority Center) for consistent use of standard code systems.
- Addressing security considerations and best practices for protecting patient privacy.

## 4. Scope Decisions and Contextual Factors

Important scope decisions and design choices include:

- **Focus on USCDI requirements:** US Core aligns with the U.S. Core Data for Interoperability (USCDI) data classes and elements, ensuring relevance for ONC Health IT Certification.
- **Minimum requirements:** US Core defines a baseline "floor" for interoperability, allowing flexibility for specific use cases and further specialization in other implementation guides.
- **Use of DocumentReference and DiagnosticReport for clinical notes:** Recognizes the variability in note formats and provides a consistent indexing mechanism for accessing them.
- **Emphasis on "last hop" provenance:** Prioritizes information about the most recent author and transmitter, balancing completeness with practical considerations for end-user display.
- **Yearly updates:** Accommodates evolving USCDI requirements and community feedback, ensuring the IG remains relevant and responsive to implementation needs.
- **Future considerations:** Identifies areas for potential expansion, such as support for writing data, searching for multiple patients, and handling time zones.

Contextual factors influencing US Core development include:

- **Regulatory requirements:** The 21st Century Cures Act mandates support for USCDI data elements, driving the inclusion of specific profiles and requirements.
- **Community input:** The Argonaut Project team and other stakeholders provide valuable feedback, ensuring the IG reflects real-world implementation needs.
- **Alignment with other standards:** US Core strives for consistency with HL7 C-CDA and other relevant standards, promoting broader interoperability.
- **Evolving FHIR standard:** Future versions of FHIR may necessitate updates to US Core, requiring careful consideration of backward compatibility and migration strategies.
