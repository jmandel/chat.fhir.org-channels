# RTLS Integration: Analysis

## 1. Objectives 
This implementation guide aims to standardize how Real-Time Location Systems (RTLS) share information with other systems, like Electronic Health Records.  Specifically, it focuses on enabling other systems to subscribe to location updates from the RTLS for specific tags (think of them like tracking devices) and receive those updates in a consistent way. 

## 2. Previous Approaches and Limitations
The provided text doesn't describe how RTLS integrations were handled previously or what specific limitations existed. Therefore, I cannot answer this question based on the input provided.

## 3.  Approaches Introduced
This IG introduces a standardized approach for integrating RTLS with other systems using the FHIR (Fast Healthcare Interoperability Resources) standard. This involves:

*   **Messaging Model:**  Communication between systems will use the FHIR messaging model, which provides a structure for exchanging healthcare information.
*   **Resource Profiles:**  The IG defines specific FHIR "profiles" that tailor the standard FHIR resources (like Device and Location) to the needs of RTLS integration. This ensures that systems understand the content of the messages.
*   **Defined Events:** It outlines three key events: 
    *   "Enroll Tag" to subscribe to location updates for a specific tag.
    *   "Unenroll Tag" to unsubscribe from updates.
    *   "Tag Location Update" to communicate changes in a tag's location.

## 4. Scope, Design Choices, and Context
*   **Scope:** The IG focuses specifically on the communication aspects of the integration, not on how an RTLS determines a tag's location. 
*   **FHIR Choice:** The core design decision is the reliance on the FHIR standard, indicating a focus on healthcare interoperability.
*   **Implementation Specifics:** The definition of what triggers a "Tag Location Update" is left to the individual RTLS implementation, providing flexibility. 
