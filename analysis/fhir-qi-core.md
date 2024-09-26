# QI-Core: Analysis

## 1. Objectives 

The QI-Core Implementation Guide aims to standardize how healthcare data is represented for quality improvement purposes. This means making it easier to build, share, and use tools that:

* **Measure healthcare quality:**  Think of reports that show how well hospitals are doing on things like patient safety or managing chronic diseases.
* **Support clinical decisions:** Imagine alerts in electronic health records that remind doctors about best practices for treating specific conditions.

By standardizing data, QI-Core helps different healthcare systems "speak the same language" when it comes to quality improvement.

## 2. Previous Approaches & Limitations

Before QI-Core, there were different models for representing data for quality measures and clinical decision support:

* **Quality Data Model (QDM):** Used for electronic clinical quality measures (eCQMs).
* **HL7 Virtual Medical Record (vMR):**  Used for clinical decision support.

However, this separation created challenges:

* **Inconsistency:**  Different models for related tasks made it harder to build tools that could do both measurement and decision support.
* **Complexity:** Mapping between these models added extra work for data providers.

## 3. QI-Core's Approach

QI-Core introduces a common model for quality improvement that draws on both QDM and vMR. It leverages:

* **FHIR (Fast Healthcare Interoperability Resources):** A modern standard for exchanging healthcare data.
* **US Core:** A set of FHIR profiles specific to the US healthcare system.

Here's how it works:

* **Profiles:** QI-Core defines profiles, which are essentially templates that specify how FHIR resources should be structured for quality improvement purposes.
* **Extensions:** QI-Core uses extensions to add additional information to FHIR resources, capturing elements needed for quality measures and decision support.
* **Terminology Bindings:**  QI-Core standardizes the use of vocabularies and value sets, ensuring everyone uses the same codes for things like diagnoses, procedures, and medications.

## 4. Key Decisions & Context

* **Focus on Data Representation:** QI-Core specifically focuses on how data is structured, not on defining the logic of quality measures or decision support rules.
* **US Realm Focus:** QI-Core primarily aligns with US standards and terminologies, though it acknowledges the need for broader applicability.
* **Must Support Elements:** QI-Core streamlines "Must Support" elements, focusing on those truly essential for interoperability and real-world use cases.
* **Negation:** QI-Core provides a standardized way to represent situations where a particular medical action *didn't* occur, which is important for accurately assessing quality. 
