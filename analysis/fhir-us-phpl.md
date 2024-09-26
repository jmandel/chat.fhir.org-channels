# US Public Health Profiles Library: Analysis

## 1. Objectives

This implementation guide aims to simplify the sharing of health information for public health purposes in the United States. It defines a set of standardized data formats and structures based on the FHIR standard, specifically designed for public health reporting and research. By using these standardized formats, healthcare organizations, electronic health record systems, and public health agencies can easily exchange information, reducing the burden on implementers and improving interoperability.

## 2. Previous Approaches and Limitations

Previously, public health reporting often relied on custom data formats and systems, leading to inconsistencies and difficulties in data exchange. Two major public health projects, Electronic Case Reporting (eCR) and Making Electronic Data More Available for Research and Public Health (MedMorph), both used FHIR but had separate implementation guides with overlapping elements. This duplication of effort increased complexity and implementation burden.

## 3. Technical Approach

The US Public Health Profiles Library introduces a centralized collection of reusable FHIR profiles, value sets, and other artifacts tailored for public health needs. These profiles build upon the US Core Implementation Guide, adding specific constraints and extensions necessary for public health reporting. 

The guide promotes profile reuse and establishes criteria for inclusion, ensuring that only essential and widely-used profiles are included. It also defines conformance rules and a variance process to handle situations where deviations from the standard profiles are required.

## 4. Scope Decisions and Contextual Factors

* **Relationship to US Core:** The library is designed to complement and align with US Core, reusing US Core profiles whenever possible and retiring its own profiles if they become redundant.
* **Conformance:** The guide defines strict conformance rules, including the use of FHIR conformance verbs (SHALL, SHOULD, MAY) and clear guidance on "Must Support" elements.
* **Profile Inclusion Criteria:** New profiles are only included if they meet specific criteria, such as widespread production use or support for national regulations.
* **Profile Use:** Implementation guides are encouraged to reference the library's profiles instead of creating their own, promoting consistency and interoperability.
* **Synchronization with US Core:** The library strives to stay synchronized with new releases of US Core.
* **Occupational Data for Health (ODH):** The library does not include profiles for ODH, instead referring to the dedicated ODH implementation guide.
* **Data Masking:** The guide allows for data masking using FHIR's data-absent-reason extension to protect patient privacy.
* **Variance Process:** A variance process, modeled after the US Core variance process, is established to handle deviations from the library's profiles.
* **Public Health Working Group:** The guide designates the Public Health Working Group as the steward for the library content, responsible for profile selection, variance review, and overall maintenance. 
