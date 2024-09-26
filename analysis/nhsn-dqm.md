# CDC National Healthcare Safety Network (NHSN) Digital Quality Measures (dQM): Analysis

## 1. Objectives

This implementation guide aims to standardize how healthcare facilities electronically submit surveillance data to the CDC's National Healthcare Safety Network (NHSN). It seeks to modernize public health reporting by using a common data format (HL7 FHIR) for data exchange. This will make it easier for healthcare facilities to report data and for the CDC to collect and analyze it.

## 2. Previous Approaches and Limitations

The provided input files do not explicitly describe previous approaches or limitations. However, they mention a transition from "static IGs for specific purposes" to a "quality measure-driven approach," suggesting a previous reliance on static, purpose-specific guidelines.

## 3. Technical Approach

This IG introduces a framework for reporting data to NHSN using digital quality measures (dQMs) that can be dynamically updated and executed. It leverages existing HL7 FHIR standards and APIs, such as US Core, to facilitate data capture from electronic health records. The IG defines:

- **FHIR profiles:** These specify the structure and content of FHIR resources used for reporting, ensuring data consistency.
- **Value sets:** These define standardized codes for specific data elements, promoting interoperability.
- **Example dQMs:** These demonstrate the implementation of the framework for specific use cases, such as acute care hospital reporting and bed capacity reporting.
- **Reporting scenarios:** These outline different workflows for data submission, including direct submission from facilities, aggregation by intermediaries, and retrieval by NHSN.

## 4. Scope, Design Choices, and Context

**Scope:** This IG focuses on the general framework for data submission using dQMs. It does not dictate how to operationalize reporting for specific NHSN measures, which will be defined in a separate IG.

**Design Choices:**

- Reliance on existing HL7 FHIR standards and APIs for data exchange and capture.
- Use of dynamic, executable dQMs that can be adjusted without requiring frequent updates to the IG.
- Focus on leveraging data compliant with US Core, while acknowledging the potential future availability of QI Core compatible data.

**Context:**

- Alignment with the CDC's Data Modernization Initiative.
- Collaboration with other CDC branches and CMS.
- Protection of data reported to NHSN under the Public Health Service Act.
- Consideration of privacy and security guidelines defined by FHIR.
- Transition from static IGs to a more flexible, quality measure-driven approach.
