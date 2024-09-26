# FHIR Clinical Document: Analysis

## 1. Objectives

This implementation guide (IG) aims to standardize how clinical documents, like discharge summaries or progress notes, are represented and exchanged using the FHIR standard. It wants to create a common, universal way to represent these documents digitally, making it easier for different healthcare systems to understand and share this information. 

The goal is to improve interoperability, which means making it easier for different computer systems to talk to each other and exchange information seamlessly. This will ultimately benefit patients as their health information can be easily accessed and shared by different healthcare providers.


## 2. Previous Approaches and Limitations

Previously, there were many different ways to represent clinical documents using FHIR, leading to inconsistencies and difficulties in exchanging information. One widely used standard was CDA (Clinical Document Architecture), but as the healthcare industry transitions to FHIR, a consistent FHIR-based approach is needed.

Limitations of previous approaches:

* **Many different FHIR profiles for clinical documents:**  Over 257 profiles on Bundle and 180 on Composition, leading to a fragmented landscape.
* **Lack of a canonical pattern:** No clear standard or best practice for creating FHIR-based clinical documents.
* **Mapping discrepancies between CDA and FHIR:** Different interpretations of how to represent CDA elements in FHIR.


## 3. Introduced Approaches and Technical Approach

This IG introduces a canonical (standard) way to represent a clinical document in FHIR. It builds upon the existing FHIR "Documents" guidance and adds specific rules and constraints.

**Technical Approach:**

* **FHIR Bundle:** A clinical document is represented as a FHIR Bundle of type "document."
* **Composition Resource:** The Bundle contains a Composition resource, which acts like an index or table of contents for the document. It also includes important header information (patient, author, date, etc.).
* **Attested Narrative:** The IG emphasizes human readability and requires a clear way to display the document's narrative (the main content) in a standard web browser.
* **CDA Mapping:** It provides detailed instructions on how to map elements from CDA to this new FHIR representation, aiding those transitioning from CDA.
* **Document Succession Management:** It defines how to handle document updates (replacements or addenda) and documents issued in error.


## 4. Important Contextual Factors and Design Decisions

* **Emphasis on Human Readability:** The IG prioritizes the ability for humans to easily read and understand the document, even without specialized software.
* **Focus on the Entire Bundle:** The entire Bundle represents the clinical document, not just the Composition resource.
* **Relationship to Other Specifications:** The IG aims to be a foundation for other, more specific FHIR clinical document specifications. It intends to consolidate existing approaches over time.
* **Security Considerations:** The IG highlights potential security risks related to the document's narrative content, especially if it contains active content like scripts.
* **Immutable and Parseable Documents:** The IG discusses how documents can be stored as immutable objects (unchangeable after creation) and how they can be parsed (broken down) for extracting information.
* **Operations:** The IG defines FHIR operations (specialized actions) for tasks like converting the document into a transaction bundle for easier processing by some FHIR servers.
* **Limited Scope:** This version primarily focuses on representing the CDA header information in FHIR. Future updates may expand the scope.
* **Open to Feedback:** The IG explicitly seeks feedback on certain design decisions, such as how to handle CDA's NonXMLBody and the need for specific succession management scenarios.
