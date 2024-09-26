# PDDI-CDS: Analysis

## 1. Objectives

This implementation guide (IG) aims to improve how electronic health records (EHRs) alert doctors about potential drug-drug interactions (PDDIs). The goal is to make these alerts more relevant and useful for doctors, so they can make better decisions about prescribing medications.

## 2. Previous Approaches and Limitations

Previously, PDDI alerts were often ignored by doctors because they were too general and didn't consider the patient's specific situation. This was because these alerts were based on simple comparisons of drug pairs without looking at other relevant patient data. This led to a high number of irrelevant alerts, causing alert fatigue and making it more likely for doctors to miss important warnings.

## 3. Technical Approach

This IG introduces a new approach to PDDI alerts using modern health information technology standards like FHIR, CDS Hooks, and CQL. It suggests:

- **Contextualized Alerts:** Using patient data from the EHR to make PDDI alerts more specific to the individual patient.
- **Early Alerts:** Providing alerts earlier in the medication ordering process, giving doctors actionable information while they're making prescribing decisions.
- **Actionable Suggestions:** Offering specific recommendations to doctors, such as substituting a drug or adding a protective medication.
- **Standardized Knowledge:**  Using a common language (CQL) to represent PDDI knowledge, making it easier to share and update.

## 4. Scope Decisions, Design Choices, and Contextual Factors

- **Focus:** This IG focuses solely on drug-to-drug interactions, excluding interactions with vitamins, herbs, and food for now.
- **CPOE Workflow:** The IG describes two scenarios for PDDI alerts: at the time of drug selection (`order-select`) and at the time of order signing (`order-sign`).
- **Remote Service:** It assumes a real-time remote service model for CDS, where the EHR requests CDS from a separate service.
- **Prefetch:** It emphasizes the use of "prefetch" queries to gather relevant patient data before requesting CDS, improving performance.
- **Coordination:** It proposes advanced functionality to prevent alert duplication between `order-select` and `order-sign`, giving the EHR control over filtering.
- **Configuration Options:** It suggests using configuration options to customize PDDI CDS to specific clinical environments and user preferences. 
- **Break the Glass:** It recommends procedures for handling situations where the CDS service might need to access sensitive patient information masked from the ordering clinician.
- **Clinical Expertise:** The IG stresses the importance of involving practicing clinicians in configuration decisions to balance safety and alert fatigue. 
