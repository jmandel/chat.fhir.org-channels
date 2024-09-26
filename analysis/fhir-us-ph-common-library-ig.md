# US Public Health Profiles Library: Analysis

## 1. Objectives

This implementation guide aims to simplify the sharing of health information for public health purposes in the United States. It defines a common set of data elements and structures that can be used by different healthcare systems, electronic health records, and public health agencies. This will reduce the effort required to implement public health reporting and make it easier for different systems to exchange information.

## 2. Previous Approaches and Limitations

Previously, public health reporting projects like Electronic Case Reporting (eCR) and MedMorph defined their own data profiles. This resulted in duplication of effort and made it difficult to share information across different projects. 

## 3. Technical Approach

The US Public Health Profiles Library reuses profiles from the US Core Implementation Guide whenever possible and introduces new profiles only when necessary for public health use. It constrains existing profiles by adding must-support constraints, extending them with additional data elements, and providing clear guidance on their use. This library also uses logical FHIR IDs for referencing profiles, ensuring consistency and ease of implementation.

## 4. Important Decisions and Factors

* **Relationship to US Core:** The library is closely aligned with US Core and aims to retire its profiles in favor of US Core profiles if they become available and meet public health needs.
* **Conformance:**  The guide clearly defines conformance expectations using FHIR conformance rules and provides detailed guidance on "must support" elements.
* **Profile Inclusion Criteria:**  New profiles are added to the library only if they meet specific criteria, ensuring their relevance and wide applicability in public health.
* **Variance Process:** A variance process, similar to US Core's, allows for exceptions and controlled introduction of non-standard profiles.
* **Profile Use:**  Implementation guides are encouraged to reuse US Public Health Profiles Library profiles and reference them using logical IDs.
* **Long-Term Scope:** The library will expand to include data elements from other public health use cases in the future. 
