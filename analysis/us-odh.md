# Occupational Data for Health (ODH) FHIR IG: Analysis

## 1. Objectives 

This Implementation Guide aims to standardize how we represent and share information about people's work in healthcare systems. This includes details about their current and past jobs, usual work, and work-related factors that might be relevant to their health. By having a common way to store and exchange this information, the guide hopes to improve healthcare in several ways:

* **Better Clinical Care:** Doctors can make more informed decisions about a patient's treatment when they have access to relevant work information (e.g., potential exposure to hazards).
* **Population Health Management:** Healthcare organizations can identify groups of patients with similar work-related risks and develop targeted interventions.
* **Public Health Reporting:**  Standardized work information can be used to track and analyze work-related illnesses and injuries, leading to better prevention strategies.

## 2. Previous Approaches and Limitations

Previously, there was no standard way to represent work information in healthcare systems. This lack of standardization made it difficult to share and use this information effectively.  Doctors often relied on incomplete or unstructured data, which could hinder their ability to provide the best care. For example, recognizing work-related illnesses that develop over time can be challenging without a comprehensive work history.

## 3. Approach 

This IG introduces a standardized set of data elements and structures, called "profiles", for representing work information using the HL7 FHIR standard. FHIR (Fast Healthcare Interoperability Resources) is a modern standard for exchanging healthcare information electronically. 

**Technical Approach:**

The IG defines FHIR profiles based on the FHIR "Composition" resource. These profiles specify which data elements are needed to describe different aspects of a person's work, like their job title, industry, work schedule, and potential hazards. The profiles also define how this information should be structured and encoded, making it easier for different systems to understand and exchange it.

## 4. Scope, Design Choices, and Context

**Scope:**

* The IG focuses on work information relevant to clinical care, population health, and public health reporting. It's not designed for administrative or billing purposes.
* It covers various aspects of work, including employment status, job details, work schedule, hazards, and usual occupation.
* It can also capture work information about a patient's household members, which might be relevant to their health (e.g., secondhand smoke exposure).

**Design Choices:**

* The IG uses FHIR R4.0.1, the latest version of the FHIR standard at the time of its development.
* It leverages existing FHIR resources like "Observation" and "Condition" to represent some work-related information.
* It defines specific value sets (controlled vocabularies) for key data elements like occupation and industry to ensure consistency.

**Context:**

* The IG was developed by the National Institute for Occupational Safety and Health (NIOSH) in collaboration with clinical, public health, and health IT experts.
* It was sponsored by the HL7 Public Health and Emergency Response Work Group, indicating its importance for public health applications.
* The IG acknowledges that it includes more detailed occupational data than typically collected in current systems, aiming to support more comprehensive and informed healthcare. 
