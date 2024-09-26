# CDA-IPS: Analysis

## 1. Objectives

This Implementation Guide (IG) aims to standardize the way electronic health records are extracted and shared across different countries and healthcare systems. It focuses on creating a minimal set of essential patient information, called the International Patient Summary (IPS), that can be easily understood by healthcare professionals anywhere in the world. The goal is to improve patient safety and care coordination, especially in situations like emergencies or when traveling abroad, by ensuring that healthcare providers have access to crucial patient data regardless of where the patient is from or what language they speak.

## 2. Current Practices and Limitations

Currently, sharing patient information across borders or even between different healthcare systems within a country can be challenging due to variations in how electronic health records are structured and coded. This lack of standardization can lead to delays in care, misinterpretations of patient data, and potential safety risks. Existing national patient summaries often have different data sets, formats, and terminologies, making it difficult to exchange information seamlessly.

## 3. New Approaches

This IG introduces a standardized way to represent the International Patient Summary using HL7 CDA R2, a widely recognized standard for clinical documents. It defines a set of templates that specify how different pieces of patient information, such as allergies, medications, problems, procedures, and immunizations, should be structured and coded within the CDA document. This ensures that the information is presented consistently and can be easily interpreted by healthcare systems that support CDA. Additionally, the IG provides guidance on how to handle language translations and code mappings to further enhance interoperability.

## 4. Important Context and Design Decisions

- **Minimal and Non-Exhaustive:** The IPS is designed to be minimal, focusing only on essential information needed for unplanned or emergency care. It is also non-exhaustive, recognizing that not all possible medical conditions or data elements can be included.
- **Specialty-Agnostic and Condition-Independent:** The IPS is not specific to any particular medical specialty or condition. It aims to provide a general overview of the patient's health status that is relevant to any healthcare professional.
- **Global Scope:** The IG aims to address global feasibility by considering different healthcare practices and terminologies worldwide.
- **Terminology Binding:** The IG emphasizes the use of international multilingual terminologies like SNOMED CT, LOINC, and UCUM for coding medical concepts, facilitating better understanding across different systems.
- **Open Templates:** The IG primarily uses open templates, allowing for flexibility and extensibility to accommodate future needs and specific use cases.
- **Provenance:** The IG includes provisions for documenting the source of the IPS information, including whether it was human-curated or software-assembled, enhancing trust and understanding of the data's origin.
- **Multilingual Support:** The IG recognizes the importance of language translation for effective communication and provides guidance on how to include translated designations and narratives within the IPS document.
