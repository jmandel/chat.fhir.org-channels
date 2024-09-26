# HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1: Analysis

## 1. Objectives

This implementation guide aims to improve how electronic health systems represent sex and gender information about patients. It seeks to move beyond the traditional binary (male/female) approach and provide a more nuanced and accurate way to capture and share this data, recognizing that sex and gender are distinct concepts that can both influence healthcare.

The guide focuses on enabling systems to record and exchange information about:

* **Gender Identity:** How a person identifies themselves (e.g., male, female, non-binary, etc.)
* **Sex Parameter for Clinical Use (SPCU):** A sex classification based on observable characteristics (e.g., hormone levels, anatomy) that helps guide clinical decisions, such as lab test interpretations or treatment choices.
* **Recorded Sex or Gender:** Capturing sex or gender information as it appears on official documents like birth certificates or driver's licenses, acknowledging that these records may not reflect a person's current gender identity.
* **Name to Use:** The name a person prefers to be called, which may differ from their legal name.
* **Pronouns:** The pronouns a person uses (e.g., he/him, she/her, they/them).

By implementing the guidance in this IG, healthcare systems can provide more inclusive and respectful care for transgender, gender-diverse, and intersex individuals, leading to better health outcomes and reduced health disparities.

## 2. Previous Approaches and Limitations

Historically, healthcare systems often used a single data element, typically labeled "Administrative Gender" or "Sex", to capture both sex and gender information. This approach was problematic because:

* **Conflation of Concepts:** It assumed sex and gender were the same, leading to misunderstandings and inaccurate data.
* **Limited Representation:** The binary male/female options did not adequately represent individuals whose gender identity falls outside this binary or who have variations in sex characteristics.
* **Negative Impacts on Care:**  This oversimplification could lead to inappropriate treatment, missed screenings, and denial of care for transgender, gender-diverse, and intersex individuals.
* **Data Analysis Challenges:**  The lack of clear distinction between sex and gender hindered research efforts aimed at understanding health disparities and developing tailored interventions.

## 3. Technical Approach

This IG provides guidance on how to implement the Gender Harmony model using three major HL7 standards:

* **FHIR:**  The guide recommends using FHIR extensions to represent the core Gender Harmony concepts (Gender Identity, SPCU, Recorded Sex or Gender, Pronouns).  It also provides guidance on using the HumanName datatype to capture Name to Use.
* **HL7 v2:** The guide introduces new segments (GSP, GSR, GSC) to convey the Gender Harmony concepts and provides instructions on how to incorporate these segments into existing message structures.
* **CDA:** The guide defines entry templates for Gender Identity, Pronouns, Recorded Sex or Gender, and SPCU, allowing these concepts to be included in CDA documents.

The guide emphasizes the use of standardized terminology, primarily relying on existing code systems like SNOMED CT and LOINC, to ensure consistency and interoperability across different systems.

## 4. Scope, Design Choices, and Contextual Factors

* **Minimum Value Sets:** The guide provides minimum value sets for concepts like Gender Identity and Pronouns, recognizing that these may need to be expanded based on local cultural and linguistic contexts.
* **Binding Strength:** The guide clarifies the binding strength of the value sets, allowing for flexibility in implementation while encouraging the use of the provided values whenever possible.
* **Backwards Compatibility:** The guide addresses backwards compatibility for each standard, enabling systems using older versions to adopt the Gender Harmony approach.
* **Coordination with Other Standards:** The guide highlights the need for coordination with other standards like DICOM (for imaging) and NCPDP (for pharmacy), acknowledging that consistent representation across these domains is crucial.
* **Sensitivity and Privacy:** The guide acknowledges the sensitive nature of sex and gender information and emphasizes the need for robust privacy and security measures to protect patient data.
* **Ethical Considerations:** The guide underscores the ethical imperative of providing respectful and affirming care for all individuals, regardless of their sex or gender identity.

This IG reflects a collaborative effort to improve the representation of sex and gender in healthcare systems. It provides a foundation for more inclusive and equitable healthcare, recognizing that accurate and nuanced data is essential for providing high-quality care to all patients.
