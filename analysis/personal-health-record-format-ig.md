# Standard Patient Health Record IG: Analysis

## 1. Objective

This implementation guide aims to help software developers create Personal Health Record (PHR) applications that can effectively store and exchange patient health data with other PHR and Electronic Health Record (EHR) systems.  The guide focuses on using the FHIR standard as a common language for exchanging this information, ensuring that patient data can be easily shared and understood across different healthcare providers and systems. It emphasizes the concept of a longitudinal health record, which encompasses a patient's entire medical history, potentially spanning many decades and originating from various healthcare sources.

## 2. Previous Approaches and Limitations

Before the widespread adoption of FHIR, exchanging patient data between different health information systems was a complex and often inefficient process. Systems relied heavily on point-to-point communication using HL7 v2, which required custom interfaces to be built for every connection between different organizations. This approach led to a fragmented healthcare data landscape, making it difficult for patients and providers to access a complete and accurate picture of a patient's health history.

## 3. Technical Approach

The IG introduces a standardized approach for PHR development based on the FHIR standard. It provides guidance on data modeling, file formats, and APIs to enable seamless data exchange between PHR and EHR applications. The guide also addresses the unique challenges of storing and managing longitudinal patient health records, which often involve data from multiple sources and various storage media.  It recommends using specific FHIR resources for different data categories, such as Patient, Observation, and Condition, to ensure consistency and interoperability. The IG also advocates for the use of NDJSON format for bulk data exports and imports, facilitating the handling of large datasets.

## 4. Scope Decisions and Contextual Factors

The IG focuses primarily on data storage and exchange aspects of PHR development, rather than prescribing specific functionalities. It acknowledges the complexity of incorporating data from various sources, including traditional healthcare providers, patient-generated data from wearable devices, and even social media information. The guide recognizes the importance of patient privacy and security, advocating for the use of encryption and digital signatures to protect sensitive health information. It also highlights the need to address the legal and ethical considerations surrounding patient data access and sharing, particularly in the context of emerging technologies and evolving regulations like the 21st Century Cures Act in the United States.
