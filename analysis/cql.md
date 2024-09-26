# Clinical Quality Language (CQL): Analysis

## 1. Objectives

This implementation guide (IG) aims to create a standardized way to write and share clinical knowledge for both decision support (helping doctors make decisions) and quality measurement (evaluating healthcare performance). The goal is to make this knowledge computable and easily transferable between different computer systems.

## 2. Current Practices and Limitations

Currently, different standards exist for representing clinical knowledge, but they are not widely adopted and have limitations:

* **Lack of Tooling:** Few tools exist to help people write and use these standards.
* **Complexity:** Existing standards can be complex to implement, making them difficult to use.
* **Limited Expressivity:** Some standards cannot express all types of clinical knowledge needed.
* **Lack of Sharing:** Different standards make it difficult to share knowledge between systems.

This leads to duplicated effort, difficulty in sharing knowledge, and challenges in integrating this knowledge into existing systems.

## 3. New Approaches

This IG introduces two key components:

* **Clinical Quality Language (CQL):** A human-readable language that clinical experts can use to write clinical knowledge. It's designed to be easier to use and understand than existing standards.
* **Expression Logical Model (ELM):** A machine-readable representation of clinical knowledge that is independent of the language used to write it. This allows knowledge to be shared between systems that use different languages.

**Technical Approach:**

CQL is translated into ELM, which can then be used by different computer systems. ELM is based on the concept of an Abstract Syntax Tree (AST) used in compiler design. This approach simplifies implementation and processing by focusing on the content of the knowledge, not the syntax.

## 4. Contextual Factors and Design Decisions

* **Data Model Independence:** CQL and ELM are designed to work with any data model, making them more flexible and adaptable.
* **Harmonization with Existing Standards:** CQL is designed to be compatible with existing standards like HQMF (for quality measures) and KAS (for decision support), facilitating adoption.
* **FHIR Integration:** CQL can be used within FHIR (Fast Healthcare Interoperability Resources) to represent clinical knowledge.
* **FHIRPath Compatibility:** CQL incorporates FHIRPath, a language for navigating data in FHIR, making it easier to use with FHIR data.

**Important Considerations:**

* **Implementation Options:** The specification provides options for implementations to enable or disable certain features, allowing for flexibility but also potential variations in behavior.
* **Terminology Binding:** The way value sets are expanded (i.e., translated into actual codes) can be dynamic (using the latest version) or static (using a specific version), impacting how knowledge is interpreted over time.
* **Contextual Evaluation:** CQL expressions are evaluated within a specific context (e.g., patient, practitioner), affecting what data is available and how the knowledge is applied.
