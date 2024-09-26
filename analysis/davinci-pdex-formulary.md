# DaVinci PDex US Drug Formulary: Analysis

## 1. Objectives

This implementation guide aims to standardize how health insurers in the US share drug formulary information digitally. A drug formulary is a list of medications that an insurer will cover. This guide seeks to make it easier for patients and consumers to:

- Understand the costs and coverage details of their prescribed medications.
- Compare drug costs across different insurance plans.
- Find more affordable medication alternatives.

## 2. Previous Approaches and Limitations

Previously, insurers typically provided drug formulary information through:

- **PDF documents:** Not easily searchable or machine-readable.
- **Drug search forms on websites:** Limited functionality and inconsistent across insurers.

These methods made it difficult for consumers to compare plans and find cost-effective medications.

## 3. Technical Approach

This IG leverages the FHIR (Fast Healthcare Interoperability Resources) standard to represent drug formulary data. It defines:

- **Profiles:**  Specific data structures based on core FHIR resources like InsurancePlan, MedicationKnowledge, and Basic to capture formulary-related information.
- **Extensions:** Additional data elements to represent concepts not present in the base FHIR resources.
- **Search Parameters:** Standardized ways to query for specific formulary data.
- **Value Sets and Code Systems:** Controlled vocabularies to ensure consistency in representing concepts like drug tiers and pharmacy benefit types.

## 4. Context and Design Decisions

- **RxNorm:** This IG relies heavily on RxNorm codes to identify drugs. This provides a standard way to represent medications.
- **Authenticated vs. Unauthenticated Access:** The IG supports both authenticated access (for members accessing their specific plan information) and unauthenticated access (for consumers comparing plans).
- **Drug Tier and Pharmacy Benefit Type Variability:** The IG acknowledges the lack of standardization in drug tiers and pharmacy benefit types across payers. It provides extensible value sets to accommodate this variability while encouraging a move towards standardization.
- **Immaturity of MedicationKnowledge Resource:** The IG acknowledges that the FHIR MedicationKnowledge resource is still under development. It anticipates co-evolution of this resource and the FormularyDrug profile defined in the IG.
- **Bulk Data Export:** The IG suggests, but does not require, support for bulk data export to facilitate the transfer of large formulary datasets.

**Key Design Considerations:**

- **Specific Drug Coverage Details:** The IG addresses the need to express detailed coverage constraints for drugs that might share the same RxNorm code. It allows for representing specific drug codes (e.g., NDC) and additional coverage information as extensions.
- **Presenting Drug Alternatives:**  The IG acknowledges the complexity of identifying therapeutic alternatives and leaves this functionality outside its scope.
- **Focus on Plan-Level Cost Information:** The IG emphasizes providing plan-level cost estimates. It clarifies that actual costs may vary based on individual circumstances and pharmacy-specific factors.
