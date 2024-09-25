## US Core Implementation Guide: Sharing Patient Data

**TL;DR:** This guide helps healthcare apps in the United States share patient data in a standardized way using FHIR. It defines the specific information that should be included when sharing common types of patient data like allergies, medications, lab results, and clinical notes.

The US Core Implementation Guide (IG) aims to improve how healthcare information is shared between different systems in the US. It defines a "baseline" set of data and rules that apps should use when exchanging information about patients. This common ground helps ensure that data can be understood and used by different apps and systems, regardless of where it comes from.

The guide addresses specific needs in the healthcare ecosystem by:

- **Defining US Core Profiles:**  These profiles specify the essential information that should be included when sharing different types of patient data. For example, the US Core Patient Profile defines the required data for sharing basic patient demographics.
- **Standardizing Data Exchange:** The guide outlines how to use FHIR resources like Patient, Condition, Observation, and DocumentReference to represent various types of clinical information.
- **Supporting Common Use Cases:** It provides specific guidance on how to share information for common scenarios, such as fetching a patient's medication list, accessing clinical notes, and understanding data provenance (where the data came from). 
- **Specifying Search Capabilities:** It outlines how apps should search for specific patient data across different systems using FHIR search parameters.
- **Addressing Security and Privacy:** The guide highlights important security and privacy considerations when exchanging patient data, emphasizing the need for appropriate authorization and protection of sensitive information.

The US Core IG is regularly updated to incorporate new data requirements and best practices. It serves as a foundation for other healthcare implementation guides in the US, promoting consistency and interoperability across the healthcare ecosystem.
