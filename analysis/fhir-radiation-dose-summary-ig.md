# FHIR Radiation Dose Summary IG: Analysis

## 1. Objective

This implementation guide aims to standardize the way computers share summaries of radiation doses that patients receive during medical imaging exams.  It allows systems like electronic health records (EHRs) to easily access and display basic radiation dose information from systems that collect and manage this data. This helps healthcare providers include dose information in patient reports and potentially use it for other purposes, such as tracking radiation exposure over time.

## 2. Previous Approaches and Limitations

Previously, detailed radiation dose information was stored in a format called DICOM Radiation Structured Reports (RDSRs). However, many EHR and Radiology Information Systems (RIS) were not equipped to understand and use this complex format. They needed a simpler way to access just the essential dose summary information.

## 3. Technical Approach

This IG introduces a standardized way to represent radiation dose summaries using a technology called HL7 FHIR (Fast Healthcare Interoperability Resources). FHIR is a modern standard for exchanging healthcare information between different computer systems. The IG defines specific FHIR "profiles" that structure the dose summary data in a consistent and machine-readable way. This makes it easy for systems like EHRs to retrieve and display this information.

## 4.  Scope, Design Choices, and Contextual Factors

**Scope:**

* The IG focuses on summarizing radiation doses per exam, not cumulative doses over time.
* It covers common imaging modalities like CT, X-Ray, and Nuclear Medicine.
* It does not address radiation therapy or doses received by healthcare practitioners.

**Design Choices:**

* The IG leverages existing FHIR resources like Observation, Patient, and ImagingStudy.
* It defines new FHIR profiles that specialize these resources for radiation dose summaries.
* It uses DICOM standards as a reference for defining dose measurements.

**Contextual Factors:**

* There is increasing emphasis on tracking and reporting radiation doses for patient safety.
* Regulations in some regions require dose information to be included in imaging reports. 
* FHIR is gaining adoption as a standard for health information exchange. 
