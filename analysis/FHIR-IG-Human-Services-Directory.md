# FHIR Human Services Directory: Analysis

## 1. Objectives 

This implementation guide aims to make it easier for different computer systems to share information about social services, like food banks, transportation assistance, and housing support. It wants to help healthcare providers, insurance companies, and individuals find and connect with these services more efficiently. 

## 2. Previous Approaches and Limitations

Previously, information about social services was often scattered across multiple databases and platforms, each with its own way of organizing and sharing data. This made it difficult for different systems to talk to each other and share information effectively. 

This IG addresses the following specific limitations of previous approaches:
* **Lack of Standardization**: Existing systems often used different data formats and terminologies, making it difficult to exchange information seamlessly.
* **Siloed Information**:  Information was often locked within specific platforms or organizations, limiting access and coordination. 
* **Inconsistent Data**: The lack of a common standard led to inconsistencies in data quality, making it hard to rely on the information.

## 3. Technical Approach

This IG introduces a standardized way to represent and exchange information about human services using the FHIR (Fast Healthcare Interoperability Resources) standard. It defines specific data structures (called "profiles") for key elements like organizations, locations, and services. It also defines how different systems can search and retrieve this information using standard APIs (Application Programming Interfaces).

Here's a breakdown of the key aspects of its technical approach:

* **Mapping to HSDS**: It maps its data elements to the Human Services Data Specification (HSDS), a widely recognized standard for human services directories. This ensures compatibility with existing systems using HSDS.
* **FHIR Profiles**: It defines specialized FHIR profiles for organizations, locations, and healthcare services, tailored to the specific needs of human services directories.
* **RESTful API**: It leverages a RESTful API approach, allowing systems to interact and exchange data securely over the internet.
* **Search Parameters**: It defines specific search parameters, enabling systems to find relevant services based on criteria like location, service type, language, and accessibility.

## 4. Scope Decisions, Design Choices, and Contextual Factors

* **Read-Only Focus**: The current version of the IG focuses on read-only access to human services directories. It allows systems to query and retrieve information but not to update or modify it.
* **Single Directory Source**: It addresses queries to a single human services directory at a time. It doesn't yet support querying multiple federated directories simultaneously.
* **Taxonomy Agnosticism**: It allows implementers to use any taxonomy or coding system for services, recognizing the diversity of existing standards and the lack of a universally accepted taxonomy.
* **Alignment with PDEX**: It aligns with the DaVinci PDEX Plan Net Provider Directory Implementation Guide, a standard recommended by the Centers for Medicare & Medicaid Services (CMS). This facilitates integration with healthcare provider directories.
* **Privacy Considerations**: It emphasizes privacy, prohibiting the transmission of consumer identifiable information during queries.

This IG is a significant step towards improving interoperability in the human services domain. Its adoption can lead to more efficient care coordination, improved access to social services, and better health outcomes for individuals in need.
