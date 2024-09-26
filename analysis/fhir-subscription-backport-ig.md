# FHIR Subscription R5 Backport IG: Analysis

## 1. Objective

This Implementation Guide aims to enable older systems that use the FHIR standard (specifically, versions R4 and R4B) to utilize a newer, more efficient method of receiving updates called "topic-based subscriptions." This allows applications to subscribe to specific types of changes happening within the healthcare data and receive notifications when those changes occur, without needing to constantly check for updates.

## 2. Previous Approaches and Limitations

Before this IG, FHIR subscriptions relied on a "query-based" model. Clients would define a query, and the server would constantly run that query and send notifications whenever the results changed. This approach had several limitations:

* **Scalability:** Difficult to implement efficiently for large datasets and many clients.
* **Opaque Discovery:** Clients couldn't easily discover what queries the server supported.
* **Lack of Granularity:** Notifications didn't specify the reason for changes in the result set.
* **No Bundling:** Notifications were sent for each individual change, potentially overwhelming clients.
* **Re-querying:** Clients had to re-run the query after each notification to get updated data.

## 3. Introduced Approaches and Technical Approach

This IG introduces a "topic-based" subscription model, aligning older FHIR versions (R4 and R4B) with the newer R5 standard.  It defines:

* **SubscriptionTopic:** A resource defining the type of event that triggers notifications, allowed filters, and the notification's structure.
* **Subscription:** A resource describing a client's request to be notified about a specific topic with defined filters, communication channel, and payload details.
* **Notification Bundle:** A bundle containing the notification details, including status information and potentially related resources or their identifiers.

The IG defines extensions for R4 `Subscription` resources and uses the `Basic` resource type to represent `SubscriptionTopic` in R4.  For R4B, it leverages the newly introduced `SubscriptionTopic` resource. It also defines profiles for notification bundles in both versions.

## 4. Important Decisions and Factors

* **Channel Types:** The IG defines standard channels like REST-hook, WebSockets, Email, and FHIR Messaging, allowing flexibility in how clients receive notifications.
* **Payload Types:** Clients can choose between `empty`, `id-only`, and `full-resource` payloads, balancing the amount of data sent with security and performance considerations.
* **Error Handling:** Mechanisms are provided for clients and servers to detect and recover from errors, ensuring reliable notification delivery.
* **FHIR Version Compatibility:**  The IG allows clients to request notifications in different FHIR versions using MIME type parameters, aiding in system upgrades and interoperability.
* **Security:**  The IG emphasizes security considerations, recommending appropriate authorization checks and secure channels for sensitive data.
* **Notified Pull:**  The IG introduces a "notified pull" mechanism, allowing servers to include queries in notifications for situations where clients need to retrieve specific data not easily defined by standard queries. 
