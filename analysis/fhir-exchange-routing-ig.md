# FHIR Exchange Routing IG: Analysis

## 1. Objectives

This implementation guide aims to standardize how healthcare systems exchange information using the FHIR standard when intermediaries, like clearinghouses or health information exchanges (HIEs), are involved. The goal is to make it easier for systems to connect and share data seamlessly, regardless of whether an intermediary is used. It focuses on making the process smooth for the sender, so they don't need to know or care if an intermediary is involved – they just send the request as if it's going directly to the recipient. This is referred to as the "hybrid" model.

## 2. Previous Approaches and Limitations

Previously, many healthcare systems relied on intermediaries for exchanging information, often using older standards like X12. As FHIR adoption grows, there's a need to accommodate these existing intermediaries while also enabling direct, point-to-point FHIR exchanges. Without a standard approach, connecting systems with and without intermediaries becomes complex, potentially hindering broader FHIR adoption and scalability.

## 3. Technical Approach

This IG introduces a "passive" approach where intermediaries act like invisible routers, simply passing requests and responses between the sender and receiver without modifying them. The key features include:

- **Destination's Public URL:** The recipient system has a public web address. Senders always use this address, even if an intermediary is involved. The intermediary handles routing the request behind the scenes.
- **Pass-Through Security:** The sender and receiver establish trust directly. Intermediaries don't participate in authentication or authorization, they simply forward any security tokens.
- **Standard FHIR Interactions:** The guide supports all standard FHIR RESTful interactions (GET, POST, etc.), ensuring consistency regardless of the specific type of data exchange.
- **Transparent Error Handling:** Errors from either the recipient or an intermediary are passed back to the sender using standard HTTP status codes.

## 4. Scope Decisions and Contextual Factors

- **Focus on Passive Intermediaries:** This version specifically addresses "passive" intermediaries that don't modify the content or actively participate in the exchange beyond routing. More active intermediary roles are left for future versions.
- **Trust Established Directly:** The guide assumes that the sender and receiver directly establish trust, excluding scenarios where trust is mediated by the intermediary.
- **No URL Rewriting:** Intermediaries are not allowed to rewrite web addresses within the exchanged FHIR resources, ensuring consistency and avoiding complications for senders.
- **US Realm Initially:** While developed in the US context, the guide's principles are applicable globally.
- **FHIR Messaging Out of Scope:** This guide focuses on RESTful FHIR interactions, not the FHIR Messaging framework, which has its own routing mechanisms.
- **Potential for Future Expansion:** The guide acknowledges the need to address additional scenarios and intermediary roles in the future, laying the groundwork for a flexible and evolving approach to FHIR exchange routing. 
