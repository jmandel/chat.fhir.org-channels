# Da Vinci Postable Remittance: Analysis

## 1. Objectives 

This implementation guide aims to simplify the process of retrieving copies of remittances (payment explanations) for healthcare providers. Currently, getting these remittances can be a hassle, involving manual tasks like checking payer portals, making phone calls, or dealing with faxes. This guide seeks to streamline that by creating a standardized way for providers to automatically request and receive remittances electronically using FHIR APIs. This would save providers time and effort in tracking down payment information.

## 2. Previous Approaches and Limitations

Before this IG, providers primarily relied on the following methods to retrieve missing remittances, each with its own drawbacks:

* **Electronic Data Interchange (EDI) Gaps:** EDI transactions, while used for healthcare data exchange, could not handle sending a single remittance to multiple destinations, which is sometimes necessary.
* **Portal Access Complexity:** Payer portals are difficult to use at scale, and managing access across numerous portals is a major challenge.
* **Phone Calls:** Calling payers is expensive, time-consuming, and some payers don't even offer this option.
* **Faxes:** Faxes are inefficient, prone to errors, and raise security concerns.
* **Cybersecurity Regulations:**  Constantly evolving cybersecurity regulations are difficult for billing services and vendors to keep up with when using traditional methods.

## 3.  Approaches Introduced

This IG introduces a FHIR-based API approach for retrieving remittance advice. It defines specific FHIR profiles and operations for providers to request and payers to respond with remittance information. 

Here's how it works technically:

* **Search Operations:** Providers can search for remittances using different criteria:
    * By claim information (e.g., claim ID, patient ID)
    * By patient information (e.g., patient ID, date of birth)
    * By payment information (e.g., payment date, payment amount)
* **Download Operation:** Once a remittance is found, providers can download it using a specific identifier.
* **Data Format:** Remittances are returned as encoded attachments (either an 835 document or a PDF) within a FHIR `DocumentReference` or `Binary` resource.
* **FHIR Parameters Resource:** Input parameters for search operations and output results are structured using the FHIR `Parameters` resource.

## 4. Important Contextual Factors and Design Decisions

* **Shared Tax Identification Numbers (TINs):** The IG acknowledges the challenges posed by shared TINs, where multiple entities (e.g., a hospital and its clinics) use the same TIN, making it difficult to route remittances correctly. 
* **Search Timeframes:** The timeframe for searching for remittances will vary by payer and is left to the payer to define.
* **Privacy & Security:** The IG emphasizes the importance of following existing security practices (like those used for payer portals) to secure API access and protect sensitive data within the remittances. Authentication and authorization mechanisms are essential for protecting data.
* **No Match Results:** If a search doesn't find a matching remittance, an empty `Parameters` resource is returned.
* **Content Negotiation:**  The `DownloadRemittance` operation allows providers to optionally hint at the preferred format (835 or PDF), but the payer ultimately decides the format based on what's available.
* **Error Handling:** The IG doesn't explicitly define error handling procedures, which might be addressed in future iterations or implementation guides that build upon this one.

By adopting this FHIR-based approach, the healthcare industry can move towards a more automated and efficient system for handling remittance advice, reducing manual work, errors, and costs associated with traditional methods. 
