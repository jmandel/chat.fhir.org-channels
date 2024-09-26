# NHSN ADE FHIR IG: Analysis

## 1. Objectives

This implementation guide aims to standardize how hospitals electronically report data about patients experiencing low or high blood sugar (hypoglycemia or hyperglycemia) while in the hospital. This data will help the CDC's National Healthcare Safety Network (NHSN) track these events, identify trends, and ultimately improve patient safety and the quality of care related to blood sugar management in hospitals. 

## 2. Previous Approaches and Limitations

Previously, there wasn't a standardized, electronic way for hospitals to report this data to NHSN. While there were quality reporting metrics defined by the National Quality Forum (NQF) related to hypo- and hyperglycemia, the process for collecting and submitting data was not streamlined. This lack of standardization made it difficult to compare data across hospitals and identify areas for improvement on a national scale.

## 3. Technical Approach

This IG introduces a standardized approach using the FHIR (Fast Healthcare Interoperability Resources) standard, a modern way to exchange healthcare information electronically. It defines how hospitals should structure the data about blood sugar levels, medication administration, and relevant patient information (diagnoses, procedures, etc.) using FHIR resources. This allows hospitals to electronically send this data to NHSN in a consistent format that can be easily processed and analyzed.

Specifically, the IG leverages FHIR Composition resources to package together all relevant patient data for each encounter. It also defines specific data elements and their formats to ensure consistency across different hospital systems. 

## 4. Important Decisions and Factors

* **Scope:** The IG focuses specifically on hypo- and hyperglycemia events that occur during inpatient hospital stays. It excludes events that only happen in outpatient settings.
* **Data Granularity:** The IG requires reporting data at the individual patient level, including each blood glucose measurement and medication administration. This allows for more detailed analysis compared to aggregate reporting.
* **Focus on Linked Data:** The IG emphasizes the importance of linking blood glucose data with medication administration data, allowing for analysis of the relationship between medications and blood sugar fluctuations.
* **Alignment with Existing Standards:** The IG aligns with existing quality reporting metrics from NQF, ensuring that the data collected is relevant to national quality improvement efforts.
* **Reliance on EHRs:** The IG is designed to enable hospitals to use their electronic health records (EHRs) as the source system for reporting data, streamlining the data collection process. 
