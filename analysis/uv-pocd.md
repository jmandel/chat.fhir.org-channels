# Point-of-Care Device: Analysis

## 1. Objectives 
This implementation guide aims to standardize how acute care medical devices share data with other healthcare systems like electronic medical records and clinical decision support tools. The goal is to provide more detailed information than what's typically available, including device specifications, calibration history, and battery status, alongside the actual measurements. This aims to improve data quality, traceability, and the ability to use device data for research and analysis. 

## 2. Previous Approaches and Limitations
Previously, acute care device data was often communicated using HL7 Version 2, specifically the IHE Patient Care Device (PCD) profiles, particularly the PCD-01 transaction. While functional, HL7v2 has limitations in terms of flexibility and its ability to represent complex data structures. This led to the development of this implementation guide, which leverages the FHIR standard, known for its better data modeling capabilities and web-friendliness. Also, while LOINC and SNOMED CT are comprehensive, the IEEE 11073-10101 nomenclature standard used by many devices and in the IHE PCD profiles provides more specific and readily available codes for emerging device concepts.

## 3. Technical Approach
This IG introduces a FHIR-based approach to represent and exchange point-of-care device data. It utilizes FHIR resources like Device, DeviceMetric, and Observation to model the device, its components, and the measurements they produce. It also defines profiles (constraints and extensions) for these resources to ensure consistency and interoperability. The approach is based on the IEEE 11073 Medical Device Communications Domain Information Model, which provides a hierarchical structure for representing complex devices. 

The IG provides mappings from HL7v2 PCD-01 messages to FHIR resources, allowing implementers to transition from older systems. It also leverages the IEEE 11073 nomenclature for identifying measurements and device components, offering mappings to LOINC and SNOMED CT where available.

## 4. Important Decisions and Contextual Factors
### Scope
- Focuses on acute care point-of-care devices used by professionals in healthcare facilities.
- Excludes home-based personal health devices and imaging devices.
- Does not cover waveform data or device alerts in the current release, but plans to address them in the future.
### Design Choices
- Adopts the IEEE 11073 Domain Information Model as the foundation for representing device data.
- Uses FHIR transaction bundles for efficient transfer of multiple related resources.
- Recommends the use of conditional create and update operations to handle situations where the client may not know if a resource already exists on the server.
### Contextual Factors
- Growing adoption of FHIR as a standard for health information exchange.
- Need for better standardization and interoperability of medical device data.
- Increasing use of device data for clinical decision support, analytics, and research.
- Importance of traceability and provenance of device measurements.
