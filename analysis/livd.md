# LIVD: Analysis

## 1. Objective

This implementation guide aims to standardize how manufacturers of in-vitro diagnostic (IVD) devices, like blood analyzers, suggest mappings between their device-specific test codes and the widely used LOINC standard for laboratory tests. This will make it easier for labs to integrate new devices and report results using LOINC, which is crucial for data analysis and clinical decision support. 

## 2. Previous Approaches and Limitations

Previously, labs manually mapped IVD test codes to LOINC using resources like the LOINC registry, RELMA, and their own knowledge. This process was time-consuming, prone to errors, and could lead to inconsistencies across different labs.

## 3. Technical Approach

This IG introduces a standardized digital format for manufacturers to publish suggested LOINC codes for their IVD tests. This format, based on the HL7 FHIR standard, uses a combination of resources like:

* **DeviceDefinition:** Describes the IVD device.
* **ObservationDefinition:** Represents the IVD tests performed by the device.
* **ConceptMap:** Maps IVD test codes to LOINC codes, including contextual information like specimen type and result description.
* **ValueSet:** Defines the sets of LOINC codes used in the mappings.
* **CodeSystem:** Provides details about the LOINC code system.

This approach enables manufacturers to provide comprehensive mapping guidance in a machine-readable format, simplifying the integration process for labs.

## 4. Scope and Design Choices

* **Focus on Test Results:** The IG specifically addresses mapping IVD test results to LOINC, not test orders.
* **Suggested Mappings:** The mappings provided by manufacturers are suggestions, not mandates. Labs have the final decision on which LOINC codes to use.
* **No Automated Configuration:** The IG does not support automatic configuration of LIS systems based on the mappings. It's intended to assist lab personnel in the mapping process.
* **Inclusion of Contextual Information:**  The IG emphasizes the importance of including contextual information, such as specimen type and result description, to aid in accurate LOINC code selection.
* **Result Value Mapping:** While the IG doesn't cover mapping result values to LOINC or SNOMED directly, it provides a framework for manufacturers to include suggested mappings for non-quantitative, coded result values.
* **Use of FHIR:** The IG leverages the HL7 FHIR standard for its data format, ensuring interoperability and facilitating data exchange.
