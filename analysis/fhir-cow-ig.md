# FHIR Cow IG: Analysis

## 1. Objectives 

This FHIR Implementation Guide (IG) aims to standardize how healthcare systems share information related to **orders** between those who place the orders (e.g., doctors) and those who fulfill them (e.g., pharmacies, labs).  It focuses on ensuring that order fillers receive all the necessary details to carry out the order correctly. 

## 2. Previous Approaches and Limitations

The provided excerpts don't explicitly describe previous approaches or their limitations. However, the "order-content.md" file highlights the challenges of providing complete order information, indicating that current methods may struggle with orders that have complex or variable information needs. 

## 3.  Technical Approach

The IG proposes three main approaches for conveying order information:

1. **Assemble and Make Available:** This involves gathering all necessary information upfront and providing it directly to the order filler. This approach is suitable when the required information is well-defined and predictable.
2. **CDEX-type Query:** This suggests using a standardized query mechanism (likely based on the Clinical Data Exchange standard) to allow order fillers to retrieve specific information they need from the order placer's system. This is useful when the information needs are not fully known upfront.
3. **Permission Definition:** This emphasizes the importance of defining clear access permissions to ensure that order fillers can only access the information they are authorized to see.

## 4. Important Contextual Factors and Design Decisions

* **Variability of Order Information:** The IG recognizes that the information needed to fulfill an order can vary significantly depending on factors like the type of order, the relationship between the placer and filler, and specific clinical context.
* **Relationship Between Placer and Filler:** The interaction between the order placer and filler influences how information is exchanged. For instance, if they are part of the same organization, direct access to a shared system might be feasible. In other cases, a more structured query-based approach might be necessary.
* **Need for Standardization:** The IG aims to establish a standard way of handling order information, which can improve interoperability between different healthcare systems and reduce ambiguity in order fulfillment. 
