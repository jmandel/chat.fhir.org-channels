# PDEX Payer Network: Analysis

## 1. Objectives 

This implementation guide aims to standardize how health insurers share information about their insurance plans and provider networks. It defines a way for consumers and providers to easily search and find participating healthcare providers and organizations within a specific plan or network. This will help patients find in-network providers who offer the services they need.

## 2. Previous Approaches and Limitations

Previously, provider directories came from various sources, including provider organizations, government entities, payers, and third-party vendors. This lack of standardization made it difficult for consumers and providers to get a clear picture of network participation. The guide specifically addresses the limitations of inconsistent payer provider directories.

## 3.  Technical Approach

This implementation guide leverages the FHIR (Fast Healthcare Interoperability Resources) standard, specifically building upon the Validated Healthcare Directory Implementation Guide (VHDir IG). It defines a set of profiles (PlannetEndpoint, PlannetHealthcareService, PlannetInsurancePlan, PlannetLocation, PlannetNetwork, PlannetOrganization, PlannetOrganizationAffiliation, PlannetPractitioner, and PlannetPractitionerRole) and extensions (Accessibility, CommunicationProficiency, ContactPointAvailableTime, DeliveryMethod, EndpointUsecase, LocationReference, NetworkReference, NewPatients, OrgDescription, PractitionerQualification, Qualification, ViaIntermediary) to represent payer networks and related data in a consistent way. 

The guide focuses on creating a query-only API, allowing third-party applications to retrieve provider network data. It emphasizes the consistent use of profiles to enable effective searching by categories like specialty, location, and network.  

## 4. Context and Design Decisions

* **US Focus:** The guide primarily targets a US audience, aligning with US Core profiles where applicable.
* **Known Endpoint Assumption:** It assumes the client application already knows the payer's FHIR endpoint.
* **Privacy:** The guide emphasizes privacy by recommending against authentication requirements and prohibiting the transmission of consumer identifiable information.
* **Must Support:** It clarifies the interpretation of "Must Support" data elements for both payers and applications to ensure data completeness and processing capability.
* **Last Updated Timestamp:** Each profile requires a "lastUpdate" timestamp to help clients track directory updates efficiently. 
