# CDA-core-sd: Analysis

## 1. Objectives

This implementation guide aims to make it easier to share and understand clinical documents, like medical records, between different computer systems. It does this by providing a standard way to structure these documents using a language called XML and by connecting the meaning of the information within the documents to a common medical model (HL7 RIM). This allows for better exchange and interpretation of clinical data, potentially leading to improvements in patient care, decision support, and research.


## 2. Current Practices and Limitations

Currently, clinical documents can be created and stored in various formats, leading to challenges when exchanging information between different healthcare providers or systems. These documents may be difficult to interpret or process automatically due to a lack of standardization. This can result in delays in care, errors in interpretation, and difficulties in conducting research or analysis across different datasets.


## 3. New Approaches

This implementation guide introduces a new approach by representing the Clinical Document Architecture (CDA) standard using FHIR (Fast Healthcare Interoperability Resources) StructureDefinitions. This allows for CDA documents to be validated using FHIR validators, providing a more modern and flexible approach to validation compared to traditional CDA schemas. Additionally, the guide incorporates approved extensions to CDA, further enhancing its capabilities. It also provides guidance on how to use FHIRPath to query and extract information from CDA documents.


## 4. Contextual Factors and Design Decisions

- **CDA remains the primary standard:** This guide is a representation of CDA using FHIR, not a replacement for CDA. Understanding CDA is still crucial.
- **Human readability is important:** CDA documents are designed to be human-readable, ensuring that healthcare providers can understand the information even without specialized software.
- **CDA is flexible and extensible:** The guide acknowledges that not all clinical information can be standardized. It provides mechanisms for extensions to accommodate local needs or specialized use cases.
- **Backward and forward compatibility:** The guide emphasizes the importance of maintaining compatibility with previous versions of CDA to ensure that older documents can still be processed and understood.
- **Security and confidentiality:** The guide highlights that applications using CDA are responsible for ensuring the security and confidentiality of the information, addressing legal requirements for authentication and data integrity.
- **Relationship with HL7 messaging:** CDA documents can be exchanged within HL7 messages, complementing existing messaging standards for healthcare information exchange.
- **Semantic interoperability:** The guide aims to improve the ability of different computer systems to understand the meaning of clinical information, but acknowledges that achieving full semantic interoperability is an ongoing effort.
