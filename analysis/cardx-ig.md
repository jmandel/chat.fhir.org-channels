# CardX Hypertension Management IG: Analysis

## 1. Objectives 

This implementation guide aims to improve the diagnosis and management of hypertension (high blood pressure) by enabling the easy and standardized exchange of blood pressure readings taken by patients at home (self-measured blood pressure or SMBP). The goal is to allow these readings to be shared seamlessly between patients' devices, health apps, and doctors' electronic health record systems. This will allow doctors to monitor patients' blood pressure more effectively, adjust treatment as needed, and ultimately help more patients achieve healthy blood pressure levels.

## 2. Current Practices and Limitations

Currently, blood pressure is often only measured during clinic visits. This approach has limitations:

* **Infrequent Data:** It only provides snapshots of a patient's blood pressure and may not reflect their usual readings.
* **White Coat Hypertension:** Some patients experience higher blood pressure in a clinical setting due to anxiety.
* **Limited Patient Engagement:** Patients are not actively involved in monitoring their condition.

These limitations can lead to delayed or inaccurate diagnosis and suboptimal treatment of hypertension.

## 3. New Approaches and Technical Approach

This IG introduces a standardized way to collect and exchange SMBP data using the FHIR (Fast Healthcare Interoperability Resources) standard. Here's how it works:

* **Standardized Data:** The IG defines specific FHIR profiles (like templates) for representing SMBP readings and related information, ensuring data is structured consistently.
* **Interoperable Exchange:** It enables the exchange of this data between different systems (devices, apps, EHRs) using FHIR APIs.
* **Focus on Key Data:** The profiles prioritize essential data elements for hypertension management, such as systolic and diastolic blood pressure, measurement time, and patient identification.
* **Workflow Support:** The IG outlines scenarios and technical details for how data should flow between systems in a typical SMBP program.

## 4. Important Contextual Factors and Design Decisions

* **Global Scope:** The IG adopts a universal realm approach, making it applicable across different regions and healthcare systems.
* **Dependencies:** It builds upon existing standards like the FHIR Release 4, US Core, and Personal Health Device IGs.
* **Alignment with Guidelines:** The IG aligns with evidence-based guidelines for hypertension management, such as those from the American Heart Association and the CDC.
* **Emphasis on Patient Engagement:** The IG facilitates patient involvement in their care by enabling them to collect and share their own blood pressure data.
* **Focus on Interoperability:** The IG prioritizes creating a vendor-agnostic standard to ensure different systems can communicate seamlessly.
* **Phased Approach:** This IG focuses on core SMBP data exchange. Future iterations may include additional data elements and functionalities to support more comprehensive hypertension management.
