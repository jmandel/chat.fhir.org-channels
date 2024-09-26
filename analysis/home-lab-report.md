# HL7 FHIR At-Home In-Vitro Test Reporting: Analysis

## 1. Objectives

This implementation guide (IG) aims to standardize the way digital at-home test results are shared with healthcare providers and public health agencies. It focuses on making it easier for app developers to send test results in a consistent format (FHIR) that can be easily understood and used by different health systems.

## 2. Previous Approaches and Limitations

Previously, at-home test results were primarily sent as HL7v2 lab messages because public health departments were familiar with this format. However, this approach has limitations:

* **Limited FHIR Compatibility:** Public health departments often lack systems that can handle FHIR data, the modern standard for health information exchange. 
* **Hardcoded Information:** HL7v2 messages often contain hardcoded information, such as ordering details, which are not always available for at-home tests.

## 3. Introduced Approaches and Technical Approach

This IG introduces the following approaches:

* **Standardized FHIR Profiles:** It defines specific FHIR profiles, based on the US Core standard, to ensure consistent representation of at-home test results.
* **Framework for Future Work:** It provides a framework for creating condition-specific profiles, starting with a COVID-19 use case as an example.
* **Data Hubs for Routing:** It suggests using data hubs to simplify data exchange between apps and public health agencies, reducing the burden on app developers.

**Technical Approach:**

* **Constrained US Core Profiles:** The IG constrains existing US Core profiles for Diagnostic Report and Laboratory Observation to fit the at-home testing context.
* **FHIR Bundle Resource:** It recommends using FHIR Bundle to package all relevant information, including test results and patient answers to app questions, into a single message.
* **Mapping to HL7v2:** It provides guidance on mapping FHIR data elements to HL7v2 to accommodate systems that still rely on this older standard. 

## 4. Scope Decisions, Design Choices, and Contextual Factors

* **Focus on Single Test Results:** The IG focuses on reporting single at-home test results, reflecting the common scenario where patients perform one test at a time.
* **Supporting Information Extension:** It leverages the FHIR SupportingInfo extension to capture answers to questions asked by apps during test reporting, recognizing that this information is important for public health surveillance.
* **Use of OIDs as Identifiers:** It emphasizes the use of Object Identifiers (OIDs) to ensure unique identification of sending applications and test types.
* **Test-Specific Fields from LIVD:**  It relies on the CDC's LOINC In Vitro Diagnostic (LIVD) Test Code Mapping to provide standardized test-specific identifiers.
* **Serial Testing Guidance:**  It addresses the need for serial testing by recommending the use of Observation - Patient Question Answer to record previous test history.
* **Receiver-Specific Fields:** The IG provides specific values for receiver fields to facilitate data routing to different public health systems. 
