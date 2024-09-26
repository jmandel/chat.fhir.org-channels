# Pregnancy, Fetal and Child Health Record: Analysis

## 1. Objectives

This implementation guide aims to establish clear guidelines for handling data related to a fetus during pregnancy within healthcare systems. Its main goal is to improve communication of fetal data between different healthcare systems, such as those used by hospitals, ultrasound clinics, and labs. This will be achieved by providing specific instructions on how to represent and exchange fetal information using the FHIR standard, ensuring that all systems can understand and process this data consistently.

## 2. Previous Approaches and Limitations

Before this IG, there was no standard way to represent a fetus in healthcare systems. Some systems stored fetal data as part of the mother's record, while others used different approaches. This lack of consistency created challenges when exchanging information between systems, making it difficult to track fetal data across different care settings and hindering research efforts. The absence of a universal approach also made it difficult to compare data from different sources, limiting the ability to analyze trends and outcomes related to fetal health.

## 3. Introduced Approaches and Technical Approach

This IG introduces the concept of representing a fetus as a simplified "Patient" resource within the FHIR standard. This is achieved through a specific extension called "Patient with fetal status extension." This extension allows systems to recognize and handle fetal data as a distinct entity, separate from the mother's information. The IG provides detailed guidance on how to use this extension, including how to identify the fetus, relate data to the correct subject (mother, fetus, or pregnancy), and use existing FHIR resources (like observations, procedures, and conditions) to record fetal-specific information.

## 4. Important Contextual Factors and Design Decisions

- **Choice of FHIR Patient Resource:** The decision to extend the existing "Patient" resource, rather than creating a new one, was made to leverage the existing capabilities of FHIR and ensure compatibility with other resources that already use "Patient" as a subject.
- **Fetal Identification:** The IG recommends using persistent identifiers for fetuses throughout the pregnancy, even across different healthcare settings. This helps to track the fetus and its associated data consistently. Different identification methods are discussed, acknowledging that implementation may vary based on local practices.
- **Data Linkage:** While the IG focuses on data exchange, it acknowledges the importance of data storage and linkage. It suggests a model where fetal data can be linked to the mother's record, even if stored separately. This approach promotes data reuse and avoids unnecessary data duplication.
- **Scope Limitations:** The IG explicitly excludes legal, religious, or political considerations related to fetal data. Its focus is solely on the technical aspects of data handling within the healthcare context. Additionally, it does not dictate how data should be stored within individual systems, recognizing that different approaches may exist. 
- **Impact on Child Health Systems:** Implementing this IG requires that systems involved in child health and obstetrics can understand and process the "Patient with fetal status extension." This may necessitate updates to existing systems to ensure compatibility.
- **Relationship to Vital Statistics:** The IG recognizes the importance of national guidelines for birth and fetal death reporting. It aims to complement, rather than replace, these guidelines and emphasizes that data should be reported according to national requirements.
