# data-access-policies: Analysis

## 1. Objectives

This implementation guide aims to improve how healthcare data access is controlled and managed using a standardized approach. It focuses on making it easier to express and enforce rules about who can access what data, for what purposes, and under what conditions. The goal is to enhance patient privacy, ensure data security, and support various healthcare workflows, including clinical care, billing, public health reporting, and research.

## 2. Current Practices and Limitations

Currently, healthcare data access control practices often rely on custom solutions or limited standards, leading to inconsistencies and challenges in interoperability. Existing methods may struggle to express complex rules, manage consent preferences effectively, or handle situations where access needs to be restricted based on specific attributes or contexts.

## 3. New Approaches

This IG leverages the FHIR (Fast Healthcare Interoperability Resources) standard to define a structured way of representing data access policies. It introduces the "Permission" resource to express granular rules about data access, including:

- **Roles and Permissions:** Defining who can access data based on their roles (e.g., doctor, nurse, patient).
- **Purpose of Use:** Specifying the allowed reasons for accessing data (e.g., treatment, payment, research).
- **Data Categories:** Identifying the types of data subject to access control (e.g., clinical records, administrative data).
- **Consent Management:** Integrating with FHIR Consent resources to capture and enforce patient consent choices.
- **Attribute-Based Access Control (ABAC):** Supporting fine-grained control based on data attributes, user attributes, and contextual details.

The IG provides examples and guidance on how to encode these rules in the "Permission" resource and how to use it in conjunction with other FHIR resources like Consent and Bundle to manage data access effectively.

## 4. Contextual Factors and Design Decisions

- **FHIR Standard:** The IG heavily relies on the FHIR standard, making it essential to understand FHIR concepts and resources.
- **Security Labeling:** The IG explores using security labels to categorize data sensitivity and enforce access based on those labels.
- **Combining Algorithms:** The IG defines rules for combining multiple access control rules, such as "deny-overrides" and "deny-unless-permit," to determine the overall access decision.
- **Contextual Access Control:** The IG highlights the importance of considering contextual factors, such as the relationship between the data requester and the data subject, when making access decisions.
- **Break-Glass Scenarios:** The IG discusses how to handle emergency situations where normal access restrictions may need to be overridden for patient safety.
- **Overriding Policies:** The IG emphasizes the need for organizations to establish overarching data access policies that guide the implementation of specific rules.
