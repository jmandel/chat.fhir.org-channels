# RESP-NET Content IG: Analysis

## 1. Objectives 

This implementation guide aims to standardize how healthcare facilities electronically report data about patients hospitalized with respiratory viruses like influenza, COVID-19, and RSV to public health agencies involved in the Respiratory Virus Hospitalization Surveillance Network (RESP-NET). The goal is to automate and streamline this reporting process, making it faster, more efficient, and less burdensome for healthcare providers while enabling more timely and comprehensive surveillance of these viruses.

## 2. Previous Approaches and Limitations

RESP-NET cases were previously identified through manual processes like reviewing hospital and lab records, which was labor-intensive and slow. Data for hospitalized cases was then collected through medical chart abstractions using standardized forms, adding further burden to surveillance staff. These manual processes limited the efficiency and timeliness of data availability for public health surveillance.

## 3.  Technical Approach

This IG leverages the HL7 FHIR standard to define a structured approach for exchanging healthcare data. It introduces:

* **Standardized data profiles:**  These profiles specify the required data elements for RESP-NET reporting, ensuring consistency and interoperability.
* **Automated data extraction and reporting:** The IG utilizes the MedMorph Health Data Exchange App (HDEA) and FHIR subscriptions to automate the process of extracting relevant patient data from electronic health records (EHRs) and transmitting it to RESP-NET sites.
* **SMART on FHIR authorization:** This framework enables secure access and exchange of patient data between healthcare facilities and the HDEA.

The process works as follows:

1. **RESP-NET sites define reporting requirements:** They create "Knowledge Artifacts" that specify the data needed and trigger events (like a patient's discharge) that initiate reporting.
2. **HDEA retrieves requirements and sets up subscriptions:** The HDEA retrieves these Knowledge Artifacts and automatically creates subscriptions in the healthcare facility's EHR system to be notified when trigger events occur.
3. **EHR triggers data extraction:** When a trigger event happens, the EHR notifies the HDEA.
4. **HDEA retrieves and packages data:** The HDEA retrieves the necessary patient data from the EHR using FHIR APIs, validates it, and packages it into a standardized report.
5. **HDEA transmits report:** The HDEA sends the report to the appropriate RESP-NET site.

## 4. Scope, Design Choices, and Context

**Important Scope Decisions:**

* Focuses on hospitalized patients with specific respiratory viruses within the RESP-NET catchment area.
* Addresses data elements currently collected in RESP-NET, acknowledging that not all elements may be electronically available.
* Outlines data reporting requirements but does not address data quality assessment or consent policies.

**Design Choices:**

* Leverages existing FHIR standards like US Core, MedMorph RA IG, and SMART App Launch IG to minimize implementation burden and ensure interoperability.
* Utilizes the HDEA as a primary mechanism for automating data extraction and reporting.
* Allows for alternative transport methods like Direct Transport when appropriate.

**Contextual Factors:**

* Developed by the CDC to improve the efficiency and timeliness of public health surveillance for respiratory viruses.
* Addresses the need for automated data exchange between healthcare facilities and public health agencies.
* Relies on the increasing adoption of FHIR-enabled EHR systems. 
