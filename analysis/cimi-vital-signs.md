# CIMI Vital Signs: Analysis

## 1. Objectives

This implementation guide aims to standardize how healthcare systems record and exchange common vital signs like heart rate, blood pressure, and temperature. It seeks to ensure that different systems can understand and use this data consistently, especially with the increasing use of wearable devices by patients. 

## 2. Current Practices and Limitations

Currently, healthcare systems may use different methods and codes for recording vital signs. This lack of standardization makes it difficult to share and compare this data between different systems. For example, a wearable device might record heart rate using a specific code that a hospital's electronic health record system doesn't recognize.

## 3. New Approaches

This IG introduces a standardized way to represent vital signs using the FHIR (Fast Healthcare Interoperability Resources) standard. It defines specific FHIR profiles for each vital sign, including details like:

* **Standard Codes:**  Uses LOINC codes to represent each vital sign, ensuring that different systems understand what is being measured.
* **Required Data Elements:** Specifies mandatory data elements for each vital sign observation, such as the patient, the time of measurement, the value, and the units.
* **Qualifying Observations:** Includes extensions to capture additional information about the measurement, like body position, device used, and measurement setting.

## 4. Contextual Factors and Design Decisions

* **US Realm:** Currently, this IG is focused on the US healthcare system.
* **Must Support:** Elements marked as "must support" in the profiles are considered essential for interoperability and should be implemented by all systems.
* **Data Provenance:** The IG recommends following the US Core guidelines for data provenance, which helps track the origin and history of the data.
* **Terminology Binding:** The IG emphasizes the importance of using standardized terminology and provides value sets for different qualifying observations.
* **Blood Pressure Panel:** The IG includes a specific profile for blood pressure panels, recognizing that systolic, diastolic, and mean arterial pressure are often measured and stored together.
* **Average Blood Pressure:**  Recognizing the increasing use of home blood pressure monitoring, the IG includes profiles for recording average blood pressure measurements over time.
* **Wearable Devices:**  The IG highlights the importance of interoperability with wearable devices and aims to facilitate data exchange between these devices and electronic health record systems. 
