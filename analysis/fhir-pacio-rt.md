# Re-Assessment Timepoints: Analysis

## 1. Objectives

This implementation guide aims to improve how healthcare data is organized and accessed for patients receiving long-term care in settings like home health and skilled nursing facilities. It introduces a way to break down extended care admissions into smaller, more manageable chunks of time called "re-assessment timepoints." This makes it easier for clinicians, insurance companies, and others to find the specific patient information they need without having to sift through months or years worth of data.

## 2. Previous Approaches and Limitations

Previously, there was no standard way to structure data for long-term care admissions in FHIR. This meant that anyone wanting to access a patient's information had to go through all the data for the entire admission, even if they only needed information from a specific period. This was inefficient and made it difficult to track changes in a patient's condition and care plan over time. 

## 3. Technical Approach

The IG introduces the concept of "re-assessment timepoints," which are defined by formal assessments that happen at specific intervals during a patient's care. These assessments could be driven by regulations, payer requirements, or internal processes. Each timepoint is represented as a separate Encounter resource, linked to the main Encounter resource for the overall admission. This creates a timeline of smaller Encounters within the larger Encounter, allowing users to easily focus on specific periods of the patient's care. Additionally, the IG encourages linking clinical data, like observations and impressions, to specific timepoints. This ensures that the data is organized chronologically and reflects the patient's progress over time.

## 4. Scope Decisions, Design Choices, and Contextual Factors

* **Choice of Encounter Resource:** The IG uses the Encounter resource to represent re-assessment timepoints. This decision was made after consultation with various stakeholders and is based on the Encounter resource's ability to represent a period of time during which a patient receives care.
* **Focus on Post-Acute Care:** The IG is specifically designed for long-term care settings like home health and skilled nursing facilities. This is because these settings typically have extended admissions with multiple assessments that naturally define timepoints.
* **Data Linking:** The IG emphasizes the importance of linking clinical data to specific timepoints. This is done through references and extensions, ensuring that all relevant information is connected and easily retrievable.
* **Search Parameters:** The IG defines mandatory and optional search parameters to facilitate querying for re-assessment timepoints. This allows users to easily find timepoints based on various criteria, such as the patient, date range, or type of assessment.
* **US Core Alignment:** The IG builds upon the US Core Implementation Guide, ensuring that it aligns with existing standards and practices for healthcare data exchange in the US.
