# FHIR Identity Matching IG: Analysis

## 1. Objectives

This implementation guide (IG) aims to improve how healthcare systems match patient records across different organizations. It does this by:

- Providing clear guidelines on verifying patient identities to ensure data accuracy.
- Defining best practices for requesting and responding to patient matches using FHIR standards.
- Introducing the concept of "Digital Identifiers" to improve match accuracy and streamline data exchange.

In simple terms, the IG helps healthcare organizations accurately and securely share patient information, reducing errors and improving patient care.

## 2. Previous Approaches and Limitations

Previously, patient matching relied heavily on demographic information like name and date of birth. This method often resulted in errors due to data inconsistencies, typos, and name changes. Research highlighted the need for higher-quality demographics and standardized identity verification processes to improve matching accuracy.

## 3. Introduced Approaches

This IG introduces the following approaches:

- **Identity Assurance Levels (IALs):** Defines levels of confidence in a patient's claimed identity based on the strength of evidence used for verification.
- **Digital Identifiers:**  Globally unique identifiers tied to a verified identity, improving match accuracy and enabling secure authentication.
- **Patient Weighted Input Information:** Assigns weights to different patient attributes, allowing systems to assess the quality of match requests and prioritize results.
- **Consumer Match:** Establishes stricter requirements for matching when patient data is shared outside HIPAA Covered Entities, ensuring higher confidence in identity verification.
- **Standardized FHIR Profiles:** Defines specific profiles for the Patient resource and the $match operation, ensuring consistency and interoperability in match requests and responses.

## 4. Scope Decisions and Design Choices

- **Focus on cross-organizational matching:**  The IG primarily addresses matching between different healthcare organizations, not within a single system.
- **Prioritization of Digital Identifiers:**  Encourages the adoption of Digital Identifiers as the preferred method for matching, aiming for a future where they become widely used.
- **Emphasis on identity verification:**  Stresses the importance of robust identity verification processes to ensure the accuracy of data used for matching.
- **Consideration for health equity:**  Provides alternative methods for verifying identities when traditional evidence (like a home address) may be unavailable.
- **Alignment with NIST standards:**  Adopts and adapts NIST guidelines for digital identity and authentication, ensuring compliance with established security practices.
- **Open for future evolution:**  Acknowledges the need for ongoing refinement and invites feedback on areas like exception handling, benchmarking, and the use of AI and referential matching. 
