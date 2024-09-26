# HAI-LTCF: Analysis

## 1. Objectives

This implementation guide aims to standardize how long-term care facilities (LTCFs) electronically submit reports about healthcare-associated infections (HAIs) to the National Healthcare Safety Network (NHSN), a system run by the Centers for Disease Control and Prevention (CDC).  The goal is to make it easier and more efficient for LTCFs to send these reports directly from their electronic health record systems.

## 2. Previous Approaches and Limitations

Before this implementation guide, LTCFs submitted HAI reports to NHSN either by filling out paper forms or manually entering data on a website. These methods were time-consuming, prone to errors, and made it difficult to analyze data effectively.

## 3. Technical Approach

This implementation guide uses a technology called FHIR (Fast Healthcare Interoperability Resources) to define a standard way to structure HAI data. Specifically, it uses FHIR "Questionnaires" which are like digital versions of the paper forms used previously.  Software systems at LTCFs can use these Questionnaires to collect the necessary information and then automatically generate reports in a format that NHSN can understand.

## 4. Scope, Design Choices, and Context

*   **Scope:** This initial release of the guide focuses on two specific types of HAI reports:
    *   Monthly summary reports on infections caused by multidrug-resistant organisms (MDROs) and *Clostridioides difficile* (CDI).
    *   Individual event reports for each case of a lab-identified MDRO or CDI infection.
*   **Design Choices:** The guide utilizes FHIR Questionnaires to mirror the existing NHSN forms, making it easier for users to transition to the electronic format.  It also builds upon existing standards like the US Core Data for Interoperability (USCDI) to ensure data consistency.
*   **Context:** This guide was developed in parallel with a similar guide using a different standard called CDA (Clinical Document Architecture).  The two guides are intended to be aligned, meaning any changes to one will be reflected in the other.  The CDC remains the ultimate authority on NHSN reporting requirements. 
