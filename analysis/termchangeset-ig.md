# TermChangeSetIG: Analysis

## 1. Objectives

This Implementation Guide (IG) aims to standardize the way changes to medical terminologies are represented and shared. It provides a structured format for packaging updates to terminologies like LOINC and SNOMED CT, allowing users to easily understand and integrate these changes into their systems. This makes it easier for healthcare providers and systems to stay up-to-date with the latest terminology standards, improving interoperability and data consistency.

## 2. Previous Approaches and Limitations

The IG does not explicitly state how terminology changes were previously handled or the limitations of those approaches.

## 3. Technical Approach

This IG introduces a "Terminology Change Set" profile based on the FHIR CodeSystem resource. It defines a specialized structure for representing changes to terminologies, including:

- **Metadata:** Information about the change set itself, such as its ID, version, publisher, and description.
- **Filters:** Criteria for selecting specific concepts within the change set.
- **Properties:**  Definitions of additional attributes that can be associated with concepts in the change set (e.g., status, definition status, parent concept).
- **Concepts:**  The actual changes to the terminology, including new concepts, updated definitions, and modified properties.

The IG also leverages the FHIR Provenance resource to document the origin and history of the change set, providing transparency and traceability.

## 4. Scope, Design Choices, and Contextual Factors

- **Alignment with Tinkar:** The IG explicitly aligns its profiles with the Tinkar information model, ensuring compatibility and enabling lossless representation of terminology data.
- **Fragmentary CodeSystems:** Change sets are represented as "fragments" of CodeSystems, focusing only on the updated concepts and their relevant attributes.
- **Terminology-Specific Profiles:** The IG defines specialized profiles for LOINC (LOINCChangeSet) and SNOMED CT (SNOMEDChangeSet), accounting for their unique properties and structures.
- **Focus on Updates:** The primary focus is on representing updates to existing terminologies, not defining entirely new ones.
- **Provenance for Transparency:** The use of Provenance resources is a key design choice, emphasizing the importance of transparency and traceability in managing terminology changes.
