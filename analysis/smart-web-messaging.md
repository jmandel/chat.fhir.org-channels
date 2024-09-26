# SMART Web Messaging: Analysis

## 1. Objectives 

This implementation guide (IG) aims to improve how web-based health applications integrate with electronic health record (EHR) systems. It wants to enable smoother communication between these apps and EHRs, allowing them to exchange information more seamlessly within a clinician's workflow.  Specifically, it focuses on allowing apps to:

* Send information to the EHR, such as orders, notes, or suggestions.
* Trigger actions within the EHR, like navigating to specific sections or closing the app.
* Access and modify temporary or draft data within the EHR that may not be available through standard methods.
* Communicate with the EHR's data server in situations where a direct connection isn't possible.


## 2. Previous Approaches and Limitations

Previously, communication between EHRs and embedded apps relied primarily on:

* **RESTful FHIR APIs:** Good for standard data operations (creating, reading, updating, deleting), but limited in handling temporary data or triggering specific EHR actions. 
* **CDS Hooks:** A framework for integrating decision support into EHRs, but its initial "I'm done" mechanism (using redirects) was limited in its ability to send detailed information back to the EHR.

These approaches had limitations because they couldn't:

* Easily handle temporary or draft data that exists only during a clinician's session.
* Trigger specific UI actions within the EHR, such as navigating to a particular screen.
* Provide a robust way for apps to communicate rich information back to the EHR.

## 3. Introduced Approach and Technical Details

This IG introduces **SMART Web Messaging**, which leverages the browser's built-in `window.postMessage` function for secure communication between embedded apps and EHRs. It defines a set of message types and structures for different interactions, such as:

* **`status.*`:** For establishing a connection and checking capabilities.
* **`ui.*`:** For influencing the EHR's user interface (e.g., closing the app, navigating to other sections).
* **`scratchpad.*`:** For interacting with the EHR's temporary data storage (scratchpad).
* **`fhir.http`:** For interacting with the EHR's FHIR server indirectly through messaging.

**How it Works:**

1.  **Launch:** A SMART app is launched within the EHR (either embedded or in a new window). The launch process provides the app with necessary information, including a `smart_web_messaging_handle` and the EHR's origin.
2.  **Messaging:** The app uses `window.postMessage` to send JSON-formatted messages to the EHR. These messages include a `messageType` indicating the action and a `payload` with relevant data.
3.  **Response:** The EHR receives the message, processes it, and sends a response message back to the app, also using `window.postMessage`.

## 4. Scope Decisions, Design Choices, and Contextual Factors

* **Scope:** The IG focuses on interactions relevant to embedded or launched web applications within an EHR environment. It does not address native mobile apps or general context synchronization.
* **Design Choices:** 
    * `window.postMessage` was chosen for its standardization, flexibility, and suitability for web applications.
    * Message types are categorized to organize different functionalities.
    * Authorization leverages OAuth scopes to control access to specific message groups (e.g., `messaging/ui`).
* **Contextual Factors:**
    * The IG is designed to be compatible with FHIR R4 and above.
    * It aims to align with CDS Hooks where feasible, leveraging existing concepts and terminology.
    * Security considerations are addressed through the use of the `smart_web_messaging_handle` and origin checks.
