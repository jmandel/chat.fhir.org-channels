# CardX Hypertension Management: Analysis

## 1. Objectives

This Implementation Guide aims to make it easier for patients and doctors to share blood pressure readings taken at home. This is done to help patients manage their high blood pressure (hypertension) more effectively. By using a standard way to share this information electronically, doctors can get a better picture of a patient's blood pressure over time and adjust treatment as needed, even outside of regular office visits.


## 2. Current Practices and Limitations

Currently, blood pressure is usually only measured during clinic visits. This gives doctors a limited snapshot of a patient's blood pressure and doesn't show how it changes throughout the day or week.  This approach can make it difficult to diagnose and manage hypertension effectively. Patients might not be diagnosed until their blood pressure is very high, and doctors might not be able to adjust medications quickly enough if blood pressure isn't well-controlled.


## 3. New Approaches

This IG introduces a standardized way to electronically exchange blood pressure readings taken at home (self-measured blood pressure or SMBP) between patients' devices, apps they might use to track their health, and doctors' electronic health record systems. This allows doctors to receive regular updates on a patient's blood pressure and make more informed decisions about their treatment.

**Technical Approach:**

The IG uses FHIR (Fast Healthcare Interoperability Resources), a standard for exchanging healthcare information electronically. It defines specific FHIR "profiles" for representing SMBP readings and related information, such as the average blood pressure over a period. This ensures that different systems can understand and exchange the data correctly.


## 4. Contextual Factors and Design Decisions

- **Prevalence of Hypertension:** Hypertension is a widespread global health problem, making it important to have a standardized approach that can be used in different regions and healthcare systems.

- **Evidence-Based Management:** The IG is aligned with evidence-based guidelines for hypertension management, including those from organizations like the American Heart Association and the Centers for Disease Control and Prevention.

- **Patient-Centered Care:** The IG emphasizes patient involvement in their own care by enabling them to easily share their blood pressure readings with their healthcare team.

- **Focus on Interoperability:** The IG promotes interoperability by defining a vendor-agnostic standard that can be used by different devices, apps, and electronic health record systems.

- **Future Iterations:** The IG is expected to be expanded in the future to include other elements relevant to hypertension management, such as lifestyle modifications and medication adherence.

**Key Design Decisions:**

- **Use of FHIR:** FHIR is a widely recognized standard, increasing the likelihood of adoption and interoperability.
- **Specific Profiles:** Defining profiles for SMBP ensures consistent representation and exchange of data.
- **Universal Realm Approach:** This makes the IG applicable in different regions and healthcare systems.
- **Alignment with Existing Standards:** The IG builds upon and harmonizes with existing FHIR standards and guidelines.
