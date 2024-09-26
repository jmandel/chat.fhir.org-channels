# FHIR-IPS: Analysis

## 1. Objectives

This implementation guide (IG) aims to standardize how electronic health records are summarized and exchanged across international borders. It focuses on creating concise patient summaries that contain essential information for unplanned care, regardless of medical specialty or specific health conditions. The goal is to enable healthcare providers in different countries to easily understand and use patient information, even if they use different electronic health record systems or speak different languages.

## 2. Previous Approaches and Limitations

Previously, the International Patient Summary (IPS) was represented using HL7 CDA R2, a standard for clinical document exchange. However, this IG introduces a newer approach using HL7 FHIR, a more modern and flexible standard for healthcare data exchange. This shift addresses limitations of the older CDA-based approach, such as its complexity and limited ability to represent data independently of the underlying syntax.

## 3. Technical Approach

This IG introduces a FHIR-based representation of the IPS using a `Bundle` resource that contains a `Composition` resource as the main document. It defines a set of FHIR profiles that constrain various FHIR resources like `Patient`, `AllergyIntolerance`, `Condition`, `MedicationStatement`, etc. to ensure they meet the minimal requirements of the IPS dataset. The IG also leverages SNOMED CT and other standardized terminologies to ensure semantic interoperability and facilitate translation.

## 4. Scope Decisions and Design Choices

- **Minimal dataset:** The IG focuses on a minimal set of essential data elements, recognizing that health records contain vast amounts of information, not all of which is relevant for unplanned care.
- **Open slicing:** The IG uses open slicing for section entries, allowing flexibility to include additional information beyond the minimal dataset if available and relevant.
- **MustSupport:** Implementations are required to support certain data elements deemed crucial for basic patient understanding.
- **Empty sections and missing data:** The IG provides guidance on handling missing data using `emptyReason` elements and standardized codes for known absence of information.
- **Narrative and language translation:** Recognizing the cross-border context, the IG requires human-readable narrative for each section, which can be translated into different languages.
- **SNOMED CT as primary terminology:** The IG promotes using SNOMED CT, specifically the IPS Terminology, for coded data to enhance semantic interoperability and translation capabilities.
- **Operations for IPS generation:** The IG recommends using `$summary` and `$docref` operations for generating IPS documents.
