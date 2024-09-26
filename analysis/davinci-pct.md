# Da Vinci Patient Cost Transparency (PCT): Analysis

## 1. Objective

This implementation guide aims to standardize how healthcare providers and insurance companies share cost information with patients. It focuses on providing patients with upfront estimates for planned medical services, known as Good Faith Estimates (GFEs), and more detailed Advanced Explanation of Benefits (AEOBs) that break down estimated costs, insurance coverage, and patient responsibility.

## 2. Previous Approaches and Limitations

Before this IG, there was no standard way for providers and payers to exchange cost information for upcoming services. This lack of standardization led to:

* **Inconsistent information:** Patients received cost estimates in various formats, making it difficult to compare and understand.
* **Limited transparency:** Patients often lacked detailed breakdowns of costs, insurance coverage, and out-of-pocket expenses.
* **Manual processes:** Exchanging cost information often involved manual processes like phone calls, faxes, or emails, which were inefficient and prone to errors.

## 3. New Approaches and Technical Approach

This IG introduces the following new approaches:

* **Standardized data exchange:** It defines FHIR profiles for GFEs and AEOBs, creating a common language for sharing cost information. 
* **API-based communication:** It leverages FHIR APIs for secure and efficient exchange of cost data between providers, payers, and patient-authorized apps.
* **Two workflows:**
    * **GFE Coordination Workflow:**  Helps providers collaborate to create a single, comprehensive GFE when multiple providers are involved in a patient's care. This workflow is still under development.
    * **GFE Submission and AEOB Workflow:**  Enables providers to submit GFEs to payers, who then generate AEOBs for patients. 

The IG relies on FHIR resources like Claim, ExplanationOfBenefit, Patient, Coverage, and Organization, and defines specific profiles for each to enforce data consistency and meet the requirements of the No Surprises Act.

## 4. Contextual Factors and Design Decisions

* **No Surprises Act:** This IG is heavily influenced by the No Surprises Act, which mandates that providers and payers provide GFEs and AEOBs to patients.
* **US Core:** The IG builds upon the US Core FHIR profiles, ensuring alignment with broader healthcare data exchange standards.
* **Da Vinci HRex:** It references the Da Vinci HRex IG for security and privacy requirements, promoting consistency and best practices in healthcare data exchange.
* **Optional API use:** While the IG defines API-based workflows, it acknowledges that payers may use other methods for delivering AEOBs to patients, such as mail or patient portals.
* **Focus on pre-service estimates:** The IG specifically targets cost estimates for upcoming services and does not address eligibility, prior authorization, coordination of benefits, or claim submission.
* **Evolving GFE Coordination:** The GFE Coordination workflow is still under development and is expected to evolve based on testing and feedback from implementers. 
