# FHIR sIRB: Analysis

## 1. Objectives

This implementation guide (IG) aims to standardize the way research study forms are exchanged between different institutions involved in multi-site clinical research studies. Specifically, it focuses on streamlining the process of using a single ethics review board (sIRB) for studies that span multiple locations. The goal is to make it easier and faster to get approval for research studies and start enrolling participants, ultimately accelerating the development of new treatments.

## 2. Previous Approaches and Limitations

Previously, research study forms were often exchanged as PDFs or other document formats through email or online platforms. This process was inefficient and prone to errors because it relied heavily on manual tasks like printing, scanning, and re-typing information. This lack of standardization and automation led to delays in study initiation and increased the workload for research staff. The limitations of these ad-hoc methods prompted the development of this IG to create a more streamlined and efficient process.

## 3. Technical Approach

This IG introduces a standardized approach to creating and exchanging research study forms using the Fast Healthcare Interoperability Resources (FHIR) standard. FHIR is a modern healthcare data exchange standard that allows for structured, machine-readable data. The IG defines a set of FHIR questionnaires that represent common research study forms, such as protocol applications, consent forms, and adverse event reports. These questionnaires can be rendered into user-friendly forms that researchers can fill out electronically. The completed forms are then stored as FHIR QuestionnaireResponse resources, which can be easily exchanged between different systems. 

The IG also leverages the "populate" functionality of FHIR questionnaires to reduce data entry burden. This feature allows common data elements, like study title and principal investigator information, to be entered once and automatically populated into other relevant forms.

## 4. Important Decisions and Factors

* **Scope:** The IG focuses on the creation and exchange of standardized forms, not on the extraction and integration of data into existing research study management systems. This decision was made to keep the implementation burden low, particularly for smaller institutions that may not have sophisticated IT infrastructure.
* **Design Choice:** The IG utilizes a "contained" reference approach for resources like PlanDefinition and Practitioner in the optional ResearchStudy resource. This means that the necessary information is embedded within the ResearchStudy resource itself, rather than referencing external resources. This simplifies implementation but may limit interoperability with other systems in the future.
* **Contextual Factors:** The IG recognizes that some institutions may not have FHIR servers or the resources to implement complex FHIR solutions. It therefore aims to provide a low-barrier entry point for adopting the standardized forms, even for institutions with limited technical capabilities.
* **Future Considerations:** The IG acknowledges the potential for future integration with existing research study management systems. It also suggests that more complex FHIR resources and workflows may be considered as the IG matures and institutions gain more experience with using FHIR for research study management. 
