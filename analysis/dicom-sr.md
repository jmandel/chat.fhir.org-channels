# DICOM® Structured Report (DICOM® SR) Implementation Guide: Analysis

## 1. Objectives

This implementation guide aims to bridge the gap between how imaging devices and other healthcare systems record medical observations. Imaging devices often use a standard called DICOM® SR, while other systems, like electronic health records, typically use a different standard called FHIR. This guide focuses specifically on translating a particular type of imaging observation, called a "Measurement Report," from the DICOM® SR format into the FHIR format. The goal is to make it easier for different systems to share and understand these important imaging results.

## 2. Previous Approaches and Limitations

Previously, there was no standardized way for non-imaging healthcare IT systems to understand the information stored in DICOM® SR. These systems generally only support HL7 standards, like FHIR. The lack of interoperability between DICOM® SR and FHIR made it difficult to share imaging observations between imaging devices and other healthcare systems.

## 3. Technical Approach

This implementation guide provides a detailed mapping between elements within a DICOM® SR Measurement Report and corresponding elements in FHIR resources, primarily the FHIR "Observation" resource. It defines specific profiles and mappings for different types of content items within a Measurement Report, such as imaging measurements, derived measurements, and qualitative evaluations. This mapping allows for the accurate translation of DICOM® SR data into a format that FHIR-based systems can understand and use.

## 4. Contextual Factors and Design Decisions

* **One-Directional Transformation:** The guide focuses on converting DICOM® SR to FHIR, not the other way around. Reconstructing a complete DICOM® SR from FHIR resources created using this guide may not be possible.
* **Limited Scope:** This guide only addresses the translation of DICOM® SR TID-1500 (Measurement Report). It does not cover other DICOM® SR templates or the creation of complex FHIR reports.
* **Assumption of Existing Resources:** The guide assumes that relevant FHIR resources like Patient, ImagingStudy, and ServiceRequest already exist in the target system. It primarily focuses on creating new Observation resources linked to these existing resources.
* **Focus on Observation Resource:** While the guide uses a few related FHIR resources, it primarily relies on the "Observation" resource to represent DICOM® SR content. This may mean that some contextual information needed for interpretation might not be included.
* **FHIR R5 Compatibility:** The guide is based on FHIR R5 and leverages the "ImagingSelection" resource, which is not available in FHIR R4. However, the core mapping to "Observation" resources is compatible with FHIR R4.
* **Security Considerations:** The guide emphasizes the importance of secure data exchange, highlighting the need for audit logs, TLS encryption, and adherence to FHIR communication security requirements. 
