# FHIR SHC Vaccination IG: Analysis

## 1. Objectives

This implementation guide (IG) aims to standardize how digital health records, specifically vaccination and infectious disease laboratory test results, are represented in SMART Health Cards. These cards are designed to be easily scannable and verifiable, making it simpler for individuals to share their health information with various entities like airlines, schools, or event organizers. The goal is to ensure that these records are consistent, secure, and easily understandable by both issuers (healthcare providers) and verifiers (those who need to check the records).

## 2. Previous Approaches & Limitations

The IG doesn't explicitly detail previous approaches for handling vaccination or test result records. However, it highlights limitations of general-purpose FHIR endpoints and canonical clinical data representations for this specific use case. The key constraints are:

* **Limited size:** SMART Health Cards need to fit within a single QR code, restricting the amount of data that can be included.
* **Privacy concerns:** Unnecessary personal information should be minimized to protect patient privacy, especially since SMART Health Cards are shared outside traditional clinical settings.
* **Verification focus:** The IG prioritizes representing clinical history for easy verification of vaccination or test status, rather than complex risk evaluation or decision support.

## 3. Technical Approach

The IG achieves standardization through:

* **FHIR Profiles:** It defines specific profiles for FHIR resources like Patient, Immunization, and Observation, constraining the data elements and terminologies used.
* **Data Minimization:** Two profile sets, "Primary" (DM) and "Fallback" (AD), are provided. DM profiles enforce strict data minimization for optimal QR code size and privacy, while AD profiles allow more data if absolutely necessary.
* **Terminology Binding:** Value sets for key elements like vaccine codes are "required," ensuring consistent coding across implementations.
* **Bundle Profiles:** The IG profiles FHIR Bundles to structure the collection of resources within a SMART Health Card.

## 4. Scope, Design Choices & Context

* **Focus on Pandemic Response:** The primary use case is representing vaccination and test status for infectious diseases, particularly relevant in outbreak/pandemic situations.
* **Internationalization:** While including US-specific profiles, the IG is designed for international use, encouraging other jurisdictions to define their own profiles.
* **Data Minimization & Privacy by Design:** These principles are central, emphasizing the omission of non-essential data and highlighting potential privacy risks of including sensitive information.
* **Conformance Flexibility:** The IG acknowledges that strict adherence to DM profiles might not always be feasible, allowing fallback to AD profiles with justifications.
* **Community-Driven Terminology:** The IG leverages the "terminology.smarthealth.cards" resource for up-to-date value sets, promoting community involvement in terminology management.
