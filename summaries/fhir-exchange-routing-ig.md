**TL;DR:** This guide helps healthcare systems share information even when they use different companies to manage their data. It lets systems talk to each other directly or through these companies (called intermediaries) without extra work.

The FHIR Exchange Routing IG aims to make it easier for different healthcare systems to exchange information, especially when they use intermediaries like clearinghouses or health information exchanges (HIEs). These intermediaries often handle tasks like ensuring secure data transfer, scaling systems to handle large amounts of data, and managing connections between different organizations.

This guide focuses on situations where a healthcare provider, clinic, or insurance company needs to send information to another system. It allows the sender to use the receiver's main internet address, even if the receiver relies on an intermediary to manage incoming requests. The sender doesn't need to know if an intermediary is involved.

The guide outlines how intermediaries should handle these requests, ensuring that they are securely passed along to the intended recipient. It also specifies how errors or exceptions should be communicated back to the sender, regardless of whether the problem occurred at the recipient's system or at an intermediary along the way.

This approach is designed to support all types of information requests defined by FHIR. It also addresses security concerns by requiring intermediaries to pass through any security tokens or authorizations granted by the recipient, ensuring that only authorized users can access the information.

It's important to note that this guide does not cover all possible intermediary scenarios. It specifically focuses on situations where the sender and receiver have a pre-existing trust relationship and where the sender always uses the recipient's public internet address. It also doesn't address situations where the intermediary needs to modify the information being exchanged.

By defining clear rules for how intermediaries should handle FHIR requests, this guide helps to simplify healthcare data exchange and allows organizations to leverage intermediaries without adding complexity for those sending information. This can help improve efficiency and interoperability in the healthcare ecosystem.
