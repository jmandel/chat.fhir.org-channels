# bser.md

**TL;DR:** This guide helps healthcare providers send and receive electronic referrals for patients needing extra support.

The Bidirectional Services eReferral (BSeR) Implementation Guide explains how to use a standardized format for electronic referrals. It covers referrals for conditions like diabetes, obesity, arthritis, hypertension, early childhood nutrition, and tobacco use.

The guide focuses on sharing only the necessary information between healthcare providers to protect patient privacy. It also allows for feedback from the referral recipient to the original provider, creating a closed loop for better communication and patient care.

Instead of sending a patient's entire medical history, the guide helps providers select specific information relevant to the referral. This ensures that only the minimum necessary information is shared, keeping patient data secure.

The guide also defines a workflow for referrals. It explains how a referral is created, accepted, tracked, and completed. This helps healthcare providers across different organizations work together smoothly to coordinate patient care.

By standardizing the referral process, this guide aims to improve communication and coordination between healthcare providers and community organizations. This can help patients access the services they need more efficiently and effectively.

---

# bulk-data.md

**TL;DR:** This guide defines a standardized way to export large amounts of health data securely and efficiently. It can be used by various systems like electronic health records, health information exchanges, and research databases.

The FHIR Bulk Data Access Implementation Guide defines a method for exchanging large health datasets between different computer systems. This guide focuses on how to export or send data, not on real-time data sharing or specific legal requirements for data sharing.

This guide is important because it allows healthcare providers and organizations to access large volumes of patient information more easily. For example, a hospital system might need to move patient data to a research database, or a doctor might need to send patient data to their Accountable Care Organization (ACO) to measure the quality of care.

Currently, accessing large amounts of data can require many individual requests, which can be slow and costly. This guide defines a standardized process for exporting data in bulk using a format called FHIR (Fast Healthcare Interoperability Resources). This means that different systems can more easily share data with each other, even if they are built by different companies.

The guide also addresses security concerns by requiring that all data exchanges be encrypted and that access to the data be controlled. Healthcare organizations need to protect patient information, and this guide helps them do that while still enabling important data sharing.

In summary, the FHIR Bulk Data Access Implementation Guide helps to improve data sharing in healthcare by defining a standardized, secure, and efficient way to export large datasets. This can benefit patients, healthcare providers, and researchers by making it easier to access and use health information.

---

# cancer-reporting.md

**TL;DR:** This guide helps improve how cancer pathology reports are shared between labs, hospitals, and cancer registries in the US. It uses a standardized format to make sure the important information from these reports is accurately collected and easily understood by all parties.

The Cancer Pathology Data Sharing Implementation Guide (IG) aims to standardize the way cancer pathology data is collected and shared. It focuses on how pathology reports, which contain crucial information about a patient's diagnosis, are transmitted from labs to cancer registries. This can happen directly or through a hospital's electronic health record system (EHR).

This guide is important because it promotes a structured approach to handling pathology reports. Traditionally, these reports might be shared as non-searchable documents, like PDFs. This can make it difficult to extract specific information or analyze data across many reports. By using a standardized format, this guide ensures that the data in pathology reports is organized in a way that computers can easily understand and process.

The guide relies on a specific format called FHIR (Fast Healthcare Interoperability Resources), which is becoming a common standard for exchanging healthcare information. It also aligns with existing standards from organizations like the North American Association of Central Cancer Registries (NAACCR) and the College of American Pathologists (CAP).

Currently, this guide works best when labs use specific digital checklists from the CAP. In the future, it may be expanded to handle other types of pathology reports.

The main users of this guide are the people who design and build the computer systems used in labs, hospitals, and cancer registries. However, anyone involved in cancer care, including patients, can benefit from understanding how this guide helps improve the accuracy and efficiency of cancer reporting.

In short, this guide represents an important step towards better sharing of cancer pathology data, which can ultimately lead to improved patient care and research.

---

# capstmt.md

**TL;DR:** This guide helps computer systems that manage health information talk to each other more effectively. It lets them share details about what they can do and how they work, making it easier to exchange health data safely and reliably.

The Application Feature Framework Implementation Guide (IG) defines a way for healthcare computer systems to describe their specific capabilities in more detail. This helps systems understand each other better when they need to exchange health information, like patient records or lab results.

Think of it like this: when two people meet, they introduce themselves and talk about what they do. This IG helps computer systems do the same thing. It lets them share information about what types of health data they can handle, how they store and manage that data, and what security measures they have in place.

This is important because healthcare data is complex and sensitive. By using this framework, systems can avoid misunderstandings and ensure that information is exchanged securely and accurately. For example, a system that can only handle patient demographics would know not to try and receive lab results from another system.

This IG also helps with "feature negotiation," which means systems can ask each other about specific capabilities before exchanging data. This makes sure that both systems are compatible and can handle the information being shared.

In short, this guide provides a standardized way for healthcare systems to communicate about their capabilities, making it easier to share health information safely and reliably. This can lead to better care coordination, improved patient outcomes, and more efficient use of health IT resources.


---

# CardX-HTN-MNG.md

**TL;DR:** This guide helps healthcare systems exchange information about blood pressure readings taken at home.

The CardX Hypertension Management Implementation Guide aims to improve the diagnosis and management of high blood pressure by making it easier to share blood pressure readings taken at home. It defines how to represent, share, and use self-measured blood pressure (SMBP) data between devices like blood pressure cuffs, patient apps, and electronic health record systems. 

High blood pressure is a widespread problem, and regularly monitoring it at home can help doctors and patients manage it better. This guide addresses the need for a standard way to share these home readings, which can be taken by patients themselves or caregivers. It specifies how this information should be formatted and sent between different systems, enabling doctors to receive and review the data efficiently.

This guide covers the exchange of individual blood pressure readings as well as average readings taken over a period, such as a week. It also includes the option to share heart rate data collected at the same time as the blood pressure readings. 

By enabling this exchange of information, the guide aims to support better communication between patients and healthcare providers, leading to improved management of high blood pressure and better health outcomes. It does not, however, define how doctors should interpret the readings or make treatment decisions based on them. It focuses solely on the technical aspects of sharing the data in a standardized way. 

---

# cardx-ig.md

**TL;DR:** This guide helps share blood pressure information between patients, apps, and doctors' offices.

The CardX Hypertension Management Implementation Guide aims to improve the diagnosis and treatment of high blood pressure by making it easier to collect and share information from home blood pressure monitoring programs. High blood pressure is a common problem, and this guide helps make sure that blood pressure readings taken at home can be easily understood and used by everyone involved in a patient's care.

The guide focuses on sharing information between:

- **Patients:** Individuals who are diagnosed with high blood pressure and are monitoring their blood pressure at home.
- **Personal Health Devices:** Blood pressure cuffs and other devices that patients use to measure their blood pressure at home.
- **Apps or Websites (Personal Health Intermediaries):** These platforms allow patients to track their blood pressure readings and may share this information with their healthcare providers.
- **Electronic Health Record Systems:** The systems used in clinics and hospitals to store and manage patient health information.

By making sure that these different systems can "talk" to each other, the guide helps ensure that:

- Doctors can receive blood pressure readings from patients in a way that is easy to understand and use.
- Patients can see their blood pressure readings over time and share them with their doctors.
- Doctors can communicate with patients about their blood pressure and make changes to their treatment plan as needed, even when patients are not in the office.

This can lead to better blood pressure control, which can help prevent serious health problems like heart attacks and strokes.

The guide includes detailed instructions on how to share blood pressure information using a standard format called FHIR (Fast Healthcare Interoperability Resources). It also defines specific data elements that should be included when sharing blood pressure information, such as the systolic and diastolic blood pressure readings, the date and time the reading was taken, and whether the patient was resting when the reading was taken.

The CardX Hypertension Management Implementation Guide is an important step towards improving the way high blood pressure is managed. By making it easier to collect and share information from home blood pressure monitoring programs, the guide can help patients and healthcare providers work together to achieve better blood pressure control and improve patient outcomes.

---

# carin-bb.md

**TL;DR:** This guide helps patients access and share their health insurance claims data.

The CARIN Consumer Directed Payer Data Exchange Implementation Guide (also known as the CARIN IG for Blue Button® Implementation Guide) defines how patients can access and share their health insurance claims data using a standardized format called FHIR (Fast Healthcare Interoperability Resources). 

This guide addresses a key requirement of the CMS Interoperability and Patient Access Final Rule, which mandates that health insurance plans provide patients with easy access to their claims and encounter data. It defines how this information is structured and shared through a secure API (application programming interface), enabling patients to view and share their data with third-party applications of their choosing.

The guide focuses on the financial aspects of patient data, including claims information, adjudication details, and payment breakdowns. It specifies how data elements from the Common Payer Consumer Data Set (CPCDS), a standardized set of health insurance data, are mapped to FHIR resources. This ensures that patient data can be easily understood and processed by different computer systems.

By using this guide, health insurance plans can enable patients to access their claims data, understand their healthcare expenses, and share their information with applications that can help them manage their health and finances.

---

# carin-digital-insurance-card.md

**TL;DR:** This guide helps make it possible to view your health insurance information digitally, like on a phone app or through a scannable code, instead of needing a physical insurance card.

The CARIN for Digital Insurance Card (C4DIC) Implementation Guide defines a standard way for health insurance companies to share the information found on a physical insurance card digitally. This guide uses a technology called FHIR (Fast Healthcare Interoperability Resources) to structure the information so that it can be understood by different computer systems.

**How does it work?**

This guide creates a standard format for health insurance companies to share your insurance information with apps you might use on your phone or other devices. Instead of carrying a physical insurance card, you could use an app to show your coverage details to your doctor or pharmacy. 

The guide also makes it possible to create a scannable code (like a QR code) that represents your insurance information. You could store this code on your phone or print it out and show it to healthcare providers when needed. The provider can then scan the code to access your insurance details.

**What information is included?**

The guide covers most of the data you would find on a typical insurance card, such as your name, member ID, plan type, insurance company details, and copay amounts. It also addresses how to include images like company logos or barcodes.

**Limitations:**

This guide focuses on displaying insurance card information, not on checking if you are eligible for specific services. It also does not cover all possible data elements that might be found on some insurance cards.

This guide aims to make accessing and sharing your health insurance information easier and more convenient by providing a standard way to do it digitally. 

---

# case-reporting.md

**TL;DR:** This guide helps healthcare providers automatically send reports to public health agencies when a patient might have a condition they need to know about. It also lets public health send information back to healthcare providers about what to do next. 

The "Public Health Case Reporting FHIR Implementation Guide" helps healthcare providers share patient information with public health agencies. This is important for tracking and responding to health concerns in the community. The guide uses a standardized format called FHIR, which allows different computer systems to easily exchange information. 

This guide defines how electronic health records (EHRs) can automatically identify patients with potentially reportable conditions, like Zika virus or Chlamydia, based on specific codes in their records. When a possible case is identified, the EHR sends an initial case report to the appropriate public health agency. The guide also defines how public health agencies can respond to these reports. The response tells healthcare providers whether the case needs to be reported, provides contact information for the agency, and gives guidance on next steps, like additional testing or treatment.

This two-way communication helps ensure that public health agencies have the information they need to protect the community while also supporting healthcare providers in giving their patients the best possible care. 

---

# ccda-on-fhir.md

**TL;DR:** This guide helps healthcare systems share patient information between two different data formats.

The Consolidated CDA (C-CDA) on FHIR Implementation Guide (IG) defines how to represent C-CDA documents using FHIR resources. C-CDA is a widely used standard for exchanging healthcare information, like patient summaries and clinical notes. FHIR is a newer standard that is easier to implement and use. This guide helps bridge the gap between these two standards, enabling healthcare systems to share patient information more easily.

This IG focuses on the most commonly exchanged patient information, including problems, allergies, medications, immunizations, procedures, and basic patient demographics. It provides detailed instructions on how to map data elements between C-CDA and FHIR, ensuring that information is translated accurately and consistently. 

While this guide enables more seamless data exchange, it's important to note that the two standards are not always perfectly aligned. Some information may be lost or require interpretation during the translation process. This highlights the need for ongoing efforts to harmonize healthcare data standards and improve interoperability. 

---

# CDA-ccda-2.1-sd.md

**TL;DR:** This guide defines standard templates for creating and sharing clinical notes, like those from doctor's visits, in a way computers can easily understand.

The Consolidated Clinical Document Architecture (C-CDA) Implementation Guide defines a set of templates for structuring information within clinical notes, ensuring that they can be easily shared and understood by different computer systems. These templates cover various types of clinical notes, such as those documenting consultations, hospital stays, procedures, and ongoing care plans.

The guide addresses the need for consistent and standardized ways to represent patient information, diagnoses, treatments, allergies, medications, and other essential clinical data. By adhering to these templates, healthcare providers and systems can exchange patient information seamlessly, improving care coordination and patient safety.

The guide also provides detailed guidance on how to handle missing or unknown information, ensuring that data is accurately represented even when complete information is unavailable. It also addresses how to link information within a document and to external sources, enabling a more complete picture of a patient's health history.

C-CDA, based on the HL7 CDA standard, relies on XML for data representation. This guide, while using FHIR StructureDefinition for defining the templates, does not rely on FHIR resources or data types. It aims to improve interoperability in the US healthcare system by providing a common language for sharing clinical notes, ultimately benefiting both patients and providers.

---

# CDA-ccda-2.2.md

## Consolidated Clinical Document Architecture (C-CDA) R3.0: A Guide for Sharing Patient Information

**TL;DR:** This guide explains how to structure digital health records so they can be easily shared between different healthcare systems. It helps computers understand and use the information in a patient's record.

The Consolidated Clinical Document Architecture (C-CDA) R3.0 is a guide for organizing electronic health information. It defines templates for common healthcare documents like consultation notes, discharge summaries, and progress notes. These templates ensure that information is presented in a consistent and understandable format, making it easier to share between different healthcare providers and systems.

C-CDA addresses several needs in healthcare. First, it helps solve the problem of inconsistent data formats. When different healthcare systems use their own ways of storing patient information, sharing data becomes difficult. C-CDA provides a common language for these systems, making it easier to exchange information.

Second, C-CDA makes it possible for computers to process and understand clinical information. By using standard codes and structures, C-CDA enables computers to extract meaningful data from patient records. This can be used for various purposes, such as identifying patients with specific health conditions, tracking medication use, and generating reports.

The guide also provides detailed instructions for representing different types of clinical information, including allergies, medications, problems, procedures, and results. It explains how to use codes from standard terminologies like SNOMED CT and LOINC to represent these concepts in a machine-readable way.

C-CDA is a key component of health information exchange in the United States. It enables healthcare providers to share important patient information, improving care coordination and patient safety. By promoting interoperability, C-CDA contributes to a more connected and efficient healthcare system.

---

# CDA-ccda.md

**TL;DR:** This guide helps computers understand and share patient health information in a standard way using a format called C-CDA.

The Consolidated Clinical Document Architecture (C-CDA) Implementation Guide explains how to create and use digital health records in a format called C-CDA. C-CDA helps computers share patient information like allergies, medications, problems, procedures, and results in a way that different healthcare systems can understand. 

This guide ensures that patient data is organized and labeled consistently, making it easier for doctors, nurses, and other healthcare providers to access and understand important information. It includes instructions for creating different types of health records, such as discharge summaries, progress notes, and referral notes. 

C-CDA also includes ways to handle situations where information is missing or unknown. For example, if a patient's smoking history is unknown, the system can record that the information is missing, rather than leaving it blank. This helps ensure that everyone involved in a patient's care has the most accurate information possible.

This guide is based on a technology called FHIR (Fast Healthcare Interoperability Resources), which is a modern standard for exchanging healthcare information. By using C-CDA, healthcare providers can improve communication and coordination of care, ultimately leading to better health outcomes for patients.

---

# CDA-core-sd.md

**TL;DR:** This guide helps computers understand and share health information written as clinical documents, like a doctor's visit note or a hospital discharge summary.

The "Clinical Document Architecture (CDA) 2.0 Implementation Guide" defines how to represent clinical documents using a common language called FHIR (Fast Healthcare Interoperability Resources). This makes it easier for different computer systems to understand and share these documents.

**What this guide does:**

Clinical documents contain important information about a patient's health, such as their medical history, diagnoses, treatments, and observations from healthcare providers. However, different computer systems may store this information in different ways, making it hard to share.

This guide provides a standard way to structure and organize the information in clinical documents. It uses FHIR, a set of rules for representing health information, to define how different parts of a document should be labeled and coded. This allows computers to understand the meaning of the information and exchange it with other systems that follow the same rules.

**How this guide helps:**

By using this guide, healthcare providers can share clinical documents electronically, even if they use different computer systems. This can improve patient care by making it easier to access and share important health information. 

**Important note:**

This guide focuses on how to represent clinical documents for exchange between systems, not on how to create or manage them. It also allows for some flexibility to accommodate local needs, but this may limit the ability of different systems to fully understand all the information in a document. 

This guide is an important step towards making health information more easily shareable and usable, which can ultimately benefit patients and healthcare providers.

---

# cda-eyecare.md

**TL;DR:** This guide helps eye doctors share eye exam information between computer systems.

The Eyecare Implementation Guide (IG) aims to improve how electronic health records (EHRs) store and exchange information specifically related to eye care. Currently, many EHRs are good at handling general medical data, but they may not be as good at handling information from specialized fields like eye care. This guide provides a standard way to represent common eye exam data, such as visual acuity (how clearly you can see), refraction (how your eye bends light), diagnostic tests (like dry eye assessments), and observations of the back of the eye.

This guide is important because it allows different eye care systems to "speak the same language."  For example, if you see an ophthalmologist who uses a different EHR than your optometrist, this guide can help ensure that your eye exam information can be easily shared between them. This can lead to better coordination of care, fewer repeated tests, and a more complete picture of your eye health.

The guide achieves this by defining specific templates for different types of eye exams. These templates specify what information should be captured, how it should be organized, and what codes should be used to represent different findings. These codes ensure that the meaning of the information is clear and consistent across different systems.

While this guide focuses on technical aspects of data exchange, the ultimate goal is to improve the quality and efficiency of eye care for patients. By making it easier to share eye exam information, this guide can help ensure that your eye care providers have the information they need to make the best decisions about your care.

---

# CDA-IPS.md

**TL;DR:** This guide helps share important patient information between different healthcare systems around the world.

The International Patient Summary (IPS) Implementation Guide defines a standard way to share key patient medical information, especially for unplanned care situations. It ensures that healthcare providers in different countries or regions can understand and use this information, even if they use different electronic health record (EHR) systems.

The guide focuses on creating a concise summary of essential patient data, including allergies, medications, past medical problems, procedures, immunizations, and more. It allows for this information to be coded using standard medical terminologies, making it easier for computers to process and exchange the data. It also supports the inclusion of human-readable text for clarity.

Recognizing the need for information to be understood across language barriers, the guide provides mechanisms for translating medical terms and narratives. This helps ensure that patients traveling abroad can have their medical information readily available and understood by healthcare providers in other countries.

The IPS Implementation Guide is a technical document primarily intended for developers and implementers of EHR systems and other health information technology. However, its ultimate goal is to improve patient safety and care coordination by facilitating the seamless exchange of vital medical information across borders and healthcare systems. 

---

# cdmh.md

**TL;DR:** This guide helps researchers access and use health data from different sources more easily.

The Common Data Models Harmonization (CDMH) FHIR Implementation Guide (IG) focuses on making it easier to access and use health data from different research networks. These networks often store their data in different formats, which can be difficult for researchers to work with. The CDMH IG provides a way to translate this data into a standard format called FHIR (Fast Healthcare Interoperability Resources).

**How does it work?**

The guide defines mappings between four common data models (CDMs) used by research networks and the FHIR standard. This means that data stored in any of these CDMs can be translated into FHIR. This makes it easier for researchers to:

* **Access data from multiple networks:** They can use the same tools and methods to access data from different sources, regardless of the original format.
* **Combine data from different sources:** They can more easily combine data from different networks to perform larger, more comprehensive studies.
* **Use standard FHIR tools:** They can leverage the growing ecosystem of FHIR tools and applications to analyze and visualize the data.

**Who benefits from this guide?**

The CDMH IG is primarily intended for researchers who work with large datasets of health information. It can also be useful for developers who build tools and applications for accessing and analyzing health data. By making it easier to work with data from different sources, the CDMH IG can help accelerate research and improve our understanding of health and disease.

**Limitations:**

The CDMH IG focuses on translating data into FHIR, but it does not address all aspects of data sharing and analysis. For example, it does not provide guidance on how to ensure data privacy and security. It also does not cover all possible data elements that might be found in the different CDMs. 

**Relationship to other guides:**

The CDMH IG complements the Data Access Framework Research (DAF-Research) IG, which provides a broader framework for accessing and using health data. The DAF-Research IG outlines workflows for extracting data from electronic health records (EHRs), populating CDMs, and querying the data using FHIR. The CDMH IG provides the specific mappings needed to translate data from the CDMs into FHIR.

---

# cds-hooks-library.md

**TL;DR:** This guide defines ways that computer systems can give doctors advice at specific points in patient care.

The CDS Hooks Library defines industry-standard moments in patient care where a computer system can offer advice to healthcare providers. This advice, known as Clinical Decision Support (CDS), can help doctors make better decisions about treatments, tests, and other aspects of patient care. 

CDS Hooks work by identifying specific actions or events in a patient's medical record, such as when a doctor is about to prescribe a medication or when a patient is being discharged from the hospital. When these events occur, the system can automatically send information about the patient and the situation to a separate CDS service. This service can then analyze the information and provide recommendations back to the doctor.

For example, when a doctor is prescribing a medication, the CDS service might check for potential drug interactions or allergies. When a patient is being discharged, it might suggest follow-up appointments or recommend home health services.

The CDS Hooks Library specifies a number of different "hooks," each corresponding to a different point in the patient care workflow. This standardization helps ensure that CDS services can be easily integrated into different electronic health record systems and other healthcare applications.

By providing timely and relevant advice, CDS Hooks can help improve patient safety, reduce healthcare costs, and enhance the overall quality of care. 

---

# cds-hooks.md

**TL;DR:** This guide helps computer systems share information about patient care decisions, like medicine suggestions and treatment plans.

The CDS Hooks Implementation Guide (IG) defines a standard way for electronic health records (EHRs) and other clinical systems to get advice from decision support services at specific points in a patient's care. This advice can include things like suggesting a different medication dose, warning about potential drug interactions, or recommending a specific treatment plan. 

