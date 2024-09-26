# FHIRcast: Analysis

## 1. Objectives

The FHIRcast Implementation Guide (IG) aims to enable real-time synchronization of healthcare applications. This means that when a user interacts with different healthcare apps, such as an Electronic Health Record (EHR), a Picture Archiving and Communication System (PACS), or a dictation system, all applications will display the same patient or clinical information simultaneously. The goal is to improve clinician workflow and ensure everyone is working with the same up-to-date data.

## 2. Previous Approaches and Limitations

Before FHIRcast, healthcare application synchronization often relied on vendor-specific or proprietary methods. These methods were limited in several ways:

- **Decentralized and Simple:** Existing integrations were often one-off solutions, making it difficult to scale and manage them.
- **Limited Interoperability:** The lack of a standard approach hindered the ability to enhance existing integrations and create new ones.

## 3. FHIRcast Approach

FHIRcast introduces a standardized, HTTP-based approach for context synchronization, drawing inspiration from the following:

- **Context Synchronization:** FHIRcast builds upon the CCOW (Clinical Context Object Workgroup) abstract model, simplifying it to be more implementer-friendly.
- **Event Notification:**  FHIRcast leverages the WebSub (Web Subscription) design pattern, allowing applications to subscribe to specific workflow events and receive notifications in real-time.
- **SMART on FHIR:** FHIRcast extends the SMART on FHIR launch protocol, providing a secure and standardized way for applications to discover sessions, authenticate, and exchange contextual information.
- **WebSockets:** FHIRcast uses WebSockets as the primary communication channel, enabling efficient and real-time event notifications.

**How it works:**

- A "Hub" acts as a central coordinator, managing subscriptions and broadcasting events.
- Applications ("Subscribers") subscribe to events related to specific clinical contexts (e.g., Patient, Encounter, ImagingStudy).
- When a user triggers an event (e.g., opening a patient chart), the Hub sends a notification to all subscribed applications, including relevant FHIR resources.
- Applications can also request context changes (e.g., closing a patient chart) by sending events to the Hub.

## 4. Important Context and Design Decisions

- **Event Maturity Model:** FHIRcast defines an Event Maturity Model to ensure that new events are thoroughly tested and vetted by the community before being considered mature and widely adopted.
- **Content Sharing:** FHIRcast supports content sharing between Subscribers using a transactional approach, with the Hub acting as the transaction coordinator and maintaining versioned content state.
- **Multi-Tab Considerations:** FHIRcast addresses the complexities of synchronizing applications that support multiple simultaneous contexts (e.g., multiple open patient charts) and those that support only a single context.
- **Security:** FHIRcast leverages SMART on FHIR for authorization and authentication, and recommends using secure WebSockets (WSS) for communication. It also addresses security considerations specific to WebSockets, such as origin reporting and bearer token usage.
- **Synchronization Considerations:** FHIRcast provides guidance on handling synchronization errors and re-establishing sync, recognizing the potential risks associated with applications falling out of sync. 
