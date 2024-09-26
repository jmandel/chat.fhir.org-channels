# FHIR-us-pq-cmc: Analysis

## 1. Objectives

This implementation guide (IG) aims to standardize how pharmaceutical companies submit drug information to the US Food and Drug Administration (FDA). It focuses on the technical details about drug quality, manufacturing, and controls, often referred to as PQ/CMC data.

The goal is to make this information machine-readable, making it easier for the FDA to process and analyze. This will streamline the drug review process.

## 2. Previous Approaches and Limitations

Traditionally, drug companies submit PQ/CMC information in a document format called the Common Technical Document (CTD). While there is an electronic version of this document (eCTD), it is essentially a collection of PDF and XML files that are not easily analyzed by computers. 

The lack of structured, machine-readable data in the eCTD creates limitations for the FDA, slowing down their ability to review and analyze drug applications.

## 3. Technical Approach

This IG leverages the Fast Healthcare Interoperability Resources (FHIR) standard, a modern approach to exchanging healthcare information. It defines specific FHIR "profiles" tailored for PQ/CMC data, providing a structured and standardized way to represent information like:

* **Drug Substance Details**: Chemical properties, nomenclature, structure, and manufacturing processes.
* **Drug Product Details**: Dosage form, composition, container closure systems, and quality specifications.
* **Batch Information**: Formulas, analyses, and stability data.

By using FHIR, the IG enables drug companies to submit PQ/CMC data in a format that the FDA can readily process and analyze using computers.

## 4. Important Decisions and Contextual Factors

* **Phased Approach**: The IG recognizes the complexity of PQ/CMC data and adopts a phased approach to defining data standards, starting with specific subdomains and expanding over time.
* **Solid Oral Dosage Forms**: The initial focus is on solid oral dosage forms (e.g., tablets, capsules), with plans to include other dosage forms in future iterations.
* **eCTD v4.0 Alignment**: The FHIR profiles are designed for use within eCTD version 4.0 or later, ensuring compatibility with the latest submission standards.
* **Narrative Generation**: Recognizing the need for human readability, the IG provides guidance and a tool for generating human-readable summaries from the structured FHIR data.
* **Focus on FDA Submissions**: This IG is specifically designed for submissions to the US FDA, reflecting the agency's specific requirements.

This IG represents a significant step towards modernizing drug submissions to the FDA. Its use of FHIR and its phased approach provide a flexible and scalable framework for standardizing PQ/CMC data, ultimately leading to more efficient drug reviews.