This guide addresses the need for healthcare systems to seamlessly integrate with decision support tools. It does this by defining "hooks," which are specific events in a patient's care where advice might be needed, like when a doctor is writing a prescription or viewing a patient's chart.  The guide also describes how these systems can share information securely and efficiently, ensuring that the decision support services have the data they need to give helpful advice.

The guide also addresses the need for feedback on the advice given. It defines a way for healthcare systems to tell the decision support services whether their advice was accepted, overridden, or ignored. This feedback helps the decision support services learn and improve their advice over time.

CDS Hooks is designed to be flexible and can be used with different types of decision support services. It can also be extended to support new types of hooks and data as needed. This flexibility helps ensure that CDS Hooks can be used to improve patient care in a variety of settings.

By using the CDS Hooks standard, healthcare systems can more easily integrate with decision support services, which can help improve the quality and safety of patient care.

---

# cgm.md

**TL;DR:** This guide helps different computer systems easily share information from continuous glucose monitors (CGMs).

The Argo Continuous Glucose Monitoring Implementation Guide aims to standardize how CGM data is shared between apps, devices, and electronic health records (EHRs). This includes both detailed glucose readings and summary reports, which can help patients and healthcare providers better manage diabetes.

**How it works:**

The guide outlines how a patient's CGM app can connect securely to their EHR, allowing them to share their glucose data with their doctor. It also describes how doctors can connect to a patient's CGM data during a clinic visit, using a special code to link the systems. This ensures the doctor has access to the latest glucose information for better treatment decisions.

Additionally, the guide explains how patients can share their CGM data with research studies if they choose to participate. The standardized format enables researchers to collect data from various CGM platforms efficiently.

**Technical details:**

The guide relies on a technology called "SMART on FHIR," which allows apps to connect securely to EHRs and other health systems. It defines specific ways to package CGM data (called "bundles") and how often this data should be sent. It also allows for "standing orders," which are instructions for automatic data sharing at regular intervals.

**Limitations:**

The guide acknowledges that not all CGM concepts have standard codes yet. It provides a temporary solution and a plan to adopt standard codes when they become available.

**Benefits:**

By following this guide, different systems can exchange CGM data seamlessly, improving communication between patients, providers, and researchers. This can lead to better diabetes management, more informed treatment decisions, and advancements in diabetes research.

**In conclusion:**

The Argo CGM Implementation Guide provides a crucial framework for sharing CGM data in a standardized way, promoting better diabetes care and research. By enabling secure and efficient data exchange, it empowers patients and healthcare providers with the information they need to make informed decisions about diabetes management.

---

# cimi-labs.md

**TL;DR:** This guide helps computers share different kinds of lab results, like blood tests or urine tests, in a standard way.

The "CIMI Laboratory Sub-Types Implementation Guide" explains how to use a common language (called FHIR) to exchange information about lab tests in a consistent format. It covers many types of lab results, including:

* **Quantitative results:** These are numeric results with units, like blood glucose levels in mg/dL.
* **Coded results:** These are results expressed as terms with specific meanings, like a blood type (A, B, AB, O).
* **Ordinal results:** These are results on a scale, like the size of a tumor (small, medium, large).
* **Narrative results:** These are results described in text, like a microscopic examination of a blood sample.
* **Titer results:** These are results expressed as a ratio, like the concentration of antibodies in a blood sample.
* **Document results:** These are results reported in a separate document, like a pathology report.

This guide does not include microbiology lab tests because they require a different approach.

By using this guide, different computer systems in healthcare, like those used in hospitals and labs, can share lab results more easily. This can help healthcare providers make better decisions about patient care. For example, it can help ensure that a doctor has access to all of a patient's lab results, even if they were done at different labs.

This guide also defines specific requirements for how lab results should be recorded and shared. For example, it specifies that each lab result must include information about the patient, the type of test performed, the date and time the test was done, and the result of the test.

By following the guidelines in this guide, healthcare organizations can improve the interoperability of their systems, making it easier to share information and improve patient care.

---

# cimi-vital-signs.md

**TL;DR:** This guide helps healthcare systems consistently record and share common health measurements like heart rate and blood pressure.

The Clinical Information Modeling Initiative (CIMI) Vital Signs Implementation Guide defines a standard way to represent vital signs and other common measurements in digital health records. It uses the FHIR standard to ensure that information can be easily exchanged between different systems, such as those used by hospitals, clinics, and wearable devices. 

The guide covers measurements like heart rate, respiratory rate, body temperature, blood pressure, height, weight, and oxygen saturation. It specifies the codes and units of measure that should be used for each measurement to avoid ambiguity. It also includes details about how to record additional information, such as the patient's position during the measurement, the device used, and any relevant context like exercise or sleep status.  This ensures that the data is comprehensive and meaningful for healthcare providers.

By promoting consistency in how vital signs data is recorded and shared, this guide aims to improve the quality and interoperability of health information. This can benefit patients by making it easier for their healthcare providers to access and understand their health data, regardless of where the data was collected. 

---

# codex-radiation-therapy.md

**TL;DR:** This guide helps different computer systems share information about radiation therapy.

The CodeX™ Radiation Therapy Implementation Guide (IG) defines a standard way to represent and exchange information about a patient's radiation therapy treatment. This guide is for people who create computer systems for healthcare, like electronic health records (EHRs) and radiation oncology systems. 

Currently, radiation treatment details are often stuck in the system used by the radiation oncology team. This makes it difficult for other doctors and the patient to get this important information. Also, summarizing radiation treatment often requires someone to type a lot of information by hand, which takes time and can lead to mistakes.

This guide aims to solve these problems. It uses a common language called FHIR (Fast Healthcare Interoperability Resources) to structure information about radiation therapy. This common language allows different systems to understand and share this information, making it easier for everyone involved in a patient's care to see important details about their treatment. For example, a doctor outside the radiation oncology team could easily see the dose of radiation a patient received and the areas of the body that were treated. This helps with better care coordination. Patients can also benefit from this improved sharing of information to better understand their treatment. 

---

# Content-Management-Infrastructure-IG.md

**TL;DR:** This guide defines how to create, share, and use digital healthcare instructions.

The Canonical Resource Management Infrastructure (CRMI) Implementation Guide establishes a common framework for handling digital healthcare instructions, such as questionnaires, guidelines, and quality measures. It ensures these instructions can be easily created, shared between different computer systems, and used reliably over time.

This guide addresses the need for consistent healthcare instructions by defining clear rules for how these instructions should be structured and organized. It also provides ways to package and distribute these instructions, ensuring they include all necessary components and remain compatible with different software systems.

A key challenge addressed by the CRMI is managing changes to medical terminologies, which are used to represent medical concepts in a standardized way. This guide introduces "version manifests," which act like a table of contents, specifying the exact versions of medical terms used in each set of instructions. This ensures that instructions remain consistent and produce reliable results even as medical terminologies evolve.

The CRMI aims to create an ecosystem where digital healthcare instructions can be easily accessed and used by various healthcare systems, including those used by doctors, hospitals, and public health agencies. This promotes collaboration, improves the quality of healthcare data, and supports better decision-making in healthcare.

---

# cqf-measures.md

**TL;DR:** This guide explains how to write down quality measures in a computer-friendly way using FHIR and a language called CQL.

The FHIR Quality Measure Implementation Guide (QM IG) helps healthcare professionals and software developers define and share quality measures in a standardized format. These measures assess healthcare quality by tracking things like whether patients receive recommended screenings or treatments. 

The guide focuses on using FHIR (Fast Healthcare Interoperability Resources) and CQL (Clinical Quality Language). FHIR is a standard for exchanging healthcare information electronically, and CQL is a special language for writing quality measures in a way that computers can understand. 

This guide ensures that quality measures are written in a consistent format, making it easier to compare performance between different healthcare providers or organizations. It also allows computers to automatically calculate quality scores from patient records, saving time and effort. The QM IG helps to improve healthcare quality by making it easier to track and measure performance. 

---

# cqf-recommendations.md

## TL;DR: This guide helps make digital healthcare instructions easier for computers to understand.

The FHIR Clinical Guidelines Implementation Guide (CPG IG) helps create digital versions of healthcare instructions that computers can understand. This makes it easier for doctors and hospitals to use these instructions in their computer systems.

This guide focuses on turning written healthcare instructions, like guidelines for treating heart failure or diabetes, into a format that computers can read and use. This can help with things like:

* **Giving doctors reminders:**  The computer can remind doctors about the steps in the instructions, like when to order a certain test or prescribe a specific medicine.
* **Making sure everyone follows the same steps:**  The computer can help make sure everyone follows the same instructions, which can improve patient care.
* **Tracking how well the instructions work:**  The computer can track how well patients are doing and whether the instructions are helping them get better.

This guide uses a special language called FHIR, which helps different computer systems share information easily. It also explains how to test the digital instructions to make sure they work correctly. This guide is important because it helps make healthcare more efficient and effective for everyone involved. 

---

# cql-ig.md

**TL;DR:** This guide helps healthcare systems use a special language to make decisions about patient care.

The "Using CQL with FHIR" Implementation Guide (IG) defines how to use a language called Clinical Quality Language (CQL) with FHIR, a standard for exchanging healthcare information. This guide is like a rulebook for creating and sharing instructions that help computers make decisions about patient care. 

CQL can be used to express medical knowledge in a way that computers can understand. For example, it can be used to define rules for identifying patients who need certain tests or treatments. This guide explains how to write CQL instructions and how to package them in a way that healthcare systems can easily use. It also describes how to use CQL with FHIR profiles, which are sets of rules that define how healthcare information should be structured.

By following this guide, healthcare systems can ensure that their CQL instructions are consistent and can be shared and used by others. This can help to improve the quality and efficiency of healthcare.

---

# cql.md

**TL;DR:** This guide defines a language for computers to understand and use healthcare information to support better care.

The Clinical Quality Language (CQL) Implementation Guide defines a language for sharing healthcare logic between different computer systems. This logic can be used to define criteria for quality measures, make decisions about patient care, and improve healthcare processes. 

CQL addresses the need for a common language that computers can use to understand and process healthcare information. It provides a way to express complex clinical knowledge in a way that is both human-readable and machine-processable.

This guide is important because it enables different healthcare systems to share and use the same logic. This can help to improve patient care by ensuring that the same criteria are used to make decisions, regardless of which system is being used. It can also help to improve healthcare quality by making it easier to measure and track performance.

CQL supports a variety of data models, including the Quality Data Model (QDM) and the Fast Healthcare Interoperability Resources (FHIR) standard. It also supports a variety of terminologies, including SNOMED CT and LOINC.

This guide is intended for a wide audience, including healthcare providers, health IT professionals, and quality measure developers. It provides a comprehensive overview of CQL, including its syntax, semantics, and implementation details.

---

# crmi-ig.md

**TL;DR:** This guide helps healthcare computer systems share information about medical knowledge.

The Canonical Resource Management Infrastructure (CRMI) Implementation Guide helps different healthcare computer systems consistently share medical knowledge, such as guidelines for care, questionnaires, and quality measures. It defines how this information should be organized, packaged, and transferred between systems.

This guide addresses the need for reliable and consistent exchange of medical knowledge in a healthcare setting. It ensures that different computer systems, like those used by hospitals, doctors' offices, and insurance companies, can understand and use this information in the same way.

The guide also helps manage changes to medical knowledge over time. It uses a system called "semantic versioning" to track updates and ensures that everyone is using the most up-to-date information. This is important because medical knowledge is constantly evolving, and it's crucial that healthcare providers have access to the latest guidelines and recommendations.

Overall, the CRMI Implementation Guide plays a crucial role in enabling healthcare computer systems to share and use medical knowledge effectively, ultimately improving the quality and consistency of healthcare. 

---

# data-access-policies.md

**TL;DR:** This guide helps control who can see your health information and how they can use it.

The Security Work Group FHIR Data Access Policies Implementation Guide (IG) defines how to set up and use rules for controlling access to health information. This guide explains how to use the FHIR "Permission" resource to create detailed rules about who can see what information and how they can use it.

This IG is important because it helps healthcare organizations protect patient privacy and comply with laws like HIPAA. It also helps make sure that people only see the information they need to do their jobs. For example, a doctor might need to see all of a patient's medical history, but a billing clerk might only need to see information about insurance.

The IG provides examples of how to create different types of rules, such as:

* **Role-based access control:** This type of rule lets you control access based on a person's job role. For example, you could create a rule that says only doctors can see a patient's medical records.
* **Attribute-based access control:** This type of rule lets you control access based on specific characteristics of the information or the person requesting access. For example, you could create a rule that says only researchers can see de-identified patient data for a specific study.
* **Contextual access control:** This type of rule lets you control access based on the situation. For example, you could create a rule that says a doctor can only see a patient's mental health records if the patient has given their consent.

The IG also includes examples of how to use the "Permission" resource to control access to specific types of information, such as patient directories and provider directories.

This guide is a valuable resource for anyone who wants to learn more about how to control access to health information using FHIR. It is especially helpful for healthcare organizations that are implementing FHIR-based systems. 

---

# davinci-alerts.md

**TL;DR:** This guide helps healthcare systems send, receive, and share important patient information, like hospital admissions and discharges, in a standard way.

The Da Vinci Unsolicited Notifications Implementation Guide defines a framework for sending real-time notifications about patient care. These notifications can help improve care management and coordination, reduce costs, and improve patient outcomes.

**How it works:**

This guide focuses on using a standard format called FHIR (Fast Healthcare Interoperability Resources) to exchange healthcare information. It explains how different systems, such as hospitals, clinics, and insurance companies, can send and receive notifications about key events in a patient's care journey.

**What's included:**

The guide covers common scenarios like hospital admissions, transfers, and discharges. It explains what information should be included in these notifications and how to send them securely. It also defines the roles of different healthcare systems involved, such as the sender, recipient, and any intermediaries (like a health information exchange).

**Benefits:**

By using a standard approach, healthcare providers can get timely updates about their patients, enabling them to take action quickly and provide better care. For example, a doctor can be notified when their patient is admitted to the hospital, allowing them to follow up and coordinate care with the hospital team.

**Limitations:**

This guide focuses on the technical aspects of sending and receiving notifications. It doesn't cover the specific business rules or workflows that determine when a notification should be sent. It also doesn't address how to manage patient consent or how to handle sensitive information.

**In summary:**

The Da Vinci Unsolicited Notifications Implementation Guide provides a standardized way for healthcare systems to exchange important patient information in real-time. This can lead to better care coordination, improved patient outcomes, and reduced healthcare costs. It's important to note that this guide focuses on the technical framework and doesn't address all aspects of implementing a notification system.

---

# davinci-atr.md

**TL;DR:** This guide helps doctors and insurance companies share lists of patients in a standard way, making it easier to coordinate care and track costs.

The Da Vinci Member Attribution List (ATR) Implementation Guide defines a standard way to exchange lists of patients (called Member Attribution Lists) between healthcare providers (like doctors and hospitals) and payers (like insurance companies). These lists are important for managing patients under value-based care arrangements, where providers and payers work together to improve patient outcomes and control costs. 

The guide addresses several needs within the healthcare ecosystem. First, it helps providers know which patients they are responsible for under a specific contract with a payer. This is important for coordinating care and tracking quality metrics. Second, it enables providers and payers to reconcile differences in their patient lists, ensuring everyone agrees on who is included. Third, it allows for secure and efficient exchange of these lists using the FHIR (Fast Healthcare Interoperability Resources) standard, a modern way to share health information electronically.

This guide focuses on the technical details of how these lists should be structured and exchanged, including the specific data elements that should be included and the APIs (Application Programming Interfaces) that should be used. It also addresses security and privacy considerations, ensuring patient information is protected.

While the guide primarily targets healthcare providers and payers, it also has implications for patients. By enabling better coordination of care and more accurate tracking of costs, it can contribute to improved patient outcomes and a more efficient healthcare system. However, the guide itself is technical and not intended for direct use by patients.

It's important to note that this guide does not cover all aspects of value-based care or patient data exchange. It focuses specifically on Member Attribution Lists and assumes that providers and payers already have systems in place to manage other aspects of patient care. 

---

# davinci-crd.md

**TL;DR:** This guide helps healthcare providers get information from insurance companies about what's covered for their patients.

The Coverage Requirements Discovery (CRD) Implementation Guide helps healthcare providers easily find out what is and isn't covered by a patient's health insurance. This includes things like whether a specific medicine, test, or procedure needs approval beforehand (prior authorization), what paperwork is needed, and if there are any special rules. 

The guide defines a way for healthcare providers' computer systems (like electronic health records) to talk directly to insurance companies' computer systems. This communication allows providers to quickly get coverage information while they are working with a patient, instead of having to call the insurance company or look up information on a website. 

The goal is to make it easier for providers to make sure their patients get the care they need without running into problems with their insurance coverage. This can help avoid delays in treatment and make sure patients understand what costs they might have. 

The guide also takes into account privacy and security, making sure that patient information is only shared when needed and is protected properly. 

---

# davinci-deqm.md

**TL;DR:** This guide defines how to use a common language (FHIR) to exchange information needed for quality measurement and reporting.

The Data Exchange for Quality Measures (DEQM) Implementation Guide defines how healthcare providers and payers can share information needed to calculate and report on the quality of healthcare. This guide defines how to represent the information needed to calculate quality measures and how to share that information between healthcare providers and payers. It also defines how to exchange reports that summarize quality measures for individual patients or entire populations.

This guide supports a variety of use cases, including:
- Submitting data to payers about quality measures, such as whether a patient received a medication reconciliation after being discharged from the hospital.
- Requesting data from providers about quality measures, such as whether a patient received a recommended cancer screening.
- Sharing reports with payers about quality measures, such as the percentage of patients who received a flu vaccine.
- Identifying gaps in care, which are instances where patients did not receive recommended care.

This guide is based on the FHIR standard, which is a common language for exchanging healthcare information. By using FHIR, healthcare providers and payers can more easily share information and improve the quality of care.

---

# davinci-dtr.md

**TL;DR:** This guide helps healthcare providers and insurance companies exchange the paperwork needed for insurance coverage.

The Da Vinci Documentation Templates and Rules (DTR) Implementation Guide defines a standard way for healthcare providers and insurance companies to share information electronically. This information is often needed for insurance companies to decide if a medical service, item, or referral will be covered. 

This guide makes it easier for doctors to send the right paperwork to insurance companies. It uses a system called FHIR to create digital forms (called Questionnaires). These forms can be automatically filled in with information from the patient's medical record, saving the doctor time and effort. The guide also allows insurance companies to create forms that change based on the patient's situation, ensuring that only relevant information is collected.

By simplifying the exchange of information, this guide aims to reduce the burden on healthcare providers and speed up the process of getting insurance coverage for patients. 

---

# davinci-ecdx.md

**TL;DR:** This guide helps healthcare systems exchange patient information more efficiently by using a standard approach. It covers different ways to request and share data, including medical records, test results, and documents needed for insurance purposes.

The Da Vinci Clinical Data Exchange (CDex) Implementation Guide is a set of instructions for healthcare systems. It helps them exchange patient information electronically using a standard format called FHIR. This guide focuses on sharing data between healthcare providers and insurance companies (payers) and other providers. It helps payers get the information they need to process claims, authorize treatments, and manage patient care.

The guide describes three main ways to exchange data:

1. **Direct Query:** The payer directly asks the provider for specific information, like a patient's current medical conditions. This approach is the simplest and most efficient when both systems can communicate seamlessly.

2. **Task-Based Approach:** The payer requests data through a "task," which the provider then fulfills. This approach is helpful when the request requires human review or approval, like when sensitive information is involved.

3. **Attachments:** This method is used to exchange additional documents related to claims or prior authorizations. The payer can request specific documents using standard codes, or the provider can submit them proactively based on pre-defined rules.

The CDex guide also addresses security and privacy concerns. It requires systems to use secure methods to protect patient information and ensures that data is only shared for authorized purposes. By using this guide, healthcare organizations can streamline data exchange, reduce administrative burden, and improve patient care.

---

# davinci-ehrx.md

**TL;DR:** This guide helps healthcare systems share patient data in a standardized way, especially for insurance purposes.

The Da Vinci Health Record Exchange (HRex) Implementation Guide focuses on the exchange of patient data between healthcare providers, payers (insurance companies), and other authorized parties. It uses a standardized format called FHIR (Fast Healthcare Interoperability Resources) to make sure that systems can understand and use the information.

The guide addresses several key needs in the healthcare ecosystem:

* **Member Matching:** It helps payers accurately identify patients in their systems, even if the patient is using a different insurance plan. This is important for accessing the right information and coordinating care.
* **Consent:** It defines how patients can grant permission for their data to be shared between healthcare organizations, ensuring privacy and security.
* **Data Exchange:** It provides clear instructions for sharing different types of patient information, like insurance coverage, medical history, and provider details, using a consistent structure.

The HRex guide also defines how to track the origin and history of data, ensuring that healthcare providers and payers know where information came from and who has handled it. This helps build trust in the data and understand its reliability.

Overall, this guide aims to simplify and streamline the sharing of patient data in the US healthcare system, particularly for tasks related to insurance coverage and payment, while respecting patient privacy and data security. 

---

# davinci-epdx.md

**TL;DR:** This guide helps health plans share patient information with doctors, other health plans, and apps that patients choose. 

The Payer Data Exchange (PDex) Implementation Guide explains how health plans can use a standard format to share patient information. This makes it easier for different computer systems to understand and use the data. 

The guide addresses several needs in the healthcare system. For example, it helps doctors get a patient's medical history from their health plan. It also allows patients to easily share their information with a new health plan when they switch insurance. Patients can also choose to share their information with third-party apps, like personal health records.

To make sure patient data is shared securely, the guide uses special methods like CDS Hooks and SMART on FHIR. These methods allow doctors to request information about their patients and then decide which data should be added to their medical records. 

The guide also explains how health plans can use the OAuth 2.0 protocol to let patients give permission to share their data with other health plans or apps. This means patients have more control over their information. 

While this guide focuses on sharing clinical data, it also includes information from medical claims. It also helps health plans share prior authorization decisions with patients and other payers. 

Overall, the PDex Implementation Guide helps improve how patient data is shared in the healthcare system, making it easier for everyone to access and use the information they need. 

---

# davinci-pas.md

**TL;DR:** This guide helps automate the prior authorization process, making it easier for healthcare providers to get approval from insurance companies for treatments and services.

The **Da Vinci Prior Authorization Support Implementation Guide (PAS IG)** defines a standardized way to exchange information between healthcare providers and insurance companies for prior authorization of medical services. This guide aims to make the process faster and more efficient by using a common language (FHIR) to share data electronically.

Prior authorization is often a slow and manual process, requiring phone calls, faxes, and paperwork. This can delay care for patients and create extra work for healthcare providers. The PAS IG helps address these challenges by:

