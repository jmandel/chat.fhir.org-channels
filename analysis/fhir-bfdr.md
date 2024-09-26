# Birth and Fetal Death Reporting (BFDR): Analysis

## 1. Objectives 

This implementation guide aims to standardize the exchange of electronic birth and fetal death records between healthcare providers, jurisdictional vital records offices (VROs), and the Centers for Disease Control and Prevention (CDC). This standardization will streamline the reporting process, making it more efficient and accurate.

## 2. Previous Approaches and Limitations

Previously, electronic birth and fetal death records were exchanged using HL7 Version 2.6, HL7 CDA® R2, and IHE BFDR-E standards.  These approaches had limitations that led to the development of this new FHIR-based IG:

* **Lack of interoperability:** Older standards did not fully address the complexities of modern healthcare data exchange, leading to interoperability issues. 
* **Data inconsistencies:** Data was often recorded and transmitted inconsistently, making it difficult to analyze and aggregate data at a national level. 

## 3. Technical Approach 

The BFDR IG leverages the FHIR standard to define profiles for various resources like Composition and Bundle. These profiles represent electronic birth and fetal death reports and associated data elements:

* **FHIR Bundles:** The IG uses FHIR bundles of type "document" to package the composition resource and all referenced resources. This ensures the content meets the requirements of a clinical document like persistence and authentication.
* **FHIR Compositions:** Specific FHIR Composition profiles are defined for each use case, outlining the structure and content of the exchanged data. 
* **Categories and "None-of-the-Above":** To simplify data queries and represent situations where none of the specified options apply, the IG introduces categories with associated LOINC codes. Observations within these categories allow for explicitly indicating the absence of certain conditions or procedures.
* **Edit Flags:** To support data validation, edit flags are incorporated as extensions within profiles. This allows jurisdictions to validate data before sending it to the National Statistical Agency. 
* **Mother-Baby Linkage:** The IG utilizes the FHIR guidance on representing mother-baby relationships using RelatedPerson resources and specific extensions for clarity. 

## 4. Contextual Factors and Design Decisions

* **Data Sources:** The IG recognizes that data for birth and fetal death reporting comes from various sources, including patient worksheets, prenatal care records, labor and delivery records, and newborn medical records. It provides guidance on preferred and acceptable sources for different data elements.
* **Plurality:** The IG distinguishes between plurality as a patient characteristic and a pregnancy characteristic. It uses specific extensions and Observation profiles to represent both scenarios.
* **Completeness of Documents:** While the IG aims to support all relevant data elements, it acknowledges that each recipient (VRO or CDC) may have its own definition of completeness. Conformance to the IG does not guarantee a successful transmission; the document must also meet the recipient's business rules.
* **Interpretation of Missing Data:** The IG clarifies that missing optional content should be considered "unknown." For collections of fields with a "none-of-the-above" option, the presence of that observation indicates the absence of all other elements in the category.

This analysis demonstrates that the BFDR IG represents a significant step forward in modernizing the exchange of birth and fetal death information.  It addresses the limitations of previous approaches by leveraging the FHIR standard to improve interoperability, data consistency, and validation. By standardizing this exchange, the IG aims to enhance the efficiency and accuracy of birth and fetal death reporting across the United States.
