# SMART Health Cards and Links: Analysis

## 1. Objectives

This implementation guide aims to enable secure and verifiable sharing of patient health information digitally. It defines standards for creating and sharing digital health records, such as vaccination records, test results, and insurance information, using QR codes, mobile apps, or web browsers. The goal is to empower individuals with easy access to and control over their health data while ensuring its authenticity and privacy.

## 2. Previous Approaches and Limitations

Traditionally, health information was primarily stored and shared in paper form. This approach had several limitations:

* **Loss and Damage:** Paper records are easily lost, damaged, or destroyed.
* **Authentication:** Verifying the authenticity of paper records is difficult.
* **Accessibility:** Individuals often don't have their paper records readily available when needed.

## 3. Introduced Approaches

This IG introduces two main standards:

* **SMART Health Cards:** These are digitally signed, tamper-proof credentials containing a patient's health information, such as vaccination history or test results. They can be stored as a digital file, printed on paper with a QR code, or added to a mobile wallet.
* **SMART Health Links:** These are secure links that provide access to a larger set of health information than can fit on a single Health Card. They can be used to share dynamic information that evolves over time, like recent lab results, or to grant access to a patient's entire medical record via a FHIR API.

**Technical Approach:**

Both standards leverage FHIR (Fast Healthcare Interoperability Resources) to represent patient health data in a standardized way. They use JSON Web Signatures (JWS) for cryptographic signatures to ensure data integrity and authenticity. Public keys are published in a JSON Web Key Set (JWKS) to enable verification. 

**Key Features:**

* **Data Minimization:** The standards allow for sharing only the minimum necessary information for a specific use case.
* **Granular Sharing:**  Issuers are encouraged to create separate Health Cards for distinct data elements to facilitate granular sharing.
* **Revocation:**  Health Cards can be revoked to invalidate them if needed.
* **Security and Privacy:**  The standards prioritize security and privacy through encryption, passcode protection, and limited-time access options.

## 4. Important Decisions and Contextual Factors

* **Trust Frameworks:** The IG is designed to work independently of any specific trust framework, allowing flexibility for different jurisdictions and use cases.
* **QR Code Size Limitations:**  The size of Health Cards intended for QR code presentation is limited to ensure scannability.
* **Expiration Dates:**  Health Cards generally don't expire, but an optional expiration date can be set for specific use cases.
* **FHIR API Integration:**  The `$health-cards-issue` operation allows for seamless integration with FHIR-enabled systems.
* **Deep Linking:**  App-specific deep links enable easy import of Health Cards into mobile wallets.
* **Long-term Sharing and Updates:**  SMART Health Links support long-term sharing of data that can be updated over time.
* **Passcode Protection:**  SMART Health Links can be protected with a passcode for increased security.
* **Encryption:**  SMART Health Links use encryption to protect data confidentiality even when stored on untrusted servers.
