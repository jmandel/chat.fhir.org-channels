# PACIO Advance Directive Interoperability (ADI): Analysis

## 1. Objectives 

This implementation guide (IG) aims to standardize how digital advance healthcare directives are created, updated, shared, and accessed across different healthcare systems.  It enables individuals to express their wishes for medical treatment in the event they become unable to communicate, ensuring these wishes are readily available to healthcare providers during emergencies or critical care situations.

## 2. Previous Approaches and Limitations

Previously, advance directives were primarily paper-based documents, leading to challenges in:

* **Accessibility:** Paper documents were often difficult to locate during emergencies, especially when patients transitioned between care settings.
* **Verification:** Confirming the most recent version of a paper directive was time-consuming and prone to error. 
* **Interoperability:** Sharing paper documents between different healthcare systems was cumbersome and inefficient.

These limitations highlighted the need for a standardized, digital approach to advance directive management.

## 3. Technical Approach

This IG leverages the HL7 FHIR® standard to address these limitations. It introduces:

* **Structured Data Representation:** Advance directive information is encoded using FHIR resources, enabling consistent interpretation and exchange across systems.
* **RESTful API Interactions:**  FHIR APIs facilitate secure sharing, querying, and updating of advance directive information between different systems.
* **Document Indexing:** The `DocumentReference` resource is used to index and manage different versions of advance directives, simplifying version control and retrieval.
* **Digital Signatures (Optional):** The IG supports the inclusion of digital signatures to ensure document authenticity and integrity.

## 4. Key Decisions and Factors

* **Focus on Patient Empowerment:** The IG prioritizes enabling individuals to control their advance directive information and share it with chosen healthcare providers.
* **Support for Various Document Types:** The IG accommodates different forms of advance directives, including scanned PDFs, CDA documents, and native FHIR documents.
* **Phased Implementation:** The IG initially focuses on patient-authored advance directives and portable medical orders, with plans to address encounter-centric patient instructions in future versions.
* **Alignment with US Core:** The IG aligns with the US Core Implementation Guide, ensuring compatibility with broader healthcare interoperability efforts.
* **Recognition of Jurisdictional Variations:** The IG acknowledges that advance directive policies and workflows may differ across regions and emphasizes the importance of adhering to local requirements.
