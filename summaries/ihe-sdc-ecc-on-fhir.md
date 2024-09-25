**TL;DR:** This guide helps healthcare systems use data captured from electronic cancer protocols.

The "IHE SDC/eCP on FHIR" Implementation Guide (IG) specifies how to use data collected from electronic Cancer Protocols (eCPs) within the FHIR standard. This guide focuses on enabling the exchange of eCP data, which is typically collected using specialized forms, between different healthcare systems. 

This IG explains how to convert the data from these forms into FHIR resources, specifically Observations. Observations are used to represent individual questions and answers from the forms. This allows the data to be easily understood and used by other systems, such as Electronic Medical Records (EMRs) and cancer registries.

The guide also describes how to transport the eCP forms themselves within FHIR, allowing healthcare providers to share completed forms or blank forms for data collection. This can be useful for tasks like public health reporting, quality measurement, and auto-populating future forms with existing data. 

By standardizing the way eCP data is represented and shared, this guide aims to improve the accuracy, efficiency, and interoperability of cancer-related information exchange. This can ultimately benefit patients, healthcare providers, and public health organizations. 
