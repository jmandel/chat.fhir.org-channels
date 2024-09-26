# SANER: Analysis

## 1. Objectives

The Situational Awareness for Novel Epidemic Response (SANER) Implementation Guide aims to improve the way healthcare facilities share crucial information during public health emergencies, such as the COVID-19 pandemic. It focuses on enabling hospitals to quickly and automatically report data like bed availability, ventilator usage, and patient statistics to public health agencies. This helps officials understand the severity of the situation, allocate resources effectively, and make informed decisions to protect public health.

## 2. Previous Approaches & Limitations

Before SANER, several approaches were used for sharing this type of data, but they had limitations:

* **HAvBED and OASIS EDXL/HAVE:** These standards were complex, relied on manual data entry, and did not keep pace with technology advancements.
* **HL7 v2:** This standard lacked specific support for bed management and availability.
* **HL7 v3:** No standards were specifically designed for bed management or availability.
* **HL7 FHIR:** Existing FHIR resources like Location, Group, and MeasureReport were not widely used for reporting bed availability.

These limitations resulted in slow, unreliable, and often incomplete data sharing, hindering effective emergency response.

## 3. SANER's Approach

SANER introduces a standardized approach using FHIR resources, profiles, extensions, and terminologies to automate data reporting:

* **Leverages FHIR Resources:** It utilizes existing FHIR resources like Location, Encounter, Device, and MeasureReport, extending them with specific profiles and extensions to capture the necessary data elements.
* **Automates Data Collection:** It emphasizes automated data extraction from various hospital systems, reducing manual effort and improving data quality and timeliness.
* **Standardizes Terminology:** It defines specific value sets and code systems to ensure consistent data representation and interpretation across different systems.
* **Provides Flexible Reporting Options:** It supports both push and pull models for data exchange, allowing hospitals to choose the method that best fits their existing infrastructure.
* **Enables Data Aggregation:** It defines an aggregation operation to consolidate data from multiple facilities and time periods, providing a regional view of the situation.

## 4. Key Decisions & Contextual Factors

* **Focus on Bed and Ventilator Availability:** Given the urgency of the COVID-19 pandemic, SANER prioritizes reporting on bed and ventilator capacity, though it allows for reporting other resources as well.
* **Emphasis on Automation:** Recognizing the limitations of manual data collection, SANER strongly encourages automated data extraction using FHIR search capabilities, FHIRPath, or CQL.
* **Adoption of National Models:** It recommends using established national FHIR implementation guides to ensure consistency and interoperability within a country.
* **Flexibility for Localization:** It allows for localizing value sets to accommodate variations in coding practices and workflows across different healthcare facilities.
* **Security and Privacy Considerations:** It acknowledges the sensitivity of the data and recommends appropriate security measures, including encryption, authentication, and audit logging, while emphasizing the importance of data de-identification and responsible use.

This context highlights the need for a streamlined, standardized, and automated approach for sharing crucial information during public health emergencies. SANER addresses this need by leveraging the capabilities of FHIR and providing a framework for rapid and reliable data exchange, ultimately supporting more effective emergency preparedness and response.
