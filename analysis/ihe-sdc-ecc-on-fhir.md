# IHE SDC/eCP on FHIR: Analysis

## 1. Objectives

This implementation guide aims to simplify the exchange of structured healthcare data captured using IHE Structured Data Capture (SDC) forms. It achieves this by enabling the conversion of data from these forms into FHIR (Fast Healthcare Interoperability Resources) format, a widely recognized standard for health information exchange. This conversion facilitates easier sharing, management, and analysis of healthcare data.

## 2. Previous Approaches and Limitations

Before this IG, the exchange of data captured through IHE SDC forms was limited. The guide explicitly mentions that while IHE SDC is used in various healthcare scenarios, it primarily relied on XML format for data representation. This reliance on XML posed interoperability challenges, hindering seamless data exchange between different healthcare systems.

## 3. Technical Approach

The IG introduces a method for mapping data elements from IHE SDC forms into FHIR resources, particularly focusing on the use of "Observation" resources to represent question-and-answer pairs captured in SDC forms. This mapping process involves detailed instructions on how to represent various question types, including single-select, multi-select, text answers, and others, as FHIR Observations.

Additionally, the IG leverages:

* **DocumentReference:** To transport IHE SDC forms within FHIR, either in blank or filled format.
* **DiagnosticReport:**  To package the extracted FHIR Observations, providing a comprehensive report from the IHE SDC form.
* **ConceptMap:** To map SDC identifiers to standard terminologies like SNOMED CT, enhancing semantic interoperability.

## 4. Key Decisions and Contextual Factors

* **FHIR R4:** This IG is based on the FHIR R4 version.
* **Universal Realm:** The guide adopts a "Universal Realm" approach, accommodating diverse use cases beyond pathology. This means that implementers can combine this IG with other standards like US Core to meet specific requirements.
* **Must Support:** The IG emphasizes "Must Support" elements, urging implementers to send these elements if available, contributing to data completeness.
* **CAP eCPs:** The guide specifically addresses the use of IHE SDC in the context of College of American Pathologists (CAP) electronic Cancer Protocols (eCPs), providing detailed guidance on handling these protocols.
* **Historical Data:** The IG suggests the potential for applying these mapping patterns to extract data from older IHE SDC forms, opening possibilities for leveraging historical data.
* **StructureMap:** While still under exploration, the IG acknowledges the potential of using "StructureMap" for handling complex question types or mapping data to FHIR resources beyond Observation. 
