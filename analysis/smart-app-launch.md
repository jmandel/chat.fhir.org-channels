# SMART App Launch: Analysis

## 1. Objectives

The SMART App Launch Implementation Guide (IG) aims to make it easier for independent software applications ("apps") to securely connect with and access health data stored in electronic health record (EHR) systems. This way, developers can create apps that work seamlessly across different EHRs, and users (patients, clinicians, etc.) can benefit from a wider range of health IT tools.

## 2. Previous Approaches and Limitations

Before SMART App Launch, there wasn't a consistent, secure way for apps to integrate with EHRs. This made it difficult for developers to create apps that could work with multiple EHR systems, limiting user choice and innovation.

## 3. Technical Approach

SMART App Launch leverages the following standards-based approaches:

* **OAuth 2.0**: A widely used framework for authorization, allowing users to grant apps limited access to their health data without sharing their EHR login credentials.
* **FHIR (Fast Healthcare Interoperability Resources)**: A standard for exchanging healthcare information electronically, ensuring data is structured and understood across different systems.

SMART App Launch defines specific workflows for:

* **App Registration**: Apps register with an EHR's authorization server, establishing trust and defining the app's capabilities.
* **App Launch**: Apps can be launched from within an EHR session or independently.
* **Authorization**: Apps request specific permissions (scopes) to access data, which the user can approve or deny.
* **Data Access**: Authorized apps use secure tokens to access FHIR APIs and retrieve data.

## 4. Scope Decisions, Design Choices, and Contextual Factors

* **Support for Public and Confidential Clients**: SMART App Launch recognizes different app architectures and security capabilities, offering profiles for both public (less secure) and confidential (more secure) apps.
* **Emphasis on Security**: The IG prioritizes security, requiring apps to support measures like Proof Key for Code Exchange (PKCE) to prevent authorization code interception.
* **Granular Scopes**: SMART enables fine-grained control over data access, allowing apps to request specific permissions based on FHIR resource types and search parameters.
* **Launch Context**: The IG supports passing contextual information (e.g., current patient, encounter) to apps, facilitating a smoother user experience.
* **Token Introspection**: Enables resource servers to validate and understand the permissions associated with access tokens, promoting a more decoupled architecture.
* **User Access Brands**: Provides a standardized way for EHR providers to publish branding information, helping users easily identify and connect to their healthcare providers.
* **App State**: An experimental capability allows apps to persist limited configuration data within an EHR.

The IG acknowledges potential security and privacy concerns and provides guidance for both app developers and EHR implementers to mitigate risks. It also addresses practical considerations like scope size limitations and extensibility for future features.
