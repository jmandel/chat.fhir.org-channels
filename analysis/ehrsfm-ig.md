# EHR-S FM R2.1: Analysis

## 1. Objectives

This implementation guide aims to standardize the way electronic health record systems (EHRs) work. It defines a common set of functions that EHRs should be able to perform, regardless of the specific software or vendor. This helps to ensure that different EHRs can communicate with each other and share information seamlessly. The goal is to improve patient care, safety, and efficiency by making it easier for healthcare providers to access and use patient information.

## 2. Previous Approaches and Limitations

Before this implementation guide, there were no widely accepted standards for EHR functionality. This led to several problems:

* **Inconsistent Functionality:** Different EHRs had different capabilities, making it difficult for healthcare providers to switch between systems or share information.
* **Limited Interoperability:** EHRs from different vendors often couldn't communicate with each other, hindering the flow of patient information.
* **Difficult to Compare Systems:** Without a common set of functions, it was challenging for healthcare providers to evaluate and compare different EHR systems.

## 3. Introduced Approaches

This implementation guide introduces a structured approach to defining EHR functionality:

* **Function List:** It provides a comprehensive list of functions that EHRs should be able to perform, covering areas like patient care, administrative support, and data management.
* **Functional Profiles:**  These allow for customization of the function list based on specific care settings or needs. For example, an ambulatory care profile would focus on functions relevant to outpatient clinics, while a hospital profile would emphasize inpatient functionalities.
* **Conformance Criteria:**  Each function is associated with specific criteria that define what it means to implement that function correctly. This ensures that EHRs claiming to support a function actually meet the required standards.
* **FHIR Requirements Resource:**  This guide uses the FHIR R5 Requirements resource to define its functional model, leveraging its inherent validation and versioning capabilities.

## 4. Contextual Factors and Design Decisions

* **User-Centric Approach:** The function list is described from a user perspective, making it easier for healthcare providers to understand and use.
* **Technology Independence:** The guide focuses on functionality rather than specific technologies, allowing for flexibility in implementation.
* **Extensibility:** The model is designed to be extensible, allowing for the addition of new functions and criteria as technology and healthcare practices evolve.
* **Collaboration with Standards Organizations:** The development of this guide involved collaboration with other standards organizations like ISO, ensuring alignment and broader adoption.

Understanding these factors is crucial for properly interpreting and implementing the guidelines presented in the IG. 
