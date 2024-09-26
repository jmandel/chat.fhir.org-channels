# FHIR ICHOM Breast Cancer IG: Analysis

## 1. Objectives

This implementation guide aims to standardize how electronic health systems store and exchange data related to breast cancer treatment outcomes. It defines a common format based on the FHIR standard for representing information like patient demographics, tumor characteristics, treatments received, and patient-reported outcomes. This will enable healthcare providers and researchers worldwide to easily share and compare data, ultimately improving the quality of care and patient outcomes.

## 2. Previous Approaches and Limitations

Previously, the International Consortium for Health Outcomes Measurement (ICHOM) defined standard sets of outcome measures for various health conditions, including breast cancer. However, these measures were not available in a machine-readable format, making it difficult to integrate them into electronic health systems and exchange data between different systems. This lack of interoperability hindered the adoption and implementation of these standards in clinical practice.

## 3. Introduced Approaches and Technical Approach

This IG addresses the interoperability issue by representing the ICHOM Breast Cancer Set elements in FHIR. It uses two approaches:

**a) FHIR Questionnaires:** This approach defines standard questionnaires for collecting both patient-reported outcomes (PROs) and clinician-reported outcomes. These questionnaires are structured based on the patient's care pathway and the data source. 

**b) Discrete FHIR Resources:**  This approach maps each variable in the ICHOM Breast Cancer Set to a specific FHIR resource, such as Patient, Condition, Observation, and Procedure. This allows for granular representation of clinical data points.  

The IG leverages FHIR profiles to constrain and tailor existing FHIR resources to meet the specific requirements of the ICHOM Breast Cancer Set. It also utilizes value sets and code systems from standard terminologies like SNOMED CT and LOINC to ensure semantic interoperability.

## 4. Scope Decisions, Design Choices, and Contextual Factors

* **Domain of Knowledge IG:** This IG focuses solely on representing the ICHOM Breast Cancer Set elements in FHIR and does not address specific use cases or interaction patterns for data exchange. 
* **Security Considerations:** Extensive security measures are considered out of scope, as the IG does not prescribe any specific use case. The responsibility for secure data storage and transmission falls on implementers.
* **Alignment with other FHIR IGs:** The IG aligns with relevant FHIR specifications such as Breast Radiology Reporting, mCODE, QI-Core, US Core, International Patient Summary, and International Patient Access. This ensures consistency and interoperability within the broader FHIR ecosystem.
* **Must Support Guidance:** The IG uses "Must Support" to indicate elements that must be populated with data if available in the system. For required elements that cannot be populated, the "Data Absent Reason" extension should be used.

By focusing on data representation and leveraging existing standards, this IG provides a solid foundation for interoperable data exchange related to breast cancer outcomes, facilitating global adoption and implementation of the ICHOM Breast Cancer Set.
