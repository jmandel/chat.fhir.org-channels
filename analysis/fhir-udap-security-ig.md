# FHIR UDAP Security IG: Analysis

## 1. Objectives

This implementation guide aims to improve the security and automation of how health data is shared between different organizations and apps, particularly those using the FHIR standard. It focuses on:

* **Standardizing how apps prove their identity:**  Moving away from simple shared secrets to stronger methods based on digital certificates and cryptographic keys.
* **Automating app registration:**  Making it easier for apps to register with systems they need to exchange data with, reducing manual effort.
* **Supporting different app types:**  Addressing the needs of both consumer-facing apps (like those on your phone) and apps used for communication between organizations (business-to-business).
* **Enabling user authentication across organizations:**  Allowing users to leverage their existing logins from one organization to access data held by another, when authorized.

## 2. Previous Approaches and Limitations

Previously, several FHIR IGs (Carequality, CARIN, DaVinci) used "UDAP" workflows to define how apps can access data securely. However, these approaches were not fully standardized, leading to potential inconsistencies and difficulties when different systems needed to interact.

This IG builds upon those previous efforts and aims to harmonize them, creating a common set of workflows that can be used across the healthcare ecosystem. It also introduces a formal way for business-to-business apps to communicate authorization details, which was lacking before.

## 3. Technical Approach

This IG extends the widely used OAuth 2.0 framework, specifically focusing on the authorization code flow (for consumer apps and some B2B scenarios) and the client credentials flow (for automated B2B apps).

Key technical aspects include:

* **JSON Web Tokens (JWTs):**  Used extensively for secure communication and identity assertions, including for client authentication and conveying authorization details.
* **Asymmetric Cryptography:**  Leveraging digital certificates and private keys to ensure strong authentication of apps and servers.
* **Dynamic Client Registration:**  Defining a standardized way for apps to automatically register with servers, reducing manual configuration.
* **Tiered OAuth:**  Enabling cross-organizational user authentication by allowing a server to rely on another trusted organization's identity provider to verify a user's identity.

## 4. Important Decisions and Contextual Factors

* **Alignment with ONC FAST Security Tiger Team:**  The IG's requirements are designed to support the recommendations of this taskforce, aiming for broader adoption and interoperability within the US healthcare context.
* **Compatibility with SMART App Launch:**  The IG strives for compatibility with the SMART App Launch framework, which is also widely used for authorizing apps to access health data.
* **Trust Communities:**  The IG recognizes the importance of trust communities and provides mechanisms for servers and clients to identify the community they are operating within, influencing certificate trust decisions and potentially other aspects of the workflows. 
* **Focus on Specific Grant Types:**  The IG primarily addresses authorization code and client credentials grant types, leaving out other OAuth flows for future consideration.
* **Preferred Formats for Identifiers and Codes:**  While encouraging the use of URIs for representing identifiers and codes within authorization details, the IG does not mandate them, allowing for flexibility within different communities.
