# Data Exchange For Quality Measures: Analysis

## 1. Objectives

This Implementation Guide aims to standardize how healthcare data is exchanged for calculating and reporting quality measures. It establishes a common language and process for different healthcare stakeholders, like providers, payers, and quality organizations, to share patient data necessary for assessing the quality of care.

## 2. Current Practices and Limitations

Traditionally, quality measure data exchange has been a cumbersome process, often relying on manual chart abstraction, proprietary formats, and claim submissions. This approach leads to inefficiencies, data inconsistencies, and increased burden on clinicians. For example, providers would submit claims with specific codes to attest to performing medication reconciliation, a process often denied by payers and requiring manual write-offs.

## 3. New Approaches

This IG introduces a standardized framework using FHIR (Fast Healthcare Interoperability Resources) to exchange quality measure data. It defines:

* **Standard FHIR profiles:**  These profiles specify how to structure common healthcare data elements, like patient demographics, encounters, procedures, and observations, ensuring consistency across different systems.
* **Data exchange scenarios:** Two primary scenarios are defined:
    * **Submit Data:** Allows providers to proactively send relevant patient data to consumers (payers, quality organizations).
    * **Collect Data:** Enables consumers to request specific quality measure data from providers.
* **Measure reporting scenarios:**  Provides standardized ways to report quality measure results:
    * **Individual Measure Report:** Reports quality measure results for a single patient.
    * **Summary Measure Report:** Reports aggregate results for a population of patients.
* **Gaps in Care Reporting:**  Defines a process for identifying and communicating discrepancies between recommended care and actual care provided.  This allows providers to address potential care gaps and close the loop with payers.

## 4. Important Contextual Factors and Design Decisions

* **QI Core and US Core alignment:** The IG builds upon existing FHIR profiles defined in the US Core and QI Core IGs, ensuring compatibility and broader adoption within the US healthcare system.
* **CQL (Clinical Quality Language) utilization:** The IG leverages CQL to define quality measure logic and data requirements in a machine-readable format, enabling automated evaluation and reducing ambiguity.
* **Focus on incremental updates:**  The IG encourages incremental data exchange, allowing for continuous updates as new patient data becomes available, promoting more timely and accurate quality measure calculations.
* **Security and privacy considerations:** While the IG doesn't specify exact security mechanisms, it emphasizes the importance of standard authentication, authorization, and limiting data exchange to agreed-upon patient populations.
* **Support for multiple FHIR versions:** The IG recognizes the varying adoption levels of FHIR versions and provides guidance for using different versions.

Overall, the DEQM IG represents a significant step towards a more streamlined, efficient, and interoperable approach to quality measure data exchange, ultimately contributing to better care quality and outcomes. 
