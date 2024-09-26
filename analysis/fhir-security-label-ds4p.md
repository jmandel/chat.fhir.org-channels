# FHIR DS4P: Analysis

## 1. Objectives 
This implementation guide (IG) aims to improve the sharing of health information by providing a standardized way to label sensitive data within FHIR (a standard for exchanging healthcare information electronically). This allows healthcare providers to share information more readily while still protecting sensitive parts of a patient's record, moving away from an all-or-nothing approach to sharing. It also helps ensure that recipients of the information understand how sensitive it is and how they should handle it.

## 2. Previous Approaches and Limitations

Previously, standards for applying security labels existed for older data formats like HL7 Version 2 and CDA documents. However, FHIR, a newer and increasingly popular standard, needed its own guidance for security labeling. Existing FHIR mechanisms allowed for basic security labels but lacked the ability to:

*   Distinguish between labels applied under different policies (e.g., a patient consent directive vs. a law).
*   Identify who assigned a label.
*   Reference related documents like consent forms or the source of the information.
*   Require a visual indicator of the label's presence to be shown to users.
*   Apply labels to specific parts of a record rather than the entire record.

## 3. Technical Approach

This IG expands on FHIR's existing security labeling capabilities by introducing:

*   **Extensions:** Standardized ways to add extra information to security labels, such as the policy behind it, who assigned it, and related documents.
*   **Inline Security Labels:** The ability to apply labels to specific data elements within a FHIR resource (e.g., labeling a social security number as highly sensitive within a patient record).
*   **High Water Mark Labels:** A mechanism to represent the highest overall sensitivity of a collection of resources, even if individual parts have different labels.
*   **Value Sets:** Standardized lists of codes to represent different types of sensitivity (e.g., confidentiality levels), purposes of use (e.g., treatment, research), and obligations for handling the data (e.g., do not redisclose).
*   **Security Labeling Service:** A conceptual component that can automatically assign labels based on policies and rules.

## 4. Scope Decisions, Design Choices, Contextual Factors

*   **Policy Agnostic:** The IG does not define specific policies but provides a framework for implementing a wide range of policies.
*   **Focus on US Realm:** While aiming for broader applicability, the current version primarily uses examples and terminology relevant to the US healthcare system.
*   **Trust and Enforcement:** The IG emphasizes the importance of trust agreements between senders and receivers to ensure that security labels are understood and enforced consistently.
*   **Roadmap for Future Development:** The IG outlines plans for future enhancements, including support for attribute-based access control, formal trust contracts, and more sophisticated ways to define and share security policies.
*   **Intended as a Foundation:** The IG is intended to be a starting point for more specific implementation guides tailored to particular use cases and policy environments.
