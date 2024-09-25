## TL;DR:

This guide helps standardize how lab results are shared electronically using a format called FHIR. It covers common lab tests like blood and urine tests, and explains how to include important details like who ordered the test, when the sample was taken, and what lab performed the analysis.

## Purpose and Scope:

The Universal Laboratory Report Implementation Guide (IG) aims to improve how lab results are shared between healthcare systems around the world. It focuses on using FHIR to structure lab reports, ensuring that key information is included and organized in a consistent way. This allows for easier exchange and understanding of lab data, regardless of the specific systems being used.

## How the IG Works:

The guide offers different ways to represent lab reports, depending on how complex they are:

* **Simple Results:** For basic reports, it explains how to use the "DiagnosticReport" resource to record the patient, the tests performed, and the results.
* **Structured Results:** For reports with multiple sections or panels, it uses a "Composition" resource to organize the information, making it easier to read and understand.
* **Formal Documents:** For reports that need to be legally signed, like in some countries, it combines the "DiagnosticReport" and "Composition" into a FHIR "document" Bundle. This allows the report to be treated as a formal document while still being easily searchable.

The guide also explains how to handle different stages of a lab report's lifecycle, like when it's being prepared ("preliminary"), when it's complete ("final"), or if it needs to be corrected or cancelled. It also covers special situations like "reflex tests" where additional tests are automatically ordered based on initial results.

By standardizing these details, the IG helps ensure that lab results can be accurately interpreted and used by healthcare providers, regardless of where they are or what systems they use. 
