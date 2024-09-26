# BSeR: Analysis

## 1. Objectives 

The BSeR implementation guide aims to standardize how healthcare providers exchange information when referring patients to other healthcare providers or community-based organizations for specific health conditions. It focuses on streamlining the referral process and ensuring only the necessary patient information is shared. This guide also facilitates the sharing of patient outcome reports back to the referring provider, creating a closed feedback loop for better care coordination. 

## 2. Current Practices and Limitations

Currently, referrals often involve sharing a patient's entire medical history, even if only a small portion is relevant to the referral. This practice raises privacy concerns and can be inefficient. Additionally, referring providers often lack a standardized way to receive updates on patient outcomes, making it difficult to track the effectiveness of referrals.

## 3. New Approaches

This IG introduces a standardized approach using the FHIR standard to structure referral information, ensuring only the necessary data is shared. It defines specific data requirements for common referral types like diabetes prevention, obesity, and tobacco cessation.  

**Technical Approach:**

* **Resource Profiles:** The IG uses FHIR resource profiles to specify the data elements required for each referral type, limiting information exchange to the minimum necessary. 
* **Workflow Management:**  The guide leverages FHIR resources like Tasks and Bundles to manage the referral workflow, track its status (e.g., created, accepted, completed), and link referral requests with feedback.
* **Transport Options:**  The IG supports both "push" and "notify and pull" mechanisms for exchanging referral information, accommodating various data exchange methods used in healthcare. 

## 4. Contextual Factors and Design Decisions

* **Minimum Necessary Standard:** The IG is designed to adhere to HIPAA's minimum necessary standard for sharing protected health information.
* **Provider Engagement:**  A key goal is to enhance provider engagement by enabling the sharing of patient outcomes and feedback. 
* **Collaboration:** The BSeR project collaborated with IHE and HL7 initiatives to ensure the guide's compatibility with existing standards and initiatives.
* **Extensibility:** The IG is designed to be adaptable for additional referral use cases in the future, ensuring its long-term relevance.
* **Use of US Core Profiles:** The guide leverages existing US Core FHIR profiles whenever possible, promoting interoperability and reducing implementation effort. 
