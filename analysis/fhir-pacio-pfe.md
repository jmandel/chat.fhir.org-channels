# fhir-pacio-pfe: Analysis

## 1. Objectives

This implementation guide (IG) aims to improve the way healthcare providers share information about a person's ability to perform daily activities and participate in their community. This includes things like their physical abilities (e.g., walking, eating), cognitive abilities (e.g., memory, communication), and the support they need to live independently. The goal is to make it easier for providers in different settings (hospitals, nursing homes, home health agencies) to share this information, leading to better coordinated care, less duplication of effort, and improved quality of life for patients.

## 2. Previous Approaches and Limitations

Previously, there was limited ability to electronically exchange data about a patient's functioning and engagement between healthcare providers in different settings. This lack of interoperability meant that: 
- Information was often lost during transitions between care settings, like when a patient moved from a hospital to a nursing home. 
- Providers in the receiving setting had to rely on incomplete information or repeat assessments that had already been done, leading to inefficient workflows and potential for errors. 

A 2020 study highlighted this issue, finding that nursing homes only received complete mental status information from hospitals 6% of the time during patient transitions.

## 3. Technical Approach

This IG introduces a standardized framework for exchanging observation data related to patient functioning and engagement using the FHIR standard. It leverages:
- **Observation Resource:** The core FHIR resource for representing observations about a patient.
- **Structured Data Capture:** A FHIR methodology for representing formal assessment instruments and questionnaires.
- **ICF Domains:** The International Classification of Functioning, Disability and Health (ICF) provides a standardized set of categories for classifying observations related to functioning. This IG uses ICF domains to organize and categorize observation data, making it easier to understand and use across different care settings.

Key features of the approach include:
- **Profiles:** The IG defines specific profiles for representing different types of observations, such as collections of observations (panels) and single observations (questions).
- **Value Sets:** The IG defines value sets that enumerate terminology codes for observations within each ICF domain.
- **Extensions:** The IG defines extensions to capture additional information relevant to post-acute care, such as the location where an observation was made and the devices used by the patient.

## 4. Scope and Design Choices

Important scope decisions and design choices include:
- **Focus on Post-Acute Care:** While relevant to other settings, the IG is primarily focused on enabling data exchange in the post-acute care setting.
- **Broad Scope:** The IG covers a wide range of observations related to functioning and engagement, encompassing physical, cognitive, and social domains.
- **Use of Existing Standards:** The IG leverages existing FHIR standards like Structured Data Capture and US Core, promoting consistency and reducing implementation burden.
- **No Guidance on Clinical Practice or Display:** The IG focuses solely on data exchange and does not provide guidance on how to collect the data or display it in software systems.

Contextual factors:
- **IMPACT Act:** This legislation mandates standardization and interoperability of patient assessments in post-acute care settings, providing a strong impetus for this IG.
- **Pacio Project:** A collaborative effort to advance interoperable health data exchange in post-acute care, which developed this IG.
- **Need for Interoperability:** The lack of interoperability in exchanging patient functioning data has significant negative impacts on care coordination and patient outcomes. This IG addresses a critical need in the healthcare ecosystem. 
