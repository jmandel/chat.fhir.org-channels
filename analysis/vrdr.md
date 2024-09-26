# VRDR: Analysis

## 1. Objectives 

This implementation guide (IG) aims to standardize the exchange of death records using a modern, computer-friendly format. It provides a way for different systems involved in death registration, like those used by hospitals, funeral homes, medical examiners, and government agencies, to easily share information. This will help to make the process of reporting deaths more efficient and accurate.

## 2. Previous Approaches and Limitations

Previously, death records were exchanged using a format called Interjurisdictional Exchange (IJE). This format was not easily understood by computers and could lead to delays and errors in reporting. 

## 3.  Technical Approach

This IG leverages the Fast Healthcare Interoperability Resources (FHIR) standard, which is a modern approach to exchanging healthcare information. FHIR uses a structured format that is easily understood by computers. This IG defines specific FHIR profiles (like templates) for different types of information found in a death record, such as the decedent's demographics, cause of death, and place of death. 

## 4. Scope, Design Choices, and Context

* **Scope:** This IG focuses on the reporting of deaths from State Registrars to the National Center for Health Statistics (NCHS). It aims to be compatible with other data flows in the death registration process.
* **Design Choices:** The IG tries to reuse existing FHIR profiles (like US Core profiles) whenever possible to ensure compatibility with other systems. It also provides mappings between the new FHIR format and the older IJE format to help with transitioning.
* **Context:** This IG is part of a larger effort by the CDC and NCHS to modernize the death registration process in the United States. It is aligned with the Vital Statistics Cooperative Program (VSCP) reporting requirements. 
