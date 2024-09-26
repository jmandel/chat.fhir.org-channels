# FHIRPath: Analysis

## 1. Objectives

This implementation guide aims to create a standardized way to navigate and extract information from healthcare data, similar to how you might use an address to find a specific house. It seeks to simplify the process of expressing logical conditions and constraints in healthcare data, making it easier to define rules for things like data validation, patient cohort identification, and clinical decision support. 

## 2. Previous Approaches and Limitations

Previously, various languages were used for representing logic in healthcare data, but they often had limitations:

* **Tight coupling to data structures:** Languages like XPath were tied to specific data formats, making them less adaptable to changes in technology.
* **Platform dependence:**  General-purpose languages like Java or C# required specific platforms and complex tools.
* **Lack of simplicity:** Existing languages could be overly complex for common healthcare logic needs.

## 3. Technical Approach

FHIRPath introduces a new language with the following features:

* **Graph-traversal:** It allows navigation through healthcare data modeled as a hierarchical tree, regardless of the underlying data format (e.g., XML, JSON).
* **Fluent syntax:**  It uses a chainable syntax, making expressions easy to read and write.
* **Collection-centric:** It handles all data as collections, simplifying the processing of repeating elements common in healthcare data.
* **Platform and model independence:**  It works conceptually with any data model and can be implemented on any platform.

## 4. Scope, Design Choices, and Context

* **Scope:** FHIRPath is designed for use within the FHIR standard and the Clinical Quality Language (CQL).
* **Design Choices:** 
    * It uses a simple, lightweight syntax inspired by the Fluent Interface pattern.
    * It prioritizes collections as the fundamental data structure.
    * It supports a range of data types, operators, functions, and literals.
* **Context:** FHIRPath addresses the need for a standardized, platform-independent language for expressing logic in healthcare data, driven by the increasing complexity and interoperability requirements in healthcare systems. 
