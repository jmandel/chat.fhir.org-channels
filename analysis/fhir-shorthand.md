# FHIR Shorthand: Analysis

## 1. Objective

This Implementation Guide (IG) aims to simplify the process of creating and managing healthcare data standards using the FHIR (Fast Healthcare Interoperability Resources) framework. It introduces a new language called FHIR Shorthand (FSH) that is easier to read, write, and maintain than existing methods. The goal is to enable a broader range of users, not just technical experts, to participate in developing these essential healthcare data standards.

## 2. Previous Approaches and Limitations

Before FSH, creating FHIR-based data standards involved several approaches, each with its own drawbacks:

* **Hand-editing FHIR artifacts:** This method, requiring deep technical expertise, was complex, error-prone, and inaccessible to most users.
* **Excel spreadsheets:** While initially used, this approach suffered from version control issues and is now strongly discouraged.
* **Graphical tools:** Tools like Simplifier/Forge and Trifolia-on-FHIR provided visual interfaces but lacked the agility for large-scale development and collaborative work.

These limitations highlighted the need for a more user-friendly, scalable, and maintainable solution for defining FHIR artifacts.

## 3. Approach and Technical Implementation

FSH introduces a text-based, domain-specific language for defining FHIR artifacts. It uses a simple syntax and leverages concepts familiar to FHIR, making it easier to learn and use. FSH works in conjunction with tools like:

* **SUSHI:** A compiler that translates FSH code into standard FHIR artifacts, enabling integration with existing FHIR infrastructure.
* **GoFSH:** A tool that converts existing FHIR artifacts into FSH, facilitating the transition to FSH for existing projects.

The text-based nature of FSH allows for use with standard software development tools like text editors, version control systems (e.g., GitHub), and code review processes, promoting collaboration and efficient development.

## 4. Scope Decisions and Contextual Factors

* **Alignment with FHIR:** FSH is closely aligned with the FHIR specification, utilizing FHIR data types and structures, ensuring compatibility and seamless integration.
* **Focus on Implementation Guides:** FSH is specifically designed for creating FHIR IGs, which are collections of FHIR artifacts defining data standards for specific use cases.
* **Open-source and Community-driven:** FSH is an open-source initiative with active community involvement, fostering collaboration and widespread adoption.

The development of FSH addresses a crucial need within the FHIR community, providing a more accessible and efficient way to define and manage healthcare data standards, ultimately contributing to better interoperability and data exchange in healthcare.
