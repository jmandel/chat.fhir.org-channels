# National Healthcare Directory Implementation Guide: Analysis

## 1. Objectives

This implementation guide aims to standardize how healthcare directory information is shared between a central, trusted source and various local systems like those used by providers, payers, and health information exchanges. The goal is to ensure that everyone is working with accurate and up-to-date information, reducing the need for healthcare providers to repeatedly submit the same information to different organizations.

## 2. Previous Approaches and Limitations

Traditionally, healthcare providers and organizations have had to register and send their information to many different directories, including those maintained by payers, providers, and government agencies. This process is time-consuming, costly, and often results in inaccurate or outdated information because it's difficult to keep all these separate directories synchronized.

## 3. Technical Approach

This IG uses the FHIR (Fast Healthcare Interoperability Resources) standard to define a consistent way to exchange healthcare directory data. It defines specific profiles for FHIR resources like Practitioner, Organization, and Location, outlining the minimum required data elements and extensions needed for a national directory. It also defines search parameters to help users find the specific information they need from the directory.

The IG promotes the use of a central source of validated data, which would verify information against primary sources (e.g., state licensing boards) and make it available to local systems through a FHIR API. This reduces redundancy and improves data accuracy.

## 4. Scope, Design Choices, and Context

* **Broad Scope:** The directory includes not just licensed medical providers but also community service organizations and non-licensed staff who contribute to an individual's health and well-being.
* **Focus on Exchange:** The IG primarily focuses on how data flows from the central directory to local systems, using a one-directional exchange model based on HTTP GET requests.
* **Flexibility:** While the guide was developed with a national directory in mind, it's also designed to be adaptable for smaller, local directories.
* **Data Restrictions:** The IG acknowledges that some information might be sensitive and defines a way to convey restrictions on data access and use through a "Restriction" profile.
* **Redundancy and Ambiguity:** The guide recognizes potential inconsistencies in common data elements across related resources and suggests ways to address them through verification processes and more constrained profiles.
* **Relationship to US Core:** It is expected that a US implementation of this IG would align with the US Core Implementation Guide when an R4 version becomes available. 
