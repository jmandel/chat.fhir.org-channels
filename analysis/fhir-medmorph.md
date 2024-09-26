# MedMorph Reference Architecture: Analysis

## 1. Objectives

This implementation guide aims to simplify and standardize how healthcare data is collected and shared for public health reporting and research purposes. It seeks to automate data extraction from electronic health records (EHRs) and other healthcare data sources and securely transmit it to public health agencies and research organizations.  The goal is to reduce the manual burden on healthcare providers, improve data quality, and speed up the process of sharing data.

## 2. Previous Approaches and Limitations

Previously, data collection for public health and research involved manual processes, non-standardized data formats, and different data sharing mechanisms for each use case. This resulted in high provider burden, inconsistent data quality, slow data transfer, and increased costs.

## 3. Introduced Approaches and Technical Approach

This IG introduces a standardized, automated approach using a framework called "MedMorph."  

**Key components:**

* **Knowledge Artifacts:** These are machine-readable instructions that define what data to collect, when to collect it, and how to format it for specific reporting or research needs.
* **Health Data Exchange App (HDEA):** This acts like a background application within a healthcare setting. It receives the Knowledge Artifacts, monitors patient data, and automatically triggers data extraction and submission when specific criteria are met.
* **Trust Service Provider:** This provides services to de-identify or anonymize patient data when needed to comply with privacy regulations.
* **Standardized FHIR APIs:** This IG relies on the HL7 FHIR standard for data exchange, enabling interoperability between different healthcare systems.

**How it works:**

1. Public health agencies or research organizations create Knowledge Artifacts and publish them in a repository.
2. The HDEA retrieves the relevant Knowledge Artifacts and subscribes to specific events within the EHR (e.g., new diagnosis, medication order).
3. When an event occurs, the HDEA automatically queries the EHR for the necessary data.
4. The HDEA uses the Trust Service Provider, if needed, to de-identify the data.
5. The HDEA packages the data into a standardized report and submits it to the appropriate recipient.

## 4. Scope Decisions, Design Choices, and Contextual Factors

* **Focus on automation:** The IG prioritizes automation to minimize provider burden.
* **FHIR-centric approach:**  The IG leverages FHIR as the foundation for data exchange and interoperability.
* **Modularity and extensibility:** The IG provides a reference architecture that can be adapted and extended for various use cases.
* **Reliance on existing standards:** The IG builds upon established standards like US Core, Bulk Data Access IG, and SMART App Launch.
* **Security and privacy:** The IG incorporates security mechanisms like SMART on FHIR and Trust Services to protect patient data.
* **Phased approach:** The IG acknowledges that full FHIR implementation may take time and provides alternative mechanisms for notifications where FHIR subscriptions are not yet supported.
* **Collaboration and harmonization:** The IG emphasizes the importance of collaboration with other FHIR initiatives like the US Public Health Profiles Library and eCR FHIR IG to avoid duplication and promote consistency.