* **Specifying what information needs to be included in a prior authorization request.** This ensures that insurance companies receive all the necessary details to make a decision.
* **Allowing providers to submit requests electronically.** This eliminates the need for faxes and paper forms.
* **Enabling insurance companies to send responses back electronically.** This allows providers to get decisions faster.

The PAS IG also supports updates and cancellations of prior authorization requests, as well as inquiries about the status of a request. 

By automating the prior authorization process, the PAS IG aims to reduce administrative burden, speed up decision-making, and improve the overall experience for both patients and healthcare providers.

---

# davinci-pcde.md

**TL;DR:** This guide helps health insurance companies easily share patient treatment information when a patient switches insurance plans. This can help prevent delays or gaps in care.

The Payer Coverage Decision Exchange (PCDE) Implementation Guide defines a standard way for health insurance companies (payers) to share information about a patient's ongoing treatments when they switch from one insurance plan to another. 

**Why is this needed?**
Currently, when patients change insurance plans, the new insurance company often doesn't have all the information they need about the patient's current treatments. This can lead to delays or interruptions in care because the new insurance company might need to re-authorize treatments or gather more information before approving them. 

**How does this guide help?**
This guide creates a standard format for sharing information, like what treatments the patient is receiving, what conditions they have, and what medical records support those treatments. By using this format, insurance companies can automatically share the necessary information, making the transition smoother for patients and their healthcare providers.

**What are the benefits?**
- Patients can continue their treatments without delays or interruptions.
- Healthcare providers don't have to spend extra time submitting paperwork to the new insurance company.
- New insurance companies can make faster decisions about approving treatments.

**What are the limitations?**
- This guide doesn't force insurance companies to automatically approve treatments from a previous plan. The new insurance company still needs to review the information and make their own decisions based on their policies.
- It doesn't cover all types of healthcare information. It focuses specifically on active treatments. 
- It relies on both insurance companies using technology that supports this standard.

**In summary,** the PCDE Implementation Guide aims to improve the continuity of care for patients when they change insurance plans by making it easier for insurance companies to share information about ongoing treatments. While it doesn't solve all the challenges of transitioning between insurance plans, it offers a significant step towards a more seamless and patient-centered healthcare experience. 

---

# davinci-pct.md

**TL;DR:** This guide helps healthcare providers and insurance companies exchange cost estimates for medical services using a standard format.

The **Da Vinci Patient Cost Transparency Implementation Guide** provides detailed instructions for healthcare providers and insurance companies to exchange financial information about medical services. This includes sharing good faith estimates (GFEs) with patients and insurance companies, and advanced explanations of benefits (AEOBs) with patients.

The guide helps address the need for patients to understand their potential costs before receiving medical services. It defines how providers can share cost estimates with insurance companies, who can then calculate the patient's expected out-of-pocket costs. The guide also describes how providers can work together to create a single, comprehensive GFE when multiple providers are involved in a patient's care.

This guide leverages the FHIR standard, a widely used format for exchanging healthcare information. Using FHIR helps ensure that different computer systems can understand and process the information, making it easier for providers and insurance companies to share cost estimates. By using this guide, healthcare providers and insurance companies can make the cost of healthcare more transparent for patients, helping them make informed decisions about their care.

The guide focuses on GFEs and AEOBs, and does not address other healthcare processes like eligibility checks, scheduling appointments, or getting prior authorization for services. It also does not cover situations where a patient has more than one insurance plan. 

---

# davinci-pdex-formulary.md

**TL;DR:** This guide helps healthcare providers exchange information about prescription drug formularies.

The DaVinci Payer Data Exchange (PDex) US Drug Formulary Implementation Guide defines a standard way to exchange information about prescription drug formularies using the FHIR standard. A drug formulary is a list of prescription drugs that a health insurance plan will cover.

This guide is intended for use by health insurers in the United States. It enables them to share their formularies with patients, consumers, and other healthcare providers in a consistent and machine-readable format. This can help patients understand the costs of their medications and find lower-cost alternatives. It can also help consumers compare drug coverage across different insurance plans.

The guide defines specific data elements that must be included in a formulary, such as the drug name, dosage form, and tier level. It also defines how to represent coverage rules, such as prior authorization requirements and quantity limits. In addition, the guide provides guidance on how to search for drugs within a formulary.

It is important to note that the cost-sharing information in a formulary may not be exact. The actual cost of a medication may vary depending on the pharmacy and the patient's individual benefits. Patients should always consult with their healthcare provider and pharmacist to get the most accurate information about their medication costs.

---

# davinci-pdex-plan-net.md

## PDEX Payer Network Implementation Guide: Summary for Patients and Non-Experts

**TL;DR:** This guide helps healthcare apps easily access information about insurance plans and their provider networks. 

The PDEX Payer Network Implementation Guide (also called Plan-Net) sets a standard for how health insurers should share information about their insurance plans, the healthcare providers in their networks, and the locations where these providers offer services. This makes it possible for third parties to build apps that let patients and providers easily find in-network doctors, hospitals, pharmacies, and other healthcare professionals who can meet their needs. 

This guide focuses specifically on provider directories maintained by payers (insurance companies). It allows apps to search for providers based on various criteria, such as name, specialty, location, and whether they are accepting new patients. This information can then be displayed in a user-friendly way, making it easier for patients to find the right healthcare provider for their situation.

While this guide defines how to access the provider directory information, it doesn't specify how patients would find the right app or website to use.  It also doesn’t require apps to provide any personal information about the patient when they search for providers, helping to protect patient privacy. 

---

# davinci-pr.md

**TL;DR:** This guide defines a way for healthcare providers to easily get copies of payment explanations from insurance companies using a standardized method.

The **Da Vinci Postable Remittance Implementation Guide** defines a standard way for healthcare providers to automatically retrieve copies of remittances (payment explanations) from payers (insurance companies) and clearinghouses. This guide aims to replace current manual processes, such as using payer portals, making phone calls, or sending faxes, which are time-consuming and prone to errors.

Currently, healthcare providers often struggle to obtain remittances for various reasons, including shared Tax Identification Numbers, changes in providers' systems, and issues with claim processing.  This can lead to delays in receiving payments and difficulty reconciling accounts.

This guide addresses these challenges by defining a secure way for providers to request copies of remittances electronically. Providers can search for remittances based on claim information, patient information, or payment details. They can then download a copy of the remittance as a standardized file.

By automating the process of retrieving remittances, this guide aims to reduce manual work for providers and payers, improve the efficiency of payment reconciliation, and potentially decrease days in Accounts Receivable. It also offers a more secure and reliable alternative to traditional methods of obtaining remittances.

It is important to note that the timeframe for retrieving remittances can vary depending on the payer. Payers are expected to provide information about their specific search timeframes. Additionally, the guide addresses privacy and security considerations, emphasizing the need for secure authentication and adherence to relevant regulations.

This guide provides a standardized approach for retrieving remittances, which can lead to significant benefits for both healthcare providers and payers.

---

# davinci-ra.md

**TL;DR:** This guide helps healthcare providers and insurance companies share information about a patient's health conditions, especially those that might require more medical care and cost more to treat.

The Da Vinci Fast Healthcare Interoperability Resource (FHIR) Risk Adjustment Implementation Guide (IG) helps healthcare providers and insurance companies, also known as payers, easily exchange information about a patient's health. Specifically, it focuses on "risk adjustment," which is a way to understand and plan for the healthcare needs and costs of patients with chronic or complex conditions. 

The guide creates a standard way to report "coding gaps." These gaps happen when a patient's medical records don't have enough information about their health conditions to accurately calculate their risk.  The guide helps payers tell providers about these gaps, so providers can update the patient's records and ensure everyone has the right information. This can lead to better care for patients and more accurate payments for providers.

This guide also explains how providers can send information back to payers, either to confirm they've addressed a coding gap or to let the payer know the gap is incorrect. It even includes a way for providers to add notes to the report, explaining what actions they took during a patient visit.  

The goal of this guide is to make communication about a patient's health conditions smoother and more efficient, ultimately leading to better care and a better understanding of healthcare costs. 

---

# davinci-vbpr.md

**TL;DR:** This guide helps healthcare providers and payers share information about how well the provider is caring for their patients.

The Da Vinci Value-Based Performance Reporting Implementation Guide (IG) improves communication between healthcare providers and payers about patient care quality and costs in value-based care agreements. These agreements offer financial rewards to providers for meeting certain performance goals, like making sure patients get recommended preventive screenings or managing chronic conditions effectively.

This guide defines a standard way to share performance data using a format called FHIR (Fast Healthcare Interoperability Resources).  It helps providers understand their performance in areas like:

- **Quality of care:** How well the provider is meeting specific quality measures, such as breast cancer screening rates or blood sugar control for patients with diabetes.
- **Cost of care:** How the provider's costs for patient care compare to agreed-upon targets. 
- **Utilization:** How often patients use healthcare services, such as hospital admissions or emergency room visits.

By standardizing this reporting process, the IG aims to reduce administrative burden on providers, who often receive data in different formats from various payers. It also promotes transparency and helps both providers and payers track progress toward value-based care goals.

This version of the IG focuses on reports sent from payers to providers. Future versions may address data flowing from providers back to payers. 

---

# dental-data-exchange.md

**TL;DR:** This guide helps dentists and doctors share patient information electronically in a standardized way.

The HL7 FHIR® R4 Implementation Guide: Dental Data Exchange aims to standardize how medical and dental providers share patient information electronically. This guide focuses on dental referrals and consultation notes, enabling better communication between dentists and doctors. 

Currently, dentists and doctors often rely on paper forms, faxes, or emails to exchange patient information, which can be slow and inefficient. This guide encourages the use of electronic health records (EHRs) and electronic dental records (EDRs) to exchange key data elements electronically, improving care coordination and reducing administrative burden.

The guide provides detailed instructions on how to structure dental information using FHIR resources, ensuring that different computer systems can understand and process the data. It also addresses specific use cases, such as a medical provider referring a patient to a dentist or a dentist sending a consult note back to a doctor. By promoting standardized data exchange, this guide aims to improve patient care, enhance communication between healthcare providers, and support better-informed treatment decisions. 

---

# DeviceAlerting.md

**TL;DR:** This guide helps healthcare systems better manage and use information about medical devices and alerts related to them.

The DeviceAlerting Implementation Guide (IG) defines how to represent information about medical devices and the alerts they generate using the FHIR standard. This includes details like the device's type, manufacturer, and location, as well as the nature and severity of any alerts or alarms it produces.

This IG addresses the need for standardized ways to share device-related information across different healthcare systems. By adopting this guide, hospitals and clinics can more easily exchange data about medical devices, which can improve patient safety and care coordination. For example, if a patient is transferred to a different hospital, the receiving hospital can quickly access information about any implanted medical devices the patient has and any associated alerts.

The IG also supports better management of device alerts. By standardizing how alerts are represented, healthcare providers can more effectively monitor and respond to them. This can help to prevent adverse events and ensure that patients receive timely and appropriate care.

It's important to note that this IG focuses on the technical aspects of representing device and alert information. It does not specify clinical workflows or decision-making processes related to device management or alert response. Those aspects would need to be addressed separately by individual healthcare organizations. 

---

# dicom-sr.md

**TL;DR:** This guide helps healthcare systems understand and use medical imaging results stored in a specific format called DICOM SR.

The DICOM SR to FHIR Implementation Guide defines how to convert medical imaging observations from the DICOM SR format to FHIR resources. DICOM SR, which stands for Digital Imaging and Communications in Medicine - Structured Report, is a standard way to store observations made during medical imaging procedures. These observations can include measurements taken by a sonographer, notes by a radiologist, or results from automated analysis. 

This guide focuses specifically on a type of DICOM SR called a "Measurement Report." It provides a way to translate the information from this report into FHIR resources, particularly the "Observation" resource. This makes it easier for systems that use FHIR to understand and use the results from medical imaging. 

The guide assumes that information about the patient, the imaging study, and the request for the study already exist in the FHIR system. It primarily focuses on converting the imaging measurements and related details, not on recreating the entire medical history. 

While this guide allows for the conversion of imaging results into FHIR, it may not be possible to convert back to a complete DICOM SR from the FHIR resources. This is because the guide focuses on translating the most important information for general use and may not include every detail from the original DICOM SR. 

---

# dme-orders.md

**TL;DR:** This guide helps healthcare providers share information electronically when ordering medical equipment or services for patients outside of the hospital, like at home.

The **Post-Acute Orders Implementation Guide (PAO IG)** helps healthcare providers exchange orders for services and equipment needed by patients after they leave the hospital or in non-hospital settings. This includes things like wheelchairs (Durable Medical Equipment or DME) and services like at-home nursing care (Home Health Services or HH). The guide focuses on sharing information electronically between the healthcare professional ordering the items or services (Ordering Provider) and the provider who will deliver them (Rendering Provider).

The PAO IG addresses the need for a standardized way to send orders and supporting documentation, such as proof of medical necessity or insurance approvals, between different healthcare systems. This is important because it can speed up the process of getting patients the equipment and services they need, reduce errors, and improve communication between healthcare providers.

The guide defines specific ways to exchange information using a technology called FHIR (Fast Healthcare Interoperability Resources), which allows different computer systems to talk to each other. It also considers situations where a third party (Intermediary) might be involved in managing the order, such as a company that coordinates DME deliveries. 

The PAO IG is designed to handle different types of orders, including DME, HH, and medications related to DME. It also allows for updates to orders, such as cancellations or changes.  It does not cover things like patient feedback, services not related to DME or HH, or detailed discussions about cost. 

By providing a clear set of rules and guidelines for exchanging information, the PAO IG aims to improve the efficiency and effectiveness of post-acute care ordering, helping patients get the care they need more quickly and easily.

---

# ebm.md

**TL;DR:** This guide helps computers share scientific information about medicines and treatments.

The Evidence Based Medicine on FHIR (EBMonFHIR) Implementation Guide defines how to use the FHIR standard to share scientific knowledge about medicines. This includes information about research studies, the results of those studies, and recommendations for treatments. 

This guide is important because it can help healthcare providers make better decisions about patient care. By using a common standard to share information, healthcare providers can access the latest scientific evidence from a variety of sources. This can help them choose the best treatments for their patients and avoid treatments that may not be effective or may even be harmful.

The guide also helps researchers share their findings with others. This can help accelerate the pace of medical research and lead to new discoveries.

The EBMonFHIR Implementation Guide is a complex document that is intended for developers of health information systems. However, the concepts it describes are important for everyone to understand. By using a common standard to share information, we can make sure that everyone has access to the latest scientific evidence about medicines and treatments.

---

# efss.md

**TL;DR:** This guide improves how health and human services information is shared, especially for people who need many kinds of care, like help with food or housing along with their medical needs. It aims to make it easier to share information between different computer systems. 

The guide promotes better ways to share information about patients between different computer systems in healthcare and human services.  It addresses the need for better data standards so that information can be easily understood and used by everyone involved in a person's care. This is especially important for people who need support beyond just medical care, such as help with housing, food assistance, or other social services.

The guide focuses on expanding existing healthcare data standards (called FHIR) to include information relevant to human services. This means that information about a person's medical needs and their social service needs can be shared seamlessly between different organizations, like hospitals, clinics, and social service agencies. 

By improving data sharing, this guide aims to enable a more complete picture of a person's health and well-being. This can lead to better coordination of care, more efficient delivery of services, and ultimately, better outcomes for people who need support. The guide also highlights some of the challenges in using these standards for social services and suggests ways to overcome them.

For example, the guide suggests creating new data standards that can be used to describe information about human services programs, like the types of services offered and the eligibility requirements. It also emphasizes the importance of making sure that everyone involved in developing and using these standards, including human service providers and technology developers, is working together. 

---

# ehrsfm-ig.md

**TL;DR:** This guide helps computer systems share patient health information in a safe and standardized way.

The HL7 Electronic Health Record System Functional Model (EHR-S FM) Implementation Guide defines how computer systems used for electronic health records (EHRs) should work. It describes the features and functions that these systems should have to manage patient information effectively and securely. This includes things like creating and managing patient records, handling orders for medications and tests, supporting patient privacy and security, and sharing information with other healthcare providers. 

The guide is designed to help different computer systems understand and use the same types of health information. This way, doctors, nurses, and other healthcare workers can access the information they need, when they need it, no matter where the patient goes for care. It helps make sure that patient information is accurate, complete, and protected.

The guide also explains how to create profiles, which are customized sets of functions tailored to specific healthcare settings or needs. For example, a profile might be created for a hospital, a doctor's office, or a research study. 

This guide is important because it helps improve patient care by making it easier for healthcare providers to share information. It also helps to protect patient privacy and security by setting standards for how patient information is handled. 

---

# ehrs-rle-ig.md

**TL;DR:** This guide helps keep track of what happens to your health records, like when they're created, updated, or shared. It makes sure there's a clear history of these events.

The "Electronic Health Record System (EHR-S) Functional Model - Record Lifecycle Events - FHIR Implementation Guide" is a set of rules for how electronic health records should track changes throughout their lifespan. This includes events like creating a new record, updating information, sharing it with another doctor, or even deleting it.  

This guide is important because it helps ensure that patient data is managed safely and responsibly. By tracking every action taken on a health record, it creates a clear history of who did what and when. This can be crucial for things like patient safety, legal reasons, or research.

The guide uses a standard called FHIR (Fast Healthcare Interoperability Resources), which allows different computer systems to exchange health information easily. It defines specific ways to record information about each event that happens to a health record. This includes who was involved, what they did, when it happened, and why.

This guide doesn't tell healthcare providers *how* to build their systems. Instead, it tells them *what information* they need to track to be compliant with the rules. By following this guide, healthcare systems can make sure they have a complete and trustworthy record of everything that happens to a patient's health information. This helps protect patient privacy and ensures that important information is never lost.

---

# eLTSS.md

**TL;DR:** This guide helps computers share information about long-term services and supports (LTSS) for people who need help with daily activities.

The eLTSS Implementation Guide (IG) explains how to use a standardized format called FHIR (Fast Healthcare Interoperability Resources) to exchange information about LTSS. It focuses on creating care plans that outline a person's needs, goals, and the services they receive. 

This guide is important because it helps different computer systems, like those used by healthcare providers, state agencies, and insurance companies, understand and share LTSS information. This makes it easier to coordinate care for people who need LTSS. 

The guide explains how to represent different parts of a care plan, such as the person's goals, the services they need, who is providing those services, and how much they cost. It also includes ways to track a person's progress and to record agreements and signatures related to the plan. 

By using this guide, healthcare providers can more easily share information about LTSS, which can lead to better care for people who need it. 

---

# emedicinal-product-info.md

**TL;DR:** This guide defines a common standard for sharing information about medicines electronically. 

The Electronic Product Information (ePI) Implementation Guide helps create a common way to share information about medicines between computer systems. This includes information for healthcare providers, information for patients, and the information on the package label. 

Right now, this information is often shared as a PDF, which makes it hard to search and use. This guide recommends using a new technology called HL7 FHIR to share this information. HL7 FHIR makes it easier to search the information and to use it in different ways, like on websites and in mobile apps.

This guide defines a common set of data elements and codes that can be used to describe medicines. It also defines different types of ePI documents, depending on the type of information they contain. For example, a "Type 1" document might only contain the narrative text of the package leaflet, while a "Type 3" document might also contain structured information about the medicine's ingredients and clinical use. 

This guide is meant to be a starting point for developing more specific guides for different regions. For example, the guide could be used to develop separate guides for the USA, the European Union, and Japan. This would ensure that information about medicines can be shared easily between different countries. 

---

# fetal_records.md

**TL;DR:** This guide helps computer systems share information about a fetus during pregnancy. It focuses on how to represent the fetus and related data like ultrasound results or medication orders in a standard way. 

The Pregnancy, Fetal and Child Health Record Implementation Guide (IG) defines how to handle information about a fetus before birth using the FHIR standard. It addresses the need for consistent ways to represent a fetus as a distinct individual in healthcare systems and exchange data about them between different systems, such as electronic health records (EHRs) and specialized systems like those used for ultrasound or lab results.

Currently, there's no single agreed-upon way to store or share fetus data. Some systems treat the fetus as part of the mother's record, while others may have separate but inconsistent methods. This IG aims to improve communication by providing guidelines on:

- **When to treat the fetus as a separate entity:** The guide recommends creating a separate record for the fetus when data specific to the fetus, like femur length or heart rate, is collected. 
- **How to identify the fetus:**  It suggests using a unique identifier for each fetus, especially in cases of multiple pregnancies, to ensure data is linked to the correct individual.
- **What data to link to the fetus:** Information directly related to the fetus, such as ultrasound findings or diagnoses, should be associated with the fetus's record. 
- **How to handle medication and procedures for the fetus:** The IG explains how to represent medication orders or procedures specifically intended for the fetus, ensuring clarity about the recipient of care.

This IG is primarily for software developers who build systems used in obstetrics and child health. It also helps healthcare providers and researchers understand how fetus data is exchanged. It's important to note that this IG focuses on the technical aspects of data exchange and doesn't address legal, ethical, or political issues surrounding fetal data. 

By promoting standardized ways to represent and exchange fetus information, this IG aims to improve communication and data sharing in healthcare, potentially benefiting both patients and healthcare providers during pregnancy. 

---

# fhir-ae-care-ig.md

**TL;DR:** This guide helps healthcare providers use a standard way to share information about bad events that happen during medical care. It focuses on making it easier to report and track these events to improve patient safety.

The Adverse Event Clinical Care Implementation Guide (IG) defines a standard way to record and share information about adverse events, also known as harmful or unexpected incidents, that occur during medical care. This guide specifically focuses on how healthcare providers can use this standard in clinical settings, such as when reporting incidents.

The IG addresses the need for better communication and tracking of adverse events. By using a common format, healthcare providers can easily share information about these events with each other and with organizations that collect this data. This can help to identify patterns and trends in adverse events, leading to improvements in patient safety.

The guide provides examples of how to record information about different types of adverse events, including those that result from medication errors, medical devices, or problems during procedures. It also shows how to record information about the people involved in the event, the severity of the event, and any actions taken to mitigate the harm.

By using the standard defined in this guide, healthcare providers can improve the quality and safety of patient care. The guide helps to ensure that information about adverse events is collected and shared in a consistent and reliable way, which can help to prevent future incidents and improve patient outcomes. 

---

# fhir-ae-research-backport-ig.md

**TL;DR:** This guide helps healthcare systems use FHIR to exchange information about adverse events that happen during research studies, especially clinical trials.

