# HL7 V2 to FHIR Implementation Guide: Analysis

## 1. Objectives

This implementation guide aims to bridge the gap between two healthcare data standards: HL7 Version 2 (v2) and HL7 FHIR. It provides a comprehensive set of mappings that allow users to convert data from older v2 messages into the newer FHIR format. This will enable healthcare systems still using v2 to exchange data with systems using FHIR, promoting interoperability and a smoother transition to modern healthcare data exchange. 

## 2. Previous Approaches and Limitations

Prior to this IG, the existing mapping information within the FHIR standard was limited. It only addressed mappings at a high level, focusing on whole FHIR components and not covering the detailed level of data types or all commonly used v2 elements. This made it difficult to consistently and comprehensively transform v2 data into FHIR.

## 3. Introduced Approaches and Technical Approach

This IG introduces a robust mapping framework documented using spreadsheets that can be easily reviewed and edited. These spreadsheets are then converted into computable FHIR ConceptMap resources which can be ingested by mapping engines. The guide focuses on reusable mappings for data types and segments, reducing redundancy and maintenance overhead. 

The mappings cover:

* **Message Structures:** Common v2 messages are mapped to FHIR Bundles, potentially including MessageHeader, Provenance, and Task resources.
* **Segments:** v2 segments are mapped to FHIR resources or data types, with different flavors of mappings for different contexts.
* **Data Types:** Complex v2 data types are mapped to FHIR data types, including handling for mismatches in cardinality.
* **Vocabulary:** Mappings are provided between v2 tables and FHIR value sets, addressing different code systems and binding strengths.

## 4. Scope Decisions, Design Choices, and Contextual Factors

* The IG focuses on the latest v2 version as the source and FHIR R4 as the initial target, with plans to update for newer versions of both standards.
* It prioritizes commonly exchanged v2 message structures, with the ability to expand over time based on demand.
* The initial focus supports the FHIR messaging paradigm, acknowledging that other FHIR workflows may be used after the transformation.
* Implementation considerations are provided to guide users in handling variations in local implementations, cardinality mismatches, and terminology mapping challenges.
* The IG does not cover mappings for locally defined z-data elements, encouraging users to align with standard elements.
* Normative status for the mappings is the ultimate goal.

## Other Important Considerations

* The IG addresses the generation of Resource.id for newly created FHIR resources, recommending best practices for transient resource identification within a Bundle.
* It acknowledges the complexity of patient identity management and encounter matching, leaving those as implementation-specific considerations.
* The use of contained resources and task management are also left as implementation decisions based on workflow requirements.
* Guidance is provided on handling segment action codes and data provenance, with a recommendation to capture at least the provenance of the message source and transformation process.
* The IG provides detailed instructions on terminology mapping, including handling for different types of v2 tables, FHIR value set binding strengths, and edge cases where direct mapping is not possible.

This structured analysis is based solely on the provided IG content and avoids speculation or assumptions.
