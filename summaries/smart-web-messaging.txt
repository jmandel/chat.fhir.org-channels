**TL;DR:** This guide helps apps that run inside your electronic health record (EHR) work better with the EHR itself.

The SMART Web Messaging Implementation Guide explains how apps that are launched from within an EHR can exchange information with the EHR more effectively. This allows for tighter integration between the app and the EHR's user interface and workflow.

Currently, apps that launch from an EHR usually communicate with a separate part of the EHR that stores patient data (the FHIR server). This is good for viewing and updating patient records, but it doesn't allow the app to directly interact with the EHR's user interface in real-time.

SMART Web Messaging solves this problem by enabling apps and EHRs to send messages directly to each other. This allows apps to do things like:
- Send orders or notes directly to the EHR.
- Suggest diagnoses or add information to a patient's problem list.
- Access and interact with temporary or draft orders that only exist in the EHR's current session.
- Close the app or navigate the user to another part of the EHR.

This guide defines a standard way for apps and EHRs to communicate using messages. It also defines specific message types for common tasks like updating draft orders or launching different EHR activities.

SMART Web Messaging relies on existing web technologies that are already supported by most EHRs and web browsers, making it relatively easy to implement.

However, this approach only works with web-based apps and does not address issues like keeping data synchronized across different parts of the EHR.

By following the guidelines in this implementation guide, developers can create apps that integrate more seamlessly with EHRs, improving the user experience for healthcare providers and potentially leading to better patient care.
