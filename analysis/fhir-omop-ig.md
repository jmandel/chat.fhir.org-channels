# FHIR-OMOP-IG: Analysis

## 1. Objectives 

This implementation guide aims to bridge the gap between two important healthcare data models: FHIR (Fast Healthcare Interoperability Resources) and OMOP (Observational Medical Outcomes Partnership). In simpler terms, it's like creating a translation guide so that information stored in systems using FHIR can be easily understood and used by systems using OMOP, and vice versa. This is particularly important for research, as it allows researchers to access and analyze data from a wider range of sources. 

The main goal is to make it easier to move data between FHIR and OMOP, especially focusing on the core data commonly found in electronic health records (EHRs). This will help to:

* Reduce the cost and time it takes to transfer data between the two models.
* Improve the quality and consistency of the transferred data.
* Make it easier to conduct research using data from different sources.


## 2. Previous Approaches and Limitations

Previously, most efforts focused on converting data from OMOP to FHIR, allowing FHIR-based systems to access OMOP data. However, there was a lack of standardized methods for converting data in the opposite direction, from FHIR to OMOP. 

This lack of standardization led to several limitations:

* **Increased implementation costs:** Each organization had to develop its own custom solutions for FHIR to OMOP transformations.
* **Slower data loading:** The absence of standard tools and processes made it time-consuming to transfer data to OMOP.
* **Reduced data quality:** Inconsistent approaches to transformation could lead to errors and inconsistencies in the data.


## 3.  Introduced Approaches and Technical Approach

This IG introduces a standardized approach for converting FHIR data to OMOP, focusing on a core set of EHR data. It leverages existing work where available and fills in the gaps with new mappings.

**Technical Approach:**

* **Logical Models:** The IG defines logical models representing the OMOP Common Data Model v5.4.
* **Mappings:** It provides mappings between FHIR resources (using International Patient Access FHIR profiles) and OMOP data tables.
* **FHIR StructureMaps and ConceptMaps:** These are used to define the transformations between FHIR and OMOP data elements.
* **Code Mapping Process:** A detailed process is described for mapping coded data from FHIR to OMOP, including handling non-standard codes and multiple reference codings.

Essentially, the IG provides a set of instructions and tools for converting FHIR data into a format that can be loaded into an OMOP database. This includes instructions on how to handle different data types, how to map codes between the two systems, and how to deal with situations where there isn't a direct one-to-one mapping between FHIR and OMOP.


## 4. Scope Decisions, Design Choices, and Contextual Factors

* **Focus on FHIR to OMOP:** The IG specifically addresses the FHIR to OMOP transformation, recognizing the existing work in the opposite direction.
* **Core EHR Data:** It concentrates on a common core set of EHR data, reflecting the priorities of the Vulcan FHIR Accelerator project, which initiated this effort.
* **OMOP CDM v5.4:** The IG uses OMOP CDM v5.4, which is the currently recommended version for new implementations.
* **Leveraging Prior Work:** The development team prioritized reviewing and utilizing existing mappings to avoid duplication of effort.
* **Vulcan FHIR Accelerator:** The Vulcan project plays a crucial role in coordinating, consolidating, and mediating the development of this IG.
* **International Patient Access FHIR Profiles:** These profiles are used as the basis for the FHIR side of the mappings.

These decisions reflect a focus on practicality, efficiency, and community collaboration. By building on existing standards and resources and focusing on the most common use cases, the IG aims to maximize its impact and accelerate the adoption of interoperable data transformation methods. 
