# EHRS Functional Model - Record Lifecycle Events - FHIR Implementation Guide: Analysis

## 1. Objectives

This implementation guide aims to standardize how electronic health records (EHRs) and other health systems track and manage changes made to patient health information throughout its lifespan. This includes actions like creating, updating, viewing, sharing, archiving, and deleting health records. The goal is to ensure that these changes are documented in a reliable, trustworthy, and easily understandable way, improving the security, accountability, and interoperability of health data.

## 2. Previous Approaches and Limitations

The guide explicitly addresses the need for a consistent method to manage electronic health records and personal health records, citing the limitations of existing practices. Previously, the management of health record entries during their lifecycle and the handling of lifecycle events were not standardized, leading to potential inconsistencies, security risks, and difficulties in tracking the history of changes to health information.

## 3. Introduced Approaches and Technical Approach

This IG introduces a methodology based on the ISO/HL7 10781:2023 Electronic Health Record System Functional Model (EHR-S FM) Release 2.1, ISO/HL7 16527:2023 Personal Health Record System Functional Model (PHR-S FM) Release 2 and ISO 21089:2018 Trusted End-to-End Information Flows. It leverages the FHIR standard to define how specific events in the lifecycle of a health record should be captured and represented. 

**Technical Approach:**

* **Record Lifecycle Events (RLEs):** Defines a specific set of events that can occur during the lifespan of a health record entry (e.g., originate, update, attest, access, disclose, archive, destroy).
* **FHIR Profiles:**  Uses FHIR profiles to specify how the `Provenance` and `AuditEvent` resources should be used to capture detailed information about each RLE. This includes information about who performed the action, what action was taken, when it occurred, and why.
* **CRUDE Mapping:** Maps RLEs to basic Create, Read, Update, Delete (CRUDE) operations, providing a clear link between the specialized RLEs and fundamental data manipulation actions.
* **Metadata Capture:** Outlines how specific metadata elements (who, what, when, where, why) should be captured within the `Provenance` and `AuditEvent` resources for each RLE, ensuring comprehensive documentation.


## 4. Important Context and Design Decisions

* **Standardization:** The guide emphasizes the importance of adhering to international standards like ISO/HL7 10781 and ISO 21089 to promote consistency and interoperability across different health systems.
* **Trust and Integrity:** The use of digital signatures and detailed provenance information is highlighted as crucial for ensuring the trustworthiness and integrity of health records.
* **Comprehensive Metadata:** The guide stresses the need to capture comprehensive metadata for each RLE, including information about the actors involved, the reason for the event, and any relevant policies or regulations.
* **FHIR-Centric Approach:** The guide's reliance on FHIR resources demonstrates a commitment to leveraging the FHIR standard for achieving interoperability and data exchange in healthcare. 
* **Extensibility:** The guide recognizes that the list of RLEs and associated metadata may need to be extended in the future to accommodate evolving needs and new technologies in healthcare. 
