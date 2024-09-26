# CARINForDigitalInsuranceCard: Analysis

## 1. Objectives

This implementation guide aims to standardize how health insurance information, typically found on a physical insurance card, is represented and shared digitally. It focuses on enabling:

- **Digital display of insurance card information:** Instead of physical cards, patients can use a mobile app to display their insurance details to healthcare providers.
- **Sharing verifiable insurance cards:** Patients can receive a scannable QR code or a link (SMART Health Link) representing their insurance card, which they can store and share with providers. Providers can then verify the card's authenticity and access the information.

## 2. Current Practices and Limitations

Currently, patients primarily rely on physical insurance cards to prove their coverage. This poses challenges such as:

- **Lost or forgotten cards:** Patients may not have their card readily available when needed.
- **Manual data entry:** Providers manually enter information from physical cards, leading to potential errors and inefficiencies.
- **Lack of standardization:** Different payers use varying formats for insurance cards, making it difficult for apps and providers to process them consistently.

## 3. New Approaches

This IG introduces the following approaches:

- **FHIR-based data exchange:** It leverages the FHIR standard to represent insurance card data using resources like Coverage, Patient, and Organization. This ensures data consistency and interoperability.
- **Standardized profiles:** It defines FHIR profiles that specify how insurance card data elements should be mapped to FHIR resources. This promotes uniformity across different payers.
- **SMART Health Links:** It supports SMART Health Links, enabling the creation of verifiable, tamper-proof digital insurance cards that can be shared securely.

**Technical Approach:**

The IG defines specific FHIR profiles for Coverage, Patient, and Organization resources. These profiles include extensions to accommodate data elements not directly supported by the base FHIR resources. It also provides guidance on how to use these profiles to create FHIR bundles containing the insurance card information. For verifiable cards, these bundles are then packaged into SMART Health Cards, which can be referenced by SMART Health Links.

## 4. Contextual Factors and Design Decisions

- **Focus on US healthcare:** This IG is primarily designed for the US healthcare system and addresses data elements commonly found on US insurance cards.
- **Consumer-directed exchange:** It emphasizes empowering patients to access and control their insurance information.
- **Interoperability:** The use of FHIR promotes interoperability between different healthcare systems and applications.
- **Security and privacy:** The IG highlights the importance of adhering to HIPAA and other relevant regulations for protecting patient data.
- **80/20 rule:** It acknowledges that it doesn't cover all possible insurance card data elements and focuses on the most common ones.
- **Extensibility:** The use of FHIR extensions allows for future additions of data elements as needed.
- **SMART Health Cards:** The adoption of SMART Health Cards leverages an existing framework for verifiable credentials, ensuring wider adoption and interoperability with other health data.
