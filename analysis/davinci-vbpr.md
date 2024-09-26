# Da Vinci Value-Based Performance Reporting: Analysis

## 1. Objectives 

This implementation guide aims to standardize how healthcare payers report performance data to healthcare providers under value-based care contracts.  These reports show how well providers are doing in terms of quality of care, cost efficiency, and patient outcomes. The goal is to make it easier for providers to understand their performance across different payers and improve the overall efficiency and effectiveness of value-based care.

## 2. Previous Approaches and Limitations 

Before this implementation guide, there was no standard format for value-based performance reports. Each payer used their own structure, terminology, and reporting methods. This lack of standardization created significant challenges for healthcare providers, including:

* **Difficulty in comparing performance across different payers:** Providers received reports in various formats, making it hard to track their overall performance.
* **Administrative burden:** Providers had to navigate different portals and manually extract data from unstructured reports, consuming valuable time and resources.
* **Data inconsistencies:** Lack of common definitions and methodologies led to errors and made it challenging to accurately assess performance.
* **Delayed data sharing:** Misaligned reporting periods and delays in data exchange hindered providers' ability to make timely improvements. 

## 3.  Technical Approach 

This implementation guide introduces a standardized framework for value-based performance reporting using FHIR resources. It defines:

* **Profiles:** Specific data structures for representing value-based performance reports, quality measure reports, and contract-level information.
* **Extensions:** Additional data elements to capture specific details relevant to value-based care.
* **Value Sets:** Standardized terminologies for commonly used performance metrics and payment models. 

The IG leverages the FHIR MeasureReport resource as the foundation for representing performance data. It extends existing FHIR profiles like the CQFM Composite Measure and DEQM Summary MeasureReport to accommodate the unique requirements of value-based care reporting. 

## 4. Contextual Factors and Design Decisions

* **Flexibility:** The IG acknowledges the diversity of value-based care models and avoids prescribing a rigid structure. It employs extensible value sets and extensions, allowing payers and providers to adapt the framework to their specific needs.
* **Must Support:** Key elements within the profiles are marked as "Must Support," indicating that implementations must understand and process these elements to ensure interoperability.
* **US Core Alignment:**  The IG aligns with US Core profiles where applicable, promoting consistency and broader adoption.
* **Focus on Payer-to-Provider Reporting:**  The initial version of the IG concentrates on standardizing reports sent from payers to providers. Future versions may address provider-to-payer reporting. 
