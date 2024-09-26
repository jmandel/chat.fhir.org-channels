# US Public Health Profiles Library: Analysis

## 1. Objectives

This implementation guide aims to simplify the sharing of health information for public health purposes in the United States. It defines a set of standardized data formats and structures, based on the FHIR standard, specifically for public health reporting and research. This makes it easier for healthcare providers, electronic health record systems, and public health agencies to exchange information seamlessly, reducing the burden of implementation and promoting interoperability.

## 2. Previous Approaches and Limitations

Previously, public health reporting often involved separate implementations and data definitions for different projects and use cases. The guide highlights two examples, Electronic Case Reporting (eCR) and Making Electronic Data More available for Research and Public Health (MedMorph), which had overlapping data requirements but lacked a common standard. This led to duplication of effort, increased complexity, and hindered efficient data exchange.

## 3. Technical Approach

The guide introduces the US Public Health Profiles Library (USPHPL), a collection of reusable data profiles aligned with the US Core Implementation Guide (US Core).  It leverages existing US Core profiles whenever possible and only introduces additional constraints or profiles when strictly necessary for public health reporting. 

The USPHPL employs FHIR profiles to define the minimum required data elements, extensions, vocabularies, and value sets for various public health concepts. It uses FHIR resources like Patient, Encounter, Location, and Organization, applying specific constraints and extensions relevant to public health reporting scenarios.

## 4. Scope Decisions, Design Choices, and Contextual Factors

* **Close alignment with US Core:** The USPHPL is designed as a companion to US Core, reusing its profiles and striving to stay synchronized with new US Core releases. This minimizes redundancy and ensures consistency with broader interoperability efforts.

* **Focus on common public health needs:** The guide emphasizes that profiles are added to the library only when required for prevalent public health use cases. This ensures the library remains focused and manageable.

* **Data masking:** The guide allows for masking specific data elements using the FHIR data-absent-reason extension. This addresses privacy concerns by enabling de-identification of sensitive information.

* **Conformance expectations:** The guide clearly outlines conformance expectations using FHIR's "SHALL," "SHOULD," and "MAY" verbs, specifying the mandatory and must-support elements within each profile.

* **Variance process:** A variance process, modeled after the US Core Variance process, will be established to handle situations requiring deviations from the standard library profiles.

* **Postpartum period definition:** The guide includes a profile specifically for defining the postpartum period, acknowledging the lack of a universally agreed upon end date for this period.

* **Pregnancy status and outcome observations:** The guide provides dedicated profiles for recording pregnancy status and outcome observations, ensuring consistent representation of this crucial information.

* **Exposures and contact information:** The guide includes a profile for capturing various exposures and contact information, allowing for detailed reporting of environmental, personal, and event-related exposures.

* **Reportability determination:** The guide introduces an extension for indicating the reportability of a condition to public health agencies, facilitating automated decision support and reporting workflows.

* **Code System property binding:** An extension is introduced to specify required bindings for Code System properties, ensuring consistent and controlled use of code system properties.

* **FHIR Query Pattern Extension:** An extension is introduced to allow for the specification of a FHIR query pattern that can be used to retrieve data from a FHIR server, enabling standardized data retrieval for public health reporting.

* **Initiation Reason Extension:** An extension is introduced to capture the reason for initiating a public health report, providing context for the report.

* **Emergency Outbreak Information:** A profile is introduced to capture information related to public health emergencies and outbreaks, enabling standardized data collection for response efforts.

* **Characteristics of Home Environment:** A profile is introduced to capture characteristics of a patient's home environment, providing valuable context for public health reporting and analysis.

* **Message Types CodeSystem:** A code system is introduced to define standard codes for identifying the types of messages being exchanged in public health reporting.

* **Usage Context CodeSystem:** A code system is introduced to define standard codes for identifying the use context of a ValueSet or Library.

* **Computable and Executable ValueSets:** The guide defines profiles for Computable ValueSets, which use expressions for defining value set content, and Executable ValueSets, which include a point-in-time expansion of codes.

* **Triggering and Supplemental ValueSets:** The guide distinguishes between Triggering ValueSets, used for identifying potentially reportable events, and Supplemental ValueSets, used for additional information during reportability assessment.

* **Computable and Executable Libraries:** The guide defines profiles for Computable Libraries, which contain CQL but not compiled ELM, and Executable Libraries, which contain compiled ELM but not necessarily the source CQL.

* **Specification and Supplemental Libraries:** The guide defines profiles for Specification Libraries, which contain specifications for a public health reporting program, and Supplemental Libraries, which contain supplemental assets for reportability determination.