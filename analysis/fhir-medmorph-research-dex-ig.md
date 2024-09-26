# MedMorph Research Data Exchange IG: Analysis

## 1. Objectives

This implementation guide aims to standardize and streamline the process of sharing patient data for research purposes. It focuses on making it easier for healthcare organizations (data sources) to contribute data to research networks (data marts). The guide's primary goal is to reduce the time and effort it takes to onboard new data partners into research networks by establishing a standardized method for extracting, transforming, and loading (ETL) patient data.

## 2. Previous Approaches and Limitations

Previously, the process of onboarding research data partners and contributing data to research networks involved many non-standardized mechanisms (e.g., Secure File Transfer Protocol (SFTP), Excel Files, stored procedures), different data structures (e.g., formats), and different semantics. This lack of standardization resulted in significant variations in the time it took to onboard a data partner, ranging from weeks to months.  These non-standardized processes also increased the cost and reduced the quality, completeness, and timeliness of data submitted to research organizations.

## 3.  Technical Approach

This IG introduces a standardized approach for research data exchange leveraging the HL7 FHIR standard. It builds upon the MedMorph Reference Architecture (RA) IG and other existing FHIR IGs (e.g., US Core, CDMH, Bulk Data Access). 

The IG defines:
* **Standardized FHIR profiles**: These profiles specify the data elements that need to be exchanged for research purposes, based on the US Core and CDMH profiles.
* **SMART on FHIR Backend Services Authorization**: This ensures secure access to patient data by research applications.
* **Knowledge Artifacts**: These define the specific actions for data extraction, transformation, and loading. The Health Data Exchange App (HDEA) processes these artifacts to automate the ETL process.
* **Bulk Data Access**: This allows for efficient retrieval of large datasets from data sources.

The workflow involves the HDEA extracting data from the Data Source (e.g., EHR) using FHIR APIs, potentially transforming the data using a Trust Service Provider (e.g., for de-identification), and finally loading the transformed data into the Data Mart.

## 4. Scope, Design Choices, and Contextual Factors

**Scope Decisions:**
* The IG focuses primarily on the bulk exchange of structured data for research. 
* It does not address state and local policies around data exchange, data quality assessment, data captured outside the Data Source, data use agreements, or the use of unstructured data (e.g., images).

**Design Choices:**
* The IG leverages existing FHIR standards and IGs (US Core, CDMH, Bulk Data Access) to promote interoperability and reduce the need for custom development.
* It utilizes SMART on FHIR for authorization to ensure secure data access.
* It adopts a modular approach with Knowledge Artifacts to allow for flexibility in defining ETL processes.

**Contextual Factors:**
* The IG is developed in collaboration with the PCORnet Front Door team, the MedMorph RA WG, and the CDC MedMorph team.
* It aims to address the challenges faced by research networks in onboarding data partners and accessing data efficiently.
* It is aligned with the broader goal of promoting interoperability and data sharing in healthcare. 
