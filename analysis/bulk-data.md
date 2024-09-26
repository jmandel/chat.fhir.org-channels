# FHIR Bulk Data Access IG: Analysis

## 1. Objectives 

This implementation guide aims to make it easier to exchange large amounts of healthcare data between different computer systems.  It defines a standardized way for systems, like electronic health records or health information exchanges, to make data available in bulk using the FHIR standard. This eliminates the need for custom, complex data extraction processes, thereby reducing integration costs and promoting data sharing in healthcare.

## 2. Current Practices and Limitations

Currently, exchanging large healthcare datasets often involves complicated, multi-step processes. These may include manual data extraction, custom file formatting, and secure file transfers. This approach is costly, inefficient, and can hinder data sharing initiatives. Existing FHIR APIs, while useful for accessing small amounts of data, are not optimized for large exports, potentially requiring hundreds of thousands of individual requests.

## 3. New Approaches

This IG introduces a standardized, FHIR-based method for bulk data export. It leverages the FHIR standard to represent the data and defines a specific API operation called "$export" for initiating and managing bulk data requests. The process is asynchronous, meaning the client makes a request and then periodically checks on its status until the data is ready. The data is then made available for download as files in a structured format (e.g., newline-delimited JSON).

**Technical Approach:**

- **Kick-off Request:** The client initiates a bulk data export request using the `$export` operation. This request can specify various parameters like the data format, the types of resources to include, and a time range for updated data.
- **Status Request:** The client periodically checks the status of the export request using a provided URL. The server responds with the progress or completion status.
- **Data Retrieval:** Once complete, the server provides a manifest file containing URLs to download the exported data files. The client retrieves these files, which contain FHIR resources in the requested format.

## 4. Important Contextual Factors and Design Decisions

- **Security and Privacy:** The IG emphasizes the importance of secure data exchange using TLS and OAuth 2.0 for authorization. It also highlights the need for robust access controls to protect patient data.
- **Flexibility:** The IG is designed to support various use cases and server architectures. It allows servers to define their own data packaging strategies (e.g., file size limits) and offers optional parameters for filtering and including related data.
- **Asynchronous Processing:** The asynchronous nature of the export process is crucial for handling large datasets, as it prevents blocking and allows the server to process the request in the background.
- **Error Handling:** The IG provides mechanisms for handling errors during the export process, including partial successes where some resources may fail to export.
- **Server Capability Documentation:** The IG recommends that servers clearly document their bulk data export capabilities to aid client developers in understanding how to interact with their systems.
