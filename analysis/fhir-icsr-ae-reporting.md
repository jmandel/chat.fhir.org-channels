# FHIR ICSR AE Reporting: Analysis

## 1. Objective

This implementation guide aims to improve the reporting of adverse events (side effects) following the use of biological products like vaccines and blood transfusions. It does this by enabling electronic health records (EHRs) to automatically detect potential adverse events and generate standardized reports that can be easily submitted to regulatory authorities like the FDA.

## 2. Previous Approaches and Limitations

Previously, adverse events were often underreported. The reports received by authorities also lacked sufficient detail for effective decision-making. Identifying adverse events relied heavily on manual efforts by healthcare practitioners, which was burdensome.

## 3. Technical Approach

This IG introduces a two-pronged approach:

**Detection:** It provides a set of algorithms, written in a language called Clinical Quality Language (CQL), that can analyze data in EHRs to identify potential adverse events. These algorithms are designed to be "claims comparable," meaning they can produce results similar to those obtained from analyzing medical billing data.

**Reporting:** It defines standardized templates (called "profiles") for creating comprehensive adverse event reports using FHIR (Fast Healthcare Interoperability Resources), a standard for exchanging healthcare information electronically. These templates ensure the reports include all the necessary data elements required by the FDA's Individual Case Safety Reports (ICSR) specifications.

## 4. Scope, Design Choices, and Context

- **Scope:** This IG focuses specifically on adverse events following vaccinations and blood transfusions.
- **Design Choices:**
    - The algorithms leverage structured data elements within EHRs, such as diagnosis codes, immunization records, and encounter types.
    - The reporting process utilizes the FHIR standard to ensure interoperability and ease of data exchange.
    - The IG aligns with the US Core FHIR profiles wherever possible, but introduces deviations to accommodate specific ICSR reporting requirements.
- **Context:** This work was developed as part of the FDA's BEST (Biologics Effectiveness and Safety) initiative, indicating its importance in enhancing biologics safety surveillance.
