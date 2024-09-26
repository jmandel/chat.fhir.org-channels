# FHIR-PACIO-ADI: Analysis

## 1. Objectives

This implementation guide (IG) aims to standardize how digital healthcare directives are created, shared, and accessed. It seeks to enable individuals to easily document their wishes about medical treatment in case they become unable to communicate those wishes themselves due to a health crisis. This standardization will make it easier for healthcare providers to access and respect these wishes, improving patient care and reducing confusion during emergencies.

## 2. Previous Approaches and Limitations

Previously, advance directives were often paper-based documents, leading to challenges in:

* **Accessibility:** Difficulty locating and retrieving paper documents during emergencies.
* **Sharing:** Limited options for sharing these documents with relevant healthcare providers and family members.
* **Verification:** Uncertainty about whether a document represented the individual's most current wishes.

These limitations highlighted the need for a digital, standardized approach to advance directive documentation and exchange.

## 3. Technical Approach

This IG leverages the FHIR (Fast Healthcare Interoperability Resources) standard to:

* **Represent:** Structure advance directive information digitally using FHIR resources, including scanned documents, CDA documents, and native FHIR documents.
* **Exchange:** Define FHIR-based APIs for sharing and accessing advance directive information between systems, supporting both push and pull mechanisms.
* **Verify:** Specify procedures for confirming whether the available information is the most current version, addressing document versioning and revocation.

## 4. Important Considerations

* **Must Support:** This IG defines "Must Support" elements that systems claiming conformance must be capable of populating and processing, ensuring consistent handling of critical information.
* **Textual Information:** Recognizing the limitations of standardized codes for advance directives, this IG emphasizes the importance of capturing and displaying human-readable textual information.
* **Digital Signatures:** While not mandatory, the IG encourages support for digital signatures to enhance document trust and non-repudiation.
* **Document Bundles:** The IG allows for the use of both complete document bundles and constituent resources, providing flexibility for different use cases.
* **Content Types:** The IG distinguishes between three types of advance directive information: Person-Authored, Encounter-Centric Instructions, and Portable Medical Orders, each with specific requirements and guidance.

The IG's development was driven by the need for improved interoperability in the context of an aging population and the challenges posed by the COVID-19 pandemic. It addresses the need for reliable and accessible advance directive information across transitions of care. 
