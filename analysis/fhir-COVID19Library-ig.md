# FHIR COVID-19Library-ig: Analysis

## 1. Objectives

This implementation guide (IG) aims to make it easier to share information about COVID-19 in a standardized way. This will help with:

* **Patient care:** Doctors and nurses can easily access and share patient information.
* **Public health reporting:**  Health departments can track the spread of COVID-19 more effectively.
* **Research:** Scientists can use standardized data to study the virus and develop treatments.

## 2. Previous Approaches and Limitations

Before this IG, there was no single, standardized way to share COVID-19 data.  Different organizations used different formats, making it difficult to combine and analyze information.  This IG addresses this problem by creating a "library" of standard data elements that can be used by everyone.

## 3. Technical Approach

This IG uses FHIR (Fast Healthcare Interoperability Resources), a standard for exchanging healthcare information electronically. It defines FHIR "profiles" which are like templates for specific types of data, such as lab results or patient demographics. It also includes "value sets," which are lists of standardized codes for things like symptoms or diagnoses.

## 4. Contextual Factors and Design Decisions

* **Not for Case Reporting:** This IG is not for sending data to public health agencies for official case reporting. Other standards are used for that purpose.
* **Use Case Independent:** This IG is a library of data elements, not a prescriptive guide for a specific use case. The profiles can be used in various situations, including research, billing, and patient care.
* **Building on Existing Standards:** This IG leverages existing standards like US Core and the CDC's eICR IG to ensure compatibility and avoid redundancy.
* **Open and Collaborative:** The IG was developed with input from various organizations and individuals, and it is designed to be open and collaborative, with the expectation that the profiles and value sets will evolve over time based on feedback and user needs. 
