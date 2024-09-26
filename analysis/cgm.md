# Argo Continuous Glucose Monitoring: Analysis

## 1. Objectives 

This implementation guide aims to standardize how Continuous Glucose Monitoring (CGM) data is shared between different systems, such as:

* **Patient apps:** Apps that patients use on their phones or other devices to track their glucose levels.
* **Clinician-facing apps:** Apps that doctors use, often integrated into their electronic health record (EHR) systems, to view patient CGM data.
* **Cloud platforms:** Platforms that store and manage CGM data.
* **Research systems:** Systems that collect CGM data for studies. 

By standardizing the format and process for sharing, the guide aims to make it easier for patients to share their data with their doctors, for doctors to access and use that data effectively, and for researchers to collect data from various sources. This will ultimately improve diabetes management and research.

## 2. Current Practices and Limitations

Currently, sharing CGM data often involves manual processes or proprietary formats that are not easily exchanged between different systems. This can lead to:

* **Data silos:** Patient data is trapped in specific apps or platforms and cannot be easily accessed by others.
* **Inefficient workflows:** Doctors may need to log into multiple systems or manually enter data, which takes time and can introduce errors.
* **Limited research opportunities:** Difficulty in collecting and combining data from different sources hinders large-scale research.

## 3. New Approaches

This IG introduces a standardized approach using the FHIR (Fast Healthcare Interoperability Resources) standard. This means:

* **Common data format:** CGM data is represented using a consistent structure (FHIR resources) that all participating systems can understand.
* **API-based exchange:** Systems can use a standardized API (FHIR API) to securely exchange data with each other.
* **SMART on FHIR:**  This framework enables secure authorization and authentication, ensuring that only authorized individuals and systems can access patient data.

**Technical Approach:**

The IG defines specific FHIR profiles for representing different types of CGM data, such as sensor readings, summaries, and reports. It also defines a workflow for how data is submitted from a "Data Submitter" (e.g., a patient app) to a "Data Receiver" (e.g., an EHR). This workflow involves:

1. **Authorization:** The Data Submitter securely connects to the Data Receiver using SMART on FHIR.
2. **Patient Identification:** The systems agree on the patient's identity.
3. **Submission Preferences:** The Data Submitter learns how the Data Receiver wants to receive data (e.g., how often).
4. **Data Preparation:** The Data Submitter prepares the CGM data in a FHIR Bundle.
5. **Submission:** The Data Submitter sends the Bundle to the Data Receiver using the FHIR API.

In addition to the API-based approach, the IG also utilizes SMART Health Links (SHLinks). This allows for more ad-hoc sharing of CGM data with parties that might not have a full FHIR integration, such as schools or temporary caregivers.

## 4. Important Contextual Factors and Design Decisions

* **Use of LOINC codes:** The IG aims to use LOINC codes for observations and reports, but because LOINC does not yet have codes for all required concepts, a temporary CodeSystem and ConceptMap are used as a bridge.
* **Bundle-based submissions:** The IG promotes the use of FHIR Bundles for submitting data, allowing multiple related resources to be sent in a single transaction.
* **Standing orders:** The IG defines a way for Data Receivers to express their data submission preferences using a "CGM Data Submission Standing Order" (a specific type of FHIR ServiceRequest). This allows Data Submitters to automatically adjust their submission frequency based on the receiver's needs.
* **Flexibility in data submission:** The IG supports both scheduled and manual data submissions, providing flexibility for different use cases.
* **Support for both tight and loose coupling:** The combination of API-based data submission and SHLinks enables both tightly integrated systems and more loosely coupled sharing scenarios.

By understanding these factors, implementers can better understand the rationale behind the IG's design choices and make informed decisions when implementing CGM data exchange.
