# eLTSS: Analysis

## 1. Objectives

This implementation guide (IG) aims to improve the way electronic systems handle long-term services and supports (LTSS) information. It seeks to standardize how this data is structured and shared between different computer systems, making it easier for healthcare providers, caregivers, and patients to access and use this crucial information. The goal is to streamline care coordination and improve the quality of care for individuals receiving LTSS.

## 2. Previous Approaches and Limitations

The IG doesn't explicitly state how LTSS data was exchanged previously. However, it highlights limitations in existing approaches that led to its development. These limitations include:

- **Lack of Standardization:** The way LTSS data was represented varied across systems, creating challenges in sharing and interpreting information.
- **Limited Interoperability:** Existing methods hindered seamless data exchange between different systems, leading to fragmentation of information.
- **Inadequate Support for Care Coordination:** Previous approaches fell short in facilitating comprehensive care planning and coordination for individuals receiving LTSS.

## 3. Technical Approach

This IG leverages the Fast Healthcare Interoperability Resources (FHIR) standard to address the identified limitations. It introduces the following approaches:

- **Standardized Data Representation:** The IG defines FHIR profiles for key LTSS data elements, ensuring consistent representation across systems.
- **Enhanced Interoperability:** Using FHIR promotes seamless data exchange between systems, enabling better communication and collaboration.
- **Improved Care Coordination:** The IG provides guidance on how to use FHIR resources to capture and share LTSS information effectively, supporting holistic care planning.

## 4. Contextual Factors and Design Decisions

- **Alignment with US Core:** The IG builds upon the US Core FHIR profiles, ensuring compatibility with broader healthcare data exchange initiatives.
- **Focus on Patient-Centered Care:** The IG emphasizes patient empowerment and engagement by providing mechanisms to capture patient preferences and goals.
- **Integration with Other IGs:**  The eLTSS IG acknowledges the importance of interoperability with other relevant implementation guides, such as Da Vinci, Gravity SDOH, and MCC eCare Plan, to support comprehensive care coordination.
- **Deprecation of CarePlan.activity.detail:** This decision aligns with the broader FHIR community consensus and promotes better data discoverability and consistency.
- **Use of `resource-pertainsToGoal` Extension:** This extension facilitates linking various data elements back to patient goals, enabling a more goal-oriented approach to care planning.
- **Guidance on Task and ServiceRequest:** The IG clarifies the use of Task and ServiceRequest resources to track service fulfillment and patient-initiated activities, promoting comprehensive care coordination. 
