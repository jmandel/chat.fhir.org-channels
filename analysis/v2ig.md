# HL7 v2+™: Analysis

## 1. Objectives

This Implementation Guide (IG) aims to update and clarify the HL7 v2 messaging standard by redefining its data types and structures to be more easily understood and used with modern technologies. It seeks to bridge the gap between HL7 v2 and the newer FHIR standard by aligning v2 data types with FHIR equivalents where possible. This will facilitate interoperability between systems using both standards and make it easier to transition from v2 to FHIR.


## 2. Previous Approaches and Limitations

Previously, HL7 v2 data types were defined in a way that was not always clear or consistent, making it difficult to implement and interpret. There was no explicit mapping between HL7 v2 and FHIR data types, hindering interoperability between systems using different standards. The IG notes issues like imprecise regular expressions for validating data types, ambiguous length restrictions for numeric types, and inconsistencies in handling whitespace. These limitations led to the development of this IG to provide a more robust and well-defined specification for HL7 v2 data types.


## 3.  Approaches Introduced

This IG introduces a "refactored" version of HL7 v2, referred to as HL7 v2+. It aims to improve the v2 standard by:

* **Aligning v2 data types with FHIR primitives where applicable:** This involves mapping v2 primitive data types to corresponding FHIR primitives and using FHIR's principles for defining data types.
* **Clarifying and standardizing data type definitions:** The IG provides clearer definitions and constraints for v2 data types, using regular expressions and other mechanisms to ensure consistency and validation.
* **Addressing inconsistencies and ambiguities in the original v2 specification:** The IG clarifies ambiguous aspects of the v2 standard, such as length restrictions for numeric types and the handling of whitespace in string types.

**Technical Approach:**

The IG leverages FHIR's principles and structures for defining data types. It uses the concept of "derivation" to show how v2 data types relate to FHIR primitives. When a v2 data type can be directly mapped to a FHIR primitive, it is defined as a "constraint" of that primitive. In cases where a direct mapping is not possible, the IG provides specific rules and constraints to define the v2 data type.


## 4. Scope Decisions, Design Choices, and Contextual Factors

* **Focus on primitive data types:** The IG primarily focuses on redefining the primitive data types of HL7 v2, which are the building blocks for more complex structures.
* **Use of FHIR as a reference model:** The IG explicitly uses FHIR as a reference model for defining and clarifying v2 data types. This reflects a broader trend towards aligning HL7 v2 with FHIR to facilitate interoperability.
* **Addressing limitations of existing v2 definitions:** The IG acknowledges and addresses specific limitations in the existing HL7 v2 standard, such as ambiguity in length restrictions for numeric types and inconsistencies in whitespace handling.
* **Derivation and constraint mechanisms:** The IG uses the concepts of "derivation" and "constraint" to establish relationships between v2 and FHIR data types, providing a structured approach for aligning the two standards.
* **Challenges in mapping certain v2 types:** The IG notes that some v2 data types, such as NM (numeric) and SI (sequence ID), do not have direct analogs in FHIR, requiring specific rules and constraints to be defined. 
* **Open questions on representing constraints:** The IG raises questions about how to best represent constraints on derived types, particularly when a simple differential from the base FHIR type is not sufficient. 
