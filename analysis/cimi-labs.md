# CIMI Laboratory Sub-Types: Analysis

## 1. Objectives

This implementation guide aims to standardize how electronic health systems exchange information about common laboratory test results. It focuses on ensuring that different systems can understand and interpret the results of various lab tests, such as blood tests, urine tests, and other common lab procedures, in a consistent way. This would enable healthcare providers to easily access and share patient lab results regardless of the specific electronic systems they use.


## 2. Current Practices and Limitations

Currently, different electronic health systems may represent lab results in different formats, making it difficult to exchange and interpret them accurately. This can lead to delays in care, errors in diagnosis and treatment, and increased administrative burden. The lack of standardization also hinders the ability to aggregate and analyze lab data for research and public health purposes.


## 3. New Approaches and Technical Approach

This IG introduces a standardized way to represent different types of lab results using the FHIR (Fast Healthcare Interoperability Resources) standard. It defines specific profiles and extensions for common lab test types, such as quantitative results (e.g., blood glucose levels), qualitative results (e.g., presence or absence of a substance), narrative results (e.g., microscopic descriptions), and ordinal results (e.g., the size of a tumor). 

**Technical Approach:**

* **FHIR Profiles:** The IG defines profiles that constrain and specialize the base FHIR Observation resource to represent different types of lab results. These profiles specify the required data elements, their formats, and allowed values for each lab test type.
* **LOINC Codes:** The IG leverages LOINC (Logical Observation Identifiers Names and Codes) to standardize the representation of lab test types. LOINC codes are used to uniquely identify the specific lab test being performed.
* **Value Sets:** The IG defines value sets that constrain the allowed values for coded results, ensuring that systems use consistent terminology for representing lab findings.
* **Extensions:** The IG introduces extensions to capture additional information specific to lab results, such as reference ranges and abnormal interpretations.

By adopting the profiles and extensions defined in this IG, electronic health systems can ensure that lab results are exchanged and interpreted consistently across different platforms.


## 4. Contextual Factors and Design Decisions

* **US Realm:** The IG is currently focused on the US healthcare context and regulatory requirements.
* **Microbiology Exclusion:** Microbiology lab tests are excluded from this IG due to their specific requirements and are addressed in a separate implementation guide.
* **Must Support:** The IG defines a "must support" requirement for certain elements, indicating that systems must be able to store, retrieve, display, capture, and report these elements.
* **LOINC Alignment:** The choice of LOINC for observation codes aligns with the United States Core Data for Interoperability (USCDI) standards.
* **DiagnosticReport for Document-Based Results:** For lab tests where results are reported as documents, the DiagnosticReport resource is used instead of Observation because Observation does not support attachments.
* **Security and Privacy:** The IG emphasizes the importance of adhering to FHIR security and privacy guidelines, including role-based access control, audit logs, and encryption of data at rest.

These contextual factors and design decisions are crucial for understanding the scope and applicability of the IG and for ensuring successful implementation of its recommendations. 
