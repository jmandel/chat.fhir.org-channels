# US Prescription Drug Monitoring Program FHIR IG: Analysis

## 1. Objectives

This implementation guide aims to standardize how healthcare providers (doctors and pharmacists) electronically request and receive a patient's controlled substance prescription history from state-run databases called Prescription Drug Monitoring Programs (PDMPs). The goal is to make this process more efficient and reliable using a modern data exchange standard called FHIR (Fast Healthcare Interoperability Resources).

## 2. Previous Approaches and Limitations

Previously, healthcare providers accessed PDMP information through various methods, including:

* **Web portals:** All PDMPs offer web portals for provider access, but these can be cumbersome and time-consuming.
* **NCPDP SCRIPT RxHistory and ASAP Web Services:** Some PDMPs support these data exchange standards, but adoption isn't widespread, leading to inconsistencies.
* **Proprietary integrations:** Some PDMPs have their own custom integration methods, further contributing to fragmentation.

These approaches lack a unified standard, leading to integration challenges and inefficiencies in accessing crucial patient information.

## 3. Introduced Approaches

This IG introduces a standardized approach using the FHIR standard, enabling:

* **pdmp-history operation:** A defined FHIR operation for requesting and retrieving PDMP data.
* **Discrete FHIR data:** PDMP history returned as structured data within the operation response.
* **URL link to formatted reports:**  Option to return a URL pointing to a fully formatted PDMP history report, ensuring compliance with state-specific presentation requirements.
* **Support for pre-staging requests:**  Ability to request data gathering and staging for later retrieval, improving responsiveness in time-sensitive situations.

The IG offers two technical approaches for request submission:

* **Direct operation call:** Using a RESTful POST request to the PDMP Responder's endpoint.
* **FHIR messaging:** Sending the request as a FHIR message, potentially through intermediaries like e-prescribing networks.

## 4. Scope, Design Choices, and Contextual Factors

**Scope:**

* Focuses solely on the exchange of PDMP request and response messages between healthcare providers and PDMPs.
* Excludes other PDMP interactions like prescription transmission or pharmacy reporting.

**Design Choices:**

* Leverages existing US Core FHIR profiles as the base for PDMP-specific resource profiles, ensuring alignment with broader US healthcare data exchange standards.
* Supports returning PDMP history as both discrete data and a URL link, catering to different implementation needs and regulatory requirements.
* Incorporates CDS Hooks and SMART App Launch standards for integrating PDMP information into provider workflows, enhancing usability and decision support.

**Contextual Factors:**

* Developed for use within the United States, reflecting US pharmacy processes and conventions.
* Addresses security and privacy concerns by recommending OAuth 2.0 for authorization and emphasizing adherence to FHIR security principles.
* Recognizes varying jurisdictional requirements and encourages adherence to state-specific rules for data population.

This IG represents a significant step towards streamlining PDMP data exchange, potentially improving patient safety and mitigating prescription drug misuse by facilitating timely access to critical information.