The *Adverse Event Clinical Research Implementation Guide* defines how to represent information about adverse events in clinical research using the FHIR standard. This includes information such as the type of event, its severity, possible causes, and actions taken to manage it. 

The guide is important because it helps make sure that information about adverse events is collected and shared consistently across different systems. This is important for ensuring patient safety and for meeting regulatory requirements. For example, if a patient experiences a serious side effect during a clinical trial, the information needs to be reported to the sponsor and to regulatory authorities like the FDA. By using a standardized format like FHIR, this information can be exchanged electronically, which is faster and more efficient than paper-based methods.

This implementation guide helps healthcare systems use FHIR to share information about adverse events in a standard way, which can improve patient safety and make it easier to conduct clinical research.

---

# fhir-ae-research-ig.md

**TL;DR:** This guide helps healthcare systems consistently collect and share information about side effects that happen during research studies.

The Adverse Event Clinical Research Implementation Guide (IG) provides a standard way to represent information about side effects, also known as adverse events, in clinical research. It defines how this information should be structured and shared electronically using the FHIR standard, which is a way to exchange healthcare information digitally. 

The guide addresses the need for better data collection and reporting of adverse events in clinical trials. By providing a standardized format, it aims to make it easier to collect this information from different sources, such as Electronic Health Records (EHRs), and share it with researchers, sponsors, and regulatory agencies like the FDA. This can help improve the safety and effectiveness of new drugs and medical devices.

The guide includes examples of how to represent different types of adverse events, including serious and non-serious events, as well as events related to medications, procedures, and devices. It also defines terms and criteria related to adverse events, such as severity, outcome, and causality. 

---

# fhir-bfdr.md

**TL;DR:** This guide helps healthcare providers and government agencies share information about births and fetal deaths.

The Birth and Fetal Death Reporting (BFDR) Implementation Guide (IG) defines a standard way to exchange data about births and fetal deaths electronically. It covers information typically found on birth certificates and fetal death reports, such as the baby's name, birth weight, and the parents' demographics. The guide also includes details about the mother's pregnancy, including risk factors, infections, and procedures.

This guide is important because it helps healthcare providers send information to state and national agencies efficiently and accurately. By using a standard format, the data can be easily understood and used for important tasks such as tracking birth rates, identifying health trends, and issuing birth certificates.

While the guide aims to cover all essential data elements, some information may not be captured electronically, and some states may have specific requirements not covered by the standard. The guide also acknowledges that electronic systems may use different ways to link a mother's record to her baby's record, which could impact data retrieval. 

---

# fhir-breast-radiology-ig.md

**TL;DR:** This guide defines a standard way to share breast imaging reports using FHIR.

The Breast Imaging Implementation Guide (IG) enables healthcare providers to exchange breast imaging reports electronically in a consistent format. It specifies how to represent key information from mammograms, ultrasounds, MRIs, and other imaging studies using the FHIR standard. 

This IG addresses the need for interoperability in breast imaging, allowing different healthcare systems to share reports seamlessly. This helps ensure that patients and their providers have access to complete and accurate imaging information, regardless of where the exams were performed. The guide defines specific data elements for findings, assessments, and recommendations, enabling consistent interpretation and follow-up care. 

By promoting the use of a common standard, this IG facilitates better communication among healthcare providers, improves care coordination, and ultimately enhances patient care in breast imaging. 

---

# fhircast-docs.md

**TL;DR:** This guide helps different healthcare apps work together smoothly, ensuring everyone sees the same patient information.

The FHIRcast Implementation Guide (IG) defines a method for healthcare applications to communicate and synchronize in real-time, enhancing clinical workflows. Imagine a doctor working with multiple applications—an electronic health record (EHR), a picture archiving and communication system (PACS), and a dictation system. FHIRcast ensures that all these systems display the same patient's data simultaneously.

FHIRcast works like a central hub that connects different apps. When a doctor opens a patient's chart in the EHR, the hub notifies other subscribed apps, such as the PACS and dictation system, to open the same patient's information. This way, everyone involved in the patient's care is looking at the same information, reducing errors and improving efficiency.

Beyond basic synchronization, FHIRcast supports sharing content related to a patient, encounter, or report. For example, a measurement taken in a PACS viewer can be shared with a reporting system, ensuring that everyone has access to the latest data. FHIRcast uses a "transactional" approach, meaning that changes are communicated as they happen, ensuring consistency across all connected apps.

The guide also addresses potential challenges like synchronization errors, offering guidance on handling such situations. It discusses considerations for apps with different capabilities, like those that can open multiple patients simultaneously versus those that can only handle one at a time.

Overall, the FHIRcast IG provides a framework for seamless real-time communication and data sharing among healthcare applications, improving clinical workflows and promoting better care coordination.

---

# fhir-cdisc-mapping.md

Okay, I'm ready to create a patient-friendly summary of a FHIR Implementation Guide (IG) when you provide the source files. 

Just paste the relevant text from the IG, and I'll follow your guidelines to generate a clear and concise summary that explains:

* **What the IG does in simple terms (TL;DR)**
* **The specific purpose and scope of the IG**
* **How the IG addresses healthcare needs**
* **Any relevant technical terms, explained in plain language** 

I'll make sure the summary is easy to understand for someone without a technical background, keeps it within 200-400 words, and follows your tone and style guidelines. 

Let me know when you have the IG content ready! I'm here to help. 

---

# fhir-central-cancer-registry-reporting-ig.md

**TL;DR:** This guide helps automate the secure sharing of cancer patient information between healthcare providers and central cancer registries.

The Central Cancer Registry Reporting Implementation Guide (IG) defines how electronic health records (EHRs) can automatically send cancer patient information to central cancer registries. These registries collect and analyze data on cancer cases to improve cancer prevention, treatment, and research.

Currently, reporting cancer data to registries is often a manual and time-consuming process. This guide aims to streamline that process by using a standardized format (called FHIR) to electronically package and send the necessary information.

**How it works:**

When a patient is diagnosed with cancer or receives cancer treatment, their EHR system can automatically identify this information. A special app, called the Health Data Exchange App (HDEA), then packages the relevant information into a secure report. This report is then sent to the appropriate central cancer registry, either directly or through a trusted third party. The guide defines what information should be included in the report and how it should be formatted.

**Benefits:**

Automating this process can help ensure that cancer cases are reported more quickly and accurately, leading to better data for research and public health initiatives. It can also reduce the burden on healthcare providers who currently have to manually report this information.

**Limitations:**

This guide focuses on sharing data that is already available in the EHR. It does not define how to validate the data or how to collect data from sources outside the EHR. It also does not address patient consent or privacy concerns, which are handled separately by healthcare providers.

This guide is part of a broader effort to improve the way health information is shared and used. By automating the reporting of cancer data, it can help improve cancer care and research, ultimately benefiting patients and the healthcare system as a whole. 

---

# fhir-clinical-document.md

**TL;DR:** This guide helps healthcare systems exchange clinical documents like discharge summaries and reports in a standard way using FHIR.

The FHIR Clinical Document Implementation Guide (IG) defines a common way to represent clinical documents using the Fast Healthcare Interoperability Resources (FHIR) standard. It provides a consistent starting point for creating and sharing documents like discharge summaries, progress notes, and reports, ensuring they can be easily understood and used by different computer systems.

This guide addresses the need for a universal way to exchange clinical documents electronically. Currently, many different methods and formats are used, which can make it difficult for healthcare systems to share information. By defining a clear standard, this IG helps to improve interoperability, allowing different systems to exchange information seamlessly.

The FHIR Clinical Document IG is based on the HL7 Clinical Document Architecture (CDA), a widely used standard for clinical documents. It leverages the principles and lessons learned from CDA while providing a modern, FHIR-based approach. This makes it easier for organizations already using CDA to transition to FHIR.

It's important to note that this guide focuses primarily on the header information of a clinical document, similar to the header of a traditional letter. Future updates may expand the scope to include more detailed guidance on representing the body of the document.

This IG benefits patients by making it easier for healthcare providers to share their medical information electronically, potentially leading to better-coordinated care. It also benefits healthcare providers by simplifying the process of creating and exchanging clinical documents, reducing administrative burden and improving efficiency.

The FHIR Clinical Document IG supports several important features, including the ability to track document versions, manage replacements and addendums, and ensure the document can be read by humans as well as processed by computers. It also addresses security considerations to protect patient information.

Overall, this guide promotes a more standardized and efficient approach to exchanging clinical documents electronically, contributing to better interoperability and improved healthcare information exchange.

---

# fhir-consent-management.md

**TL;DR:** This guide explains how patients can control who can see their health information using a standardized, computer-readable format called FHIR. 

The **FHIR Consent Management Implementation Guide** defines how patients can give or revoke permission for others to access their health data. This includes how patients can review and sign consent forms, delegate consent to someone else, and see a history of who has accessed their information. 

This guide focuses on the technical details of how consent is managed, making it easier for different computer systems in healthcare to share information securely and according to patient wishes. It explains how a patient's consent choices are recorded and how these choices are communicated between different systems, like those used by hospitals, doctors' offices, and insurance companies.

**Important Note:** This guide only covers how consent is recorded and shared, not the rules about who can access data or how that data can be used. Those decisions are based on laws, company policies, and the specific permissions granted by the patient through the consent process. 

---

# fhir-COVID19Library-ig.md

**TL;DR:** This guide helps healthcare systems share information about COVID-19 in a standard way.

The COVID-19 FHIR Profile Library Implementation Guide (IG) is a collection of data elements related to COVID-19.  It is meant to be a resource for other groups creating their own guides for specific COVID-19 use cases, such as public health reporting or research. This ensures that different systems use the same definitions and structure for COVID-19 information, making it easier to share and analyze.

The guide includes profiles for:
- **Lab tests:** These profiles specify how to record and transmit results for various COVID-19 lab tests, including those that detect the virus, antibodies, and other related markers.
- **Exposure and travel history:** These profiles capture information about a person's potential exposure to COVID-19, including whether they have been in close contact with someone infected or have traveled to areas with high infection rates.
- **Signs, symptoms, diagnoses, and underlying conditions:** These profiles capture information about a patient's health status related to COVID-19, including their symptoms, diagnoses, and any pre-existing medical conditions that might affect their risk or outcome.
- **COVID-19 Immunization:** This profile captures information about a person's vaccination status for COVID-19, including the type of vaccine, the date administered, and the manufacturer.

This guide does not cover electronic case reporting to public health authorities. Other resources should be used for that purpose. 

This IG is a collaborative effort involving many organizations and individuals, including the CDC, HL7, and others. It aims to promote consistency and avoid duplication of effort in representing COVID-19 data using FHIR. 

---

# fhir-cow-ig.md

**TL;DR:** This guide explains how to use FHIR to improve the way healthcare providers share information about orders, like prescriptions or lab tests. It focuses on making sure order fillers, like pharmacists or labs, have all the details they need to carry out the order correctly. 

The FHIR Clinical Ordering Workflow (COW) Implementation Guide helps healthcare systems exchange information about orders more effectively. It addresses the challenge of making sure that everyone involved in an order – the person placing it, the person receiving it, and the person fulfilling it – has access to the necessary information. The guide focuses on how to organize and share the content of an order, including details like what needs to be done, who it's for, and any special instructions. 

One key aspect the guide tackles is how to give the order filler all the information they need to do their job. This can be done in a few ways, depending on the situation. Sometimes, all the information can be provided upfront. Other times, the order filler might need to request additional details. The guide explores different approaches to sharing this information, including techniques like using standardized queries and clearly defining who has permission to access what. 

By following this guide, healthcare systems can improve the accuracy and efficiency of their ordering processes, ultimately leading to better patient care. 

---

# fhir-cross-version.md

**TL;DR:** This guide helps different computer systems share health information in a standard way, even if they were built using different versions of the FHIR standard.

The FHIR Cross-Version Implementation Guide ensures that older and newer computer systems that use the FHIR standard can still exchange health information effectively.  Think of it like a translator that helps different versions of a language understand each other. 

This is important because healthcare organizations often use various software applications, and not all of them are updated at the same time. This guide helps bridge the gap between different FHIR versions, making sure that patient data can be shared seamlessly for better care coordination and research, regardless of the technology used by each organization. 

It defines rules for converting data between different FHIR versions for all the common types of health information, like patient demographics, medical conditions, medications, observations, and more. This ensures that even if one system is using an older version of FHIR and another is using a newer one, they can still understand the information being exchanged. 

By promoting interoperability across different FHIR versions, this guide helps healthcare providers access a more complete picture of a patient's health, leading to more informed decisions and better patient outcomes. 

---

# fhir-directory-attestation.md

**TL;DR:** This guide helps healthcare systems share information about doctors, hospitals, and other healthcare providers.

The National Healthcare Directory Attestation and Verification Implementation Guide defines a common way for healthcare organizations to exchange verified information about healthcare providers. This information includes details about doctors, nurses, hospitals, clinics, pharmacies, and other healthcare services. 

The guide focuses on establishing a central source of validated provider data. It allows healthcare providers to submit information about themselves (attestation) and describes how this information can be checked for accuracy (verification). The guide also outlines how this verified data can be shared with other healthcare systems for tasks like finding doctors, making referrals, and checking insurance coverage.

While the guide encourages making much of this information public, it recognizes the need to protect sensitive data, such as the location of domestic violence shelters. It includes ways to restrict access to this information and ensures it is only shared with authorized users.

By establishing a common language and process for sharing verified healthcare provider data, this guide aims to improve the accuracy and efficiency of healthcare operations. This can help patients find the right providers, simplify insurance processes, and streamline communication between different parts of the healthcare system. 

---

# fhir-directory-exchange.md

**TL;DR:** This guide defines a standard way for healthcare directories to share information about providers, organizations, and insurance plans using FHIR.

The National Directory Implementation Guide (National Directory IG) defines a standardized way for healthcare directories to use FHIR to exchange information. It focuses on enabling the sharing of data about healthcare providers, organizations like hospitals and clinics, and insurance plans.

The guide addresses the need for accurate and up-to-date provider information in the healthcare ecosystem. It aims to reduce the burden on providers who often have to submit the same information to multiple directories. Instead, providers could attest their information to a central directory that meets the National Directory IG's standards. From there, other directories, such as those maintained by insurance companies or healthcare providers, could access this validated information.

The guide specifies how to represent key information, such as provider demographics, locations, specialties, insurance networks, and electronic endpoints for health information exchange. It also includes ways to describe restrictions on data sharing and the processes used to verify information accuracy.

While initially envisioned as a national standard, the guide's flexible design allows for implementation by smaller directories as well. It does not mandate a specific technical architecture but focuses on ensuring data can be exchanged in a consistent and interoperable way using FHIR, regardless of the directory's size or purpose.

---

# fhir-directory-query.md

**TL;DR:** This guide helps healthcare systems find and share information about healthcare providers and services.

The National Directory Implementation Guide helps healthcare providers and organizations share information about their services and how to connect with them electronically. This includes details like locations, contact information, specialties, insurance networks, and whether they are accepting new patients.

The guide defines ways to ensure the information is accurate and up-to-date. It also includes ways to protect sensitive information, making sure only authorized people can access it.

This guide is designed to work with a large national system. However, it can also be used for smaller, local systems. 

The goal of this guide is to make it easier for healthcare providers and organizations to connect and share information, ultimately improving healthcare for everyone. 

---

# fhir-exchange-routing-ig.md

**TL;DR:** This guide helps healthcare systems share information even when they use different companies to manage their data. It lets systems talk to each other directly or through these companies (called intermediaries) without extra work.

The FHIR Exchange Routing IG aims to make it easier for different healthcare systems to exchange information, especially when they use intermediaries like clearinghouses or health information exchanges (HIEs). These intermediaries often handle tasks like ensuring secure data transfer, scaling systems to handle large amounts of data, and managing connections between different organizations.

This guide focuses on situations where a healthcare provider, clinic, or insurance company needs to send information to another system. It allows the sender to use the receiver's main internet address, even if the receiver relies on an intermediary to manage incoming requests. The sender doesn't need to know if an intermediary is involved.

The guide outlines how intermediaries should handle these requests, ensuring that they are securely passed along to the intended recipient. It also specifies how errors or exceptions should be communicated back to the sender, regardless of whether the problem occurred at the recipient's system or at an intermediary along the way.

This approach is designed to support all types of information requests defined by FHIR. It also addresses security concerns by requiring intermediaries to pass through any security tokens or authorizations granted by the recipient, ensuring that only authorized users can access the information.

It's important to note that this guide does not cover all possible intermediary scenarios. It specifically focuses on situations where the sender and receiver have a pre-existing trust relationship and where the sender always uses the recipient's public internet address. It also doesn't address situations where the intermediary needs to modify the information being exchanged.

By defining clear rules for how intermediaries should handle FHIR requests, this guide helps to simplify healthcare data exchange and allows organizations to leverage intermediaries without adding complexity for those sending information. This can help improve efficiency and interoperability in the healthcare ecosystem.

---

# fhir-extensions.md

**TL;DR:** This guide defines ways to share more detailed health information between different computer systems.

The FHIR Extensions Implementation Guide (IG) expands upon the Fast Healthcare Interoperability Resources (FHIR) standard to allow for the exchange of richer and more specific health data.  It does this by defining new ways to represent information like custom validation rules and detailed medical terminology.

This IG addresses the need for more complete and nuanced health information sharing in the healthcare ecosystem. For example, it enables healthcare providers to exchange detailed information about patient questionnaires, including specific validation rules to ensure data quality. It also provides a registry of standard codes and value sets that can be used to represent medical concepts in a consistent way across different systems.

By using this guide, developers can build software that can share more detailed health information, leading to better patient care. For example, it could help ensure that patient questionnaires are filled out correctly and that medical information is interpreted consistently across different healthcare providers.

**Limitations:** This guide does not cover all aspects of health information exchange. It focuses specifically on extensions to the FHIR standard. Also, the use of these extensions requires agreement between the systems exchanging information. 

---

# fhir-eyecare-ig.md

**TL;DR:** This guide helps eye doctors and their computer systems share information about patients' eye health more easily. It defines how to use a standard called FHIR to store and exchange details about eye exams, tests, diagnoses, and treatments.

The "Eyes on FHIR" Implementation Guide aims to improve eye care by making it easier to share eye health information between different computer systems. This is important because eye care often involves different specialists, clinics, and devices, and sharing information smoothly can lead to better and faster care.

The guide addresses several needs in the eye care ecosystem:

* **Sharing information between eye doctors and other healthcare providers:** For example, it allows an optometrist and an ophthalmologist to easily share a patient's eye exam results and diagnoses.
* **Enabling research and analysis of eye care data:** By standardizing how eye health information is stored, the guide makes it easier to collect and analyze data for research, helping improve treatments and outcomes. 
* **Supporting the use of artificial intelligence (AI) in eye care:** The guide makes it easier to use AI tools for things like diagnosing eye diseases from images, as these tools need standardized data to work effectively.

The guide achieves this by defining specific ways to use FHIR, a standard for exchanging healthcare information. It includes details on how to represent eye exams, diagnoses (like glaucoma or cataracts), procedures (like cataract surgery), and the results of tests like visual field tests and OCT scans. It also includes specific terms and codes used in eye care, making sure everyone is speaking the same language.

While the guide focuses on technical aspects of data exchange, its ultimate goal is to improve the quality and efficiency of eye care for patients. By making it easier to share information, the guide can help ensure that patients receive the best possible care, no matter where they go for treatment. 

---

# fhir-for-fair.md

**TL;DR:** This guide explains how to make health data easier to find, access, share, and reuse by using a standard called HL7 FHIR.

The FHIR for FAIR Implementation Guide (IG) provides instructions on how to organize health information so it can be easily found, accessed, shared, and reused. This is known as making data FAIR (Findable, Accessible, Interoperable, and Reusable). The guide focuses on using HL7 FHIR, a widely recognized standard for exchanging healthcare information electronically.

The guide helps healthcare providers and researchers share health data in a standardized way. This makes it easier for computers to understand and process the information, which is important for research and improving patient care. The guide includes examples of how to describe different types of health data, such as patient demographics, medical conditions, medications, and laboratory results. It also explains how to link data together, making it easier to understand the context of the information.

While the guide focuses on technical aspects of data exchange, it recognizes that sharing health data must also comply with privacy and security regulations. The guide suggests ways to ensure that only authorized users can access the data and that sensitive information is protected.

This guide is a helpful resource for anyone working with health data, including healthcare providers, researchers, and software developers. By following the recommendations in this guide, healthcare organizations can make their data more FAIR, which can lead to new discoveries, better treatments, and improved patient outcomes. 

---

# fhir-gender-harmony.md

**TL;DR:** This guide helps healthcare systems better understand and exchange information about sex and gender.

The HL7 Cross Paradigm Implementation Guide: Gender Harmony - Sex and Gender Representation, Edition 1 clarifies how to represent and share information about a person's sex and gender in a consistent way across different healthcare systems. It aims to improve patient care and safety by ensuring accurate and respectful handling of this sensitive data.

The guide recognizes that the terms "sex" and "gender" are distinct and have different implications for clinical care. It provides specific guidelines for capturing and exchanging data elements like:

