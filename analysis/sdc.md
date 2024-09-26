# SDC: Analysis

## 1. Objectives 

This implementation guide (IG) aims to standardize how healthcare forms are designed, filled out, and processed electronically using the FHIR standard. It allows for:

* **Creating digital forms:** Defining questions, response options, and how the form should look and behave.
* **Pre-filling forms:** Automatically filling in parts of the form with existing patient data.
* **Extracting data from forms:** Converting completed forms into structured data that can be used for clinical care, research, or administrative purposes.

## 2. Previous Approaches and Limitations

While the input files don't explicitly detail previous approaches, we can infer limitations based on the IG's stated objectives:

* **Lack of standardization:** Designing and processing electronic forms likely varied across systems, leading to interoperability issues.
* **Limited pre-population:** Filling forms with existing patient data was likely manual and time-consuming.
* **Difficult data extraction:** Converting completed forms into usable data was probably manual, error-prone, and inefficient.

## 3. Introduced Approaches and Technical Approach

The IG introduces standardized ways to:

* **Represent forms:** Using the FHIR `Questionnaire` resource to define form structure, questions, and response options.
* **Pre-populate forms:** Using FHIRPath, CQL, or FHIR Queries to identify and extract relevant patient data.
* **Extract data:**  Three methods are defined:
    * **Definition-based:**  Linking questions to FHIR resource elements using `item.definition`.
    * **Observation-based:** Mapping questions to LOINC codes and extracting as `Observation` resources.
    * **StructureMap-based:** Transforming `QuestionnaireResponse` into other FHIR resources using `StructureMap`.

## 4. Important Decisions and Contextual Factors

* **FHIR as the foundation:** The IG leverages FHIR resources and terminology to ensure interoperability.
* **Modular Questionnaires:**  The IG supports modular questionnaires, allowing for reusable components and easier form design.
* **Adaptive Questionnaires:**  The IG defines a mechanism for adaptive questionnaires, where subsequent questions depend on previous answers.
* **Emphasis on Implementation Guidance:** The IG provides detailed explanations, examples, and best practices to aid implementers.
* **Collaboration with other standards:** The IG aligns with other standards like LOINC and IHE SDC.
* **CAP Use Case:** The IG addresses specific requirements from the College of American Pathologists (CAP) for form adaptation. 
