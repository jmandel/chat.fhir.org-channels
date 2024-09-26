# Post-Acute Orders (PAO) FHIR IG: Analysis

## 1. Objectives

This implementation guide aims to create a standardized way for healthcare providers to electronically exchange orders for services and equipment needed by patients after they leave an acute care setting (e.g., hospital). This includes things like durable medical equipment (e.g., wheelchairs, oxygen tanks), medications associated with that equipment, and home health services. The goal is to make the ordering process faster, more efficient, and less prone to errors, ultimately helping patients get the care they need sooner.

## 2. Previous Approaches and Limitations

Currently, there's no widely accepted standard for exchanging post-acute care orders. This lack of standardization leads to delays in getting patients the necessary services and equipment. The guide mentions that the current process often relies on manual methods or non-standardized electronic exchanges, which are inefficient and can lead to errors.

## 3. Technical Approach

This IG introduces a framework for exchanging post-acute care orders using the HL7 FHIR standard. It defines specific profiles (data structures) and extensions for FHIR resources like DeviceRequest, ServiceRequest, and MedicationRequest to accommodate the specific needs of post-acute care ordering. 

It supports two main exchange methods:

* **RESTful API:** This allows systems to query and retrieve order information in real-time.
* **FHIR Messaging:** This enables systems to exchange order information as messages, which can be useful when real-time access isn't feasible or when all necessary information needs to be sent as a single unit.

The IG also defines the roles of different actors involved in the process (ordering provider, rendering provider, and intermediary) and how they interact using these exchange methods.

## 4. Contextual Factors and Design Decisions

* **Focus on DME and Home Health:** This version of the IG primarily focuses on orders for durable medical equipment and home health services. Future versions may expand to include other post-acute services.
* **Intermediary Role:** The IG recognizes that intermediaries (e.g., companies that manage DME orders) often play a crucial role in the post-acute care ecosystem. It defines how intermediaries can participate in the order exchange process using both RESTful and messaging approaches.
* **US Core Alignment:** The IG leverages and builds upon the US Core FHIR profiles, ensuring alignment with broader US healthcare interoperability efforts.
* **Support for Prior Authorization and Other Reviews:** The IG includes extensions to accommodate information related to prior authorization, appropriate use reviews, and medical necessity reviews, which are often required for post-acute care orders.
* **No Requirement for Digital Signatures:** While the IG doesn't mandate digital signatures for this version, it acknowledges the potential need for them in the future and allows for their use through the Provenance resource.
* **Relationship to Other Standards:** The IG clarifies its relationship with other standards like BSeR (Bidirectional Services eReferrals), emphasizing its focus on a simpler approach for exchanging post-acute care orders, including those not covered by BSeR.
