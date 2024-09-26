# FHIR-SPL: Analysis

## 1. Objectives 

This implementation guide aims to facilitate the submission of drug labels to the FDA using the FHIR standard. Currently, vendors submit drug labels using the HL7 V3 SPL (Structured Product Labeling) standard. This guide outlines how to transition to using FHIR for these submissions.

## 2. Previous Approaches and Limitations

Previously, drug labels were submitted to the FDA using the HL7 V3 SPL standard.  The guide mentions no specific limitations with this approach but indicates that this new guide proposes a new method for future submissions.

## 3. Technical Approach

This implementation guide defines:

* **FHIR profiles:** These profiles specify the required data elements for drug label submissions using existing FHIR resources (like Organization and MedicinalProductDefinition) and extensions where needed.
* **Mappings:** It documents how data elements in SPL map to corresponding elements in FHIR and vice versa.
* **XSLT Transforms:** These transforms automate the conversion of SPL submissions into FHIR bundles and from FHIR bundles back to SPL.

## 4. Scope, Design Choices, and Context

* **Scope:** The initial focus is on drug label submissions for medicinal products and establishment/facility registration.  
    * This includes specific use cases like requesting NDC codes, registering establishments, and submitting drug or biologic labels.  
    * It excludes products intended for animals, dietary supplements, medical food products, device products, and cosmetic products.
* **Design Choices:** The guide leverages the FHIR Document paradigm, using the Bundle resource to represent a complete SPL document. It also uses Composition to structure the document content and references various other resources like Organization and MedicinalProductDefinition to represent specific entities and concepts. 
* **Context:** This guide was developed under the supervision of the HL7 Biomedical Research & Regulation work group, indicating a collaborative effort to standardize data exchange in this domain. 
