# Universal Laboratory Report: Analysis

## 1. Objective

This implementation guide aims to create a universal standard for representing laboratory reports using the HL7 FHIR standard. The goal is to enable the exchange of lab results in a consistent and interoperable way across different healthcare systems and countries. It focuses on common lab tests, like blood and urine tests, but excludes specialized areas like genetics.

## 2. Previous Approaches and Limitations

Previously, many systems used HL7 CDA, particularly the IHE XD-LAB implementation, to exchange lab reports. These implementations often relied on document-based exchange infrastructures, treating lab reports as legally signed documents. However, this approach had limitations, especially when trying to search and access individual lab results within the reports.

## 3. Technical Approach

This IG introduces a flexible approach that supports both document-based and result-oriented representations of lab reports:

* **Document-based:**  Uses a FHIR "document" Bundle that includes a Composition resource to define the structure and narrative of the report, and a DiagnosticReport resource to carry the results. This approach maintains compatibility with existing document-based systems.
* **Result-oriented:**  Uses the DiagnosticReport resource without a Composition, focusing on the individual lab results. This approach enables easier searching and retrieval of individual results.

The IG also pre-adopts R5 rules for document bundles, allowing resources referenced from the DiagnosticReport to be included in the bundle, even if they are not directly referenced by the Composition. This ensures that all relevant information related to the report is included.

## 4. Scope, Design Choices, and Context

* **Scope:** Focuses on common lab tests (in-vitro diagnostics), excluding specialized domains like histopathology.
* **Design Choices:**
    * A single DiagnosticReport resource represents a lab report.
    * A Composition resource may be used to define the report structure and enable document-based representation.
    * Pre-adoption of R5 rules for document bundles to ensure complete information inclusion.
* **Contextual Factors:**
    * Addresses the need for a universal standard to harmonize lab report exchange across different initiatives and countries.
    * Developed in collaboration with the IHE PALM community, ensuring alignment with existing standards.
    * Considers legal requirements for signed lab reports in some jurisdictions.
    * Balances the need for document-based representation with the requirement for searchable and accessible individual results. 
