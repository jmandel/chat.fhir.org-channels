# Imaging Service Request IG: Analysis

## 1. Objectives

This implementation guide aims to enable communication between systems that manage imaging orders (like Radiology Information Systems or RIS) and systems that manage image acquisition (like Picture Archiving and Communication Systems or PACS). It does this by defining how to represent imaging orders and related information using the FHIR standard, specifically for populating and querying modality worklists. 

In simpler terms, it's like creating a common language for these systems to talk about who needs what imaging exam, when, and where, ensuring that imaging devices have the correct information to perform the exam.

## 2. Previous Approaches and Limitations

Previously, the exchange of imaging order information between RIS and PACS was primarily done using the DICOM Modality Worklist (MWL) standard. While a well-defined mapping exists between the older HL7 V2 messaging standard and DICOM MWL, there was no standard way to do this using the newer FHIR standard. This lack of a FHIR-based approach limited the interoperability of modern healthcare systems that are increasingly adopting FHIR.

## 3. Technical Approach

This IG introduces a FHIR-based approach by:

* **Defining FHIR profiles:** These profiles adapt standard FHIR resources like ServiceRequest, Task, Patient, and Encounter to specifically represent the information needed for imaging orders, aligning them with the structure of DICOM MWL.
* **Developing concept maps:** These maps explain how data elements in the FHIR profiles correspond to data elements in DICOM MWL, enabling translation between the two standards.
* **Specifying FHIR operations:** It defines FHIR operations like `$create-order` and `$cancel-order` to manage the creation and cancellation of imaging orders, mirroring functionalities found in DICOM MWL.
* **Defining capability statements:** These statements describe the capabilities of systems involved in the imaging order workflow, like RIS and PACS, in terms of FHIR resources and operations they support.

Essentially, the IG provides a blueprint for how to represent imaging orders and related information in FHIR and how to exchange this information between systems using FHIR-based communication.

## 4. Scope Decisions, Design Choices, and Contextual Factors

* **Source of truth:** The IG explicitly states that DICOM remains the authoritative source of information, and FHIR is used to represent this information.
* **Dynamics:** The IG assumes that FHIR resources primarily undergo status changes during their lifecycle, reflecting the typical workflow of an imaging order.
* **Actors and interfaces:** The IG considers two primary interfaces: the RIS view and the PACS view of the Modality Worklist, each requiring representation through a CapabilityStatement.
* **Scope:** The IG focuses specifically on representing imaging service requests and related information for modality worklists. It explicitly excludes aspects like mapping DICOM MPPS to FHIR or modeling the entire image ordering workflow.
* **Relationship to IHE Scheduled Workflow:** The IG acknowledges the IHE Scheduled Workflow (SWF) profile and maps its relevant transactions to FHIR operations, providing context within existing standards. 
