**TL;DR:** This guide helps healthcare providers send patient information to medical registries more easily.

The FHIR Registry Protocols Implementation Guide (IG) defines a standardized way for healthcare providers to electronically submit patient data to medical registries. Medical registries collect information about patients with specific conditions to improve healthcare and research. 

This guide addresses the challenge of collecting and formatting patient data from different computer systems used by healthcare providers. It provides a common way for registries to describe what data they need. This makes it easier for healthcare providers to find the right information in their systems and automatically format it for submission to the registry.

The guide uses a "logical model" to map the data needed by the registry to standard healthcare data formats like FHIR resources, CDA documents, and HL7 V2 messages. This means that healthcare providers can use their existing systems to extract the necessary data without manual data entry. 

The guide also specifies how to package the collected data into a FHIR "Bundle" for submission. This ensures that the information is organized and sent to the registry in a way that can be easily processed. 

By standardizing the way healthcare providers submit data to registries, this guide aims to streamline the process, improve data quality, and reduce the burden on healthcare providers. This allows for better healthcare decisions and more effective research. 
