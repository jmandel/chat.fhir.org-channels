# Da Vinci PCDE: Analysis

## 1. Objectives

This Implementation Guide (IG), called Da Vinci Payer Coverage Decision Exchange (PCDE), aims to improve the continuity of healthcare for patients when they switch health insurance providers (payers). It does this by enabling the secure and standardized transfer of a patient's active treatment information from their old payer to their new payer. This information includes details about ongoing treatments, the reasons for those treatments, prior authorizations, and supporting clinical documentation. 

The goal is to make sure patients don't experience interruptions in necessary care, reduce the burden on providers who would otherwise need to resubmit information to the new payer, and avoid unnecessary costs associated with duplicated tests or treatments.


## 2. Previous Approaches and Limitations

Previously, when a patient changed insurance providers, the new payer often lacked the information needed to seamlessly continue the patient's existing treatments. This could lead to:

* **Delays or interruptions in care:** Patients might have to wait for the new payer to approve treatments, potentially leading to gaps in medication or therapy.
* **Administrative burden on providers:**  Providers would often have to resubmit clinical information and prior authorization requests to the new payer, duplicating effort and increasing costs.
* **Increased costs and risks for patients:** Patients might face higher out-of-pocket expenses for treatments that were previously covered or experience health risks due to treatment interruptions.
* **Poor patient experience:** The process of transferring information was often manual, slow, and frustrating for patients.

These limitations stemmed from a lack of standardization and automation in the way patient information was exchanged between payers.


## 3. New Approaches

The PCDE IG introduces a standardized approach for exchanging patient information between payers using the FHIR (Fast Healthcare Interoperability Resources) standard. This approach includes:

* **Standardized data structure:** The IG defines a specific FHIR-based document structure called the "Coverage Transition Document" that organizes all the necessary information about a patient's active treatments.
* **Automated data exchange:** The IG leverages existing FHIR-based mechanisms for requesting and transferring data, such as the Health Record Exchange (HRex) and Payer Data Exchange (PDex) Implementation Guides. This allows for a more automated and efficient exchange process.
* **Focus on active treatments:** The IG prioritizes the exchange of information related to ongoing treatments that are likely to require continuation under the new payer's coverage.

**Technical Approach:**

The exchange process involves the following steps:

1. **Authorization (Optional):** The patient may authorize the new payer to access their data from the old payer using OAuth 2.0.
2. **Member Matching:** The new payer identifies the patient on the old payer's system.
3. **Task Creation:** The new payer sends a request (using a FHIR Task resource) to the old payer for the Coverage Transition Document.
4. **Document Generation:** The old payer compiles the necessary information and creates the document.
5. **Status Tracking:** The new payer monitors the status of the request through either polling or subscriptions.
6. **Document Retrieval:** Once the document is ready, the new payer retrieves it from the old payer's system.


## 4. Important Context and Design Decisions

* **Reliance on Existing Standards:** The PCDE IG builds upon existing FHIR-based standards and implementation guides, promoting consistency and interoperability within the healthcare ecosystem.
* **Flexibility and Extensibility:** While the IG defines a core set of required information, it also allows for flexibility and extensibility to accommodate payer-specific needs and future advancements in data exchange.
* **Security and Privacy:** The IG inherits security and privacy requirements from the HRex IG, emphasizing the importance of protecting patient data during the exchange process.
* **Phased Implementation:** The IG acknowledges that full automation may not be achievable immediately and anticipates that human review will likely be involved in the process, particularly in the initial stages of adoption.
* **Ongoing Evolution:** The IG is expected to evolve over time based on implementation experience and feedback from stakeholders.
