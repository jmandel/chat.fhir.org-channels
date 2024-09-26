# Genomics Reporting: Analysis

## 1. Objectives

This implementation guide aims to standardize the way genetic testing results are represented and shared electronically. It seeks to create a common language for describing various aspects of genetic findings, such as:

* **Variants:** Differences in an individual's DNA compared to a reference sequence.
* **Haplotypes:** Sets of genetic variations inherited together.
* **Genotypes:**  The combination of an individual's haplotypes.
* **Molecular Biomarkers:** Measurable indicators of biological processes, including those related to genes.
* **Implications:** The potential consequences of genetic findings for diagnosis, treatment, and disease risk.

By establishing consistent data structures and terminology, the guide facilitates interoperability between different systems and stakeholders involved in genomic medicine. This enables easier exchange of information between laboratories, clinicians, researchers, and patients, ultimately improving patient care and advancing research.

## 2. Previous Approaches and Limitations

The guide acknowledges the existence of numerous organizations and resources outside of HL7 that have established codes and naming systems for various aspects of genomics. However, these systems often lack harmonization and clear guidance on their usage in a clinical context. 

The guide highlights limitations such as:

* **Lack of Canonical URIs:** Many organizations lack standardized, universally recognized identifiers for their code systems, making it difficult to unambiguously reference them in electronic systems.
* **Ambiguity in Code Usage:** Older systems may use codes without proper prefixes or in ways that deviate from the intended meaning, leading to potential misinterpretations.
* **Limited Structure for Complex Information:** Existing approaches may struggle to adequately represent complex relationships between genetic findings and their implications, especially in areas like pharmacogenomics.

## 3. Technical Approach

The guide introduces a set of FHIR profiles, extensions, value sets, and code systems specifically designed for representing genomic information. It leverages the FHIR standard to structure data in a consistent and machine-readable format. 

Key technical aspects include:

* **Profiles:** Specializations of core FHIR resources (e.g., Observation, DiagnosticReport) tailored for genomic use cases.
* **Extensions:** Additional data elements that can be added to existing resources to capture specific genomic details.
* **Value Sets:** Defined lists of codes drawn from existing code systems, ensuring consistent terminology for key concepts.
* **Code Systems:** New code systems for concepts not adequately covered by existing terminologies.
* **Operations:** Defined procedures for retrieving and processing genomic data, enabling standardized queries across different systems.

## 4. Design Choices and Contextual Factors

The guide makes several notable design choices and acknowledges contextual factors influencing its development:

* **Focus on Interoperability:** The primary goal is to enhance interoperability, enabling seamless data exchange between different systems and stakeholders.
* **Leveraging Existing Standards:** The guide builds upon existing standards like HL7 v2, LOINC, and Sequence Ontology whenever possible, promoting consistency with established practices.
* **Collaboration with External Organizations:** The guide emphasizes the importance of engaging with external organizations responsible for genomics codes and terminologies to ensure proper alignment and adoption.
* **Phased Approach to Code Maturity:** Recognizing that some codes and concepts are still under development, the guide allows for temporary "TBD" codes to be used, with the expectation of transitioning to more mature codes as they become available.
* **Addressing Pharmacogenomics:**  The guide provides specific guidance on representing pharmacogenomic information, including the relationships between genetic variations, medications, and recommended actions.
* **Support for Grouping Observations:**  While not recommending pre-coordinated groupings, the guide allows for the use of grouping observations to organize related findings for presentation purposes.
* **Extensible Value Sets:**  The guide acknowledges the diversity of variant annotation tools and the evolving nature of genomics knowledge, allowing for the extension of value sets to accommodate new concepts. 
* **Focus on Computable Data:** The guide prioritizes the representation of genomic findings in a computable format, facilitating clinical decision support and research applications.
* **Integration with Clinical Workflows:** The guide emphasizes the need to integrate genomic data into existing clinical workflows, such as ordering tests, receiving results, and making treatment decisions.
