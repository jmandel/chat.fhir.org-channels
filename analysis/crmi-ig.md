# Canonical Resource Management Infrastructure: Analysis

## 1. Objectives

This FHIR IG aims to standardize the way healthcare knowledge artifacts, such as questionnaires, clinical guidelines, and quality measures, are created, shared, and used. 

It seeks to make these artifacts more reliable and consistent over time, especially when they rely on medical terminologies that are constantly being updated. 

The goal is to ensure that everyone involved, from authors to implementers, has a shared understanding of these artifacts, leading to smoother implementation and better healthcare outcomes.

## 2. Current Practices and Limitations

Currently, healthcare knowledge artifacts are often shared as part of FHIR Implementation Guides (IGs), which are published as websites and packaged using Node Package Manager (npm). 

However, this approach has limitations:

* **Focused Packaging:** It's difficult to retrieve a package containing only a specific artifact and its necessary dependencies.
* **Artifact Selection:** Downloading a subset of artifacts from a larger collection, along with their dependencies, is not straightforward.
* **Platform-Specific Packaging:** Tailoring packages for specific environments with varying capabilities (e.g., limited terminology services) is challenging.

Additionally, the constant evolution of medical terminologies poses a challenge for the long-term stability of these artifacts. An artifact might behave differently over time due to changes in the underlying terminology versions.

## 3. New Approaches

This IG introduces several new approaches:

* **Artifact Capability Profiles:**  Defines profiles (Shareable, Computable, Publishable, Executable) to establish clear expectations for artifact content and functionality at different stages of the lifecycle.
* **Version Manifest:** Introduces the concept of a "version manifest" (using the Library resource) to specify the versions of dependencies used by artifacts, ensuring consistent behavior over time.
* **Expansion Rules:** Allows specifying default expansion parameters for value sets used by artifacts, promoting consistent terminology expansion.
* **Packaging and Dependency Operations:** Defines new operations (`$package` and `$data-requirements`) to support focused packaging, artifact selection, and platform-specific packaging.
* **Artifact Repository and Terminology Service:** Defines capability statements for artifact repositories and terminology services to support the authoring, publishing, and distribution of knowledge artifacts in a standardized way.

## 4. Contextual Factors and Design Decisions

* **Semantic Versioning:** The IG promotes the use of semantic versioning for artifacts, aligning with best practices in software development and facilitating dependency management.
* **Decentralization:** The IG does not advocate for a central authority for artifact repositories or terminology services. Instead, it aims to enable an ecosystem of interoperable repositories.
* **Security and Privacy:** The IG emphasizes the importance of addressing security and privacy concerns using standard FHIR mechanisms, especially when dealing with potentially sensitive test data.
* **Backwards Compatibility:** The IG strives for backwards compatibility with existing FHIR specifications and encourages future specifications to adopt its profiles and capabilities.

Overall, this IG represents a significant step towards a more robust and standardized approach to managing healthcare knowledge artifacts, ultimately aiming to improve the quality and consistency of healthcare delivery. 
