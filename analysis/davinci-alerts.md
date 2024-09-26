# Da Vinci Unsolicited Notifications: Analysis

## 1. Objectives

This implementation guide aims to create a standardized way for healthcare systems to send each other real-time notifications about important patient events. Think of it like setting up a system where your doctor automatically receives a message when you're admitted to the hospital, transferred between departments, or discharged. This allows healthcare providers to stay informed about their patients' care journey and potentially intervene faster when needed.

The guide focuses on making these notifications easy to understand and process by computers, using a common language called FHIR (Fast Healthcare Interoperability Resources). It also ensures that notifications contain enough key information for the recipient to understand the situation and decide whether further action is necessary, like requesting more detailed information.

## 2. Current Practices and Limitations

Currently, healthcare systems often rely on older methods for exchanging patient information, like fax or phone calls, or even custom-built electronic systems. These approaches can be slow, inefficient, and prone to errors. They often don't provide real-time information and may lack the detail needed for effective care coordination.

## 3. New Approaches

This guide introduces a new approach based on FHIR, a modern standard for exchanging healthcare information. It defines a specific format for these notifications, ensuring they are consistently structured and machine-readable. The guide also uses a "push" mechanism, meaning the sender automatically delivers the notification to the recipient, rather than the recipient having to periodically check for updates.

**Technical Approach:**

- **FHIR Messaging:** The guide uses FHIR's messaging framework, which provides a standardized way to package and transmit healthcare information.
- **Message Bundle:** Each notification is sent as a "bundle" containing a MessageHeader (like an envelope with metadata) and other relevant FHIR resources (like the patient's encounter details, diagnoses, etc.).
- **$process-message Operation:** The sender uses the FHIR `$process-message` operation to deliver the notification bundle to the recipient.
- **Profiles:** The guide defines specific FHIR profiles to constrain the content of the message bundle, ensuring consistency and interoperability.

## 4. Contextual Factors and Design Decisions

- **Focus on Unsolicited Notifications:** The guide specifically addresses "unsolicited" notifications, meaning the recipient doesn't explicitly request them. This is different from a subscription model where the recipient subscribes to specific events.
- **Minimal Data, Follow-up Queries:** The guide promotes sending only essential information in the initial notification to keep the message size manageable. Recipients can then request additional details if needed through FHIR queries.
- **Security and Privacy:** The guide emphasizes the importance of secure communication channels and adherence to existing security and privacy standards.
- **Intermediaries:** The guide acknowledges that notifications may be routed through intermediaries (like Health Information Exchanges), and provides guidance on how these intermediaries should handle the messages.
- **Future Expansion:** While the guide initially focuses on admit/transfer/discharge notifications, it provides a framework that can be extended to support other types of notifications in the future.
- **Relationship to FHIR Subscriptions:** The guide recognizes the potential of FHIR subscriptions for event-based notifications and plans to incorporate them in future versions once the standard is more mature.
- **Must Support:** The guide defines clear "must support" requirements for data elements, ensuring that senders include essential information and recipients can process it without errors.
- **Reliable Delivery:** The guide addresses the importance of reliable message delivery and provides recommendations for handling errors and ensuring messages are successfully received.
