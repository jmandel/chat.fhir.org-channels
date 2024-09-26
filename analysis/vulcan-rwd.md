# Vulcan Real World Data: Analysis

## 1. Objectives 

This implementation guide aims to make it easier to use data from Electronic Health Records (EHRs) for medical research. It defines a standard way to represent and exchange this data using a technology called FHIR (Fast Healthcare Interoperability Resources). This will enable researchers to:

* **Identify groups of patients (cohorts) who meet specific criteria for their studies.** For example, finding all patients diagnosed with a certain condition and treated with a particular medication.
* **Retrieve relevant health data for those patients in a consistent format.** This includes information like demographics, diagnoses, medications, procedures, and lab results.

By standardizing how this data is shared, the guide hopes to make medical research more efficient and reliable. 

## 2. Previous Approaches and Limitations

Before this guide, there was no widely adopted standard for using EHR data in research. Researchers often had to work with each EHR system individually, which was time-consuming and prone to errors.  Existing approaches like the International Patient Access (IPA) project provided a good starting point for sharing patient data, but they didn't fully address the specific needs of research studies. For instance, IPA didn't specify which data elements were essential for research or how to search for patients based on complex criteria.

## 3.  Approaches Introduced

This guide takes a two-phase approach to accessing EHR data for research:

**Phase 1: Cohort Building:** Researchers can define criteria (e.g., age, diagnosis, medication) and query EHRs to find patients who meet those criteria. The guide outlines which FHIR resources and search parameters are necessary for this process.

**Phase 2: Retrieve Healthcare Data:** Once a cohort is identified, researchers can retrieve detailed health data for those patients. The guide specifies which FHIR resources and data elements are important to collect for research purposes, building upon the foundation of the IPA project.

**Technical Approach:** The guide relies on FHIR, a standard for representing and exchanging healthcare information. It defines specific "profiles" for FHIR resources, essentially customizing them to include the data elements needed for research. It also defines how to use FHIR's search capabilities to find patients and retrieve data.

## 4. Scope Decisions, Design Choices, Contextual Factors

* **Focus on EHRs:** The current version of the guide focuses solely on using EHRs as a data source. Future iterations may expand to include other sources like registries and payer systems.
* **Retrospective Studies:** The guide is designed for retrospective studies, meaning it uses data that has already been collected during routine care. It doesn't cover prospective studies where data is collected specifically for the research.
* **Use Cases:** The guide was developed using a "use case" approach. The team analyzed several real-world research studies to determine the necessary data elements and search capabilities.
* **International Patient Access (IPA) as a Foundation:** This guide builds upon the IPA project, inheriting its base set of FHIR resources and profiles.
* **Alignment with Jurisdictional Guides:** The guide acknowledges the existence of region-specific guides like US Core and provides guidance on how to combine its requirements with those of jurisdictional profiles.
* **Data Absent Reason:** The guide addresses the challenge of representing missing data by using the "Data Absent Reason" extension to distinguish between data that is truly absent and data that is simply unknown. 
