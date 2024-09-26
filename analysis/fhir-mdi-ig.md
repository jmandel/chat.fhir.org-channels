# MDI (Medicolegal Death Investigation) FHIR IG: Analysis

## 1. Objectives 

This implementation guide aims to standardize the exchange of information related to death investigations in the United States. It focuses on enabling different computer systems used by medical examiners, coroners, laboratories, and vital records offices to seamlessly share information. This will help improve the timeliness and accuracy of death investigations, ultimately benefiting public health and safety efforts.

## 2. Previous Approaches and Limitations 

Before this IG, information exchange between organizations involved in death investigations relied heavily on outdated methods like paper and fax. This lack of standardization and interoperability created obstacles to efficient data sharing, hindering timely investigations and research.

## 3. Technical Approach 

The MDI IG leverages the FHIR (Fast Healthcare Interoperability Resources) standard, a modern approach to healthcare data exchange. It defines specific FHIR profiles, extensions, and value sets tailored to the needs of death investigations. This ensures that information is structured and exchanged in a consistent manner across different systems. The IG supports various data exchange methods including RESTful APIs, document bundles, and message bundles, providing flexibility for different system implementations. 

## 4. Scope and Design Choices 

This IG prioritizes certain key dataflows: 
* Sharing death investigation findings between medical examiner/coroner offices and vital records offices.
* Transmitting forensic toxicology results from laboratories to medical examiner/coroner offices.
* Facilitating the exchange of PDF reports within the death investigation community.

The IG acknowledges the wide variability in existing information systems and therefore adopts a flexible design with minimal mandatory requirements but numerous "must support" elements. This allows for broader adoption while encouraging standardization.

Important contextual factors include:

* The IG is developed within the US realm and aligns with the US Core FHIR profiles, ensuring compatibility with the broader US healthcare data exchange ecosystem. 
* It recognizes the role of the Vital Records Death Reporting (VRDR) IG for reporting deaths to the National Center for Health Statistics (NCHS), positioning the MDI IG as supporting upstream dataflows.
* The IG acknowledges the need for further development to support additional dataflows and expand relevant terminologies, particularly for forensic toxicology results. 
