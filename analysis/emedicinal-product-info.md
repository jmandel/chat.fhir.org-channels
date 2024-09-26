# eMedicinal Product Info: Analysis

## 1. Objectives 

This implementation guide aims to make it easier for computer systems to share information about medicines. This will allow patients and healthcare professionals to access reliable and up-to-date details about their medications in a format that is easier to understand and use than traditional PDF documents.

## 2. Previous Approaches and Limitations

Previously, medicine information was often provided as PDF documents, such as:

* **USA:** Prescription Drug Label or Package Insert (USPI)
* **Europe:** Summary of Product Characteristics (SmPC) or Package Leaflet
* **Japan:** Package Insert (JPI)

These PDFs have several limitations:

* **Difficult to Search:** Content is not structured for easy searching.
* **Not Patient-Friendly:**  Lack features like larger fonts, accessibility support, multimedia, and multiple languages.
* **Not Suitable for Electronic Initiatives:** Cannot be easily integrated with electronic health records or other digital health applications.

## 3. New Approaches and Technical Approach

This implementation guide introduces a new approach using the HL7 FHIR standard, a modern framework for exchanging healthcare information. Key aspects include:

* **Structured Data:** Medicine information is organized using FHIR resources, which are like building blocks for healthcare data.
* **Standard Terminologies:**  Codes and terms from established sources are used to ensure consistency and interoperability. 
* **Flexibility:**  The guide provides a baseline from which region-specific profiles can be developed to meet local requirements.

## 4. Contextual Factors and Design Decisions

* **Global Collaboration:** The guide was developed through collaboration between the HL7 Vulcan Accelerator's Electronic Product Information project team and the Innovative Medicines Initiative's (IMI) Gravitate-Health project.
* **Interoperability:** A consistent set of rules across jurisdictions is prioritized to promote interoperability and allow for standard evolution.
* **Accessibility:**  The guide encourages adherence to Web Content Accessibility Guidelines (WCAG) to make the information accessible to people with disabilities. 
* **Three Types of ePI Documents:** The guide defines three types of documents with varying levels of detail, allowing implementers to choose the appropriate type based on their needs.
