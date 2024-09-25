**TL;DR:** This guide helps computer systems share information about a fetus during pregnancy. It focuses on how to represent the fetus and related data like ultrasound results or medication orders in a standard way. 

The Pregnancy, Fetal and Child Health Record Implementation Guide (IG) defines how to handle information about a fetus before birth using the FHIR standard. It addresses the need for consistent ways to represent a fetus as a distinct individual in healthcare systems and exchange data about them between different systems, such as electronic health records (EHRs) and specialized systems like those used for ultrasound or lab results.

Currently, there's no single agreed-upon way to store or share fetus data. Some systems treat the fetus as part of the mother's record, while others may have separate but inconsistent methods. This IG aims to improve communication by providing guidelines on:

- **When to treat the fetus as a separate entity:** The guide recommends creating a separate record for the fetus when data specific to the fetus, like femur length or heart rate, is collected. 
- **How to identify the fetus:**  It suggests using a unique identifier for each fetus, especially in cases of multiple pregnancies, to ensure data is linked to the correct individual.
- **What data to link to the fetus:** Information directly related to the fetus, such as ultrasound findings or diagnoses, should be associated with the fetus's record. 
- **How to handle medication and procedures for the fetus:** The IG explains how to represent medication orders or procedures specifically intended for the fetus, ensuring clarity about the recipient of care.

This IG is primarily for software developers who build systems used in obstetrics and child health. It also helps healthcare providers and researchers understand how fetus data is exchanged. It's important to note that this IG focuses on the technical aspects of data exchange and doesn't address legal, ethical, or political issues surrounding fetal data. 

By promoting standardized ways to represent and exchange fetus information, this IG aims to improve communication and data sharing in healthcare, potentially benefiting both patients and healthcare providers during pregnancy. 
