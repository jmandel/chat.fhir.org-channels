# PCHA Personal Health Device Data Implementation Guide: Analysis

## 1. Objectives

This implementation guide aims to standardize how data from personal health devices, like blood pressure monitors, glucose meters, and weight scales, is represented in the FHIR (Fast Healthcare Interoperability Resources) format.  This allows for better sharing and understanding of this data between different health systems and applications.

The guide focuses on communicating devices that can send their data electronically. It defines how to represent both the measurements taken by the device and information about the device itself (like model number, serial number, etc.) in FHIR.

## 2. Previous Approaches and Limitations

Previously, Continua, a set of design guidelines for personal health devices, offered three data models for uploading device data: HL7 V2 PCD-01, HL7 V3 PHMR CDA, and FHIR. Each model had its own transport mechanisms and mapping guidelines from the IEEE 11073 standard for personal health devices.

This IG focuses specifically on the FHIR data model and provides detailed instructions on how to map data from IEEE 11073 compliant devices to FHIR resources. This addresses the need for a standardized and consistent way to represent this data in FHIR.

## 3. Technical Approach

This IG defines a set of profiles for FHIR resources (Patient, Device, and Observation) that constrain, extend, and define terminology requirements for representing personal health device data.

* **Generic Modeling:** The guide uses a generic modeling approach, meaning it can handle data from a wide range of devices without needing specific knowledge of each device type.  It focuses on mapping data types rather than specific measurements, allowing for future compatibility with new devices and measurements.

* **IEEE 11073 Mapping:** It provides detailed instructions on mapping data elements from the IEEE 11073 standard to FHIR resources. This includes handling various data types like scalar values, compound values, coded values, BITs values, strings, and periodic samples (waveforms).

* **Time Synchronization:** The guide addresses the challenge of accurate time stamps from devices with varying levels of time synchronization. It defines a "Coincident Time Stamp" observation resource to track the relationship between the device's time and the gateway's time, allowing for corrections and validation of time stamps.

## 4. Scope Decisions and Contextual Factors

* **Communicating Devices Only:** The guide focuses on communicating devices that can transmit data electronically. It does not cover manual data entry or non-communicating devices.

* **No Data Interpretation:** The IG does not interpret the data or specify how it should be used. It only defines the mapping to FHIR, leaving the interpretation and use to the receiving system.

* **Remote Patient Monitoring Focus:** The design is heavily influenced by the needs of remote patient monitoring, where patients use devices at home and upload data to their healthcare providers. This context drives the emphasis on generic modeling, time synchronization, and minimizing maintenance requirements.

* **Privacy Considerations:** The guide allows for flexibility in handling patient identifiable information. It supports both scenarios where patient data is protected (using opaque identifiers) and scenarios where it is not (e.g., fitness data).

* **Future Compatibility:** The generic modeling approach and use of IEEE 11073 codes aim to ensure that the guide can be used with future devices and specializations without requiring updates to the mapping itself.
