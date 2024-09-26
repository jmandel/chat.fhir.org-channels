# Cancer Pathology Data Sharing: Analysis

## 1. Objectives 

This implementation guide aims to standardize how cancer pathology data (information gathered from lab analysis of tissues potentially affected by cancer) is electronically collected and shared between different healthcare systems. It seeks to improve how easily this information can be exchanged between:

* Pathology labs where the tests are conducted
* Hospitals and clinics where patients receive care
* Central Cancer Registries that track cancer cases for public health purposes

The overall goal is to make it easier to collect, store, and use this data to improve patient care, cancer reporting, and research.

## 2. Current Practices and Limitations

Currently, cancer pathology data is often captured electronically within labs but is then shared with other systems in non-standardized, non-machine-readable formats (e.g., PDF files). This makes it difficult for systems to automatically process and use the data.

The existing standard for transmitting pathology data to central cancer registries relies on an older messaging format (HL7 Version 2.5.1) that is not as flexible or scalable as newer approaches.

These limitations make it challenging to:

* Efficiently share pathology data between different systems
* Analyze cancer pathology data for research and public health purposes
* Automate cancer reporting processes

## 3. New Approaches and Technical Details

This IG introduces a new approach based on the FHIR (Fast Healthcare Interoperability Resources) standard. FHIR is a modern standard for exchanging healthcare information electronically.

Specifically, this IG:

* Defines a set of FHIR "profiles" that specify how cancer pathology data should be structured and represented within FHIR messages.
* Leverages the "IHE SDC on FHIR" standard to capture data from electronic Cancer Protocols (eCPs) used by pathologists.
* Aligns with the "MedMorph" standard to support the exchange of pathology data between labs, EHRs, and central cancer registries.

The technical approach involves:

* Using FHIR resources (like DiagnosticReport, Specimen, and ServiceRequest) to represent different aspects of cancer pathology data.
* Packaging these resources into FHIR "bundles" for transmission.
* Defining specific data elements and terminologies (e.g., LOINC, SNOMED CT) to ensure data consistency.

## 4. Important Context and Design Decisions

* **Relationship to existing standards:** This IG builds upon and aligns with existing standards like NAACCR Volume V, IHE SDC on FHIR, and MedMorph. It aims to provide a FHIR-based alternative to older approaches while ensuring compatibility.
* **Focus on structured data:** This IG emphasizes the use of structured data (data organized in a predefined format) to facilitate automated processing and analysis. This contrasts with unstructured data like narrative text in PDF reports.
* **Dependence on eCPs:** Currently, the IG relies on the use of CAP eCPs for data capture. Future iterations may support other data sources.
* **Terminology choices:** The IG acknowledges ongoing discussions about the use of LOINC vs. SNOMED CT terminologies in cancer pathology but does not attempt to resolve them.
* **US focus:** This IG is specifically designed for the US healthcare system and regulatory environment.

Understanding these contextual factors and design decisions is crucial for interpreting and implementing this IG effectively. 
