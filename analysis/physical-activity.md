# Physical Activity IG: Analysis

## 1. Objectives 

This Implementation Guide (IG) aims to improve how healthcare systems exchange information about patients' physical activity. It provides a standardized way to:

* **Record and share physical activity data:** This includes how much exercise patients do, the types of activities they engage in, and their experiences with these activities.
* **Manage referrals to fitness services:** This includes creating and tracking referrals from healthcare providers to personal trainers, gyms, or other fitness professionals.
* **Support patient engagement in physical activity:** This includes allowing patients to access their physical activity data, track their progress, and communicate with their healthcare providers.

## 2. Previous Approaches and Limitations

The IG doesn't explicitly describe how physical activity information was exchanged previously. However, it highlights limitations with existing approaches:

* **Lack of standardization:** There was no consistent way to represent physical activity data in FHIR, making it difficult to share this information between systems.
* **Limited support for referrals:** Current FHIR profiles for ServiceRequest did not adequately address the specific needs of physical activity referrals.
* **Challenges with patient engagement:** Patients often lacked access to their physical activity data and struggled to track their progress or communicate with their providers.

## 3. Technical Approach

The IG introduces the following approaches:

* **New FHIR profiles:** The IG defines new profiles for resources like CarePlan, Goal, ServiceRequest, Task, Observation, and DiagnosticReport to specifically address physical activity.
* **Temporary codes:** The IG introduces temporary codes for concepts not yet present in standard code systems like LOINC, ensuring comprehensive data capture.
* **Emphasis on RESTful interactions:** The IG emphasizes RESTful interactions for exchanging data between systems, enabling seamless interoperability.
* **Subscription notifications:** The IG leverages subscriptions to notify systems about changes to tasks, facilitating real-time communication between healthcare providers and service providers.

## 4. Scope, Design Choices, and Context

* **Focus on structured data:** The IG prioritizes the exchange of structured data using FHIR resources, enabling consistent interpretation and analysis.
* **Support for different service provider types:** The IG acknowledges varying capabilities of service providers, defining separate CapabilityStatements for "light" and "full" providers.
* **Patient-centered approach:** The IG emphasizes patient access to data and promotes patient involvement in setting and achieving physical activity goals.
* **Importance of interoperability:** The IG stresses the importance of seamless data exchange between different systems, enabling coordinated care.
* **Future US Core alignment:** The IG aims to align with future versions of US Core, ensuring its profiles are compatible with broader healthcare interoperability efforts.
