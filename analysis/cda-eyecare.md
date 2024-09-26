# CDA-EyeCare: Analysis

## 1. Objectives

This implementation guide aims to standardize how electronic health records (EHRs) store and exchange information specifically related to eye care. It focuses on creating a consistent way to represent common eye exam data, like visual acuity, refraction, and assessments of the back part of the eye, so that different eye care systems can easily share this information.

## 2. Current Practices and Limitations

Currently, many eye care EHRs capture the data elements addressed in this guide. However, the lack of a common standard for representing and exchanging this information creates challenges when sharing patient data between different systems. This can lead to inefficiencies, data loss, and potential errors when transferring patient records or coordinating care between providers.

## 3. New Approaches and Technical Approach

This IG leverages the HL7 Clinical Document Architecture (CDA) standard, a widely used format for exchanging healthcare information. It defines templates based on the CDA Physical Exam section to capture specific eye care data. These templates use a structured approach based on the "ResultOrganizer" concept, which groups related observations together (e.g., all visual acuity measurements).

**Technical Approach:**

* **Profiles:** The IG defines profiles that constrain existing CDA data elements to represent specific eye care concepts (e.g., VisualAcuityOrganizer, RefractionObservation).
* **Value Sets:** It defines value sets that specify the allowed codes for different data elements, ensuring consistent terminology across systems (e.g., VisualAcuityObservationCodes, EyecareTargetSiteCodes).
* **Structure:** It utilizes the CDA structure to organize eye care information within a document, making it easy to locate and interpret specific data elements.

## 4. Contextual Factors and Design Decisions

* **Focus on Specialty Care:** This IG addresses the need for interoperability in specialty care, specifically eye care, which has often been overlooked in broader interoperability efforts.
* **Commonly Used Terms:** The data elements are based on commonly used terms in the eye care industry, ensuring the IG reflects real-world practice.
* **CDA-Based Approach:** The choice of CDA as the underlying standard leverages its existing adoption and tooling, facilitating implementation.
* **Extensibility:** The IG allows for the inclusion of eye care exam templates within existing CDA document types, enabling flexibility in implementation.

**Important Design Decisions:**

* The use of "ResultOrganizer" to group related eye care observations.
* The definition of specific profiles and value sets for representing eye care concepts.
* The integration of eye care information within the existing CDA Physical Exam section.
