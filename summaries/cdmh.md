**TL;DR:** This guide helps researchers access and use health data from different sources more easily.

The Common Data Models Harmonization (CDMH) FHIR Implementation Guide (IG) focuses on making it easier to access and use health data from different research networks. These networks often store their data in different formats, which can be difficult for researchers to work with. The CDMH IG provides a way to translate this data into a standard format called FHIR (Fast Healthcare Interoperability Resources).

**How does it work?**

The guide defines mappings between four common data models (CDMs) used by research networks and the FHIR standard. This means that data stored in any of these CDMs can be translated into FHIR. This makes it easier for researchers to:

* **Access data from multiple networks:** They can use the same tools and methods to access data from different sources, regardless of the original format.
* **Combine data from different sources:** They can more easily combine data from different networks to perform larger, more comprehensive studies.
* **Use standard FHIR tools:** They can leverage the growing ecosystem of FHIR tools and applications to analyze and visualize the data.

**Who benefits from this guide?**

The CDMH IG is primarily intended for researchers who work with large datasets of health information. It can also be useful for developers who build tools and applications for accessing and analyzing health data. By making it easier to work with data from different sources, the CDMH IG can help accelerate research and improve our understanding of health and disease.

**Limitations:**

The CDMH IG focuses on translating data into FHIR, but it does not address all aspects of data sharing and analysis. For example, it does not provide guidance on how to ensure data privacy and security. It also does not cover all possible data elements that might be found in the different CDMs. 

**Relationship to other guides:**

The CDMH IG complements the Data Access Framework Research (DAF-Research) IG, which provides a broader framework for accessing and using health data. The DAF-Research IG outlines workflows for extracting data from electronic health records (EHRs), populating CDMs, and querying the data using FHIR. The CDMH IG provides the specific mappings needed to translate data from the CDMs into FHIR.
