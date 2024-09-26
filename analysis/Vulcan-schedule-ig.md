# Vulcan Schedule of Activities FHIR Implementation Guide: Analysis

## 1. Objectives of the IG

This implementation guide aims to standardize how clinical trial schedules are represented and shared electronically. The goal is to make it easier for different computer systems used in healthcare (like electronic health records and clinical research systems) to understand and work with clinical trial schedules.  

This will enable better planning, execution, and tracking of clinical trials, ultimately improving efficiency and data quality.

## 2. Previous Approaches and Limitations

Previously, clinical trial schedules were often represented in a non-standardized way, using paper documents or custom electronic formats. This made it difficult to share schedules between different systems and to automate tasks related to trial management.

The CDISC Operational Data Model (ODM) is a common standard for representing clinical trial data, but it is primarily focused on data collection and does not provide a comprehensive way to represent the workflow and timing of study activities. 

These limitations led to the development of this implementation guide, which leverages the FHIR standard to provide a more robust and interoperable way to represent clinical trial schedules.

## 3. Technical Approach of the IG

This IG introduces a standardized approach to represent clinical trial schedules using FHIR resources. It leverages the following:

* **FHIR Profiles:** It defines profiles for core FHIR resources like ResearchStudy, PlanDefinition, and ActivityDefinition, specifying which data elements are required to represent study schedules.
* **FHIR Extensions:** It defines extensions to enable the representation of data elements not present in the core resources, such as acceptable offset ranges for visit windows.
* **Workflow-Based Approach:** It models clinical trial schedules as workflows, using PlanDefinition to represent the overall schedule and ActivityDefinition to represent individual activities. It also uses relatedAction to define relationships and dependencies between activities.
* **Alignment with CDISC ODM:** It provides guidance on how to align the FHIR-based representation with the CDISC ODM, enabling interoperability with existing clinical data management systems.

## 4. Scope Decisions, Design Choices, and Contextual Factors

* **Focus on Schedule of Activities:** The IG is specifically focused on the schedule of activities within a clinical trial protocol, not the entire protocol.
* **Minimal Viable Solution:** The current iteration of the IG is designed to provide a minimal viable solution, with future iterations planned to address more complex scenarios.
* **Use of PlanDefinition and ActivityDefinition:** The IG primarily uses PlanDefinition and ActivityDefinition to represent schedules and activities, although other FHIR resources could be considered in the future.
* **Visit Windowing:** The IG addresses the need to represent visit windows, which allow for flexibility in scheduling study visits while ensuring compliance with the protocol.
* **Investigational Product Administration:** The IG provides guidance on how to represent the administration of investigational products, including scenarios with dose changes and delays.
* **Unscheduled Activities:** The IG acknowledges the need to represent unscheduled or conditional activities but does not provide a detailed solution in the current iteration.
* **Collaboration with Other IGs:** The IG recognizes the need to collaborate with other research-aware IGs, such as the Vulcan Retrieval of Real World Data for Clinical Research IG, to address broader use cases.
