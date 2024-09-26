# Using CQL with FHIR: Analysis

## 1. Objectives

This implementation guide aims to standardize how healthcare professionals use a specific language (CQL) to define and share rules for analyzing electronic health data (using the FHIR standard). This makes it easier to:

* **Develop consistent healthcare logic:**  Ensure everyone uses the same language and structure when creating rules for things like quality measures or clinical guidelines. 
* **Share these rules effectively:** Package these rules in a standardized way so different computer systems can understand and use them.
* **Improve data analysis:** Make it easier to extract the exact data needed to apply these rules.

## 2. Current Practices and Limitations

Currently, different organizations might use their own methods to define and share healthcare logic, leading to inconsistencies and difficulties in exchanging information. This can cause:

* **Misinterpretations:** Different systems might understand the same rule differently.
* **Data exchange problems:**  Sharing rules between systems can be complex and error-prone.
* **Duplicated effort:**  Organizations might create similar rules from scratch, wasting time and resources.

## 3. New Approaches

This IG introduces a standardized way to:

* **Represent CQL logic:** Package CQL rules as FHIR "Library" resources, making them easily shareable.
* **Define data requirements:**  Clearly specify what data is needed to apply the CQL rules, facilitating data retrieval.
* **Utilize FHIR profiles:** Leverage FHIR profiles to create more specific and detailed data models for CQL logic.
* **Handle missing information:** Provide guidelines on how to deal with incomplete health data when applying rules.

## 4. Important Context and Design Decisions

* **CQL is essential:**  The IG assumes familiarity with the Clinical Quality Language (CQL) and its syntax.
* **FHIR is the foundation:**  The IG heavily relies on the FHIR standard for data representation and exchange.
* **Terminology is key:**  Proper use of standardized terminologies (like SNOMED CT) is crucial for interoperability.
* **Focus on quality measures:**  While the IG is broadly applicable, it's particularly relevant for defining and sharing quality measures.
* **Versioning matters:**  The IG emphasizes semantic versioning to manage changes to CQL libraries and ensure compatibility.
* **Must Support is critical:**   Elements marked as "Must Support" are essential for interoperability and must be understood by all systems. 