* **Gender Identity:** How a person identifies themselves (e.g., male, female, non-binary).
* **Sex Parameter for Clinical Use:** A categorization of sex based on a patient's anatomy or physiology that is relevant in specific clinical situations, such as ordering tests or interpreting results.
* **Recorded Sex or Gender:** Information about sex or gender from official documents (e.g., birth certificate, driver's license).
* **Name to Use:** The name a person prefers to be called.
* **Pronouns:** The pronouns a person uses (e.g., he/him, she/her, they/them).

The guide offers detailed instructions for exchanging this information using different healthcare data standards, including FHIR, HL7 Version 2, and CDA. It provides examples and use cases to illustrate how these standards can be used to capture and share sex and gender information in a way that is clear, consistent, and respectful of patients. 

By adopting the recommendations in this guide, healthcare systems can improve the quality and accuracy of sex and gender data, leading to better patient care and a reduction in health disparities for transgender, intersex, and gender-diverse individuals.

---

# fhir-health-care-surveys-reporting-ig.md

**TL;DR:** This guide helps automate the way healthcare providers send data to the National Center for Health Statistics (NCHS) for important health surveys.

The Health Care Surveys Content Implementation Guide (IG) defines how electronic health records (EHRs) and other systems can send data needed for the National Hospital Care Survey (NHCS) and the National Ambulatory Medical Care Survey (NAMCS). These surveys help researchers understand healthcare trends and improve the quality of care.

This guide addresses the need to make it easier and faster for healthcare providers to send data to NCHS. Instead of manual processes, this guide uses a standardized approach that relies on a technology called FHIR (Fast Healthcare Interoperability Resources). This allows health systems to automatically send data when certain events happen, like when a patient is discharged from the hospital or finishes a visit with their doctor.

The guide covers what data is needed for the surveys, how it should be organized, and how it should be sent securely. It also explains the roles of different systems involved, including the EHR, a special app called the Health Data Exchange App (HDEA), and the NCHS Data Store where the information is stored.

This automated approach reduces the burden on healthcare providers, saving them time and effort. It also helps improve the quality and timeliness of the data sent to NCHS, allowing researchers to get a more accurate picture of healthcare in the United States.

While the guide focuses on specific surveys, it could also be used for other types of data reporting in the future. It does not cover things like how healthcare providers get permission from patients to share their data or how the quality of the data is checked.

The guide uses technical terms like "FHIR profiles" and "Knowledge Artifacts," but it explains these terms clearly so that non-experts can understand them. It is designed to be a helpful resource for anyone who wants to learn more about how this new approach to health data reporting works.

---

# fhir-ichom-breast-cancer-ig.md

**TL;DR:** This guide helps computer systems share information about breast cancer patients in a standardized way.

The International Consortium for Health Outcomes Measurement (ICHOM) Breast Cancer Implementation Guide defines a way to represent information about breast cancer patients using the FHIR standard. This makes it easier for different computer systems, like electronic health records and patient portals, to share this information.

The guide includes two ways to represent the same data: as questionnaires and as individual data elements. Questionnaires can be used to collect information directly from patients or clinicians. Individual data elements can be used to store information in a more structured way, making it easier to analyze.

This implementation guide doesn't focus on specific ways to use the data, like tracking outcomes or comparing different treatments. Instead, it provides a foundation for other developers to build upon, creating tools that can improve care for breast cancer patients. 

For example, developers could use this guide to create applications that help healthcare providers track patient outcomes, compare their performance to other providers, or make more informed treatment decisions. 

---

# fhir-icsr-ae-reporting.md

**TL;DR:** This guide helps healthcare systems better detect and report adverse events (bad reactions) after someone gets a vaccine or a blood transfusion.

The FHIR Implementation Guide for Individual Case Safety Reports (ICSR) Adverse Event Reporting details a process for finding and reporting adverse events from the information in electronic health records. The guide focuses specifically on adverse events that happen after vaccinations or blood transfusions.

This guide provides a way to automatically detect possible adverse events. It does this by using special computer algorithms that look for patterns in patient data.  Once a possible adverse event is found, a doctor can review the information and decide if it is a real adverse event that needs to be reported. The guide also includes instructions for creating a standardized report that can be sent to the FDA. 

This process can help make sure that more adverse events are reported and that the reports have enough information for the FDA to make decisions about the safety of vaccines and blood products. This guide is part of the FDA's efforts to improve the safety of these important medical products.

---

# fhir-identity-matching-ig.md

**TL;DR:** This guide helps healthcare systems better match patient records across different organizations, improving data sharing and patient care.

The **FHIR Identity Matching Implementation Guide** defines standards for verifying patient identities and matching patient records across different healthcare organizations. This is important because patient information is often stored in separate systems, making it difficult to get a complete picture of a patient's health history.

The guide provides recommendations for verifying a patient's identity with varying levels of confidence, from basic checks to more rigorous processes involving multiple pieces of evidence. It also suggests ways to match patient records using weighted demographic information, such as name, address, and date of birth.  

By following the standards in this guide, healthcare providers can more accurately match patient records, leading to better-informed care decisions and a more complete understanding of a patient’s health history. This can also help to avoid duplicate records and reduce errors, ultimately improving patient safety and the overall quality of care. 

---

# FHIR-IG-Human-Services-Directory.md

**TL;DR:** This guide helps healthcare providers and patients find and share information about social services.

The FHIR Human Services Directory Implementation Guide (IG) enables the exchange of information about social services like food banks, transportation assistance, and housing programs. It defines a standard way to represent this information so that it can be understood by different computer systems, including those used by healthcare providers, insurance companies, and social service organizations. 

This guide is particularly important because it helps connect patients with services that can address their social needs, which are known to have a significant impact on health outcomes. For example, a doctor could use this IG to find a local food bank for a patient experiencing food insecurity. Patients themselves could also use applications that leverage this IG to find services on their own. 

This IG makes it easier for healthcare providers and social service organizations to coordinate care by providing a common language for sharing information. It's important to note that this guide does not cover things like determining eligibility for services or providing feedback on the quality of services. However, it represents a significant step towards improving the way healthcare and social services work together to support individuals' overall well-being. 

---

# fhir-ipa.md

**TL;DR:** This guide helps patients get their health information from doctors and hospitals in a safe and secure way.

The International Patient Access (IPA) Implementation Guide explains how apps can get a patient's health information from their doctors or hospitals. It uses a standard way of sharing information called FHIR, which makes it easier for different computer systems to talk to each other. 

This guide is designed to help patients see their own medical records. It also explains how to make sure that only authorized people, like the patient or their doctor, can see the information. The guide uses a system called SMART on FHIR, which is like a secure login for health apps. 

With IPA, patients can use apps to see things like their diagnoses, medications, allergies, lab results, and doctors' notes. This can help patients be more involved in their own healthcare. It's important to remember that this guide only explains how to get the information, not how to understand it. Patients should always talk to their doctor if they have questions about their health. 

Different countries might have their own rules about accessing health information, so this guide provides a basic set of rules that can be used anywhere. It's like a starting point that each country can build on. This way, patient apps can work in many different places. 

The guide also talks about some important things to keep in mind when building these apps, like how to make sure the right patient is getting the right information and how to protect patient privacy. 

---

# fhir-ips.md

**TL;DR:** This guide explains how to use a standardized set of healthcare information, called the International Patient Summary (IPS), to share key details about a patient's health across different healthcare systems, especially in unplanned care situations.

The International Patient Summary (IPS) Implementation Guide specifies how electronic health records can be extracted and organized for sharing essential patient health information across different systems. The IPS is designed to be minimal, meaning it focuses on the most important information needed for general clinical care. It is also non-exhaustive, recognizing that additional data may be needed in certain situations. 

This guide is particularly useful for unplanned care scenarios, such as when a patient needs medical attention while traveling in another country. The IPS helps healthcare providers quickly understand a patient's medical history, allergies, medications, and problems, even if they don't have access to the patient's full medical record. The guide also addresses the need for language translation in cross-border care, ensuring that the summary can be understood by healthcare providers in different countries.

While the IPS is designed to be universal, this guide acknowledges that specific needs and practices may vary across different regions. It allows for flexibility in how the summary is generated and shared, while still adhering to a core set of data elements required for basic clinical understanding. The guide also recognizes the importance of patient privacy and security, providing considerations for protecting sensitive health information during exchange. 

---

# fhir-mCODE-ig.md

**TL;DR:** This guide helps computer systems share information about cancer patients.

The Minimal Common Oncology Data Elements (mCODE) Implementation Guide defines a standard way to represent and share information about cancer patients. It helps different computer systems, such as those used in hospitals and labs, talk to each other and exchange data in a consistent format.

mCODE makes it easier to collect and analyze information about cancer diagnosis, treatment, and outcomes. It includes details about the patient's cancer type, stage, tumor characteristics, and treatments received, such as surgery, chemotherapy, and radiation therapy. It also covers the patient's overall health, including performance status and other medical conditions.

mCODE also incorporates genetic information, which is becoming increasingly important in cancer care. It helps standardize the way genetic test results are shared between labs and healthcare providers.

While mCODE focuses on a core set of essential data elements, it can be extended to include more specialized information as needed. By promoting consistent data exchange, mCODE aims to improve cancer care, research, and public health reporting. 

---

# fhir-mdi-ig.md

**TL;DR:** This guide helps medical examiners and coroners share information about deaths with other organizations. 

The Medicolegal Death Investigation (MDI) Implementation Guide defines how medical examiners and coroners can use a standardized format called FHIR (Fast Healthcare Interoperability Resources) to electronically exchange information about deaths. This guide focuses on two main data flows:

* **Sharing death investigation findings with death registration systems:** This allows medical examiners and coroners to send information about the cause and manner of death, decedent demographics, and other details to the agencies responsible for registering deaths. This electronic exchange replaces paper-based processes, making it faster and more efficient.
* **Receiving toxicology results from laboratories:** This enables medical examiners and coroners to receive lab results electronically, eliminating delays associated with paper or fax-based reporting. This helps expedite death investigations and ensures that all relevant information is readily available. 

The MDI guide ensures that different computer systems used by medical examiners, coroners, labs, and death registration agencies can understand and share information. This standardization promotes better communication, faster investigations, and improved data quality in death investigation and reporting.

---

# fhir-medication-rems-ig.md

**TL;DR:** This guide helps computer systems used by healthcare providers and REMS program administrators exchange information electronically when a patient needs a medication with a special safety program.

The Medication REMS FHIR Implementation Guide (IG) aims to improve how healthcare providers and REMS administrators share information. A REMS (Risk Evaluation and Mitigation Strategy) is a safety program required by the FDA for certain medications with serious risks.  These programs help ensure patients use these medications safely.

This guide focuses on what happens when a provider prescribes a REMS medication. It describes how the provider's computer system (like an electronic health record or EHR) can talk to the REMS administrator's system. This helps providers learn about REMS requirements, enroll patients in the program, and share important information with the REMS administrator.

The guide uses two main approaches:
1. It lets the provider's system automatically connect with the REMS administrator's system during the normal prescribing process. This can provide alerts, instructions, or even launch a special application to help with REMS tasks.
2. It also allows providers to use a separate application from the REMS administrator to access and share patient information.

The guide aims to make REMS programs easier for everyone involved. By automating information exchange, it can reduce manual work, help get medications to patients faster, and improve patient safety.

This first version of the guide mainly focuses on the needs of healthcare providers. Future versions may include ways to support other participants in the REMS process, such as pharmacists and patients. The guide also aims to make it easier for computer systems to work with many different REMS programs and medications.

---

# fhir-medmorph.md

**TL;DR:** This guide helps healthcare systems automatically share data for public health reporting and research, reducing the workload on doctors and nurses.

The MedMorph Reference Architecture Implementation Guide (IG) defines a standard way for healthcare systems, like electronic health records (EHRs), to automatically send data needed for public health reporting (e.g., tracking diseases) and research studies. It uses a set of rules called "Knowledge Artifacts" to decide what data should be sent and when, based on things that happen during patient care. This automation can reduce the burden on healthcare providers, who currently spend a lot of time manually collecting and sending this data.

The IG aims to make it easier for different healthcare systems to share data with public health agencies and research organizations. It defines how systems should communicate with each other, what data should be included in reports, and how to protect patient privacy when sharing sensitive information.

It's important to note that this guide doesn't change how healthcare providers enter patient data or the types of data they collect. It focuses on how that data is automatically extracted and sent to the appropriate organizations for reporting and research purposes.

This guide also doesn't cover things like accessing insurance claims data or obtaining patient consent for sharing data, as those processes are handled separately by each healthcare organization. It primarily addresses data that can be accessed through a specific type of technology called FHIR APIs.

By using this guide, healthcare systems can participate in public health initiatives and research studies more efficiently, ultimately leading to improvements in healthcare and disease prevention. 

---

# fhir-medmorph-research-dex-ig.md

**TL;DR:** This guide helps researchers get the health data they need more quickly and easily.

The MedMorph Research Data Exchange Implementation Guide (IG) aims to make it faster and easier to get health data for research. It sets standards for how electronic health records (EHRs) and other health data sources can share information with research organizations. 

This guide focuses on making it easier to add new data partners to research networks. It uses a standardized process to extract, transform, and load (ETL) data, which can currently be a slow and complex process. This standardized approach can save time and money while also improving the quality of the data.

The guide also addresses how to make sure data is shared securely and with the right permissions. It specifies how healthcare organizations can make sure they meet patient privacy rules and get the necessary approvals before sharing data.

It's important to note that this guide does not cover all aspects of research data exchange. It does not address state and local rules about data sharing, how to check the quality of the data, or how researchers can use the data once they have it. 

The goal of this guide is to improve the efficiency of research data exchange, allowing researchers to access the information they need more quickly and easily. This can help speed up research and potentially lead to new discoveries that improve patient care. 

---

# fhir-military-service.md

**TL;DR:** This guide helps healthcare systems share information about a patient's military service history.

The Military Service History and Status Implementation Guide (IG) defines a standard way to record and exchange information about a person's military service using FHIR. It was designed to meet the needs of the US Department of Veterans Affairs (VA) and Centers for Disease Control and Prevention (CDC), but can be adapted for other countries. 

This IG helps healthcare providers understand the health risks associated with military service, including deployments and combat experience. It also allows veterans to easily share their military service information with community healthcare providers, hospitals, and other organizations. 

The IG includes ways to verify if someone is a veteran and to record details about their service, such as their branch, dates of service, deployments, and job roles. This information is important for providing appropriate care to veterans, as their military experiences can have long-term effects on their physical and mental health.

---

# fhir-mmm-ig.md

**TL;DR:** This guide helps researchers study information about mothers and their babies to improve healthcare for both.

The Longitudinal Maternal & Child Health Information for Research FHIR Implementation Guide (IG) lets maternal health researchers collect and study clinical information about mothers and babies. This helps researchers find the reasons for health problems during and after pregnancy and how they affect both mothers and children. The guide focuses on information from pregnancy, labor and delivery, and the time after birth. It also includes how to link a mother's health records with her baby's records.

**How it helps:**

* **Standardizes data:** The guide helps researchers get information from different places like hospitals and clinics in a consistent way, making it easier to study and compare.
* **Links mother and child data:** The guide shows how to connect a mother's health records with her baby's records. This is important because a mother's health can affect her baby's health, and vice versa.
* **Supports research on specific health issues:** This guide initially focuses on high blood pressure during pregnancy and deaths that happen within a year of pregnancy. In the future, it will also help researchers study other issues like the effects of medicine taken during pregnancy on babies, how a mother's past pregnancies can affect her current baby, and how work can affect pregnancy and infant health. 
* **Helps researchers find ways to improve healthcare:** By making it easier to study health information, this guide can help researchers find ways to prevent health problems and improve care for mothers and babies.

**Who can use it:**

This guide is mainly for people who create computer systems for hospitals and clinics, researchers, and people who analyze health information. It can also be helpful for policymakers who want to understand how to use health information to improve healthcare.
---

# fhir-nhsn-ade-ig.md

**TL;DR:** This guide helps hospitals share data about patients with high or low blood sugar during hospital stays. This data is used to improve patient safety and track rates of these events.

The **NHSN Adverse Drug Event Implementation Guide** enables hospitals to send data about patients who experience very high or very low blood sugar while in the hospital to the Centers for Disease Control and Prevention (CDC). The guide focuses on events related to medications that can affect blood sugar levels. It only includes events that happen during a hospital stay, not those that occur solely in outpatient settings like a doctor's office.

**How it addresses healthcare needs:**

* **Improves Patient Safety:** By tracking and analyzing blood sugar events, hospitals can identify trends and areas for improvement in patient care, leading to better management of blood sugar levels and fewer adverse events.
* **Facilitates Quality Improvement:** The data allows hospitals to measure their performance in managing blood sugar and compare it to other hospitals, helping them identify best practices and implement changes to improve care. 
* **Supports Research and Benchmarking:**  The CDC can use the collected data to track national trends in blood sugar-related adverse events, identify risk factors, and develop strategies for prevention and treatment.

**Technical details:**

The guide uses a standardized format called FHIR (Fast Healthcare Interoperability Resources) to exchange information electronically. It focuses on data related to blood sugar levels, medications that affect blood sugar, and patient diagnoses. The guide also includes information on how to calculate specific metrics related to blood sugar events, such as the rate of low blood sugar events in patients taking certain medications.

**Limitations:**

The guide does not cover all aspects of blood sugar management. It does not include data on patients who only experience high or low blood sugar outside of the hospital, nor does it address the management of patients with diabetes outside of the hospital setting. 

---

# fhir-omop-ig.md

**TL;DR:** This guide helps researchers easily share and analyze health data to learn more about diseases and treatments.

The FHIR to OMOP Implementation Guide (IG) defines how to convert health data from the FHIR standard to the OMOP Common Data Model (CDM), which is used for research. This allows researchers to combine data from different sources, like electronic health records and insurance claims, into a standard format that is easy to analyze.

The guide addresses the need for researchers to access and analyze large amounts of health data. By providing a standard way to transform FHIR data into OMOP, it reduces the time and effort needed to prepare data for analysis. This allows researchers to focus on finding new insights that can improve patient care.

The guide focuses on converting commonly used types of health data, such as patient demographics, diagnoses, medications, and procedures. It does not cover all possible types of FHIR data, but it provides a solid foundation for researchers to build upon.

One of the key benefits of this guide is that it promotes interoperability, or the ability of different systems to exchange and use information. By using a standard format like OMOP, researchers can share their data with others more easily. This can lead to faster progress in medical research and better treatments for patients.

However, it's important to note that converting data between FHIR and OMOP can be complex, and there are some challenges to consider. For example, some FHIR data may not have a direct equivalent in OMOP, and it may be necessary to make decisions about how to map the data correctly. Additionally, the guide requires some technical expertise to implement.

Overall, the FHIR to OMOP Implementation Guide is a valuable resource for researchers who want to use FHIR data for research purposes. It can help them save time, improve data quality, and collaborate with others more effectively. By making it easier to analyze real-world health data, this guide can ultimately contribute to better health outcomes for patients. 

---

# fhir-order-catalog.md

**TL;DR:** This guide helps healthcare systems share information about medicines and medical devices in a standardized way.

The FHIR Order Catalog Implementation Guide (IG) defines how to create and exchange catalogs of medications and medical devices using the FHIR standard. These catalogs can be used by healthcare providers, patients, and other systems to find detailed information about available products.

This IG helps solve the problem of inconsistent product information across different systems. By using a standard format, healthcare providers can be sure they are getting accurate information about the medicines and devices they prescribe. This can help reduce errors and improve patient safety.

The IG defines specific profiles for representing different types of information, such as the name, description, intended use, and packaging of a product. It also defines ways to search for products within a catalog, for example, by name, model number, or classification.

This IG is relevant for healthcare providers who prescribe medications and devices, organizations that manage product catalogs, and developers who build systems that interact with these catalogs. It aims to improve the efficiency and accuracy of information exchange in the healthcare ecosystem.

While the IG provides a detailed framework for representing product information, it doesn't cover every possible scenario. For example, it doesn't specify how to handle pricing information or regulatory approvals. These aspects may be addressed in future versions of the IG or in other related standards.

By promoting the use of standardized catalogs, this IG can help improve the quality and safety of healthcare by ensuring that accurate and consistent product information is available to all stakeholders.

---

# fhir-pacio-cognitive-status.md

**TL;DR:** This guide helps healthcare systems share information about a patient's mental abilities, like memory and decision-making.

The PACIO Cognitive Status Implementation Guide (IG) defines how healthcare providers can exchange information about a patient's cognitive status, which includes their mental functioning, using a standardized format. This is especially important when a patient moves between different care settings, such as from a hospital to a nursing home or to home health services, ensuring that everyone involved in their care has a complete picture of their mental abilities.

The guide addresses a critical need in the healthcare ecosystem by making it easier to share cognitive and mental health observations. This is often a challenge because different healthcare providers may use different systems or methods for recording this information. By using a common format, the guide helps to ensure that important details about a patient's mental state are not lost during transitions of care. This can lead to better care coordination, reduced errors, and improved patient outcomes.

The IG focuses on exchanging observation data, such as the results of cognitive assessments and screenings. It provides guidance on how to represent this data using FHIR (Fast Healthcare Interoperability Resources), a standard for exchanging healthcare information electronically. It also includes examples of how to represent common assessment instruments, such as the Brief Interview for Mental Status (BIMS) and the Montreal Cognitive Assessment (MoCA).

While the guide initially focuses on transitions related to post-acute care, it is intended to be expanded to cover a broader range of healthcare settings and mental functioning observations in the future. It also addresses security and patient privacy concerns, outlining how patient data can be shared securely and with the patient's consent.

---

# fhir-pacio-functional-status.md

**TL;DR:** This guide helps healthcare providers share information about a patient's ability to perform daily tasks.

The PACIO Functional Status Implementation Guide focuses on exchanging observations about a person's mobility, self-care, and ability to manage daily life (like housework or finances). This information is crucial for coordinating care, especially when a patient moves between different healthcare settings, such as hospitals, nursing facilities, and home health agencies. 

The guide addresses the need for complete and accurate information about a patient's functional status to be available to all healthcare providers involved in their care. This helps to avoid inefficient workflows, duplicate data entry, and potential patient harm due to missing information. 

The guide provides a standardized way to exchange this information using FHIR (Fast Healthcare Interoperability Resources). It defines data elements and coding standards to ensure that the information can be understood and used by different computer systems. This allows healthcare providers to access a patient's functional status history, track their progress, and make more informed decisions about their care. 

---

# fhir-pacio-pfe.md

**TL;DR:** This guide helps computer systems share information about a person's health and how well they can do everyday activities.

The Personal Functioning and Engagement (PFE) Implementation Guide (IG) helps computer systems share information about a person's ability to participate in everyday activities. This includes information about their physical health, mental health, and how well they can interact with their surroundings. 

This guide is important because it helps healthcare providers in different settings, like hospitals, nursing homes, and home health agencies, share information about a patient's functioning. This can lead to better care coordination and help patients recover and live more independently. For example, when a patient moves from a hospital to a nursing home, the nursing home can easily access the patient's records from the hospital and understand their needs.

This guide also defines specific categories of functioning, such as mobility, self-care, and mental functions. These categories help organize the information and make it easier for computer systems to understand and use.

While this guide helps share important information, it does not tell healthcare providers how to treat patients. It also does not provide guidance on how software systems should display the information. Those decisions are left to the healthcare providers and software developers. 

---

# fhir-pacio-rt.md

**TL;DR:** This guide helps organize patient information during long-term care, making it easier for everyone to understand the care received.

The Re-Assessment Timepoints Implementation Guide (IG) focuses on improving how patient information is organized and accessed during extended stays in post-acute care settings like skilled nursing facilities and home health agencies.

When patients receive care over several months or years, a large amount of data is generated. This guide introduces a way to structure this data into smaller, more manageable time blocks called "Re-Assessment Timepoints." These timepoints are defined by events like formal assessments required by insurance or government regulations.

By organizing information into these timepoints, healthcare providers, insurance companies, and even patients themselves can easily review and understand the progression of care over time. For example, a home health nurse can quickly see how a patient's mobility has improved since they were discharged from a skilled nursing facility. Insurance companies can efficiently review the care provided during a specific billing period.

This approach makes it easier to navigate the complex information associated with long-term care, ultimately improving communication and understanding among all involved parties. 

---

# FHIRPath.md

**TL;DR:** This guide defines FHIRPath, a language for navigating and extracting information from health data. 

The FHIRPath Implementation Guide (IG) defines a language, FHIRPath, for working with health data that is structured according to the FHIR standard.  FHIRPath lets users search through health records, pick out specific pieces of information, and perform calculations on that information. It can be used in a variety of healthcare applications, such as validating data, finding patients who meet certain criteria, and making decisions about patient care. 

FHIRPath is designed to be simple and easy to use, even for people who are not programmers. It works by using "paths" to navigate through the data, similar to how you might use a file path to find a file on your computer. For example, a FHIRPath expression to find a patient's name might look like this: `Patient.name`.

This guide also includes a set of tests that can be used to check if FHIRPath implementations are working correctly.  These tests cover a wide range of FHIRPath features and are designed to help ensure that different systems can share health information reliably. 

---

# fhir-patient-correction.md

**TL;DR:** This guide defines a standard way to use technology to ask for changes to your medical records, track the progress of your request, and record any disagreements if your request is denied.

The FHIR Patient Correction Implementation Guide (IG) aims to improve the process of requesting corrections to medical records. Currently, this process is often slow and involves paper forms or phone calls. This IG offers a way to make these requests electronically using a standard format called FHIR (Fast Healthcare Interoperability Resources). 

This IG focuses on how patients can send correction requests to their healthcare providers and how providers can respond. It includes a method for patients to track the status of their requests – whether it's being reviewed, accepted, or denied. It also provides a way for patients to formally record their disagreement if a correction is denied.

The IG covers different scenarios, from simple corrections like updating smoking status to more complex situations. It handles various communication flows, from acknowledging the initial request to informing the patient about the final decision. It's important to note that this guide doesn't automatically change the records. Healthcare providers still need to review and manually update the information.

This guide is intended to work across different regions and considers regulations like HIPAA and GDPR, which protect patient privacy and give them the right to correct their data. The goal is to make it easier and more efficient for both patients and providers to handle medical record corrections, ultimately leading to more accurate and reliable health information.

---

# fhir-pdmp.md

**TL;DR:** This guide helps healthcare providers easily access and share patient prescription information to improve patient safety.

The Prescription Drug Monitoring Program (PDMP) FHIR Implementation Guide helps healthcare providers get a patient's prescription history for controlled substances from state-run databases called Prescription Drug Monitoring Programs (PDMPs). 

Using a standard format called FHIR, this guide enables electronic health records (EHRs) and pharmacy systems to talk to PDMPs. This means providers can directly request and receive a patient's prescription history from within their usual workflow. The guide allows for different ways to send and receive this information, including discrete data for additional analysis and direct links to formatted reports. 

This helps providers make better decisions about prescribing medications, avoid misuse, and ultimately improve patient care and safety.  The guide focuses only on getting prescription information to providers; other processes, such as sending prescriptions to pharmacies or reporting dispensations to PDMPs, are outside its scope.

---

# fhir-qi-core.md

**TL;DR:** This guide helps improve how computer systems share information about your health to support better healthcare decisions.

The Quality Improvement Core (QI-Core) Implementation Guide defines a common way to represent your health data for quality improvement activities like measuring healthcare performance and providing clinical decision support. It builds upon the US Core Data for Interoperability (USCDI) standard and ensures that computer systems can exchange information about things like allergies, medications, procedures, and observations in a consistent way.

The guide helps healthcare providers and organizations better understand what information is needed for quality measurement and clinical decision support. It also provides guidance on how to represent information about when a particular treatment or service was not provided and the reason why, which is important for understanding the full picture of a patient's care.

QI-Core focuses on representing clinical data used in quality improvement and does not include information about specific quality measures or decision support tools. It also does not specify how these systems should be built or implemented. The guide is primarily focused on the US healthcare system but much of the content is likely to be useful in other countries as well. 

---

# fhir-radiation-dose-summary-ig.md

**TL;DR:** This guide helps share summaries of radiation doses from medical imaging exams.

The *FHIR Radiation Dose Summary Implementation Guide* defines a standard way to share information about radiation doses received by patients during medical imaging exams. This information can be used by healthcare providers to track radiation exposure, improve patient safety, and ensure compliance with regulations.

The guide focuses on sharing minimal dose information, such as the type of exam, the amount of radiation used, and the date of the exam. It does not include detailed information about radiation administration or cumulative radiation exposure over time. 

The guide does not provide guidance on how to interpret the radiation information or make decisions about patient care. Healthcare providers should use their professional judgment and follow relevant guidelines when interpreting radiation dose summaries.

This guide is intended for use by healthcare providers, software developers, and other stakeholders involved in the exchange of radiation dose information. It is based on the HL7 FHIR standard, which is a widely used standard for exchanging healthcare information electronically. 

---

# fhir-registry-protocols-ig.md

**TL;DR:** This guide helps healthcare providers send patient information to medical registries more easily.

The FHIR Registry Protocols Implementation Guide (IG) defines a standardized way for healthcare providers to electronically submit patient data to medical registries. Medical registries collect information about patients with specific conditions to improve healthcare and research. 

This guide addresses the challenge of collecting and formatting patient data from different computer systems used by healthcare providers. It provides a common way for registries to describe what data they need. This makes it easier for healthcare providers to find the right information in their systems and automatically format it for submission to the registry.

The guide uses a "logical model" to map the data needed by the registry to standard healthcare data formats like FHIR resources, CDA documents, and HL7 V2 messages. This means that healthcare providers can use their existing systems to extract the necessary data without manual data entry. 

The guide also specifies how to package the collected data into a FHIR "Bundle" for submission. This ensures that the information is organized and sent to the registry in a way that can be easily processed. 

By standardizing the way healthcare providers submit data to registries, this guide aims to streamline the process, improve data quality, and reduce the burden on healthcare providers. This allows for better healthcare decisions and more effective research. 

---

# fhir-resp-net-ig.md

**TL;DR:** This guide helps healthcare systems share data about patients hospitalized with respiratory viruses like the flu, COVID-19, and RSV with public health organizations.

The Respiratory Virus Hospitalization Surveillance Network (RESP-NET) Content Implementation Guide (IG) defines how healthcare systems can electronically report data about patients hospitalized with respiratory viruses. This data helps public health organizations track and respond to outbreaks of these viruses.

**How it works:** The guide focuses on using a specific app called the Health Data Exchange App (HDEA) to gather and send data to RESP-NET sites. It leverages existing standards like the US Core profiles and the MedMorph Reference Architecture to ensure data is shared in a consistent and secure way.

The guide outlines what data should be shared, including patient demographics, diagnoses, treatments, and lab results. It also defines the technical requirements for systems that want to share this data, including how they should handle patient authorization and data security.

**Benefits:** Automating this reporting process can reduce the burden on healthcare providers, improve the timeliness of data sharing, and ultimately help public health organizations better track and respond to outbreaks of respiratory viruses.

**Limitations:** The guide does not cover all aspects of respiratory virus surveillance. For example, it does not address how to assess the quality of the data being shared or how to collect consent from patients for data sharing. 

This guide is an important step towards improving public health surveillance of respiratory viruses. By making it easier for healthcare systems to share data electronically, we can get a better understanding of these viruses and how to protect people from them.

**Important terms:**

* **FHIR:** A standard for exchanging healthcare information electronically.
* **HDEA:** An app that helps healthcare systems share data with public health organizations.
* **US Core profiles:** A set of standards that define what data should be shared in different healthcare scenarios.
* **MedMorph Reference Architecture:** A framework for building healthcare data exchange systems.

---

# fhir-saner.md

## TL;DR: 

This guide helps hospitals and public health agencies share information about resources like beds, ventilators, and COVID-19 tests more easily and automatically.

## Detailed Summary:

The Situational Awareness for Novel Epidemic Response (SANER) Implementation Guide defines a standard way for hospitals to report important information to public health agencies, especially during emergencies like the COVID-19 pandemic.  This guide focuses on sharing data about the number of available hospital beds, ventilators, and COVID-19 test results. 

The guide uses the FHIR standard (Fast Healthcare Interoperability Resources) to define a common language for exchanging this information. This means that different computer systems in hospitals and public health agencies can share data automatically, without needing manual entry. 

The SANER guide defines different "actors," like hospitals and public health agencies, and the specific actions they can take. For example, a hospital can automatically send a report with its latest bed availability to a public health agency. The guide also allows public health agencies to request specific information from hospitals, like the number of ventilators in use.

This automated data sharing helps public health officials make better decisions during emergencies. They can quickly see which hospitals have available resources and where help is needed most. The guide also helps to improve data quality and reduce errors, since information is shared directly from hospital systems. While the guide initially focuses on COVID-19, it can be used for other public health emergencies as well. 

---

# fhir-sdoh-clinicalcare.md

**TL;DR:** This guide helps healthcare systems share information about social factors that can impact a person’s health.

The SDOH Clinical Care Implementation Guide (IG) defines how healthcare providers and other systems can exchange information about social determinants of health (SDOH). SDOH are things like access to food, housing, transportation, and healthcare that can affect a person’s well-being.

This guide helps healthcare providers share information about a patient’s social risks and needs. For example, a doctor could use this guide to electronically refer a patient to a food bank or housing assistance program. The guide also helps providers track the patient’s progress toward their goals, such as finding stable housing or getting access to healthy food.

The guide uses a standard language called FHIR (Fast Healthcare Interoperability Resources). FHIR makes it easier for different computer systems to talk to each other. This means that a doctor’s electronic health record (EHR) system can share information with a food bank’s system, even if they are made by different companies.

The SDOH Clinical Care IG is important because it helps healthcare providers and social service organizations work together to address the social factors that can affect a person’s health. This can lead to better health outcomes for patients and communities. 

---

# fhir-security-label-ds4p.md

**TL;DR:** This guide helps keep health information private and secure when it's shared electronically. It uses tags to tell others how sensitive the information is and how it should be handled.

The FHIR Data Segmentation for Privacy (DS4P) Implementation Guide (IG) explains how to use security labels with health information that's stored and shared using the FHIR standard. These labels act like tags that provide extra information about the sensitivity of the data and how it should be handled. For example, a label might say that certain information is very private and should only be seen by a specific doctor.

This guide is important because it helps make sure that health information is only shared with the right people and for the right reasons. It allows healthcare providers to be more flexible in what they share, so they can share more information while still protecting patient privacy.

The guide also explains how to handle situations where multiple rules or policies apply to the same information. It defines different types of labels, like ones that tell if the information should be encrypted or if it needs a special warning displayed when someone views it.

It's important to remember that this guide doesn't make any specific rules about who can see what information. Instead, it provides the tools for healthcare systems to create and enforce their own rules based on laws, policies, and patient preferences.

This guide is still being developed and will likely include more features in the future. It's meant to be a foundation for building more specific guides that address the needs of different healthcare situations.

---

# fhir-shc-vaccination-ig.md

**TL;DR:** This guide helps create digital health records for vaccinations and lab tests, making it easier to share this information safely and reliably.

The SMART Health Cards Implementation Guide for Vaccination and Testing describes how to create digital health records for vaccinations and lab tests using the FHIR standard. This makes it easier for patients to share their vaccination and testing information with others, such as schools, employers, or airlines.

The guide focuses on making sure that the information in these digital records is accurate and complete, while also protecting patient privacy. It specifies what information should be included, how it should be formatted, and what codes should be used to identify vaccines and tests.

The guide also addresses the need for data minimization, meaning that only the information that is absolutely necessary should be included in the records. This helps to protect patient privacy and keep the records small enough to be easily shared.

The guide is designed to be used internationally and can be adapted to meet the specific needs of different jurisdictions. It is a valuable resource for healthcare providers, public health agencies, and developers who are working to create and use digital health records for vaccinations and lab tests. 

---

# fhir-shorthand.md

**TL;DR:** This guide explains FHIR Shorthand (FSH), a language for creating and sharing healthcare data standards.

The FHIR Shorthand Implementation Guide defines a language called FSH, which is used to build and share standards for exchanging healthcare data. FSH makes it easier to create these standards, called "implementation guides," which ensure healthcare information can be shared accurately and consistently between different computer systems.

FSH helps to simplify the process of creating these implementation guides. It uses a clear and concise syntax that is easier to understand and manage than other methods.  This allows developers to focus on the content of the standards without getting bogged down in technical details. 

FSH also supports collaboration and version control, enabling teams to work together on implementation guides and track changes over time. This ensures that the standards are always up-to-date and accurate. 

By making it easier to develop and share healthcare data standards, FSH plays a crucial role in improving the interoperability of healthcare systems, ultimately leading to better patient care.

---

# fhir-sirb.md

**TL;DR:** This guide helps researchers use a standard way to share information when doing studies that involve more than one hospital or clinic.

The Single IRB (sIRB) FHIR Implementation Guide (IG) defines a standard way to create and exchange information needed for multi-site research studies. This means if a study is happening at multiple hospitals or clinics, they can all use the same forms and share information easily. 

This IG addresses a common problem in research: the need for each location in a study to get approval from their own ethics review board (called an IRB). This can be slow and create extra work. The sIRB IG supports the use of a single IRB for all study locations. This makes it faster to get studies started and reduces the workload for everyone involved.

The guide focuses on using a specific technology called FHIR (Fast Healthcare Interoperability Resources) to create and share these forms. FHIR helps different computer systems talk to each other.  Instead of emailing PDFs or using different software at each location, researchers can use the same FHIR forms and send them electronically. This saves time and reduces errors.

The sIRB IG includes instructions and examples for different types of forms used in research, such as study protocols, consent forms, and reports of any problems that happen during the study. It also explains how to use FHIR to automatically fill in parts of the forms with information that's already been collected.

It's important to note that this guide is still being developed and tested. In the future, it may be expanded to include more types of forms and to work better with other research systems. The goal is to make it easier to do research that involves multiple locations and to improve the quality and safety of research studies.

---

# fhir-specialty-rx.md

**TL;DR:** This guide helps pharmacies get the information they need to fill prescriptions for specialty medications.

The Specialty Medication Enrollment Implementation Guide defines how to exchange patient information to help pharmacies fill prescriptions for specialty medications. Specialty medications are usually expensive or need special handling, and pharmacies often need extra information to make sure patients can get their medications quickly.

This guide lets pharmacies get information from a patient's electronic health records (EHR) in two ways: 
* Pharmacies can send a request to the prescriber's EHR system for information like allergies, medical conditions, and insurance coverage. 
* The prescriber's EHR system can automatically send this information to the pharmacy when a specialty medication is prescribed.

Sometimes, pharmacies need to ask the prescriber for more information. This guide allows pharmacies to send a task to the prescriber's EHR system, which can then prompt the prescriber to launch a special app to answer questions or provide more details.

This guide also defines how pharmacies can request and receive consent forms that patients need to sign for certain specialty medications. This can be done through a task sent to the prescriber's EHR system, or the prescriber's EHR system can proactively send the completed consent form to the pharmacy. 

This guide helps to make sure that patients get their specialty medications quickly and easily. 

---

# fhir-spl.md

**TL;DR:** This guide helps healthcare providers submit drug labels to the FDA using a modern data format.

The FHIR Implementation Guide for Structured Product Labeling (SPL) provides a way to submit drug labels to the FDA using FHIR, a modern standard for exchanging healthcare information. Currently, drug labels are submitted using an older standard called HL7 V3 SPL. This guide helps move to the newer FHIR standard.

The guide includes detailed instructions on how to structure the information in drug labels using FHIR resources. It covers the required data elements, such as the drug's name, ingredients, dosage, and warnings. The guide also provides tools to convert drug labels from the old SPL format to FHIR and vice versa.

This guide focuses on medications for human use and registration information for companies that make and label medications. It does not cover products for animals, dietary supplements, medical foods, devices, or cosmetics.

---

# fhir-subscription-backport-ig.md

**TL;DR:** This guide helps computer systems using older versions of FHIR to use the latest features for real-time updates.

The "Subscription R5 Backport Implementation Guide" lets computer systems that use older versions of the FHIR standard get real-time updates when health information changes. FHIR (Fast Healthcare Interoperability Resources) is a standard for exchanging healthcare information electronically.

This guide is important because it allows healthcare providers to be notified immediately when important patient information is updated. For example, a doctor could be notified as soon as a patient's lab results are available. This can help improve patient care by allowing providers to make more informed decisions.

The guide defines a way for systems to subscribe to specific types of updates, such as new lab results or changes to a patient's medication list. It also defines how these updates are sent to the subscribing system. 

The guide also addresses security concerns by allowing systems to limit the amount of information that is sent in each update. For example, a system could choose to only send the patient's ID and the type of update, rather than sending the full patient record. This helps to protect patient privacy.

This guide is a technical document intended for software developers who build systems that use FHIR. However, it is important for patients and other non-experts to understand how this guide can help improve the way healthcare information is shared and used.

---

# fhir-udap-security-ig.md

**TL;DR:** This guide helps apps securely access and share your health information between different healthcare organizations, like your doctor's office and your insurance company.

The FHIR UDAP Security Implementation Guide (IG) defines a standard way for apps to connect to systems that hold health information, like electronic health records. It focuses on making sure these connections are secure and that only authorized apps can access your data.

This guide addresses the need for better security and trust when sharing health information electronically. It does this by outlining specific steps for apps to register and prove their identity, similar to how you might need to log in with a username and password. It also describes how apps can ask for permission to access specific parts of your health information, like your allergies or medications.

For situations where you might need to use an app that connects to multiple healthcare systems, this guide also defines a way for those systems to securely verify your identity. This can be helpful if, for example, your doctor's office needs to access information from your insurance company.

This guide does not cover all aspects of health information security, but it provides a strong foundation for building secure and trustworthy apps that can access and share your health data. It's important to note that this guide focuses on the technical details of how apps connect and exchange information, not on the specific policies or regulations that govern the use of your health data. Those policies are typically determined by your healthcare provider, insurance company, or other organizations that hold your information.

---

# fhir-us-mcc.md

**TL;DR:** This guide helps computer systems share care plans for people with multiple long-term health conditions.

The HL7® Multiple Chronic Condition (MCC) Care Plan Implementation Guide is a set of instructions for healthcare technology experts. It helps them design computer systems that make it easier to create and share care plans for patients with multiple chronic conditions. 

A care plan is a document that outlines a patient's health goals and the steps healthcare providers will take to help them achieve those goals. This guide focuses on care plans for patients in the United States with conditions like chronic kidney disease, diabetes, heart disease, chronic pain, and Long Covid.

The guide explains how to use a special computer language called FHIR (Fast Healthcare Interoperability Resources) to create care plans. FHIR makes it possible for different computer systems, like those used in hospitals, doctor's offices, and pharmacies, to share information easily. This is important for patients with multiple chronic conditions because they often see many different healthcare providers. 

The guide also includes information about how to collect and share data about social factors that can affect a patient's health, such as access to food and housing. This information can be used to create more comprehensive and effective care plans. 

The guide was developed with input from patients, caregivers, and healthcare providers. It is a valuable resource for healthcare technology experts who are working to improve care for people with multiple chronic conditions. 

---

# fhir-us-ndh.md

**TL;DR:** This guide defines a standardized way to share healthcare provider data across the US, making it easier to find accurate information about doctors, hospitals, services, and insurance plans.

The National Directory of Healthcare Providers & Services (NDH) Implementation Guide aims to create a reliable, nationwide source of information about healthcare providers and related services. This includes details about individuals, organizations, the services they offer, their locations, insurance plans, and technical information for secure digital communication. 

The guide addresses the fragmentation and inaccuracy often found in healthcare directories. It proposes a national system that collects and verifies data, acting as a "source of truth." Local directories and applications can access this information using standardized FHIR APIs (a common language for healthcare data exchange). This makes it easier for patients to find providers, for healthcare organizations to coordinate care, and for payers to manage claims.

The NDH envisions a secure system where authorized entities can submit information, which is then validated and verified against official sources. It also includes mechanisms to restrict access to sensitive data, ensuring privacy and confidentiality. By streamlining data sharing and improving data quality, the NDH aims to benefit patients, providers, and payers, enabling more efficient and effective healthcare delivery. 

---

# fhir-us-ph-common-library-ig.md

**TL;DR:** This guide helps public health agencies in the United States use a common set of standards for sharing health information.

The US Public Health Profiles Library (USPHPL) helps different computer systems share important health information with public health agencies. It does this by providing standard definitions for common public health concepts. This makes it easier for healthcare providers, electronic health record companies, and public health agencies to work together. 

The USPHPL works alongside the US Core Implementation Guide (US Core), which is a broader set of standards for healthcare data in the United States. The USPHPL only adds new standards when they are specifically needed for public health purposes. For example, it includes standards for reporting a patient's travel history, pregnancy status, and information about their home environment. 

The goal of the USPHPL is to make it easier to share health information, which can help public health agencies track and respond to outbreaks and other health events more effectively. 

---

# fhir-us-ph-library.md

**TL;DR:** This guide defines ways to share information needed for public health reporting in the United States.

The US Public Health Profiles Library (USPHPL) defines how electronic health records (EHRs) can share data with public health agencies for reporting purposes. This helps public health agencies collect important information about health trends and outbreaks.

The USPHPL uses a set of rules called "profiles" to standardize the way health information is shared. These profiles make sure that the data sent from EHRs can be understood by public health agencies. The guide also includes a collection of common terms and codes used in public health reporting, which ensures everyone is speaking the same language.

The USPHPL is designed to work with other national healthcare data standards, like the US Core Data for Interoperability (USCDI). This makes it easier for healthcare providers and public health agencies to share information seamlessly. The guide is constantly evolving to meet the changing needs of public health reporting. 

---

# fhir-us-phpl.md

**TL;DR:** This guide defines ways to better share patient information for public health purposes in the United States.

The US Public Health Profiles Library (USPHPL) helps to easily share patient information between healthcare providers and public health agencies in the United States. It builds on the US Core Implementation Guide, a set of standards for exchanging healthcare data.

The USPHPL is important because it allows public health agencies to collect the information they need to track and respond to health threats, such as outbreaks of infectious diseases. The guide defines specific data elements that should be included in public health reports, such as patient demographics, medical history, and laboratory results. It also provides guidance on how to protect patient privacy when sharing this information.

The USPHPL is a valuable resource for healthcare organizations, electronic health record companies, and public health agencies that are working to improve public health surveillance and reporting. By making it easier to share patient information, the USPHPL can help to improve the health of the nation. 

---

# FHIR-us-pq-cmc.md

**TL;DR:** This guide helps drug companies send information about the quality of their drugs to the FDA in a computer-friendly way.

The *US Food and Drug Administration (FDA) Pharmaceutical Quality/Chemistry, Manufacturing and Controls (PQ/CMC) Implementation Guide* defines how drug companies should organize data about their drugs when submitting it to the FDA for review. This includes information about the ingredients, manufacturing process, and quality testing of drug products. 

The guide uses a standardized format called FHIR (Fast Healthcare Interoperability Resources) to structure the data. This makes it easier for the FDA's computer systems to process and understand the information, leading to more efficient drug reviews. The guide is being implemented in stages, with the initial focus on common types of pills taken by mouth.  Future versions will include other drug forms.

The guide also includes instructions for creating a human-readable version of the data that is easy for people to understand. This helps ensure that everyone involved, both at the drug company and the FDA, can access and interpret the information correctly. This guide plays a key role in modernizing drug applications to the FDA, making the process faster and more reliable. 

---

# genomics-reporting.md

**TL;DR:** This guide helps healthcare systems share genetic test results and what they mean.

The Genomics Reporting Implementation Guide (IG) defines a standard way to exchange information about genetic testing using the FHIR standard. It covers different types of genetic tests, such as those that look for changes in single genes, groups of genes, or even entire chromosomes. The IG also defines how to share what those changes might mean for a patient's health, such as their risk of disease or how they might respond to certain medications.

This guide is important because it helps healthcare providers and systems share genetic information more easily. This can lead to better care for patients, as their doctors will have a more complete understanding of their genetic makeup. For example, a doctor could use a patient's genetic information to choose the best medication for them or to recommend preventive measures.

The IG also supports research by making it easier to collect and analyze large amounts of genetic data. This can lead to new discoveries about the causes of diseases and the development of new treatments.

While the IG provides a comprehensive framework for sharing genetic information, it is important to note that it does not cover every possible scenario. There may be some cases where additional information or context is needed to fully interpret genetic test results. 

---

# HAI-LTCF.md

**TL;DR:** This guide helps healthcare facilities send data about infections to the CDC.

The "HL7 FHIR Implementation Guide: Healthcare Associated Infection (HAI) Reports from Long Term Care Facilities (LTCF)" helps long-term care facilities (like nursing homes) electronically send reports about infections to the CDC's National Healthcare Safety Network (NHSN). This makes it easier to track and prevent infections in these facilities.

The guide defines how to structure the infection data using a standard format called FHIR (Fast Healthcare Interoperability Resources). It provides specific templates, like questionnaires, for two types of reports: 
1. Reports about individual patients with infections (like a specific bacteria or *C. difficile*)
2. Monthly summary reports about infection rates in the entire facility.

This guide is important because it helps healthcare facilities participate in the NHSN more easily. Sharing infection data with the NHSN allows the CDC to track infection trends, identify outbreaks, and develop strategies to prevent infections in long-term care facilities across the country.

This guide was created by experts from the CDC and HL7 (Health Level Seven International), a group that develops healthcare data standards. It was also reviewed by software developers and healthcare providers to make sure it meets the needs of everyone involved in reporting infection data.

By using this guide, healthcare facilities can improve the quality of their infection data, reduce the time it takes to send reports, and contribute to national efforts to prevent healthcare-associated infections.

---

# HAI.md

**TL;DR:** This guide helps computer systems share information about healthcare-associated infections (HAIs) with the Centers for Disease Control and Prevention (CDC).

The HL7 Implementation Guide for FHIR: Healthcare Associated Infection (HAI) Reports specifies how electronic health records and other computer systems can send HAI data to the CDC's National Healthcare Safety Network (NHSN). This network tracks HAIs to help improve patient safety and prevent infections.

The guide defines how to structure HAI reports using the Fast Healthcare Interoperability Resources (FHIR) standard, a common way to exchange healthcare information electronically. It includes guidelines for reporting different types of HAIs, such as bloodstream infections and surgical site infections, which are infections that happen after surgery.

This guide is important because it enables healthcare providers to easily and accurately report HAIs to the CDC. This information can then be used to track infection rates, identify trends, and develop strategies to prevent future infections. By making it easier to share HAI data, this guide helps to improve patient safety and the quality of healthcare.

The guide focuses on single-person reports, which contain information about infections in individual patients, and population summary reports, which summarize infection data for a group of patients. The guide also includes instructions on how to map the FHIR-based reports to the Clinical Document Architecture (CDA) standard, which is another way to exchange healthcare information electronically.

This guide is intended for software developers who want to enable their systems to send HAI data to the NHSN. It assumes developers already know about FHIR and aims to provide the specific details they need to create systems that can share this important information. 

---

# home-lab-report.md

**TL;DR:** This guide helps developers build apps that can share at-home test results with healthcare providers and public health agencies in a standardized way.

The At-Home In-Vitro Test Implementation Guide defines a common way to share the results of at-home tests, like those for COVID-19, using a technology called FHIR. This guide focuses on sharing single test results and includes information about the patient, the test itself, and any supporting details like symptoms.

Currently, most public health departments can only receive test results in an older format called HL7 V2. This guide helps bridge that gap by allowing app developers to collect information in the FHIR format and then translate it to HL7 V2 for public health reporting. 

The guide also provides a framework for sharing at-home test results for other conditions beyond COVID-19. Developers can use this framework to create specific ways to share information for different types of tests, making it easier for healthcare providers and public health agencies to receive and use at-home test results. 

---

# ihe-sdc-ecc-on-fhir.md

**TL;DR:** This guide helps healthcare systems use data captured from electronic cancer protocols.

The "IHE SDC/eCP on FHIR" Implementation Guide (IG) specifies how to use data collected from electronic Cancer Protocols (eCPs) within the FHIR standard. This guide focuses on enabling the exchange of eCP data, which is typically collected using specialized forms, between different healthcare systems. 

This IG explains how to convert the data from these forms into FHIR resources, specifically Observations. Observations are used to represent individual questions and answers from the forms. This allows the data to be easily understood and used by other systems, such as Electronic Medical Records (EMRs) and cancer registries.

The guide also describes how to transport the eCP forms themselves within FHIR, allowing healthcare providers to share completed forms or blank forms for data collection. This can be useful for tasks like public health reporting, quality measurement, and auto-populating future forms with existing data. 

By standardizing the way eCP data is represented and shared, this guide aims to improve the accuracy, efficiency, and interoperability of cancer-related information exchange. This can ultimately benefit patients, healthcare providers, and public health organizations. 

---

# imaging-service-request-ig.md

**TL;DR:** This guide helps healthcare systems share information about medical imaging exams. It defines how to represent imaging orders and schedules in a standard way so that different computer systems, like those used by doctors and hospitals, can understand each other.

The "Imaging Service Request Implementation Guide" defines how to use a standard called FHIR to manage information about medical imaging exams, like X-rays, CT scans, and MRIs. It focuses on sharing details about the exam order (what type of imaging is needed, why it's needed, who requested it) and the exam schedule (when and where the exam will take place, what equipment will be used).

This guide addresses the need for different computer systems in healthcare to easily exchange information about imaging exams.  Imagine a doctor's office sending an order for an X-ray to a hospital. If both systems use this guide, they can electronically share the order details without needing manual entry or translation, saving time and reducing errors.

The guide provides specific instructions on how to represent key information about the imaging exam, such as patient details, the reason for the exam, and the scheduled time and location, using the FHIR standard. It also explains how this information relates to the older DICOM standard, which is commonly used for medical images.

However, this guide does not cover all aspects of medical imaging. For example, it doesn't address how to share the actual images themselves or how to manage the results of the exam. It primarily focuses on ensuring that the order and scheduling information can be accurately and efficiently shared between different healthcare providers and systems. 

---

# livd.md

**TL;DR:** This guide helps standardize how medical lab test results from different manufacturers are coded using LOINC, a common language for tests.

The Laboratory and In Vitro Diagnostic Device (LIVD) Implementation Guide helps make sure that lab test results from different machines and companies can be understood by everyone. It does this by providing a standard way to connect the codes used by lab equipment manufacturers with LOINC codes. LOINC (Logical Observation Identifiers Names and Codes) is a universal system for identifying medical lab tests. 

This is important because when labs get results from different machines, they often use different codes. This can make it hard to compare results from different labs or to track a patient's results over time. By using LOINC codes, everyone can be sure they are talking about the same thing.

The guide also helps map the specific values that a test can have, like "positive" or "negative," to standard codes from SNOMED CT and LOINC. This makes it easier to analyze and share lab results for things like tracking diseases or doing research.

The LIVD Implementation Guide doesn't tell manufacturers which LOINC codes to use. Instead, it provides a format for manufacturers to publish their suggested codes along with extra information that helps labs choose the right LOINC code for their needs. This makes it easier for labs to set up their systems and ensures that test results are coded consistently across different labs. 

---

# PDDI-CDS.md

**TL;DR:** This guide helps computer systems share information about potential harmful drug interactions to improve patient safety.

The Potential Drug-Drug Interaction Clinical Decision Support (PDDI CDS) Implementation Guide explains how to use modern health information technology standards to alert healthcare providers about possible harmful drug interactions when prescribing medications. It focuses on making these alerts more accurate and relevant to individual patients by considering their specific medical history and other drugs they are taking.

The guide provides detailed instructions on how to build a system that can check for drug interactions and present clear, actionable advice to doctors at the right time during the prescription process. It also explains how to use standardized codes and formats to represent drug information, making it easier to share and use this knowledge across different healthcare organizations and computer systems.

The guide's goal is to help reduce harmful drug interactions and improve patient safety by making sure doctors have the best possible information when prescribing medications. It recognizes that current drug interaction alerts are often too general and frequently ignored. By providing more specific and timely information, this guide aims to make these alerts more useful and effective.

---

# personal-health-record-format-ig.md

**TL;DR:** This guide defines a new standard for Personal Health Records (PHRs) that makes it easier for patients to collect, manage, and share their health information with doctors and others.

The Standard Patient Health Record (SPHR) Implementation Guide helps software developers create PHRs that can easily exchange information with other health systems and apps. This is important because it allows patients to have a complete and up-to-date record of their health information, even if they have received care from multiple providers. 

The guide uses the Fast Healthcare Interoperability Resources (FHIR) standard, which is a widely used standard for exchanging healthcare information electronically. This ensures that PHRs built using this guide can easily share data with hospitals, clinics, and other healthcare organizations that also use FHIR. 

The SPHR standard also addresses the challenge of storing large amounts of health information over a patient's lifetime. It defines a secure file format for PHRs, which can be easily stored and transferred between systems. This means patients can keep their own copy of their health records and share it with anyone they choose.

Finally, the guide includes examples of common patient health journeys, such as a child with leukemia or an adult with diabetes. These examples illustrate how the SPHR standard can be used to capture and organize real-world health information. 

---

# phd.md

**TL;DR:** This guide helps share data from personal health devices, like your fitness tracker or blood pressure monitor, with healthcare providers using a standard format.

The Personal Health Device Implementation Guide (IG) explains how to represent information from Personal Health Devices (PHDs) in the FHIR standard. This includes measurements, such as blood pressure readings or heart rate, and data about the device itself, like the serial number or manufacturer.

This guide is important for remote patient monitoring, where patients use PHDs at home and share the data with their healthcare providers. It ensures the data is transferred reliably and accurately, even if the device doesn't have a perfect clock or time zone settings. The guide also addresses privacy concerns, allowing for different levels of protection for sensitive patient information.

The guide specifies how a Personal Health Gateway (PHG), which often acts as a middleman between the device and the healthcare provider's system, should handle the data. The PHG might be a mobile phone app, a computer program, or a special device that connects to the PHD. It is responsible for organizing the data, correcting any time stamp errors, and preparing it for transfer in the FHIR format.

By using this guide, device manufacturers, app developers, and healthcare providers can work together seamlessly to collect and use personal health data, improving patient care and monitoring.

---

# phenomics-exchange-ig.md

**TL;DR:** This guide helps healthcare systems use and share information about patients' observable characteristics, called phenotypes, especially for people with rare diseases.

The GA4GH Phenopacket FHIR Implementation Guide defines how to use the FHIR standard to record and exchange detailed phenotypic information. It focuses on supporting the diagnosis and research of rare diseases.

This guide addresses the need for a standardized way to represent complex patient characteristics, going beyond simple diagnoses. It allows healthcare providers to record details like the age of onset, severity, and specific traits associated with a patient's condition. This comprehensive information can then be used to support more accurate diagnoses, particularly for rare diseases where identifying the underlying cause can be challenging.

The guide leverages the Human Phenotype Ontology (HPO), a standardized vocabulary for describing phenotypic abnormalities. Using HPO terms ensures that information is recorded consistently and can be understood by computer systems, enabling more powerful analysis and comparison of patient data. This can aid in identifying similar cases, discovering potential genetic links, and advancing research into rare diseases.

While the guide primarily focuses on rare diseases, its principles can be applied to other areas of healthcare where detailed phenotypic information is valuable. By promoting consistent and computable representation of patient characteristics, this guide contributes to better data sharing and ultimately improved patient care.

---

# physical-activity.md

**TL;DR:** This guide helps healthcare systems share information about physical activity.

The Physical Activity Implementation Guide (IG) defines a standard way to exchange information about a patient's physical activity levels and related interventions. It uses FHIR, a common language for healthcare data, to ensure that different systems can understand and share this information.

The IG addresses the need for better communication about physical activity between patients, healthcare providers, and fitness service providers. It enables patients to track and share their activity data with their doctors, allows providers to refer patients to appropriate fitness programs, and helps fitness providers report back on patient progress.

The IG includes specific profiles for common physical activity data, such as the Exercise Vital Sign, which captures a patient's self-reported activity levels. It also defines how to exchange information about care plans, goals, referrals, and reports related to physical activity.

By standardizing how physical activity data is represented and exchanged, this IG aims to improve patient care and support efforts to promote healthy lifestyles. It provides a framework for seamless communication between different healthcare systems, enabling more coordinated and effective care for patients working to improve their physical activity levels. 

---

# ReportIIITraveler-ig.md

**TL;DR:** This guide helps standardize how information about sick travelers is shared, which is important for controlling the spread of diseases.

The Report of Ill Travelers Implementation Guide (IG) aims to create a standard way to share information about travelers who become sick with infectious diseases, especially when traveling by air. This is important for public health agencies like the CDC to track and control the spread of diseases.

Currently, the way information is shared between different health departments and agencies is often done manually and isn't always consistent. This IG seeks to improve this process by using a common language and format for sharing data, specifically using the FHIR standard.

The guide defines ways to report information about the sick traveler, including their symptoms, diagnoses, lab results, and travel details like flight information. It also includes standard codes for things like diseases, symptoms, and airports. This helps ensure everyone is using the same terms and definitions, making it easier to share and analyze information.

By using a standard approach like the one described in this IG, public health officials can more quickly identify and respond to potential outbreaks of infectious diseases, ultimately helping to protect the health of communities. The IG will also make it easier to share information internationally, which is important for controlling the global spread of diseases.

This IG is designed to work with the CDC's systems for collecting public health information, making it a key part of efforts to modernize and improve disease surveillance. It is intended to be used by a variety of groups involved in public health, including state and local health departments, hospitals, and organizations involved in international travel.

---

# rtls-ig.md

**TL;DR:** This guide explains how to share real-time location data of medical devices and patients within a hospital using a standard format.

The Real-Time Location Services (RTLS) Integration Guide describes how healthcare systems can share location information. It focuses on sharing the location of medical devices or patients that are tracked by an RTLS with other systems in a hospital. This allows different systems to know where things are, which can be helpful for managing equipment or finding patients quickly.

The guide uses the FHIR standard, which is a common way to exchange healthcare information electronically. It describes how to send messages to tell the RTLS to start or stop sharing location updates for a specific tag. It also describes the type of message that is sent when the location of a tag is updated.

The guide does not say how often location updates should be sent or what should cause an update to be sent. This is left up to the specific RTLS being used. The main goal of the guide is to make sure that different systems can understand each other when they are sharing location information.

This can be helpful in many situations. For example, if a doctor needs a specific piece of equipment, they can use a system that integrates with the RTLS to find the nearest one. Or, if a nurse needs to find a patient quickly, they can use the RTLS to see their current location. By standardizing how this information is shared, the guide helps to improve efficiency and coordination in healthcare settings.

---

# sdc.md

**TL;DR:** This guide helps create digital questionnaires that collect health information in a standardized way.

The Structured Data Capture (SDC) Implementation Guide defines how to use the HL7 FHIR standard to create digital questionnaires for collecting health information. 

The guide helps ensure questionnaires are designed to gather information consistently, making it easier to share and analyze. It provides ways to pre-populate forms with existing patient data, reducing the need for patients and healthcare providers to enter the same information multiple times.  The guide also provides mechanisms for extracting data from completed questionnaires, allowing the information to be used in other systems, such as electronic health records.

The SDC Implementation Guide supports complex questionnaire designs, including those that adapt based on prior answers. This allows for more efficient and targeted data collection. The guide also includes examples and test cases to help developers create and implement SDC-compliant questionnaires.

While the guide provides a standardized approach, it does not dictate specific content or clinical workflows.  The actual use of questionnaires will vary depending on the needs of the healthcare organization or research project. 

---

# smart-app-launch.md

**TL;DR:** This guide helps apps securely connect to health records systems and get information about patients and healthcare organizations.

The SMART App Launch Implementation Guide defines a set of rules that allow apps to connect to systems that store health records. It uses a system called OAuth 2.0 to make sure this connection is secure and protects patient privacy. The guide defines two ways apps can get permission to access health data:

* **SMART App Launch:** This is for apps that patients or healthcare providers use directly. The app can launch from within the health records system, or it can launch on its own and then connect to the records system.
* **SMART Backend Services:** This is for apps that run in the background without a user directly interacting with them. These apps are pre-authorized to access specific data.

The guide also defines how apps can prove they are allowed to access the data. There are two ways to do this:

* **Asymmetric Authentication:** The app uses a digital key pair to prove its identity.
* **Symmetric Authentication:** The app uses a secret code that it shares with the health records system.

The guide also helps apps get information about the patient or healthcare provider using the app. It also allows apps to get information about the healthcare organization, like its name, logo, and how users can access their records. This makes it easier for apps to help patients find and connect to their health information. 

---

# smart-health-cards-and-links.md

**TL;DR:** This guide defines standards for sharing verifiable health information, like vaccination records, in a secure digital format using QR codes and links.

The SMART Health Cards and Links Implementation Guide defines how to represent and share verifiable health information using the FHIR standard. It enables patients to receive digital copies of their clinical information, such as vaccination records or test results, and share it with others securely.

This guide addresses the need for a reliable and tamper-proof way to share health information digitally. It uses QR codes and links that can be easily scanned or shared electronically, eliminating the need for paper records that can be easily lost or damaged. The information in these digital records is signed by the issuer, such as a healthcare provider or lab, ensuring its authenticity.

The guide outlines two main approaches: SMART Health Cards and SMART Health Links. Health Cards are designed to hold smaller amounts of information, like a vaccination record, that can be easily shared via a QR code. Health Links, on the other hand, can store larger amounts of data and offer more flexible sharing options, including the ability to share information that updates over time, like a patient's most recent lab results. 

Both Health Cards and Links prioritize patient privacy. They allow patients to choose exactly what information they share and with whom, ensuring they maintain control over their health data. 

---

# smart-web-messaging.md

**TL;DR:** This guide helps apps that run inside your electronic health record (EHR) work better with the EHR itself.

The SMART Web Messaging Implementation Guide explains how apps that are launched from within an EHR can exchange information with the EHR more effectively. This allows for tighter integration between the app and the EHR's user interface and workflow.

Currently, apps that launch from an EHR usually communicate with a separate part of the EHR that stores patient data (the FHIR server). This is good for viewing and updating patient records, but it doesn't allow the app to directly interact with the EHR's user interface in real-time.

SMART Web Messaging solves this problem by enabling apps and EHRs to send messages directly to each other. This allows apps to do things like:
- Send orders or notes directly to the EHR.
- Suggest diagnoses or add information to a patient's problem list.
- Access and interact with temporary or draft orders that only exist in the EHR's current session.
- Close the app or navigate the user to another part of the EHR.

This guide defines a standard way for apps and EHRs to communicate using messages. It also defines specific message types for common tasks like updating draft orders or launching different EHR activities.

SMART Web Messaging relies on existing web technologies that are already supported by most EHRs and web browsers, making it relatively easy to implement.

However, this approach only works with web-based apps and does not address issues like keeping data synchronized across different parts of the EHR.

By following the guidelines in this implementation guide, developers can create apps that integrate more seamlessly with EHRs, improving the user experience for healthcare providers and potentially leading to better patient care.

---

# smp-ig.md

## Standardized Medication Profile Implementation Guide: Summary for Patients and Non-Experts

**TL;DR:** This guide helps different healthcare systems easily share a patient's medication information. It explains how apps and systems can send medication lists and details to each other in a standard way. This ensures that doctors, pharmacists, and other healthcare providers always have the most up-to-date information about a patient's medications, especially when they move between different care settings, like from a hospital to a nursing home.

The Standardized Medication Profile (SMP) Implementation Guide aims to improve the sharing of medication information between different healthcare systems. It focuses on creating a standard way to send medication lists and details about each medication, such as dosage and reason for taking it, to electronic health records (EHRs). This allows healthcare providers to easily access and use this data to provide better care, especially during transitions between different care settings.

**How the SMP Implementation Guide Helps:**

The guide addresses the critical need to reduce medication errors and improve patient safety during transitions of care. When patients move between different healthcare settings, such as from a hospital to a nursing home or home healthcare, there is a risk of medication information getting lost or misinterpreted. This can lead to serious health consequences. By standardizing how medication information is shared, the SMP Implementation Guide helps to ensure that everyone involved in a patient's care has the same accurate and up-to-date information.

The guide defines specific ways to share medication lists and details using a technology called FHIR (Fast Healthcare Interoperability Resources). FHIR is a standard for exchanging healthcare information electronically. The SMP Implementation Guide builds on existing standards like FHIR and the US Core Data for Interoperability (USCDI), which defines a set of common healthcare data elements. This ensures that the SMP profiles can be easily integrated with existing systems.

The SMP Implementation Guide defines how to exchange different types of medication lists, such as a current medication list, a discharge medication list, or a list of discontinued medications. It also defines how to exchange details about each medication, such as the medication name, dosage, frequency, reason for taking it, and who prescribed it. 

**Limitations:**

While the SMP Implementation Guide helps standardize the exchange of medication information, it does not define the process of medication reconciliation itself. Medication reconciliation is a complex process that involves reviewing a patient's medications, identifying any discrepancies, and making recommendations for changes. This process is still the responsibility of healthcare professionals, and the SMP Implementation Guide simply provides them with the necessary information to do it effectively.

In conclusion, the SMP Implementation Guide plays a vital role in improving the safety and effectiveness of medication management during transitions of care. By standardizing how medication information is shared, it ensures that healthcare providers have access to the information they need to make informed decisions and provide the best possible care to their patients. 

---

# standard-patient-health-record-ig.md

## TL;DR:

This guide explains how to create and use a Standard Patient Health Record (SPHR), a secure digital file that contains a patient's complete medical history in a standardized format. It uses FHIR, a common language for healthcare data, to ensure that different healthcare systems can understand and share the information. 

## Purpose and Scope:

The Standard Patient Health Record Implementation Guide (IG) aims to address the challenge of storing and sharing patient medical records that can span many years and come from various sources. It focuses on using FHIR to structure the data, making it easier to manage and exchange between different healthcare providers and systems. 

## How the IG Addresses Healthcare Ecosystem Needs:

This guide recognizes that patient records often include information from many sources, including hospitals, clinics, and even patient-generated data from wearable devices or health apps.  It provides guidance on how to:

* **Structure the data:**  The guide recommends using FHIR resources to represent different types of medical information, like patient demographics, allergies, medications, conditions, and more.
* **Organize the record:**  It suggests using a specific file format (`.sphr`) that acts like a secure digital container for all the FHIR data, making it easy to store and share.
* **Ensure data provenance:** The guide emphasizes the importance of tracking where the data came from and who has accessed it, using FHIR's Provenance resource.
* **Protect patient privacy:**  It recommends using strong encryption to protect the sensitive information in the SPHR file.

By following the recommendations in this guide, developers can create applications that support the creation, sharing, and use of SPHR files, ultimately contributing to better continuity of care and patient empowerment.

---

# termchangeset-ig.md

**TL;DR:** This guide explains how to package updates to medical vocabularies so they can be easily shared and understood by different computer systems. 

The Terminology Change Set Implementation Guide (IG) focuses on standardizing the way changes to medical terminologies are packaged and shared. This makes it easier for healthcare computer systems to stay up-to-date with the latest terms and definitions, ensuring that health information is accurate and consistent. 

This guide explains how to use the FHIR standard to represent changes to existing terminologies like LOINC and SNOMED CT. It defines a way to describe new terms, changes to existing terms, and details like who made the changes and why. This helps ensure that everyone using these terminologies has access to the same information.

The IG does not change the content of any specific medical vocabulary. Instead, it provides a consistent way to package updates to these vocabularies. 

---

# terminology-fundamentals-ig.md

## TL;DR:

This guide explains the basic ideas behind medical terminologies used in HL7 standards. It helps developers understand how medical terms are organized, coded, and used in healthcare data.

## Purpose and Scope:

The HL7 Terminology Fundamentals Implementation Guide (IG) aims to clarify the foundational principles of medical terminologies within the HL7 ecosystem. It explains key concepts like "codes," "code systems," and "value sets" in a way that is easy to understand. This guide focuses on the general principles of terminology and is not specific to any particular HL7 standard. 

## How the IG Addresses Healthcare Needs:

This guide helps developers and others working with healthcare data understand the building blocks of medical language. It explains how medical terms are grouped into code systems, like SNOMED CT or LOINC, and how value sets are used to create specific lists of codes for different purposes. For example, a value set might define all the codes for different types of allergies, or all the codes for lab tests related to heart health. By understanding these fundamentals, developers can build systems that exchange healthcare information more effectively. The guide also explains how value sets can be defined in a computable way, meaning that computers can automatically generate lists of codes based on specific rules. This helps ensure that different healthcare systems use the same codes for the same concepts, improving interoperability.

## Additional Information:

While this guide focuses on general principles, it also provides examples of how these principles are applied in specific HL7 standards like FHIR and CDA. This helps bridge the gap between theory and practice, making the guide useful for both beginners and experienced developers. 

---

# us-behavioral-health-profiles.md

## US Behavioral Health Implementation Guide: Sharing Mental Health Data

**TL;DR:** This guide helps electronic health records (EHRs) share important information about mental health. It explains how to organize and send data like diagnoses, medications, and social factors in a standard way. This makes it easier for different healthcare systems to work together and provide better care for patients with mental health needs.

The US Behavioral Health Implementation Guide (IG) uses a common language called FHIR to improve how mental health data is shared between different parts of the healthcare system. This includes information about patient demographics, diagnoses, medications, treatments, social determinants of health (SDOH), and more. 

The guide focuses on standardizing this information, making sure it's organized and sent in a consistent format. This makes it easier for EHRs in hospitals, clinics, and other healthcare settings to understand and use the data.  

For example, the IG explains how to record details about a patient’s preferred name and pronouns, which is important for providing respectful care. It also outlines how to share information about a patient’s social needs, like access to food or transportation, which can significantly affect their mental health.

The IG recognizes that there are many different ways to assess mental health. It recommends using standard coding systems whenever possible but acknowledges that some common assessments are not yet standardized.  

This guide is primarily for technical experts who build and manage EHR systems. However, it can also be helpful for researchers, policymakers, and others interested in understanding how technology can support better mental healthcare. By making it easier to share mental health information, the IG aims to improve care coordination and ultimately help people get the treatment and support they need. 

---

# US-Core.md

## US Core Implementation Guide: Sharing Patient Data

**TL;DR:** This guide helps healthcare apps in the United States share patient data in a standardized way using FHIR. It defines the specific information that should be included when sharing common types of patient data like allergies, medications, lab results, and clinical notes.

The US Core Implementation Guide (IG) aims to improve how healthcare information is shared between different systems in the US. It defines a "baseline" set of data and rules that apps should use when exchanging information about patients. This common ground helps ensure that data can be understood and used by different apps and systems, regardless of where it comes from.

The guide addresses specific needs in the healthcare ecosystem by:

- **Defining US Core Profiles:**  These profiles specify the essential information that should be included when sharing different types of patient data. For example, the US Core Patient Profile defines the required data for sharing basic patient demographics.
- **Standardizing Data Exchange:** The guide outlines how to use FHIR resources like Patient, Condition, Observation, and DocumentReference to represent various types of clinical information.
- **Supporting Common Use Cases:** It provides specific guidance on how to share information for common scenarios, such as fetching a patient's medication list, accessing clinical notes, and understanding data provenance (where the data came from). 
- **Specifying Search Capabilities:** It outlines how apps should search for specific patient data across different systems using FHIR search parameters.
- **Addressing Security and Privacy:** The guide highlights important security and privacy considerations when exchanging patient data, emphasizing the need for appropriate authorization and protection of sensitive information.

The US Core IG is regularly updated to incorporate new data requirements and best practices. It serves as a foundation for other healthcare implementation guides in the US, promoting consistency and interoperability across the healthcare ecosystem.

---

# us-odh.md

**TL;DR:** This guide helps electronic health records (EHRs) store and share information about a patient's work history. This information, called Occupational Data for Health (ODH), can help doctors provide better care by understanding how work impacts a patient's health.

The Occupational Data for Health (ODH) Implementation Guide (IG) aims to standardize how information about a patient's job is stored and shared between different healthcare systems. It focuses on structuring work-related details within EHRs, allowing doctors and other healthcare providers to easily access and use this information when treating patients.

ODH is important because a person's job can significantly affect their health. For example, someone's work environment might contribute to a chronic illness, or past exposure to workplace hazards could explain current symptoms. By having this information readily available, healthcare professionals can make more informed decisions about a patient's care.

This guide provides a standard way to record various aspects of a patient's work history, including:

* **Employment Status:** Whether someone is currently employed, unemployed, retired, etc.
* **Work History:** Details about past and present jobs, including the type of work, industry, work schedule, and potential hazards.
* **Usual Work:** Information about the type of work a person typically does, even if they've had many different jobs.

This guide also considers the work history of a patient's household members, as this can also impact their health. For example, if a family member works with hazardous materials, it could affect the health of everyone in the household.

While this guide is primarily focused on supporting healthcare needs in the United States, it is designed to be adaptable for use in other countries as well.

It is important to note that this guide does not cover all possible aspects of work and health. It is also not intended to support billing or administrative tasks. However, it provides a solid foundation for capturing essential work-related information that can improve the quality and effectiveness of patient care. 

---

# UTG.md

**TL;DR:** This guide establishes a single source of truth for commonly used terminology in healthcare, including codes and their meanings for diseases, procedures, medications, and more. It aims to improve consistency and reduce errors when sharing health information between different computer systems.

The Unified Terminology Governance (UTG) Implementation Guide (IG) aims to create a central repository of standardized healthcare terminology that can be used across various systems and organizations. It brings together terminology from different sources, including HL7 v2, v3, and FHIR, ensuring they are consistently defined and easily accessible. 

This IG addresses the need for a unified source of truth for healthcare terminology by:

*   **Standardizing definitions:** The UTG establishes clear, consistent definitions for common healthcare terms and codes, reducing ambiguity and potential errors when exchanging information.
*   **Improving interoperability:** By providing a shared set of terminology, the UTG enables different computer systems to communicate more effectively, facilitating seamless data exchange between hospitals, clinics, pharmacies, and other healthcare providers.
*   **Simplifying terminology management:** The UTG offers a central location for managing and updating healthcare terminology, making it easier for organizations to stay current with the latest standards and ensure data accuracy.

The UTG IG is essential for developers building healthcare applications and organizations seeking to improve the interoperability of their systems. It provides a reliable foundation for sharing health information accurately and efficiently, ultimately contributing to better patient care.

---

# uv-lab-rep-ig.md

## TL;DR:

This guide helps standardize how lab results are shared electronically using a format called FHIR. It covers common lab tests like blood and urine tests, and explains how to include important details like who ordered the test, when the sample was taken, and what lab performed the analysis.

## Purpose and Scope:

The Universal Laboratory Report Implementation Guide (IG) aims to improve how lab results are shared between healthcare systems around the world. It focuses on using FHIR to structure lab reports, ensuring that key information is included and organized in a consistent way. This allows for easier exchange and understanding of lab data, regardless of the specific systems being used.

## How the IG Works:

The guide offers different ways to represent lab reports, depending on how complex they are:

* **Simple Results:** For basic reports, it explains how to use the "DiagnosticReport" resource to record the patient, the tests performed, and the results.
* **Structured Results:** For reports with multiple sections or panels, it uses a "Composition" resource to organize the information, making it easier to read and understand.
* **Formal Documents:** For reports that need to be legally signed, like in some countries, it combines the "DiagnosticReport" and "Composition" into a FHIR "document" Bundle. This allows the report to be treated as a formal document while still being easily searchable.

The guide also explains how to handle different stages of a lab report's lifecycle, like when it's being prepared ("preliminary"), when it's complete ("final"), or if it needs to be corrected or cancelled. It also covers special situations like "reflex tests" where additional tests are automatically ordered based on initial results.

By standardizing these details, the IG helps ensure that lab results can be accurately interpreted and used by healthcare providers, regardless of where they are or what systems they use. 

---

# uv-pocd.md

## Point-of-Care Device Implementation Guide: Summary for Non-Experts

**TL;DR:** This guide helps acute care medical devices, like bedside monitors and infusion pumps, share data with other hospital systems, such as electronic health records and clinical decision support systems, using a standardized format called FHIR. It improves how detailed device data, including measurements and device status, is shared to improve patient care.

The Point-of-Care Device (PoCD) Implementation Guide (IG) aims to standardize how data from acute care medical devices is shared with other systems in a hospital or clinic. It focuses on devices used by healthcare professionals in settings like hospitals and clinics, not personal health devices used at home.

This IG addresses a need in healthcare to move beyond simple measurements and capture more detailed information from medical devices. It uses a standard called FHIR (Fast Healthcare Interoperability Resources) to create a comprehensive picture of the device, its measurements, and its status. This includes information like:

* **Device Structure:** How the device is organized, including its different parts and measurement components (e.g., a blood pressure monitor as part of a larger patient monitoring system).
* **Measurement Details:** Precise information about the measurement, including how it was taken and any relevant status information (e.g., if a blood pressure measurement was validated or if the device was in calibration mode).
* **Device Status:** Information about the device's operational state, such as battery level or if a component is in standby mode.

By standardizing this information, the PoCD IG helps ensure that different systems can understand and use device data consistently. This can improve patient care in several ways:

* **Better Data in Electronic Health Records:** Doctors and nurses can see more complete device information within the patient's chart.
* **Improved Clinical Decision Support:** Computer systems can use the detailed data to provide more accurate alerts and recommendations to healthcare providers.
* **Enhanced Data Analysis:** Researchers and hospital staff can analyze device data more effectively to improve patient safety, device management, and overall care quality.
* **Support for Future Use Cases:** The IG lays the groundwork for future applications like sharing alerts from devices directly to clinicians and other systems.

This IG builds upon existing standards and efforts, such as the IEEE 11073 Medical Device Communication standard and the IHE Patient Care Device profiles, to create a FHIR-based approach for sharing device information. It is designed to be used by healthcare professionals, developers of hospital systems, and medical device manufacturers.

**Limitations:** The current version of the PoCD IG does not cover all aspects of device communication. For example, it does not yet include detailed support for waveform data (like ECG tracings) or for sharing alerts from devices in real-time. These features are planned for future updates.

---

# v2ig.md

**TL;DR:** This guide helps developers create healthcare applications that can understand and use data formatted according to the HL7 v2 standard, which is commonly used in older healthcare systems. It explains how HL7 v2 data can be represented using the newer FHIR standard, making it easier for different systems to share information.

The HL7 v2+ Implementation Guide (IG) aims to bridge the gap between the older HL7 v2 standard and the newer FHIR standard for exchanging healthcare information. It focuses on defining how common HL7 v2 data types and messages can be represented using FHIR resources, enabling better interoperability between systems that use these different standards.

This IG addresses the need to connect newer applications built using FHIR with older systems that still rely on HL7 v2. By providing a standardized way to represent HL7 v2 data in FHIR, the IG allows these systems to exchange information more easily. This can improve data sharing between hospitals, clinics, and other healthcare providers, leading to better patient care.

For example, the IG explains how an HL7 v2 message containing patient demographics can be transformed into a FHIR Patient resource. It also defines how specific HL7 v2 data types, like dates and coded values, can be mapped to their corresponding FHIR equivalents.

However, it's important to note that not all aspects of HL7 v2 can be perfectly represented in FHIR due to differences between the standards. The IG acknowledges these limitations and provides guidance on how to handle them.

By using this IG, developers can create applications that can effectively communicate with both HL7 v2 and FHIR systems, improving the flow of information across the healthcare ecosystem.

---

# VhDir.md

**TL;DR:** This guide helps create healthcare directories that let systems easily share information about healthcare providers and organizations. It uses a standard format so different computer systems can understand and use the data.

The Validated Healthcare Directory Implementation Guide (VHDir IG) defines a standard way to share information about healthcare providers, organizations, services, and their relationships. This guide focuses on making sure the data is accurate and can be easily exchanged between different computer systems, like those used by hospitals, insurance companies, and government agencies.

The VHDir IG addresses the need for reliable healthcare directory data by:
* **Standardizing data:** It uses FHIR, a widely recognized standard for healthcare information exchange, to ensure all systems use the same format.
* **Encouraging validation:** It includes methods for checking the accuracy of information against trusted sources, such as licensing boards.
* **Supporting various use cases:** The guide accommodates data needed for different purposes, including finding providers, checking insurance coverage, and coordinating patient care.

The guide describes how to share information about individual providers, organizations, the services they offer, the locations where they practice, and their relationships with insurance networks. It also explains how to record and share details about how data was checked for accuracy. While initially designed for a national healthcare directory, the guide can also be used for smaller directories or those with specific purposes. 

---

# vr-common-library.md

## Vital Records Common Library Implementation Guide - Summary for Non-Experts

**TL;DR:** This guide helps different health information systems share vital records data such as birth, death, and fetal death information. It defines standard ways to represent common information like names, addresses, birthplaces, education levels, and race and ethnicity, making it easier for systems to understand and exchange this data.

The Vital Records Common Library (VRCL) Implementation Guide focuses on improving how different healthcare applications share important information related to vital records. It defines a set of standardized building blocks using the FHIR standard, which are then used by other, more specialized guides like the Birth and Fetal Death Reporting (BFDR) and Vital Records Death Reporting (VRDR) guides. 

This guide does not tell you how to send or receive vital records, but rather provides the building blocks for other guides to use. It includes:

* **Profiles:** These act like templates that define what information should be included when representing things like the patient (e.g., mother, child, decedent) or practitioner.
* **Extensions:** These add extra pieces of information to existing data elements, such as details about a person's birthplace or the reason why certain data might be missing.
* **Code Systems and Value Sets:** These provide standardized lists of codes and terms for specific information, like race and ethnicity categories or education levels. 

By using these building blocks, different healthcare systems can ensure that they are speaking the same language when exchanging vital records data, leading to more accurate and efficient data sharing. This is particularly important for public health agencies that need to collect and analyze this information.

---

# vrdr.md

## VRDR Implementation Guide Summary for Non-Experts

**TL;DR:** This guide helps standardize how death records are shared electronically between different health systems. It allows state vital records offices to send death certificate information to the CDC in a consistent way, making it easier to track and analyze death trends across the country.

The Vital Records Death Reporting (VRDR) Implementation Guide (IG) focuses on standardizing the electronic sharing of death record information between state vital records offices and the CDC's National Center for Health Statistics (NCHS).  

This guide addresses the need for a consistent and reliable method of transmitting death records electronically. It leverages the FHIR standard to ensure that different computer systems can understand and process the information. This standardization helps NCHS collect complete and accurate death data, which is essential for tracking public health trends, identifying causes of death, and developing effective health policies.

The IG covers all the essential information found on a death certificate, including:

* **Decedent Demographics:** Information about the deceased person, such as their name, date of birth, address, and marital status.
* **Death Investigation:** Details surrounding the death, such as the date and time of death, location of death, and whether an autopsy was performed.
* **Death Certification:**  Information about the person who certified the death, the manner of death, and the causes of death.
* **Decedent Disposition:** Details about the handling of the deceased person's remains, including the funeral home and method of disposition.
* **Coded Content:** Standardized codes for causes of death, race and ethnicity, and other information, to allow for easier analysis and comparison of data.

The VRDR IG also supports the exchange of coded cause of death information from NCHS back to the states, and the exchange of mortality roster information between states. This comprehensive approach helps ensure that death records are accurately and efficiently shared across the entire U.S. mortality data ecosystem.

---

# vulcan-rwd.md

## Real World Data Implementation Guide: A Summary for Patients and Non-Experts

**TL;DR:** This guide helps researchers access and use real-world patient data from electronic health records (EHRs) in a standardized way. This data can be used to study the effectiveness of different treatments and learn more about diseases.

The Real World Data Implementation Guide (IG) aims to improve how researchers use patient data from EHRs for research purposes. It focuses on standardizing how this information is organized and accessed, ensuring that researchers can easily find and understand the data they need. 

This guide addresses several key needs in the healthcare ecosystem:

* **Finding the right patients for research studies:** The IG helps researchers identify groups of patients who meet specific criteria for their studies. For example, researchers studying a new diabetes treatment can easily find patients with type 1 or type 2 diabetes.
* **Accessing complete patient information:** The IG outlines the essential information about a patient's health that should be accessible to researchers. This includes demographics, diagnoses, medications, lab results, procedures, and hospital visits. 
* **Ensuring data quality and consistency:** By standardizing the way data is organized and shared, the IG helps ensure that researchers are working with high-quality, reliable information.

The IG achieves these goals by defining specific data elements that should be collected and shared, as well as by providing guidelines for how to search for and retrieve this data from EHR systems. It also addresses how to handle missing data, ensuring that researchers can understand the limitations of the available information. 

This guide is based on the International Patient Access (IPA) standard, which provides a foundation for accessing patient information in a secure and privacy-preserving manner. It is designed to be used in conjunction with regional standards like US Core, ensuring compatibility with different healthcare systems worldwide. 

---

# Vulcan-schedule-ig.md

## Vulcan Schedule of Activities Implementation Guide: Summary for Non-Experts

**TL;DR:** This guide helps standardize how clinical trial schedules are represented and shared electronically. It enables systems like electronic health records (EHRs) to understand and manage the activities that need to be done during a clinical trial, such as taking medication, getting lab tests, and completing questionnaires, at the right time.

The Vulcan Schedule of Activities Implementation Guide (IG) focuses on improving the exchange of clinical trial schedule information between different healthcare systems. It specifically addresses how to represent the schedule of activities, a crucial part of a clinical trial protocol that outlines what needs to be done and when, using the FHIR (Fast Healthcare Interoperability Resources) standard. This allows for better integration of research activities within routine healthcare.

This IG addresses several key needs within the healthcare ecosystem:

* **Standardizing the representation of clinical trial schedules:** The IG provides a common way to describe the different activities in a clinical trial, including when they should happen and any flexibility in timing. This helps ensure that everyone involved in the trial, including researchers, clinicians, and patients, has a clear understanding of the schedule.
* **Enabling electronic systems to manage trial activities:** By using FHIR, the IG enables EHRs and other systems to understand and manage trial activities. This can automate tasks like scheduling appointments, ordering tests, and reminding patients about their medications, reducing manual effort and improving efficiency.
* **Supporting different types of trials and research activities:** The IG can be used for various clinical trials, including interventional trials (where a treatment is being tested) and observational trials (where data is collected without intervention). It can also support different types of research activities, such as administering investigational products, collecting data through questionnaires, and managing unscheduled activities.
* **Improving data quality and compliance:** The IG helps ensure that data is collected at the right time and in a consistent way across different sites and systems, improving data quality and compliance with the trial protocol.

The IG leverages FHIR resources like ResearchStudy, PlanDefinition, and ActivityDefinition to represent the different aspects of a clinical trial schedule. It also provides guidance on how to manage specific scenarios, such as visit windows (flexibility in visit timing) and investigational product administration.

While this IG provides a solid foundation for representing and exchanging clinical trial schedules, it acknowledges that there are areas for future development. These include managing unscheduled activities, complex protocols, and non-trial integrations. The IG aims to be a living document that evolves to meet the needs of the research community.

In summary, the Vulcan Schedule of Activities IG aims to improve the efficiency and quality of clinical trials by standardizing the representation and management of trial schedules using FHIR. It helps bridge the gap between clinical research and routine healthcare, enabling better integration and automation of research activities.
