# C-CDA on FHIR: Analysis

## 1. Objectives

This implementation guide aims to bridge the gap between two healthcare data standards: C-CDA (Consolidated Clinical Document Architecture) and FHIR (Fast Healthcare Interoperability Resources). It provides a way to translate clinical documents created using the older C-CDA standard into the newer FHIR format, and vice versa. This translation facilitates easier sharing and understanding of patient information between different healthcare systems using different standards.

## 2. Problems and Limitations of Current Practices

Currently, healthcare systems using C-CDA and FHIR have difficulty exchanging patient data because the standards are structured differently and use different terminologies. This lack of interoperability hinders efficient care coordination, as healthcare providers may not have a complete picture of a patient's medical history.

## 3. New Approaches and Technical Approach

This IG introduces a set of FHIR profiles that mirror the various document types found in C-CDA. It also provides mappings that show how data elements in C-CDA correspond to data elements in FHIR. These mappings consider both structural differences (how the data is organized) and terminological differences (the codes used to represent medical concepts).

The technical approach involves:

- **Profiling:** Creating specialized versions of FHIR resources (like "Composition" for documents) to match the specific structure of C-CDA documents.
- **Mapping:** Defining detailed rules for converting data elements from C-CDA to FHIR and back, including handling different data types, codes, and ways of expressing missing information.
- **Bundling:** Packaging the translated FHIR resources into a "Bundle" to represent a complete clinical document.

## 4. Contextual Factors and Design Decisions

- **Reliance on US Core:** The IG leverages the US Core FHIR profiles for representing common clinical data elements, promoting consistency and alignment with national standards.
- **Focus on PAMI+:** The initial focus is on mapping common clinical domains (Problems, Allergies, Medications, Immunizations, Procedures, and Patient), acknowledging that other areas will be addressed in future updates.
- **Multi-vendor Consensus:** The CDA to FHIR mappings are based on a consensus achieved through collaboration between multiple vendors, ensuring wider applicability and acceptance.
- **Limitations of Bi-directional Transformation:** While automation is possible, perfect lossless translation is challenging due to inherent differences between the standards. The IG highlights areas where extensions might be needed to preserve specific nuances.
- **Ongoing Evolution:** Both C-CDA and FHIR are evolving standards. The IG acknowledges this and will be updated to reflect changes and address new challenges.
