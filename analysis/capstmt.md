# FHIR CapabilityStatement IG: Analysis

## 1. Objectives 

This Implementation Guide (IG) aims to improve how software systems describe their capabilities when exchanging healthcare information using the FHIR standard. It focuses on making it easier for systems to:

* **Communicate specific features:**  Clearly describe the detailed functions they support beyond basic FHIR operations.
* **Negotiate capabilities:**  Allow systems to automatically check if other systems support the features they need before attempting to exchange data.
* **Reduce complexity:** Offer a more manageable way to represent a wide range of capabilities without creating overly large and complicated descriptions.

## 2. Current Practices and Limitations

Currently, FHIR's `CapabilityStatement` resource is used to describe system capabilities. However, it has limitations:

* **Growing complexity:**  The `CapabilityStatement` resource is becoming very large and difficult to manage as more features are added to FHIR.
* **Lack of granularity:** It is difficult to describe specific feature details, often relying on simple true/false flags.
* **Inefficient communication:** Systems often download the entire `CapabilityStatement`, even if they only need to know about a few specific features. This can be inefficient, especially when dealing with large descriptions.

## 3. New Approaches

This IG introduces the **Application Feature Framework**, which uses a terminology-based approach to address these limitations:

* **Feature-based descriptions:** Systems can describe their capabilities using a predefined set of "features" (codes) and their associated values.
* **Feature querying:** A new operation, `$feature-query`, allows systems to directly ask other systems about specific features and their values.
* **Feature negotiation:** Systems can specify required features using HTTP headers, enabling automatic checks for compatibility before exchanging data.

**Technical Approach:**

* Features are defined using code systems and value sets.
* The `CapabilityStatement` resource is extended to include feature information.
* The `$feature-query` operation is used to query for specific features.
* Feature negotiation is enabled through HTTP headers.

## 4. Important Contextual Factors and Design Decisions

* **Focus on application features:** This IG focuses on describing features related to application behavior rather than the underlying FHIR specification.
* **Mandatory feature negotiation:** The use of features implies the need for feature negotiation, as systems may not report all features by default.
* **Terminology-driven approach:** The framework relies on standardized terminology to ensure consistency and interoperability.
* **Flexibility in scope:** Features can be defined at different levels of granularity, from the entire system to specific resources or interactions.
* **Extensibility:** The framework allows for the addition of new features and values over time.
