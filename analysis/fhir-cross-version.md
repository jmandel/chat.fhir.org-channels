# FHIR Cross-version Mapping: Analysis

## 1. Objectives

This FHIR Implementation Guide (IG) aims to make it easier to share and understand health information across different versions of the FHIR standard (e.g., FHIR R4 and FHIR R5). It does this by providing clear instructions on how to translate data elements between versions. This ensures that systems using different FHIR versions can still communicate effectively, which is crucial for seamless exchange of patient information.


## 2. Previous Approaches and Limitations

Previously, there was no standardized way to map data elements between different FHIR versions. This made it difficult to share information between systems using different versions, potentially leading to data loss or misinterpretation. The lack of clear guidance also increased the complexity and cost of developing interoperable systems.


## 3. Technical Approach

This IG introduces a systematic approach to map FHIR resources and data types across versions. It defines:

* **Mapping Tables:** For each resource and datatype, the IG provides tables that show the corresponding elements in different FHIR versions. These tables indicate whether elements are equivalent, have changed in meaning, or have been removed/added.
* **Mapping Guidance:** The IG offers detailed instructions on how to handle specific mapping scenarios, including how to deal with changes in data types, cardinality, and terminology.
* **Examples:** To illustrate the mapping process, the IG provides concrete examples of how to transform data instances between versions.


## 4. Contextual Factors and Design Decisions

Some important considerations regarding this IG include:

* **Focus on Interoperability:** The primary goal is to facilitate data exchange between systems using different FHIR versions.
* **Version Coverage:** The IG covers mapping between major FHIR versions (e.g., R4 to R5).
* **Community-Driven Development:** The mapping guidance is based on input from the FHIR community and reflects the collective expertise of implementers and developers.
* **Evolution of FHIR:** As FHIR continues to evolve, the IG will need to be updated to reflect changes in the standard.
