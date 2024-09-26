# CDMH FHIR Implementation Guide: Analysis

## 1. Objectives

This implementation guide aims to make it easier for researchers to access and use health data from different sources. Currently, health data is often stored in different formats, making it difficult to combine and analyze. This guide defines a way to translate data from four common health data formats into a standard format called FHIR. This will make it easier for researchers to access and analyze data from different sources, ultimately leading to better research and improved healthcare.

## 2. Current Practices and Limitations

Currently, researchers often need to develop custom solutions to access and analyze data from different sources. This can be time-consuming, expensive, and error-prone. Additionally, the lack of a standard format for health data makes it difficult to share and compare data across different studies. These limitations hinder research progress and the ability to draw broader conclusions from multiple datasets.

## 3. New Approaches and Technical Approach

This implementation guide introduces a new approach by defining mappings between four common health data formats (Sentinel, PCORnet CDM, i2b2, and OMOP) and the FHIR standard. It leverages existing standards like US Core profiles and BRIDG (Biomedical Research Integrated Domain Group) as an intermediary model. The guide provides detailed instructions on how to translate data elements from each format into FHIR resources, including how to handle specific data types like dates, times, and vocabulary mappings. This standardized approach simplifies data access and analysis for researchers.

## 4. Important Contextual Factors and Design Decisions

- **Focus on Observational Data:** The guide primarily focuses on observational data used for research, rather than clinical data used for direct patient care.
- **Role of BRIDG:** The project uses BRIDG as an intermediary model for mapping between different formats and FHIR. This decision was made due to BRIDG's well-defined semantics and its existing use for data submission to the FDA.
- **Future Use of FHIR as Intermediary:** The guide suggests that FHIR might be considered as an intermediary model in future phases of the project.
- **Relationship with DAF-Research:** The CDMH IG complements the DAF-Research IG, which outlines broader workflows for data extraction and querying.
- **Emphasis on Open Source Translators:** The guide encourages the development of open-source tools to automate the data translation process.

Understanding these factors and decisions is crucial for effectively implementing and utilizing this implementation guide. 
