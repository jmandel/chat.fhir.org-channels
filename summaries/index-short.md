# bser.md

The Bidirectional Services eReferral (BSeR) implementation guide helps healthcare providers send and receive electronic referrals using the FHIR standard. It focuses on streamlining the referral process for common health concerns like diabetes prevention, obesity, arthritis, hypertension, early childhood nutrition, and tobacco use cessation. 

The guide includes instructions for structuring referral requests and feedback, ensuring that only the necessary information is shared between providers. It also defines workflows for tracking the progress of referrals, from initiation to completion. This helps healthcare providers better coordinate care for patients and improve communication between different care settings. The guide can also be adapted for other referral types, making it a flexible tool for improving healthcare coordination. 

---

# bulk-data.md

This guide helps healthcare systems share large amounts of patient information safely and efficiently.  It defines a standard way to export data from systems that store health records, like Electronic Health Records (EHRs). This makes it easier to move data for research, quality measurement, and care coordination.

The guide offers ways to export data for all patients or specific groups of patients.  It also lets you choose the format of the exported data.  For example, you can request specific types of data, like medications or diagnoses.  The guide also describes how to keep patient data secure during the export process.

It's important to know that this guide doesn't create legal rules for data sharing.  It also doesn't cover real-time data exchange or how to match patient records between different systems.  It's a technical guide for developers building systems that need to share large health datasets. 

---

# cancer-reporting.md

This guide explains how to use FHIR (Fast Healthcare Interoperability Resources) to improve sharing of cancer pathology reports. It focuses on sending pathology data from labs to central cancer registries, which track cancer cases.

The guide helps labs structure pathology reports so they're easier to share electronically. It also shows how this data can be sent either directly to registries or through a patient's medical record.

Right now, the guide mainly works with electronic checklists used by pathologists. It does not yet support sharing narrative reports or other non-electronic data, but this may be possible in the future.

This guide is for people who design and build health record systems in labs, hospitals, and cancer registries. It can also help analysts and managers understand how this standard can be used.
---

# capstmt.md

This guide improves how healthcare systems share information about what they can do.  Currently, systems describe their abilities in a long, complicated document called a CapabilityStatement. This makes it hard to know if a system can handle specific tasks.

This guide introduces a simpler way to describe system features using a standard list of codes.  Instead of reading a huge document, systems can ask each other specific questions like, "Can you handle patient records with versions?" or "Do you support a specific security feature?"

This streamlined approach helps healthcare systems communicate better, making it easier to connect different systems and share information safely and effectively. The result is smoother data exchange, which can improve patient care and research. 

---

# CardX-HTN-MNG.md

This guide defines how healthcare systems should exchange information about blood pressure readings taken at home. It outlines a standard way to share data between blood pressure devices, patient apps, and electronic health records. This is important because high blood pressure (hypertension) is a common problem that can lead to serious health issues like heart attacks and strokes. 

By making it easier to share blood pressure readings, healthcare providers can track a patient's condition more closely. They can also make better decisions about treatment, even when the patient isn't in the office. This guide focuses on sharing individual readings and calculating average blood pressure over time, which can be especially helpful in managing hypertension. The goal is to improve how we diagnose and treat high blood pressure, leading to better health outcomes for patients.

---

# cardx-ig.md

This guide defines how to share blood pressure information between patients, their devices, and doctors. This can improve how high blood pressure (hypertension) is diagnosed and managed. 

Many people track their blood pressure at home using special devices. This guide helps make sure that information can be sent to a patient's doctor electronically. This means doctors can see readings taken outside of the office, which can be helpful in making treatment decisions. 

The guide works by defining a common way to represent blood pressure data, called FHIR (Fast Healthcare Interoperability Resources). It focuses on blood pressure readings taken at home, as well as average readings over time. It also includes heart rate information if collected at the same time.

By using this guide, different systems, like blood pressure devices, apps, and electronic health records, can talk to each other and share important information in a standardized way, ultimately improving patient care. 

---

# carin-bb.md

This implementation guide helps patients access their healthcare claims and encounter data from insurance companies using a standard format called FHIR (Fast Healthcare Interoperability Resources). It defines how this information, like the dates of service, diagnoses, procedures, and costs, should be structured and shared electronically. 

The guide includes profiles for different types of claims, such as those from hospitals, doctors, and pharmacies. It also covers supporting information like patient demographics and insurance details.  While it enables access to detailed claim information, it may not include everything found on traditional paper explanations of benefits.  It does not specify how patients authorize apps to access their data, but points to other resources for that. 

---

# carin-digital-insurance-card.md

This guide helps create digital insurance cards. It lets patients access and share their insurance information using their phones or other apps instead of a physical card. It also lets them share insurance information through scannable codes like QR codes. 

The guide focuses on how health insurance companies can share the data found on insurance cards using a standard format called FHIR. It addresses challenges like listing all covered family members and including extra details often found on the back of insurance cards. It also lets insurance companies include images like logos or barcodes. 

This guide doesn't cover all possible types of insurance cards or how healthcare providers check if someone's insurance is active. It's meant to be a starting point for making it easier to use and share insurance information digitally. 

---

# case-reporting.md

This implementation guide defines a standard way to exchange information for public health reporting using FHIR.  It helps healthcare providers send reports about patients who might have certain medical conditions to public health agencies.  These reports are called electronic Initial Case Reports (eICRs).  

The guide also defines a way for public health agencies to send a response back to healthcare providers, called a Reportability Response.  This response tells the provider if the patient's condition needs to be reported and provides information about reporting requirements.  

Finally, the guide describes how public health agencies can share information about reportable conditions, such as trigger codes and reporting rules, with healthcare providers. This exchange is called electronic Reporting and Surveillance Distribution (eRSD). This helps healthcare providers know when they might need to send a report to public health. 

---

# ccda-on-fhir.md

This guide helps computers share patient health information stored in two different formats. One is called C-CDA, which is like a digital summary of a patient's medical history. The other is called FHIR, which is a newer way to share health data. 

The guide makes it easier to move information from C-CDA to FHIR and back again. This is important because many healthcare providers use C-CDA, while newer apps and systems often use FHIR. By making these formats work together, this guide helps to connect older and newer health IT systems.

It's important to note that this guide focuses on common health information types like allergies, medications, and problems. It may not cover everything in a patient's record, and some details might be lost when moving between formats. 

---

# CDA-ccda-2.1-sd.md

This guide helps healthcare providers share patient information in a standard format called C-CDA. C-CDA uses a system called FHIR to make sure the information is organized and easy for computers to understand. 

The guide includes templates for different types of medical records, like care plans, doctor's notes, and summaries of hospital stays.  It also shows how to record details about patient problems, allergies, medications, and procedures.  

The guide helps computers understand information about social factors that can affect a patient's health. This includes things like housing, food security, and access to transportation. The guide also explains how to record information about medical devices used by patients. 

This guide helps make it easier for healthcare providers to share information with each other, so they can better coordinate patient care. 

---

# CDA-ccda-2.2.md

This guide helps healthcare providers share patient information in a standard way using a format called C-CDA, which is based on FHIR. It defines different types of clinical documents, like care plans, consultation notes, and discharge summaries. These documents use templates to organize information in a consistent way, making it easier for computer systems to understand and exchange the data.

The guide also includes instructions on how to handle missing or unknown information and how to represent patient data like allergies, medications, and procedures. It explains how to link the human-readable parts of a document with the coded data that computers use.

The goal is to improve how patient information is shared between different healthcare providers and systems, ultimately leading to better care coordination and patient safety. 

---

# CDA-ccda.md

This guide helps healthcare providers share patient information in a standard way using a format called C-CDA. C-CDA is based on an older standard called HL7 CDA.  It ensures computers can understand and process important details from medical records. 

The guide provides templates for different types of medical notes, such as history and physicals, discharge summaries, and progress notes. It also includes templates for specific information like allergies, medications, and problems.

These templates make it easier to exchange information between different healthcare systems, improving patient care. For example, a doctor receiving a C-CDA document can quickly understand a patient's medical history, medications, and allergies.  The guide also explains how to handle missing information and ensure patient privacy. While it offers ways to link information between documents, this feature may be limited due to security concerns. 

---

# CDA-core-sd.md

This guide helps exchange healthcare documents like clinical notes and reports between different computer systems. It uses a standard format called CDA, which is based on a common healthcare language (HL7 RIM). This makes sure that everyone understands the information the same way.

CDA documents can include text, images, and other details. They have a header with information about the patient and the document, and a body with the actual report. The body can be simple text or structured with sections like "History of Illness" or "Medications."

The guide also explains how to add special sections or details that are not part of the standard, and how to make sure documents from older versions can still be understood. It does not tell you how to create the documents or store them, but focuses on making sure they can be shared easily and accurately.
---

# cda-eyecare.md

This guide helps eye care providers share patient information more easily. It focuses on using a standard format called FHIR to exchange common eye exam data like visual acuity, refraction, and assessments for conditions like dry eye. 

The guide defines how to represent information about different parts of the eye exam, such as how well a patient can see with and without glasses, measurements related to glasses prescriptions, and the results of tests for eye conditions.  

By using this standard, eye doctors can share this information electronically with other healthcare providers, making it easier to coordinate patient care. This can lead to better care for patients and a more efficient healthcare system.


---

# CDA-IPS.md

This implementation guide explains how to create International Patient Summaries (IPS) using a standard format called HL7 CDA. An IPS is like a short version of your medical record that has the most important information about your health. It can be used if you need to see a doctor in another country, especially in an emergency. 

The IPS includes information about your allergies, the medicines you take, any health problems you have, and procedures you've had. It also might have details about your smoking and drinking habits, pregnancies, and any wishes you have for your future medical care. 

The guide helps healthcare providers in different countries share information even if they use different computer systems. This is because the IPS uses standard codes and terms that everyone can understand. 

---

# cdmh.md

This guide helps researchers access and use health data from different sources. It focuses on observational data, which is collected during routine healthcare. The guide provides a standard way to map (translate) data from four common data models into the FHIR format. FHIR is a standard for exchanging healthcare information electronically.

Using this guide, researchers can more easily combine data from different places. This can help them learn more about diseases and treatments. It can also help improve healthcare quality and find new ways to prevent and treat illnesses.

The guide also helps researchers share their findings with others. They can use FHIR tools and technologies to publish their data in a way that is easy to understand and use. This can help accelerate research and improve patient care. 

---

# cds-hooks-library.md

This guide defines ways to improve healthcare decisions with computer software.  It focuses on how and when to ask a computer program for advice during typical healthcare tasks.

For example, when a doctor starts seeing a patient, the program can suggest routine tests. When ordering medicine, it can check for allergies and harmful interactions.  As the doctor reviews a prescription, the program can flag potential problems with dosage or side effects.  When a patient is discharged from the hospital, the program can help plan follow-up care.

The goal is to provide the right information to healthcare providers at the right time, helping them make safer and more effective choices.  This can lead to better patient outcomes and improved quality of care.  The guide offers a standardized approach, making it easier to develop and use these helpful programs.

---

# cgm.md

This guide helps apps and systems share data from continuous glucose monitors (CGMs). It defines how CGM apps can connect to a patient's electronic health record (EHR) to send reports and glucose readings. It also lets doctors connect their systems to CGM platforms during patient visits. 

The guide uses a standard format called FHIR, which makes it easier for different systems to understand and use the data. It supports sending both summaries, like a PDF report, and detailed glucose values. It also allows for data to be shared with research studies.

Currently, there are some CGM concepts without standard codes. This guide provides temporary codes and a plan to switch to official codes when they become available. This ensures CGM data can be shared even before all standard codes are in place.

---

# cimi-labs.md

This guide helps share lab results between different computer systems. It focuses on common types of lab tests like blood tests, urine tests, and other measurements done in a clinical laboratory. It does not include microbiology lab tests, which require a separate guide. 

The guide defines how to represent different kinds of lab results, such as numbers (like blood glucose levels), simple positive/negative or present/absent results, or even text descriptions.  It also covers how to include information about who performed the test and where it was done.

By using this guide, healthcare providers can easily share lab results electronically, which improves patient care by making information available quickly and accurately to everyone involved.  This also helps with research and public health reporting.

---

# cimi-vital-signs.md

This guide defines a standard way to represent vital signs information using FHIR.  It covers common measurements like heart rate, respiratory rate, body temperature, and blood pressure, as well as additional measurements like height, weight, and BMI. 

The guide uses standard codes to ensure that the meaning of the information is clear and can be understood by different computer systems. It also includes details about how to record additional information about the measurements, such as the patient's position, the device used, and any relevant circumstances.

By using this standard, healthcare providers can easily share vital signs data electronically, improving patient care and allowing patients to share information from their own devices. 

---

# codex-radiation-therapy.md

The CodeX™ Radiation Therapy Implementation Guide (IG) improves the sharing of radiation therapy information. It defines a standard way to represent key details about a patient's radiation therapy treatment using the FHIR standard. This includes information about the prescribed treatment, the planned treatment, and the treatment that was actually delivered. 

The IG helps to share information between the systems used in radiation oncology and other health information systems, like electronic health records. Using this standard, doctors can more easily see the details of a patient's radiation therapy. This can help to improve care coordination and make sure that patients get the best possible treatment. 

The IG was developed with input from many different groups, including radiation oncologists, medical physicists, and health IT experts. It is based on other standards, like mCODE and DICOM, that are already used in radiation oncology. 

---

# Content-Management-Infrastructure-IG.md

The Canonical Resource Management Infrastructure (CRMI) Implementation Guide helps create and share healthcare knowledge consistently. It focuses on "knowledge artifacts," which are digital instructions for things like questionnaires, quality measures, and decision support rules. 

The guide establishes rules for how to package these artifacts and their related files, like code systems and value sets, for sharing between healthcare systems.  It also defines ways to track versions of these artifacts to ensure everyone is using the same information, even as healthcare codes and standards change. 

By promoting consistent practices for creating and sharing knowledge artifacts, the CRMI guide aims to streamline the implementation of healthcare guidelines, quality measures, and other essential knowledge, ultimately improving healthcare delivery. 

---

# cqf-measures.md

This guide explains how to use a standard format for electronic health records to measure the quality of healthcare. It helps make sure that everyone is using the same methods to measure things like patient safety, effectiveness of care, and patient satisfaction. 

The guide uses a special language called CQL (Clinical Quality Language) to clearly define the rules for measuring these aspects of care.  It also provides instructions on packaging these rules and sharing them with others, such as hospitals, doctors' offices, and insurance companies.  

This common format helps healthcare providers exchange information about the quality of care they provide, making it easier to compare performance and improve healthcare for everyone. 

---

# cqf-recommendations.md

This implementation guide (IG) defines a standard way to represent clinical guidelines as computer-understandable information using the FHIR standard. This makes it easier to share and use guidelines across different healthcare systems. 

The IG focuses on representing the clinical logic of guidelines, such as who should receive a certain treatment and when. It also addresses how to track patient progress through a guideline and measure if recommendations are being followed. 

The IG does not specify the exact technical details of how to implement guidelines in a specific system. However, it helps software developers understand what information needs to be included when creating computer systems that use clinical guidelines. This makes it easier to create tools that help healthcare providers deliver appropriate care based on the latest medical evidence. 

---

# cql-ig.md

This implementation guide focuses on using a special language, called Clinical Quality Language (CQL), with FHIR. CQL helps express medical knowledge for different purposes like making decisions about patient care or creating quality reports. 

The guide explains rules for writing and using CQL with FHIR data. It describes how to package CQL logic into FHIR resources called Libraries, which can be shared and reused. It also covers how to handle medical terms and codes from standard systems like SNOMED CT. 

By combining CQL and FHIR, this guide aims to make it easier to develop, share, and use computer-readable medical knowledge. This can help healthcare providers make better decisions and improve the quality of care. 

---

# cql.md

This implementation guide defines the Clinical Quality Language (CQL), a specialized language for expressing clinical knowledge used in healthcare decision-making and quality measurement.  CQL allows healthcare providers to create rules and calculations based on patient information, such as medical history, lab results, and medications. 

CQL enables the creation of reusable logic for tasks like identifying patients who need specific screenings or treatments. These rules can be shared and used across different healthcare systems, promoting consistency in care. The guide also describes how CQL can be translated into a machine-readable format called Expression Logical Model (ELM), facilitating the exchange and implementation of clinical knowledge. 

While CQL offers a powerful tool for representing clinical logic, it relies on accurate and complete patient data for effective use. Developers and healthcare providers need to consider the limitations of available data when using CQL to make decisions or measure quality of care.

---

# crmi-ig.md

This guide helps healthcare systems exchange important medical information using a standard format called FHIR. It focuses on sharing "knowledge artifacts" – things like medical forms (questionnaires), guidelines for care (plan definitions), and rules for evaluating care quality (measures). 

The guide defines how to package these artifacts, including the medical terms (value sets and code systems) they use, so they can be easily shared and understood. It also explains how to manage different versions of artifacts and their dependencies, ensuring everyone is working with the same information. 

This helps make sure that healthcare providers, researchers, and others can consistently create, share, and use these important pieces of medical knowledge. 

---

# data-access-policies.md

This implementation guide helps improve how FHIR, a standard for exchanging healthcare information, can be used for managing access to healthcare data. It explores how the FHIR "Permission" resource can be used to define and enforce rules about who can see and use different types of health information. 

The guide looks at common scenarios like patient directories and provider directories. It examines how to control access to information in these directories for different users, such as patients, family members, clinicians, and administrators. It also considers how to apply privacy rules, such as HIPAA, to these situations.

The guide explores different ways to define access rules, including simple role-based access (doctors can see this, nurses can see that) and more complex attribute-based access (access depends on specific details about the user, the data, or the situation).  It is still under development and aims to make it easier to manage healthcare data sharing securely and effectively. 

---

# davinci-alerts.md

This guide explains how healthcare systems can share important patient information in real-time using a standard called FHIR. It focuses on notifications, which are like alerts but don't always require immediate action.

The guide helps set up a system for sending notifications between different healthcare providers, like hospitals and clinics, or between providers and insurance companies. It covers common events such as patient admissions, transfers, and discharges.  

The notifications contain basic patient information and details about the event. They let healthcare providers know what's happening with their patients, so they can make decisions about follow-up care. The guide also allows for providers to request more information if needed.  

It's important to note that this guide doesn't define when a notification should be sent or who should receive it. Those decisions are made by each healthcare organization. The guide simply provides the technical framework for sending and receiving these notifications.

---

# davinci-atr.md

This guide helps healthcare providers and insurance companies (payers) share information about which patients are in a provider's care. This sharing is important for things like special payment agreements where providers are paid based on how well they care for a group of patients. The guide defines a standard way to create and share these patient lists, called Member Attribution Lists. It allows providers to see which patients they are responsible for and lets them suggest changes to the list if needed. 

The guide also allows for large lists to be shared easily and securely. It uses a technology called FHIR (Fast Healthcare Interoperability Resources) which is a common way to share healthcare information electronically.  It also explains how providers can be notified when the patient list changes. This guide helps improve communication and coordination between providers and payers, ultimately leading to better patient care. 

---

# davinci-crd.md

The Coverage Requirements Discovery (CRD) Implementation Guide helps healthcare providers find out about insurance coverage for their patients. It lets providers quickly check if a specific treatment or service is covered, if prior authorization is needed, and what paperwork is required.

This guide defines a way for healthcare provider systems like Electronic Health Records (EHRs) to communicate with insurance companies in real time. They can exchange information about the patient, the proposed treatment, and the patient's insurance plan. This allows providers to get instant feedback about coverage, which can save time and prevent delays in care.

The CRD process is designed to be automated, so providers can get information quickly. However, if more information is needed, the system can guide providers through additional steps like filling out forms or getting pre-approval from the insurance company. This ensures that patients get the care they need without unnecessary delays or unexpected costs. 

---

# davinci-deqm.md

The Da Vinci Data Exchange for Quality Measures (DEQM) Implementation Guide helps healthcare providers and payers exchange information needed for quality reporting. It uses the Fast Healthcare Interoperability Resources (FHIR) standard to define how this information should be structured and shared.

The guide covers two main scenarios: data exchange and measure reporting. Data exchange lets providers send patient data to payers, who need it to calculate quality measures. Measure reporting lets payers send reports back to providers, showing how their patients are doing on those measures. The guide also helps identify and communicate "gaps in care," which are instances where patients haven't received recommended care.

This standard makes it easier to share quality information, which helps providers improve patient care and payers track the effectiveness of healthcare services.

---

# davinci-dtr.md

This implementation guide, called Da Vinci Documentation Templates and Rules (DTR), helps to streamline the process of gathering medical documentation needed by insurance companies. It uses a standard format called FHIR (Fast Healthcare Interoperability Resources) to make it easier for healthcare providers to share information with payers. 

DTR allows payers to create digital questionnaires that providers can fill out.  These questionnaires can automatically pull information from the patient's electronic health record (EHR), saving time and reducing errors. If needed, providers can also add information manually.

DTR can be used with other Da Vinci guides, such as Coverage Requirements Discovery (CRD) and Prior Authorization Support (PAS), to further automate the process of checking coverage and getting approval for medical services. This helps to reduce paperwork, speed up the process of getting care, and improve communication between healthcare providers and payers. 

---

# davinci-ecdx.md

The Da Vinci Clinical Data Exchange Implementation Guide (IG) defines a standard way for healthcare systems to request and share patient information. It focuses on improving communication between payers, like insurance companies, and providers, like doctors and hospitals. The IG outlines methods for payers to request specific clinical data from providers, which helps streamline processes such as claim reviews, prior authorizations, and quality reporting. 

This guide supports several approaches for data exchange. Payers can directly query a provider's system for specific information. They can also use a task-based approach, where they request information and the provider fulfills the request, possibly involving a human to review the data before sending it back. The guide also defines a process for exchanging attachments, which are supporting documents for claims and prior authorizations.  

By using this IG, payers and providers can exchange healthcare data more efficiently and effectively, leading to faster claim processing, better care coordination, and improved accuracy in risk adjustment and quality assessments. 

---

# davinci-ehrx.md

This implementation guide (IG) helps healthcare systems, like those used by your doctor and insurance company, share information securely. It focuses on exchanging patient data in a way that's easy for computers to understand. This IG specifically addresses how to match patient information between different insurance companies, which is important for things like getting your medical bills paid. It also deals with getting your permission to share your medical information with others. 

The IG sets rules for common medical records like insurance details and doctors' qualifications. It also provides ways to track where information came from, which helps ensure data quality.  While this IG covers many aspects of data sharing, it doesn't specify exactly how insurance companies should match patient records, or how consent from patients should be revoked. 

---

# davinci-epdx.md

The Da Vinci Payer Data Exchange Implementation Guide (PDex IG) helps health plans share patient information in a standardized way using the FHIR standard. This makes it easier for healthcare providers, other health plans, and authorized third-party applications to access and use this information. 

PDex IG defines how health plans can share a patient's clinical history, claims data, and prior authorization decisions. It also covers how patients can consent to share their data with new health plans or apps. Importantly, PDex IG emphasizes data privacy and security, ensuring that patient information is only shared with authorized parties.  

While this guide focuses on information exchange for individual patients, it also includes mechanisms for bulk data transfer, particularly relevant for sharing information between health plans when a patient switches plans. This guide aims to improve data exchange in healthcare, supporting better care coordination, prior authorization processes, and patient access to their own health information. 

---

# davinci-pas.md

The Prior Authorization Support (PAS) Implementation Guide helps automate the process of getting approval from health insurance companies for medical services. It uses the FHIR standard to exchange information electronically between healthcare providers and insurance companies. 

The guide defines how to structure a request for prior authorization, including patient details, the requested service, and supporting medical information. It also specifies how insurance companies should respond, either with an approval, a denial, or a request for more information. 

The PAS guide supports different ways to manage prior authorization requests. This includes checking the status of a pending request, canceling a request, or updating a request with new information.  By streamlining this process, the PAS guide aims to make it easier and faster for patients to get the care they need. 

---

# davinci-pcde.md

The Payer Coverage Decision Exchange (PCDE) Implementation Guide helps patients continue needed healthcare when they switch insurance plans. It lets the old insurance company easily share information about active treatments with the new insurance company, when authorized by the patient. This can include details about medications, procedures, medical equipment, and the reasons for these treatments. 

PCDE aims to reduce delays or gaps in care that can happen when the new insurance company doesn't have this information. It's important to note that the new insurance company still makes coverage decisions based on their own policies. However, PCDE helps ensure they have the information they need to make informed choices, which can lead to a smoother transition for patients. While PCDE aims for automation, some cases may still require review by staff at the insurance companies.

---

# davinci-pct.md

This implementation guide focuses on using the FHIR standard to improve healthcare price transparency for patients. It defines how healthcare providers can send a Good Faith Estimate (GFE), which is an estimate of costs for services, to insurance companies (payers). Payers can then create an Advanced Explanation of Benefits (AEOB) for the patient. The AEOB shows the estimated costs for services, including what the insurance will cover and what the patient will have to pay.

The guide also describes how multiple healthcare providers can work together to give a single, complete GFE to the patient or payer. This is important when a patient needs services from different providers for a single health issue.

The guide allows for flexibility in how the information is shared, supporting various methods like APIs, portals, or other secure means. It aims to make healthcare costs clearer for patients and to help them make informed decisions about their care. 

---

# davinci-pdex-formulary.md

The Da Vinci Payer Data Exchange (PDex) US Drug Formulary Implementation Guide helps patients and consumers understand prescription drug coverage. It lets them see which drugs their health plan covers and provides estimated out-of-pocket costs. This information allows patients to discuss medication options with their doctors and make informed decisions about their prescriptions. 

The guide defines how health insurers in the United States can share their drug formulary information using the FHIR standard. A drug formulary is a list of medications covered by a health plan. The guide allows consumers to see costs and alternative drugs for those prescribed and compare drug costs across different plans.

This guide does not tell patients exactly what they will pay at the pharmacy, as individual situations may vary. It also does not help patients find alternative medications for a specific health condition.  Patients should always consult with their healthcare provider for personalized advice on their medications. 

---

# davinci-pdex-plan-net.md

The PDEX Payer Network Implementation Guide (IG) helps patients and healthcare providers find information about health insurance plans and their networks.  It defines a way to share data about insurance plans, the healthcare providers in those networks, and where they offer services. This data can be used to build apps that help patients find doctors, hospitals, and pharmacies in their network. 

The IG focuses on payer provider directories, which list the healthcare providers that are part of a health plan's network.  It uses the HL7 FHIR standard, which is a way to exchange healthcare information electronically.  This IG makes it easier for different health plans to share their provider directory information in a consistent way, so apps can easily search and display the data. 

---

# davinci-pr.md

This guide helps healthcare providers easily get copies of payment explanations. These explanations, also called remittances, show how much insurance paid for a patient's healthcare claim. Sometimes these get lost, and providers need a way to get a new copy.

Currently, getting new remittance copies is difficult and involves calling or logging into many different insurance websites. This guide makes it easier by letting providers use a standard way to ask for copies. They can search using information about the patient, the claim, or the payment itself.

The insurance company will then send back a copy of the remittance as a computer file. It may be an electronic 835 document or a PDF file. This guide improves efficiency and reduces the burden on providers who need remittance copies. It also supports better tracking of payments for both patients and providers. 

---

# davinci-ra.md

This set of specifications, called the Da Vinci Risk Adjustment Implementation Guide, aims to standardize how health plans and healthcare providers exchange information about risk adjustment coding gaps. Risk adjustment models help health plans understand the health risks of their patients and receive appropriate payments to cover their care.

This guide defines a standard format for sharing coding gap reports, which list potential discrepancies in patient diagnoses that could affect risk adjustment calculations.  Using this standard format, providers can easily review these reports, submit updated patient data to health plans, and even add notes about actions they took during patient visits. 

The guide also explores the use of "digital condition categories," which could automate the process of identifying coding gaps by applying standardized rules to patient data. This could help improve the accuracy and efficiency of risk adjustment, leading to better care coordination and more appropriate payments for patients with complex health needs.

---

# davinci-vbpr.md

This implementation guide defines a standard way to exchange reports about healthcare provider performance. These reports, called Value-Based Performance Reports, help track how well healthcare providers meet quality and cost goals.  They can include information like average costs, patient risk scores, and performance on quality measures like cancer screenings. 

The guide defines a framework for reporting, meaning it can be used for many different types of performance programs. It uses standard codes to represent common metrics and payment models, but can be extended to include information specific to a particular program. 

Using a standard format for these reports makes it easier for healthcare providers to understand their performance across different payers and programs. This can help them improve the quality of care they provide and manage costs. 

---

# dental-data-exchange.md

This implementation guide defines standards for exchanging dental information between healthcare providers. It aims to improve communication between medical and dental providers, and between dental providers themselves. 

The guide focuses on structuring dental data for electronic exchange, using the FHIR standard. It includes profiles for dental referrals and consultations, specifying how to represent diagnoses, procedures, and other relevant information.  It leverages existing standards like SNODENT for dental terminology and CDT for dental procedures. 

While it does not cover the exchange of dental images, it provides a framework for sharing key clinical information to improve dental care coordination. This allows providers to send and receive structured dental information electronically, improving patient care and care coordination. 

---

# DeviceAlerting.md

This implementation guide (IG) improves how patient information is shared. It focuses on making it easier to send and receive alerts about medical devices.  The guide uses a standard format called FHIR (Fast Healthcare Interoperability Resources) to define how this information should be structured. This makes it easier for different computer systems in healthcare to understand and use the alerts.  It includes instructions on how patient names should be recorded. By using this standard, healthcare providers can get important device information more quickly and reliably, which can help them make better decisions about patient care.  This guide only addresses device alerts, not other kinds of health information. 

---

# dicom-sr.md

This implementation guide describes how to convert medical imaging measurements from the DICOM SR standard into the HL7 FHIR standard. This lets healthcare systems that don't understand DICOM use the information. 

The guide focuses on the DICOM SR "Measurement Report", which includes different types of measurements, like those taken from X-rays or ultrasounds.  It explains how to represent these measurements using the FHIR "Observation" resource and other related resources, like "Patient" and "ImagingStudy".

This conversion is one-way, meaning you can't fully recreate the original DICOM data from the FHIR resources. Also, this guide doesn't cover creating full medical reports from the converted data. It focuses on making the measurement data itself usable in systems that support FHIR. 

---

# dme-orders.md

This guide explains how to use FHIR (Fast Healthcare Interoperability Resources) to improve how healthcare providers exchange orders for services like Durable Medical Equipment (DME) and Home Health. It allows ordering providers (like doctors) to send orders and related documents electronically to the providers who will fulfill them (rendering providers).

The guide supports two ways of exchanging information: RESTful, which is like browsing web pages, and messaging, which is like sending emails. It also explains how a third party, called an intermediary, can help manage the orders and find the right rendering provider.

This system aims to make ordering these services faster and more efficient, reduce errors, and ensure that everyone involved has the necessary information. It focuses on DME and Home Health orders and does not cover areas like patient responses or cost discussions. The guide also includes instructions on how to handle missing information or required data elements.

---

# ebm.md

This implementation guide (IG) helps computers share scientific knowledge using a standard format called FHIR (Fast Healthcare Interoperability Resources). It provides a way to represent research studies, including who was studied, what treatments were given, and what outcomes were measured. It also allows for sharing of scientific conclusions and how certain those conclusions are. 

This IG is meant for people who develop systems that exchange scientific knowledge, like researchers, medical guideline authors, and electronic health record vendors. It helps ensure that everyone is speaking the same language when it comes to research data, making it easier to share and use this information to improve healthcare.

This IG is built on version 5 of the FHIR standard but includes ways to use features from version 6. This approach helps computers exchange information seamlessly, regardless of which FHIR version they use. 

---

# efss.md

This guide focuses on using and improving data standards in health and human services, like tools for managing patient consent and securely sharing information between different organizations.  It highlights the need for better ways to exchange information about social services, like housing or food assistance, alongside healthcare data. The goal is to give human service workers and healthcare providers a more complete picture of a person's needs. This guide also looks at how to expand existing health data standards, such as the US Core Data for Interoperability (USCDI), to include social services information. By doing this, it aims to improve how people access services and help organizations that provide these services work together more effectively.  

---

# ehrsfm-ig.md

This implementation guide (IG) defines a standard model for the functions of electronic health records (EHR) systems. It helps make sure that different EHR systems can work together and share information. The guide describes the tasks that EHR systems should be able to do, like managing patient records, tracking medications, and supporting care plans. 

The IG is organized into different sections based on the type of healthcare activity. It describes the essential functions for each area, like providing care to individual patients or managing public health data. This helps healthcare providers and software developers understand what EHR systems need to do in order to be useful and effective. 

The guide also explains how to create profiles, which are customized sets of functions for specific healthcare settings, like a hospital or a doctor’s office. This makes it easier to implement the standard model in different situations. 

---

# ehrs-rle-ig.md

This guide explains how electronic health record systems (EHRs) can track changes to patient records. It describes what information should be kept about who made the changes, when, and why. This helps ensure that health records are accurate and trustworthy.  The guide focuses on recording events like creating, updating, viewing, and sharing records.  It also covers how to keep records secure and protect patient privacy.  By following these guidelines, healthcare systems can better manage patient information and improve the quality of care.  This implementation guide is based on a standard called FHIR (Fast Healthcare Interoperability Resources), which makes it easier to share health information between different systems.

---

# eLTSS.md

This guide helps computers share information about long-term services and supports (LTSS). LTSS are services that help people with disabilities or chronic illnesses live independently. The guide uses a technology called FHIR (Fast Healthcare Interoperability Resources) to organize this information in a standard way.

The guide describes how to share information about a person's care plan, including their goals, the services they need, and who is providing those services. It also explains how to share information about the costs of those services and who is paying for them. 

The guide can be used by different computer systems, like those used by state agencies, healthcare providers, and LTSS providers. This allows these systems to share information easily, which can help to coordinate care and improve the quality of life for people receiving LTSS. 

---

# emedicinal-product-info.md

This implementation guide defines a standard way to share information about medicines electronically using FHIR. It aims to make it easier for patients and healthcare providers to access reliable and current information about their medicines. 

Currently, medicine information is often stored as PDFs, which makes it difficult to search and use. This guide proposes using FHIR resources to structure the information, making it easier to find specific details. This includes information for healthcare professionals, patient information leaflets, and the information printed on medicine packaging. 

By standardizing how this information is organized, it can be integrated with electronic health records and other systems. This will enable personalized medicine information for patients and allow them to access the information they need in a format that suits them, such as larger fonts or multiple languages. 

---

# fetal_records.md

This guide explains how to handle information about a fetus (unborn baby) during pregnancy using a health data standard called FHIR. It helps different computer systems share important details about the fetus, like ultrasound results or needed medications. 

The guide suggests ways to identify the fetus and link their data to their mother's records. It focuses on sharing information during pregnancy, not after the baby is born. It also shows how to record procedures and medication requests specifically for the fetus, not the mother.

This guide is mainly for people who create or manage computer systems used in pregnancy and childbirth care. It doesn't set rules on how each system stores the information, but it helps them exchange data more easily. This can be useful for doctors, nurses, researchers, and others involved in caring for pregnant women and their unborn babies. 

---

# fhir-ae-care-ig.md

This guide helps healthcare providers use a standard way to share information about bad reactions to medicines or other treatments, called adverse events. It uses a technology called FHIR, which lets different computer systems talk to each other. 

The guide focuses on adverse events that happen during normal medical care. It explains how to record details about the patient, what caused the reaction, and who was involved. There's also an example of how to track an event where a patient had a bad reaction and hurt their caregiver and a doctor.

This standard way of recording adverse events can help improve patient safety by making it easier to share information and learn from what happened. 




---

# fhir-ae-research-backport-ig.md

This implementation guide focuses on using the FHIR standard to improve how adverse events are captured and shared in clinical research.  Adverse events are any unfavorable medical occurrences that happen during a research study.  

Right now, reporting these events involves manual data entry into different systems. This guide provides a way to represent adverse event information in electronic health records (EHRs) and personal health records (PHRs). Using this guide,  information can be exchanged between different systems involved in clinical research, like those used by doctors, researchers, and regulators. This could make reporting more efficient and accurate. 

The guide includes examples of how to represent information commonly found in adverse event reports, including the severity of the event, possible causes, and actions taken to mitigate harm. It also addresses how to document whether the event was expected based on the study and if it caused the patient to leave the study. 

---

# fhir-ae-research-ig.md

This guide helps healthcare systems use a common language for sharing information about adverse events, especially in clinical research. Adverse events are harmful or unpleasant experiences that happen when someone receives a medical treatment or participates in a study. 

This guide makes it easier to collect and report adverse events from different sources, like electronic health records and patient apps. It also helps researchers and regulators track the safety of new treatments. The guide uses a standard called FHIR, which allows different computer systems to exchange healthcare data. This can improve efficiency and reduce errors in reporting adverse events. 

While this guide focuses on clinical research, it could also be used to improve adverse event reporting in other healthcare settings. 

---

# fhir-bfdr.md

The Birth and Fetal Death Reporting (BFDR) Implementation Guide (IG) defines how to use the FHIR standard to exchange information about births and fetal deaths. It covers the information needed to complete the standard US birth and fetal death certificates and worksheets. This includes details about the mother, father, and child or fetus, as well as information about the pregnancy, labor, and delivery.

The IG supports the exchange of this information between healthcare providers and jurisdictional vital records offices, and between vital records offices and the National Center for Health Statistics (NCHS). The IG defines the structure of the information but does not specify how it is exchanged.

The IG also supports the exchange of coded race and ethnicity and cause of death information from NCHS back to the vital records offices. The IG does not currently include all the data elements used by NCHS for statistical reporting, but it can be extended to support additional data elements. 

---

# fhir-breast-radiology-ig.md

This implementation guide (IG) defines how to represent breast imaging reports using the FHIR standard. It provides a structured way to capture important information from these reports, such as findings, assessments, and recommendations. 

This IG enables better exchange and use of breast imaging information among healthcare providers and systems. It allows radiologists to create more standardized reports that can be easily understood and shared with other clinicians involved in a patient's care. This can improve communication and care coordination, leading to more efficient and effective breast cancer screening and diagnosis. 

The IG also supports the use of breast imaging data for research and public health purposes. By standardizing how this information is represented, it can be more easily aggregated and analyzed to improve our understanding of breast cancer and develop new strategies for prevention, early detection, and treatment. 

---

# fhircast-docs.md

The FHIRcast Implementation Guide (IG) helps different healthcare applications work together seamlessly. It allows apps to share information in real-time, so everyone is looking at the same patient data. For example, when a doctor opens a patient's chart in one app, FHIRcast makes sure the same patient is automatically opened in other connected apps, like a system for writing notes or viewing medical images. 

FHIRcast uses a system of subscriptions and notifications. Apps can subscribe to specific events, like opening a patient chart or adding a new lab result. When these events happen, FHIRcast sends notifications to all subscribed apps, keeping them in sync. FHIRcast also helps apps share content related to the patient, such as medical images or doctor's notes. It uses a special kind of message called a "Bundle" to share this information securely.

FHIRcast makes healthcare workflows smoother and more efficient by ensuring everyone has the most up-to-date information. It can be used in many different healthcare settings, such as hospitals, clinics, and doctor's offices.

---

# fhir-cdisc-mapping.md

Okay, I can help summarize a FHIR Implementation Guide (IG) for patients and non-experts. 

Just give me the FHIR IG source files and I'll create a summary that's about 150 words long, easy to understand, and follows all your guidelines. I'll explain what the IG does, how it helps improve healthcare, and who it's for, all in simple language. I'll make sure to explain any technical terms so that everyone can understand. 

My goal is to give a clear and factual explanation of what the IG is all about and how it's used in the healthcare system, without getting too technical or making any unsupported claims. 

Let's get started! 

---

# fhir-central-cancer-registry-reporting-ig.md

This guide helps automate the way cancer information is shared with central cancer registries. These registries collect data on cancer patients to track cancer trends and improve care.  Currently, reporting is often manual and can be slow.

This guide suggests a way to send information electronically from a patient's medical record as soon as a cancer diagnosis is made or when treatment begins.  It uses a standard format (FHIR) so different computer systems can understand the information. This aims to improve the speed and quality of cancer reporting, giving researchers and public health officials faster access to important data.

However, this guide doesn't cover everything. It doesn't deal with checking if the information is correct or getting patient consent to share data. It focuses on information from doctor's offices and clinics, not hospitals, which often already have reporting systems. 

---

# fhir-clinical-document.md

This guide helps create a standard way to represent clinical documents, like discharge summaries or doctor's notes, using a technology called FHIR (Fast Healthcare Interoperability Resources). It builds on an older standard called CDA (Clinical Document Architecture) while providing a more modern approach.

The guide focuses on the header and basic structure of the document, including who created it, who it's for, and what it's about. It also explains how to manage different versions of a document, like when a correction or update is needed.

Although it doesn't cover every possible type of clinical document, this guide offers a solid foundation for developers creating more specific document types in the future. It aims to improve how health information is shared between different computer systems, which can benefit both patients and healthcare providers.

---

# fhir-consent-management.md

This guide explains how patients can control who can see their health information. It uses a standard called FHIR (Fast Healthcare Interoperability Resources) to help different computer systems share this information safely. 

The guide describes how patients can allow or deny access to their data. They can say yes or no to requests, choose what information is shared, name someone to make choices for them, and take back permission. It also keeps track of who has seen the information.

This guide focuses on how patients give permission, not on the rules about who can see the data or how they get access. It's a tool to help patients manage their privacy and make sure their health information is only shared with those they trust. 

---

# fhir-COVID19Library-ig.md

This implementation guide (IG) provides a standard way to share information about COVID-19. It includes data elements that are useful for taking care of patients, public health reporting, and research.  

Healthcare providers can use this IG to share information about COVID-19 diagnoses, symptoms, lab tests, and underlying health conditions. It includes details about possible exposure to the virus, like travel history.  The IG also covers vaccination information, such as the type of vaccine and who made it.

It is important to note that this IG is not meant for sending electronic case reports to public health departments.  Separate guidelines exist for those reports.  This IG is designed to help different healthcare systems consistently share COVID-19 data. 

---

# fhir-cow-ig.md

This implementation guide (IG) helps healthcare systems better manage and share information related to healthcare orders. It addresses challenges like making sure order fillers, such as pharmacists or nurses, have all the details they need to carry out orders correctly. The guide offers different ways to make this information available, depending on factors like the amount of information and the connection between the person placing the order and the person fulfilling it. This IG leverages the FHIR standard, which enables better exchange of healthcare data between different systems. By improving how order information is shared, this guide aims to enhance the safety and effectiveness of healthcare processes. 

---

# fhir-cross-version.md

This set of guides describes how healthcare data can be shared directly between different computer systems. It uses a standard called FHIR (Fast Healthcare Interoperability Resources), which is like a common language for health information.  

These guides cover many kinds of health data, like patient details, appointments, medications, and lab results. They explain how this information can be packaged and sent securely from one system to another, such as from a doctor's office to a hospital. 

By making it easier to share information, these guides aim to improve how healthcare providers coordinate patient care. This can lead to better treatment decisions and a smoother experience for patients.  It's important to know that using these guides requires technical expertise and that not all systems can use FHIR yet. 

---

# fhir-directory-attestation.md

This implementation guide focuses on streamlining healthcare directories.  These directories are important because they help patients find healthcare providers and services.  They also help healthcare providers share patient information.  

The guide defines a common way to share information between different directories using a standard called FHIR (Fast Healthcare Interoperability Resources).  The guide also outlines how to verify the information in the directories to make sure it's accurate.  The goal is to make it easier for everyone in the healthcare system to find and share reliable information.  This will improve patient care and reduce costs. 

---

# fhir-directory-exchange.md

This implementation guide defines how healthcare directory information can be shared between systems. A healthcare directory includes information about providers, organizations, the services they provide, and how to connect to them electronically. This guide focuses on how a national directory can exchange this data with other systems using a standard format based on FHIR (Fast Healthcare Interoperability Resources). 

The guide also defines how to describe restrictions on the use of the data, such as when patient consent is required to share information.  It covers several common healthcare directory use cases, including finding providers in a specific location or who are part of a certain insurance network, and enabling exchange of patient information between providers. 

While this guide was written to support a national directory, the content can also be used to implement local directories. It does not address how patients or the general public might access this directory data, nor does it provide guidance on resolving potential conflicts when similar data elements are represented across different resources. 

---

# fhir-directory-query.md

This implementation guide defines how to exchange healthcare directory information using FHIR. It focuses on sharing verified information about healthcare providers and the services they offer. This guide describes how to search for providers based on their location, specialty, insurance networks, and other criteria. It also includes ways to access information about organizations like hospitals and clinics.

This guide is designed to improve the accuracy and availability of healthcare directory data. It helps healthcare providers share information more easily, reducing the burden of submitting the same information to multiple organizations. While initially intended for use in the United States, this guide's flexible design allows it to be adopted by other countries and smaller directories as well.

---

# fhir-exchange-routing-ig.md

This guide explains how to exchange healthcare information when a third party is involved.  Sometimes, providers and payers don't exchange information directly. Instead, they use a middleman, like a clearinghouse or Health Information Exchange (HIE). This guide helps those middlemen pass along requests and responses without changing them.

The guide makes sure that healthcare systems can still talk to each other, even with a middleman. It also ensures the security and privacy of the information being exchanged. It only works when the sender and receiver already trust each other. The middleman simply passes along the information.

This approach helps healthcare systems work together more smoothly and makes it easier to share information at a large scale. It does not cover all possible situations, focusing on simple pass-through exchanges. More complex scenarios will be addressed in future guides.

---

# fhir-extensions.md

This set of guidelines helps healthcare systems exchange information more easily. It defines how to share details like custom medical extensions and common medical terms. This ensures that everyone understands the information in the same way, regardless of their system. It also includes ways to check that the information is correct and consistent.

For example, if a doctor needs to send a patient's medical history to a specialist, this guide ensures the specialist's system can understand the information. This can improve patient care by making it easier to share information between different healthcare providers. It also helps researchers by providing consistent data for studies.

While this guide improves healthcare data exchange, it's important to remember that it's just one part of a larger effort to improve healthcare interoperability. There's still work to be done, but this guide is a step in the right direction. 

---

# fhir-eyecare-ig.md

This guide helps eye care professionals share information more easily. It provides standards for storing and exchanging eye-related health data, like eye exams, diagnoses, and treatments, using a common format called FHIR (Fast Healthcare Interoperability Resources). This means different computer systems used in eye care can talk to each other better. 

Currently, eye care data is often trapped in separate systems. This guide aims to solve that problem, making it easier to share information between eye doctors, hospitals, and even researchers. This could lead to better care for patients, easier research, and more efficient healthcare overall, though these are potential benefits and not guaranteed. The guide also offers ways to describe eye conditions and procedures in a standardized way, improving communication and reducing errors.

The guide is a work in progress and relies on the eye care community to continue developing and improving it. It is part of a larger effort to improve the way health information is shared and used.

---

# fhir-for-fair.md

This implementation guide helps make health data easier to find, access, share, and reuse. It provides best practices for using the HL7 FHIR standard to organize and describe health information, making it more "FAIR". 

The guide includes recommendations for healthcare providers and researchers on how to structure their data using FHIR resources. It also shows how to use FHIR to document important information about the data, like where it came from, how it was collected, and who can use it. The guide highlights real-world examples of how FHIR is being used to improve data sharing in research projects and healthcare organizations. 

While this guide focuses on technical aspects, it emphasizes that making data truly FAIR requires more than just using FHIR. Organizations need to establish clear policies and procedures for data management and ensure that data is accurate and reliable. 

---

# fhir-gender-harmony.md

This implementation guide, called Gender Harmony, helps healthcare systems better understand and share information about a person's sex and gender. It clarifies the difference between sex assigned at birth, gender identity, and sex characteristics that are important for clinical decisions. 

The guide uses a standard format, called FHIR, to make sure that this information can be shared between different computer systems. This way, everyone involved in a patient's care, from doctors to nurses to pharmacists, can have the most accurate and up-to-date information. 

This is important because it helps to avoid mistakes and ensures that patients receive the best possible care. For example, a transgender patient who needs a specific test or treatment can be confident that their healthcare providers have the correct information to make the right decisions. 

---

# fhir-health-care-surveys-reporting-ig.md

This guide helps automate the way healthcare providers send data to the National Center for Health Statistics (NCHS) for national health surveys. It uses a standard called FHIR, which lets different computer systems easily share health information. 

The guide focuses on two surveys: the National Ambulatory Medical Care Survey (NAMCS) and the National Hospital Care Survey (NHCS). It details what patient information should be collected during doctor's visits and hospital stays. A special app, called the Health Data Exchange App (HDEA), will automatically gather this information when a patient encounter ends. The HDEA then sends the data securely to NCHS. 

This automated process aims to make it easier for healthcare providers to participate in surveys and for NCHS to collect better data. This data helps researchers understand healthcare trends and improve the quality of care for everyone. The guide also explains how to keep patient information private during this process.

---

# fhir-ichom-breast-cancer-ig.md

This guide helps healthcare systems exchange information about breast cancer patients. It uses the FHIR standard to make sure that different computer systems can understand each other. 

The guide includes two ways to represent the information. One way is through questionnaires that patients and doctors can fill out. The other way is through individual data points, like the patient's age or the type of surgery they had. This data can be used to track how patients are doing and to compare outcomes between different groups of patients. 

The guide focuses on how to represent the data and does not tell healthcare systems how to use it. It is up to each healthcare system to decide how to use this information to improve patient care. 

---

# fhir-icsr-ae-reporting.md

This implementation guide describes how electronic health records can be used to find and report adverse events, especially those related to vaccines and transfusions. It uses computer algorithms to look for possible adverse events and then provides tools for healthcare providers to confirm and report these events. 

The algorithms use data like diagnoses, immunizations, and encounters to identify potential problems. They also help figure out if an adverse event is new or has happened before. To report an adverse event, the guide uses a standard format called FHIR to create a case report. This report includes important details like patient information, the event itself, and any medications or procedures involved.

This guide focuses on reporting to the FDA and includes mappings to the FDA's systems, such as FAERS and VAERS. It also aligns with the US Core standard for electronic health records, making it easier to share information between different systems. 

---

# fhir-identity-matching-ig.md

This guide helps healthcare systems better share patient information. It provides ways to verify patient identity and match patient records across different organizations. This is important because patients often receive care from multiple providers.  

The guide focuses on using a patient's unique digital identifier, like a special number assigned to them, to improve matching. It also suggests using verified information like name, address, and date of birth. When a digital identifier is not available, the guide suggests other identifiers like a driver's license or insurance number. 

The guide also helps healthcare systems share information while protecting patient privacy. It emphasizes the need for patient consent and secure methods for sharing data.  This guide helps make sure that the right information gets to the right people at the right time. 

---

# FHIR-IG-Human-Services-Directory.md

This implementation guide helps healthcare providers and patients find and share information about human services. Human services are things that help people meet their basic needs like food, housing, transportation, and mental health support. 

This guide uses a standard format called FHIR, which helps different computer systems understand each other. It allows healthcare systems to search for human services in a community and share information about those services with patients. This guide also helps patients find services on their own using a phone app. 

Right now, this guide only lets users search for services; it doesn't allow them to schedule appointments or check if they qualify. It also doesn't include a standard list of service types, so different communities may organize their services differently. 

---

# fhir-ipa.md

This guide, called the International Patient Access (IPA) specification, helps patients get their health information from different healthcare providers. It uses a standard way to request and share data, called FHIR, and a secure method called SMART on FHIR to protect patient privacy.

The guide lets patients see basic details, problems, medications, immunizations, allergies, test results, and clinical notes.  Healthcare systems can choose to follow all or part of the guide.  

It's important to know that this guide focuses on giving patients access to their information. It doesn't tell healthcare providers how to make decisions based on that information. Also, the guide doesn't solve all the challenges of sharing health information around the world, but it's a step towards making it easier for patients to get their health data.

---

# fhir-ips.md

The International Patient Summary (IPS) Implementation Guide defines a standard way to share a patient’s key medical information. It uses a format called FHIR (Fast Healthcare Interoperability Resources) to create a summary document that can be understood by different computer systems around the world. 

The IPS includes important details about a patient’s medical history. This includes information about allergies, medications, past illnesses, procedures, and immunizations. It also covers medical devices used by the patient and results from lab tests and radiology. The IPS aims to help healthcare providers in different countries quickly understand a patient’s health situation, especially in unplanned or emergency situations. 

While the IPS captures essential information, it may not include a patient’s entire medical history. Some older information might be left out if it is not relevant to current care.  The guide also acknowledges that there are challenges in representing highly sensitive information and ongoing efforts to improve how that is handled. 

---

# fhir-mCODE-ig.md

The Minimal Common Oncology Data Elements (mCODE) Implementation Guide defines a standardized way to represent cancer-related information using the FHIR standard.  It includes details about the patient's diagnosis, tumor characteristics, staging, and treatment history. mCODE can be used to exchange information about medications, surgeries, and radiation therapy.  

The guide also covers performance assessments, lab tests, and comorbidities that are relevant to cancer care. By using a common format, mCODE aims to improve the sharing of cancer data between different healthcare providers and systems. This can aid in research, treatment decisions, and monitoring of patients' progress over time.  However, mCODE does not cover every detail of cancer care and is still under development. 

---

# fhir-mdi-ig.md

This US-specific guide helps exchange information related to death investigations. It enables communication between systems used by medical examiners and coroners, forensic toxicology labs, and agencies that register deaths. 

The guide defines how to electronically create and share death investigation records, including details about the person who died, the circumstances of their death, and the cause and manner of death. It also defines how forensic toxicology labs can send results to medical examiners and coroners.

This guide promotes consistent data sharing between different organizations, reducing errors and delays in death investigations. It also helps public health agencies track death trends and develop prevention strategies. 

---

# fhir-medication-rems-ig.md

This guide helps computer systems exchange information needed when a patient is prescribed a medication with a Risk Evaluation and Mitigation Strategy (REMS). A REMS is a drug safety program that the FDA requires for certain medications with serious safety concerns.

The guide focuses on how a healthcare provider's system (like an electronic health record) can interact with the REMS program administrator's system. It aims to reduce manual work and speed up the process of getting these medications to patients. 

It defines ways for the systems to alert providers about REMS requirements, enroll patients in programs, and share information needed to satisfy REMS steps. The guide primarily focuses on the prescriber's role but aims to improve the process for patients and others involved as well.

This is the first version of the guide. Future work may include support for pharmacies and other participants in the process, and address additional challenges to automating REMS requirements.

---

# fhir-medmorph.md

The MedMorph Implementation Guide helps automate sharing patient data for research and public health reporting. It defines a standard way to collect data from electronic health records and send it to organizations like the CDC or research groups. 

This guide focuses on reducing the workload for healthcare providers. It uses a special set of instructions called "Knowledge Artifacts" to automatically decide when and what data to send. It also includes ways to protect patient privacy, such as removing identifying information before sending data.

MedMorph aims to improve data quality and make it easier for healthcare organizations to participate in research and reporting. However, it does not change how providers collect patient information or handle patient consent. It also relies on systems being able to share data using a standard called FHIR (Fast Healthcare Interoperability Resources). Overall, MedMorph aims to improve the way we collect and use healthcare data to improve public health and research. 

---

# fhir-medmorph-research-dex-ig.md

This guide helps researchers get health data more easily. It defines a standard way to extract data from places like electronic health records and put it into research databases. This process is faster and cheaper than current methods because it uses a common format called FHIR (Fast Healthcare Interoperability Resources).

The guide focuses on how to collect the data, not on things like patient privacy or data quality. It also doesn't cover how researchers will use the data once it's in the database.

The goal is to make it easier for researchers to access the data they need, which can lead to new discoveries and better treatments. The guide also allows researchers to combine data from different places, which can help them answer more complex research questions.

---

# fhir-military-service.md

This implementation guide helps share information about military service history and status in a standardized way. It uses a common healthcare data format called FHIR to make sure the information can be understood by different computer systems. 

The guide includes ways to record details about a patient's time in the military, such as their branch of service, deployments, and job roles. It also includes a way to verify if a patient is a veteran, which can be helpful for healthcare providers who need to understand their patients' health risks. 

This guide is designed to work with other healthcare data standards, like those from the US Department of Veterans Affairs and the Centers for Disease Control and Prevention. This helps make sure that information about veterans' military service can be easily shared between different healthcare providers and organizations. 

---

# fhir-mmm-ig.md

This guide helps researchers study information about mothers and their babies to learn more about health problems that can happen during and after pregnancy. It focuses on serious issues like high blood pressure during pregnancy and deaths that happen within a year of pregnancy, regardless of the cause. 

The guide creates a standard way to collect and share this information between different computer systems, like those used by hospitals and doctors. It also aims to link the health records of mothers and their children, even if the information is stored in separate places. This helps researchers get a more complete picture of the mother's and child's health.

By making it easier to study this information, the guide aims to help researchers find ways to improve the health of mothers and babies and prevent serious problems. In the future, it could be used to study other issues like the effects of medicines taken during pregnancy. 

---

# fhir-nhsn-ade-ig.md

This guide helps hospitals share information about patients who experience very high or very low blood sugar while in the hospital.  High and low blood sugar events are common and can be dangerous.  Sharing this information with the CDC can help improve patient care and safety. The information shared includes blood sugar levels, medications given, and other important facts about a patient's hospital stay. This guide is limited to patients in the hospital and does not include events that happen outside the hospital.  It focuses on information about each patient, not overall hospital statistics. The goal is to help hospitals track and improve the care they give to patients with blood sugar problems. 

---

# fhir-omop-ig.md

This guide helps researchers use health data more easily. It combines two common ways to organize health information: FHIR and OMOP. 

FHIR is like a standard language for sharing health data between different computer systems. OMOP is a model designed for storing and analyzing data for research. 

This guide provides instructions on how to convert data from the FHIR format to the OMOP format. This makes it easier for researchers to analyze data from different sources. The guide focuses on the most common types of patient information found in electronic health records.

By making it easier to combine and analyze health data, this guide can help researchers learn more about diseases and treatments, ultimately improving patient care. 

---

# fhir-order-catalog.md

This implementation guide helps healthcare systems share information about medicines and medical devices. It provides a standard way to describe drugs, including their uses, dosages, and packaging. It also covers details about medical devices, such as breast pumps and implants, including their classifications and safety information.

By using this guide, different computer systems can easily exchange details about medicines and devices. This can help healthcare providers make better decisions about patient care. It also makes it easier for patients to access information about their treatments. 

However, this guide does not include details about all possible medicines and devices. Healthcare providers should always consult other reliable sources when making treatment decisions. Also, the guide relies on healthcare systems being able to understand and use FHIR, a standard for exchanging healthcare information.

---

# fhir-pacio-cognitive-status.md

This guide helps share information about a person's mental abilities, like memory and decision-making, between different healthcare settings such as hospitals, nursing homes, and home health agencies. Sharing this data ensures that everyone involved in a patient's care has the same information. This can lead to better and safer care, especially when a patient moves between different places.

The guide uses a standard way to share information called FHIR (Fast Healthcare Interoperability Resources). It focuses on information from tests and assessments that measure cognitive function, such as the Brief Interview for Mental Status (BIMS) and the Montreal Cognitive Assessment (MoCA). 

While the guide initially focuses on sharing information during and after a hospital stay, the goal is to expand it to cover more situations in the future. Importantly, it addresses the need for secure and appropriate sharing of this sensitive information, respecting patient privacy and control over their data. 

---

# fhir-pacio-functional-status.md

This implementation guide facilitates the exchange of information about a patient's ability to perform daily activities, such as walking, dressing, and bathing. This information, known as functional status, is crucial for coordinated care as patients move between different healthcare settings like hospitals, nursing facilities, and home health agencies. 

The guide uses standardized codes and data models to ensure that functional status information can be easily shared and understood by different electronic health record systems. This helps healthcare providers get a complete picture of a patient's abilities, enabling them to provide the best possible care and make informed decisions about their treatment.  While this guide focuses on transitions related to post-acute care, it can be expanded to include other healthcare settings and community-based services in the future. 

---

# fhir-pacio-pfe.md

The Personal Functioning and Engagement (PFE) Implementation Guide (IG) outlines a standard way to share information about a person's ability to participate in everyday activities. This includes data about their physical and mental abilities, as well as how they interact with their surroundings. 

The guide is important because it makes it easier for healthcare providers in different settings, like hospitals, nursing homes, and home health agencies, to share patient information. This can lead to better care coordination and help patients return home and live more independently. 

The PFE IG does not dictate specific clinical practices or how software should collect or display information. Instead, it provides a framework for exchanging observations, enabling better communication among healthcare providers, patients, and caregivers. This can lead to a more holistic approach to care and improve a person's quality of life. 

---

# fhir-pacio-rt.md

This implementation guide focuses on structuring patient encounters in post-acute care settings like skilled nursing facilities and home health agencies. These encounters often last for months or even years. This guide introduces the concept of "Re-assessment Timepoints" to break down these long encounters into smaller, more manageable periods. 

Re-assessment Timepoints are defined by events like changes in a patient's condition or the completion of required assessments. They help organize clinical data associated with these events, making it easier for healthcare providers and others to find relevant information within a lengthy encounter.  For example, a payer auditing a patient's billing can use timepoints to quickly access the clinical data justifying a specific payment. Similarly, a home health nurse admitting a patient can use timepoints to understand the patient's recovery progress during a prior nursing facility stay. 

---

# FHIRPath.md

This guide defines FHIRPath, a language for navigating and extracting information from health data. It's like a set of directions for finding specific pieces of data within a patient's medical record. For example, it can find all the patient's allergies or all their lab results from the last year. 

FHIRPath is used by healthcare providers and researchers to access and analyze health data. It can be used to create reports, find patients for clinical trials, and make sure that patient data is accurate and complete. This standard is important because it helps to make health data more accessible and usable. This can lead to better care for patients and new discoveries in medicine. 

---

# fhir-patient-correction.md

This guide provides a standard way to request changes to your medical record using FHIR, a common format for exchanging healthcare information. It lets you ask for corrections and track their progress. It also allows you to explain why you disagree if a change is denied.

The guide outlines how patients can send requests and how healthcare providers can review and respond. It's designed to work with privacy rules like HIPAA and GDPR.

The guide focuses on the communication process, not on automatically making changes. It doesn't resolve disagreements between patients and providers. It also assumes the provider receiving the request can make the correction.

This guide aims to improve the process of fixing errors in medical records, making it easier and more electronic. It's part of a broader effort to give patients more control over their health information.

---

# fhir-qi-core.md

The Quality Improvement Core (QI-Core) Implementation Guide helps create healthcare applications focused on quality improvement, such as measuring performance or supporting clinical decisions. It defines a common way to represent clinical data using the HL7 FHIR standard, making it easier to share and use this data across different systems and organizations. 

QI-Core builds on the US Core Implementation Guide, which maps common clinical data elements to FHIR. It includes profiles for various clinical concepts, like patient demographics, allergies, medications, procedures, and observations. QI-Core also provides ways to express whether an action was not done and why, which is important for quality measurement. 

By using QI-Core, developers can create quality measures and decision support tools that work with data from different sources, improving the consistency and effectiveness of quality improvement efforts. 

---

# fhir-radiation-dose-summary-ig.md

This implementation guide (IG) defines a standard way to share basic radiation information, such as the amount of radiation a patient receives during medical imaging. It uses the FHIR standard to make it easy for systems like electronic health records (EHRs) to get this information from dose management systems. 

The IG focuses on summarizing the radiation dose from a single exam, like a CT scan or an X-ray. It does not include detailed information about how the radiation was given or the total radiation a patient has received over time. This information is meant to be included in medical reports and helps healthcare providers track and understand the radiation exposure of their patients. 

It is important to note that this IG does not provide enough information to make decisions about patient care or whether a patient should have a specific imaging exam.

---

# fhir-registry-protocols-ig.md

This implementation guide, called CREDS, helps healthcare providers easily and securely send patient information to clinical data registries. These registries collect and analyze patient data to improve healthcare quality and research. 

CREDS provides a standard way to define the specific information each registry needs. It also describes how to collect this data from different healthcare systems, including electronic health records, and package it for secure submission. This automation simplifies the reporting process, reducing manual work for healthcare providers. 

However, CREDS does not specify how to match patient identities across systems, which may require additional steps. Also, some data might not be electronically available and would need manual entry. Overall, CREDS aims to streamline data sharing between healthcare providers and registries, promoting better data collection and analysis for improved healthcare. 

---

# fhir-resp-net-ig.md

This guide helps healthcare systems automatically share patient information with the Respiratory Virus Hospitalization Surveillance Network (RESP-NET). This network tracks hospitalizations due to influenza, COVID-19, and RSV.  

The guide focuses on securely sharing data like patient demographics, diagnoses, medications, lab results, and clinical notes.  It leverages existing standards for data exchange and patient privacy.  The information is sent when a patient is discharged from the hospital.  

The automated approach reduces manual work for healthcare providers and ensures timely data is available for public health surveillance. This helps researchers and public health officials better understand and respond to these respiratory illnesses.  Not all data needed for surveillance may be available electronically, so some manual chart review may still be needed. 

---

# fhir-saner.md

The Situational Awareness for Novel Epidemic Response (SANER) Implementation Guide helps healthcare facilities share critical information during public health emergencies like COVID-19. It defines a standard way to report data such as available hospital beds, ventilators, and patient outcomes using a technology called FHIR (Fast Healthcare Interoperability Resources). 

This guide allows hospitals to automate data collection and reporting, making it faster and more accurate. Public health agencies can then easily access this information to track the spread of disease, manage resources, and coordinate response efforts.  

The guide also supports sharing of more detailed patient information when needed, while ensuring patient privacy. The SANER Implementation Guide helps improve communication and coordination during emergencies, ultimately aiding in better public health outcomes. 

---

# fhir-sdoh-clinicalcare.md

The Gravity Project's SDOH Clinical Care Implementation Guide helps healthcare systems exchange information about social factors that impact people's health. These social factors, called social determinants of health (SDOH), include things like access to food, housing, transportation, and healthcare. 

This guide uses a standardized approach to capture and share SDOH information. This allows healthcare providers to better understand their patients' needs and connect them with community resources that can help. For example, a patient who screens positive for food insecurity could be referred to a local food bank.

The guide also supports the exchange of information between healthcare providers and community-based organizations. This helps ensure that patients receive the services they need and that their progress is tracked.  It also helps to protect patient privacy by only sharing the information that is needed for the referral.

---

# fhir-security-label-ds4p.md

This guide explains how to use security labels with health information stored using the FHIR standard. Security labels act like tags to help control who can see and use different parts of a patient's health record. This is important for protecting sensitive information, like mental health or substance abuse treatment details, while still allowing doctors to share other necessary information. 

The guide helps healthcare systems set up security labels based on different rules, like laws or patient consent. It also covers how to handle labels when information is shared between different organizations, making sure everyone understands and follows the same rules.

However, this guide doesn't cover everything about protecting health information. Other security measures, like making sure only authorized users can access the system, are still needed. It's also important to remember that using security labels doesn't mean information will always be kept secret. Doctors can still access sensitive information when it's needed for patient safety.

---

# fhir-shc-vaccination-ig.md

This guide explains how to use FHIR to share vaccination and COVID-19 test results using SMART Health Cards. It helps healthcare providers create digital records that patients can easily share. 

The guide focuses on sharing the minimum necessary information to protect patient privacy.  It describes what information to include in the records, like patient name, vaccine details, and test results. It also explains how to use standard codes for vaccines and tests so everyone understands the information.

This guide is designed for international use and can be adapted for specific countries. It also explains how to verify that the information in a SMART Health Card is trustworthy and hasn't been changed.  

---

# fhir-shorthand.md

This Implementation Guide (IG) describes FHIR Shorthand (FSH), a language for creating and sharing healthcare data standards. FSH helps make sure that health information is exchanged in a consistent and understandable way. 

FSH is used to develop standards called "profiles" that define how specific health data should be structured. For example, a profile for a blood pressure reading would specify what information should be included, such as the systolic and diastolic values, the units of measure, and the date and time the reading was taken. 

FSH is designed to be easier to use than other methods for creating healthcare data standards. It allows developers to express their intent clearly and concisely, and it can be used to create profiles for a wide range of health data. Using FSH can help to improve the quality and consistency of health data exchange. 

---

# fhir-sirb.md

This implementation guide (IG) defines standards for exchanging information between research sites and ethics review boards (IRBs). It aims to streamline the approval process for multi-site research studies, which involve human participants. Traditionally, each site seeks separate IRB approval, causing delays. This IG supports using a single IRB to review studies across multiple locations.

The IG leverages FHIR questionnaires to standardize how research study information, like protocols and consent forms, is collected and shared. It includes templates for common forms, reducing manual effort and potential errors. The guide also offers optional ways to link forms to specific research studies and track changes for better record-keeping.

While it focuses on exchanging forms, the IG acknowledges that institutions might want to integrate this data with their existing research management systems in the future. It provides a foundation for extracting data from forms into separate FHIR resources, which could facilitate this integration and improve overall research study management.

---

# fhir-specialty-rx.md

This implementation guide, or IG, aims to improve how healthcare providers share patient information needed to fill prescriptions for specialty medications. Specialty medications are usually expensive or require special handling, and pharmacies need more information than a standard prescription provides. 

This IG describes ways to use FHIR to exchange patient data like allergies, medical conditions, insurance coverage, and signed consent forms. It allows pharmacies to request this data from healthcare providers or lets providers send it automatically when they write a prescription. The IG also describes how to use SMART apps to ask providers for more information. 

This guide is designed for the United States and reflects common pharmacy practices here. It offers different ways to exchange information, including RESTful searches and FHIR messages. This flexibility allows different healthcare systems to use the guide in a way that works for them. 

---

# fhir-spl.md

This FHIR implementation guide helps the FDA transition from the HL7 SPL standard to FHIR for drug label submissions. Currently, drug labels are submitted using the older HL7 V3 SPL format. This guide provides a roadmap for future submissions using the newer FHIR standard. 

The guide defines how to represent drug labels as FHIR documents. This includes details on required data elements, how to structure information like active ingredients and packaging, and how to handle human-readable text. It also provides tools to convert existing SPL labels to FHIR and vice versa. 

The initial focus is on human drug labels and registration information for companies involved in drug production.  Animal drugs, dietary supplements, and medical devices are not included in this phase. 

---

# fhir-subscription-backport-ig.md

This guide helps healthcare systems use a newer method of real-time patient data sharing called "topic-based subscriptions" even if they are using an older version of FHIR (Fast Healthcare Interoperability Resources). This approach lets healthcare providers automatically receive updates when important patient information changes. 

For example, a doctor could subscribe to receive notifications whenever a patient is admitted to the hospital. The guide defines how these subscriptions work, what information they can include, and how they can be delivered. It also covers security considerations to protect patient privacy. 

While this guide enables real-time updates, it does not guarantee that every update will be delivered or that updates won't be delivered multiple times.  Healthcare systems using these subscriptions need to be able to identify and handle these situations. 

---

# fhir-udap-security-ig.md

This guide improves how healthcare apps access and share patient data securely. It builds on existing standards like OAuth 2.0 to make it easier for apps to connect to different health systems. 

The guide helps apps register with systems that hold health information, prove they are legitimate, and get permission to access data. It includes ways to confirm a patient's identity, even across different organizations, using a process called Tiered OAuth. 

This guide also defines how healthcare organizations can share data with each other automatically, without direct patient involvement, following specific rules and permissions. It outlines how apps can request access to data for different purposes like treatment or payment, making sure the right information is shared for the right reasons.

While this guide makes it easier to share information, healthcare providers still need to follow privacy laws and get patient consent when needed. This guide focuses on the technical details of how apps and systems connect and share data, not on the rules for when they should do so. 

---

# fhir-us-mcc.md

This guide helps healthcare technology experts create systems to improve care for people with multiple long-term health issues, like diabetes or heart disease. It uses a special language called FHIR, which helps different computer systems share information.

The guide focuses on creating electronic care plans. These plans help healthcare teams coordinate care by bringing together information about a patient's health concerns, goals, and treatments. They can include details about the patient's medical history, lab results, medications, and even social factors like access to healthy food. 

The guide provides specific instructions and codes to ensure that electronic care plan systems can share information accurately and reliably. This helps doctors, nurses, and other healthcare professionals work together to provide the best possible care for patients with multiple health conditions. 

---

# fhir-us-ndh.md

The National Directory of Healthcare Providers & Services (NDH) Implementation Guide defines a standard way to share information about healthcare providers and services in the United States. It uses FHIR, a common format for health data, to make it easier for different computer systems to exchange information. 

The guide addresses several needs in healthcare. It helps patients find providers and services, including contact information and whether they are accepting new patients.  It also helps healthcare providers find each other, share information, and coordinate care. Payers can use the directory to verify provider information and manage health plan networks. 

The guide is designed to handle a wide variety of data, including provider demographics, locations, services, insurance plans, and network affiliations. It also includes ways to manage sensitive information, ensuring that only authorized users can access restricted data.  The guide helps to improve the accuracy and availability of healthcare provider information, making it easier for everyone to find and use the care they need. 

---

# fhir-us-ph-common-library-ig.md

The US Public Health Profiles Library (USPHPL) is a set of standard formats for sharing health information for public health purposes. It builds upon the US Core standard, which is used for sharing basic patient information between healthcare providers. USPHPL adds details specifically needed for public health reporting and research, like a patient's tribal affiliation or travel history.

This library aims to make it easier for healthcare organizations, electronic health record systems, and public health agencies to share information. By using these standard formats, different systems can understand each other and exchange data seamlessly. This helps public health agencies collect the information they need to track and respond to health concerns. The library also supports the secure exchange of information, allowing sensitive data to be encrypted.  

The USPHPL is constantly evolving. It is updated regularly to reflect new public health needs and changes in technology. 

---

# fhir-us-ph-library.md

The US Public Health Profiles Library (USPHPL) is a set of standardized data definitions for public health information. It makes it easier for healthcare systems, electronic health records, and public health agencies to share information.  The library includes data elements commonly needed for public health reporting, like patient demographics, encounters, locations, and conditions.

The USPHPL builds upon the US Core Implementation Guide, a set of data standards for healthcare interoperability in the United States. It reuses US Core profiles whenever possible and adds specific constraints or profiles for public health needs. This approach ensures consistency and reduces the burden on implementers.

The library aims to improve how public health data is exchanged and used. It helps to streamline public health reporting, supports disease surveillance, and enables better data analysis for public health research. 

---

# fhir-us-phpl.md

The US Public Health Profiles Library (USPHPL) is a set of standards for sharing health information with public health agencies in the United States. It builds upon the US Core standard, adding specific data needed for public health reporting. This includes details like a patient's race, ethnicity, gender identity, tribal affiliation, birthplace, and contact information. It also defines how to share information about encounters with healthcare providers, locations where care was given, and the organizations involved.

The USPHPL helps healthcare systems consistently format data about conditions, lab results, medications, pregnancy, and social history. It also includes ways to report information needed during public health emergencies or outbreaks. This library ensures that public health agencies receive the right information in a standardized way, which is crucial for tracking and responding to health concerns across the country. 

---

# FHIR-us-pq-cmc-fda.md

This implementation guide (IG) defines standards for sharing pharmaceutical information between drug companies and the FDA.  It focuses on the quality, manufacturing, and control (CMC) data submitted for new drug applications.  

The guide uses the HL7 Fast Healthcare Interoperability Resources (FHIR) standard to structure this data. It covers information like the drug's composition, packaging, manufacturing process, and quality testing.  Each section of the guide corresponds to a specific part of the FDA's electronic Common Technical Document (eCTD) filing format.

While this IG is primarily intended for drug companies preparing submissions, it can also help software vendors develop tools that support this process. It's important to note that this guide is still under development and currently focuses on solid oral medications. Future versions will include other types of drugs. 

---

# FHIR-us-pq-cmc.md

This implementation guide defines standards for sharing information about the quality of drugs. It enables drug manufacturers to submit structured data to the FDA for review. 

The guide uses the HL7 FHIR standard, a way to exchange healthcare information electronically. It covers details like drug ingredients, manufacturing processes, and quality testing. 

Currently, the guide focuses on oral medications in solid forms like tablets and capsules. Future versions will include other drug types. The guide helps to streamline drug review, potentially leading to faster approvals and improved drug quality for patients. 

---

# genomics-reporting.md

This implementation guide helps healthcare systems share genomic information.  It uses a standardized format called FHIR (Fast Healthcare Interoperability Resources). The guide focuses on reports that contain information about a patient's genes. 

It includes ways to share details about genetic variants, which are differences in a person's DNA compared to a reference. It also includes information about how these variants might affect a person's health, such as their risk for certain diseases or their response to medications. 

The guide provides a way to share information about a patient's tumor mutation burden (TMB), microsatellite instability (MSI), and other biomarkers.  This information can help healthcare providers make decisions about treatment. The guide also includes examples of how to share information about a patient's HLA type, which is important for organ transplantation. 

---

# HAI-LTCF.md

This guide helps healthcare providers send reports about infections in long-term care facilities (like nursing homes) to the CDC's National Healthcare Safety Network (NHSN).  The NHSN tracks infections to help improve safety and prevent outbreaks.

The guide defines how to structure this information electronically using a standard called FHIR (Fast Healthcare Interoperability Resources).  It covers two types of reports: summaries of infections over a month and reports about individual infections. 

Using this standard makes it easier to send information directly from electronic health records to the NHSN, saving time and effort.  This also improves the quality of data used to understand infection trends and protect patients in long-term care facilities.



---

# HAI.md

This guide helps computer systems share information about healthcare-associated infections (HAIs). HAIs are infections that patients can get while receiving care in a healthcare setting.  The guide uses a standard called FHIR, which makes it easier for different computer systems to talk to each other.  

This guide focuses on reports that hospitals send to the CDC's National Healthcare Safety Network (NHSN).  It includes instructions on how to send reports about individual patients and also reports that summarize data for groups of patients. The reports cover different types of HAIs like sepsis, surgical site infections, and patient safety events that can happen during outpatient procedures. The guide also includes a list of questions that hospitals need to answer in their reports.  

By using this guide, hospitals can send HAI information to the CDC in a standard way. This helps researchers track HAIs and find ways to prevent them. 

---

# home-lab-report.md

This implementation guide (IG) helps share at-home medical test results with doctors and public health departments. It uses a standard format called FHIR to make sure everyone understands the information. 

Right now, many health departments can only receive results in an older format called HL7 v2. This IG allows results to be sent using FHIR and then translated to HL7 v2.  It also includes information about the patient, the test device, and any symptoms the patient might have. This information is important for tracking diseases and making sure people get the right care.

This guide is designed to work with different types of at-home tests. It includes a framework that can be used for specific tests, like COVID-19 tests.  It also explains how to use FHIR to send the results securely. 

---

# ihe-sdc-ecc-on-fhir.md

This implementation guide focuses on improving the way cancer information is collected and shared. It leverages the "Integrating the Healthcare Enterprise Structured Data Capture" (IHE SDC) standard, which provides a consistent format for capturing cancer data from various sources. By using this standard, healthcare providers can easily collect and send information in a way that computers can understand. 

This guide provides a way to convert data captured with IHE SDC forms into FHIR (Fast Healthcare Interoperability Resources) messages. This conversion makes it easier to share information with other systems, such as electronic health records and cancer registries. This improved sharing can support public health reporting, quality measurement, and clinical guideline evaluation. It can also help to automatically fill out future forms, making the process more efficient for patients and providers. 

---

# imaging-service-request-ig.md

This implementation guide (IG) helps healthcare systems better manage medical imaging orders. It focuses on sharing information about imaging exams between the system that creates the order (like a doctor's office) and the system that schedules and performs the exam (like a hospital radiology department). 

The IG defines how to represent key details about the patient, the reason for the exam, and the specific imaging procedures requested using the FHIR standard, a common way to exchange healthcare data. It also maps this FHIR information to the older DICOM standard still used by many imaging devices. 

This mapping enables better communication between newer and older systems, helping to ensure that imaging exams are scheduled and performed correctly. However, it does not cover the entire imaging order process and is limited to specific parts of the workflow. 

---

# livd.md

This implementation guide helps standardize how laboratories map their test results to a common set of codes called LOINC. 

Currently, medical device manufacturers use their own codes for tests and results. Laboratories also have their own codes for tests. This makes it hard to share and analyze results across different systems. This guide defines a standard format for manufacturers to suggest LOINC codes for their tests. This helps laboratories map their own codes to LOINC more easily and consistently.

The guide also provides a way to map non-quantitative results, like "positive" or "negative," to LOINC or SNOMED codes. This further improves data sharing and analysis. The goal is to make it easier for healthcare providers to understand and use lab results from different sources. 

---

# nhsn-dqm.md

This guide defines standards for submitting healthcare safety data to the Centers for Disease Control and Prevention (CDC)'s National Healthcare Safety Network (NHSN). It uses a modern approach with digital quality measures (dQMs) to improve data quality and speed up reporting. 

The guide outlines how facilities can electronically send data to the NHSN. It includes examples of how to report data for acute care hospitals and hospital bed capacity.  Acute care hospital reporting covers areas like infection rates and blood sugar control. Bed capacity reporting allows hospitals to share real-time information on bed availability, especially during emergencies. 

This guide helps software developers create systems that can send these types of data to the NHSN in a standardized way. It's part of a larger effort to modernize public health reporting and make it more efficient. 

---

# PDDI-CDS.md

This implementation guide focuses on improving the way healthcare providers receive alerts about potential drug-drug interactions (PDDIs). It uses a newer technology called FHIR (Fast Healthcare Interoperability Resources) to make these alerts more helpful and relevant to individual patients. 

The guide suggests ways to provide alerts earlier in the process of ordering medications, giving doctors more time to make informed decisions. It also encourages the use of patient-specific information, such as age, medical history, and other medications they are taking, to make the alerts more accurate and useful. 

The goal is to create a system where alerts are not just warnings but also provide clear recommendations for healthcare providers. This includes suggesting alternative medications or additional tests, ultimately leading to safer and more effective patient care. 

---

# personal-health-record-format-ig.md

This implementation guide helps developers create personal health record (PHR) apps that allow patients to store and manage their own health information. It uses the FHIR standard, a widely recognized way to represent health data, ensuring the app can exchange information with other health systems. The guide provides a model for organizing different types of health data, such as allergies, medications, and test results. It also offers solutions for storing large amounts of data and keeping that data secure using encryption. The goal is to empower patients to control their health information and easily share it with doctors or other healthcare providers. 

---

# phd.md

This implementation guide explains how to represent information from personal health devices, like glucose meters and blood pressure cuffs, using the FHIR standard. This allows health data from these devices to be uploaded to electronic medical records and other health information systems. 

The guide focuses on devices that communicate electronically and can provide reliable time stamps for measurements.  It explains how to map data from the device, including the readings and information about the device itself, into FHIR resources. It also includes details about how to handle different types of measurements, like single numbers, multiple numbers, codes, and waveforms. 

This guide is for developers who build systems that collect data from personal health devices and those who build systems that use this data. It ensures that health information from these devices can be shared and used in a consistent way across different systems. 

---

# phenomics-exchange-ig.md

This implementation guide (IG) helps healthcare providers share patient information about rare diseases. It defines how to use a standard format called FHIR to represent a patient's signs, symptoms, diagnoses, and genetic testing results. This information is packaged into a "Phenopacket" which can be used for diagnosis, research, and sharing between different healthcare systems. 

The IG focuses on rare diseases and uses specific codes and terms to describe a patient's condition. It also explains how to represent information about a patient's medical history, including treatments and the results of laboratory tests. 

By using this IG, healthcare providers can more easily share information about rare diseases, which can help improve diagnosis and treatment. This can ultimately benefit patients by helping them receive the best possible care. 

---

# physical-activity.md

This guide helps healthcare systems exchange information about physical activity. It defines how to share data like exercise prescriptions, patient goals, and progress reports using a standard format called FHIR (Fast Healthcare Interoperability Resources). 

This allows different apps and systems, like those used by patients, doctors, and fitness trainers, to work together. For example, a doctor can send an exercise plan directly to a patient's fitness tracker app. The app can then send data back to the doctor showing the patient's progress. 

The guide includes ways to share information about different types of physical activity, such as running, weight training, and group classes. It also covers how to track important measures like heart rate, calories burned, and steps taken. This helps healthcare providers and patients work together to create and manage personalized fitness plans. 

---

# ReportIIITraveler-ig.md

This guide helps healthcare providers share information about ill travelers more easily. When a traveler is sick with a contagious disease, it's important to quickly let others know so they can take steps to protect themselves. Currently, this process can be slow and difficult because everyone uses different systems.

This guide creates a standard way to share information about the traveler, their flights, their symptoms, and lab results. It uses a technology called FHIR, which allows different computer systems to talk to each other. By using this guide, everyone can understand the information, even if they use different systems.  

This will help public health officials respond faster and more effectively to protect the health of the public. The guide helps healthcare providers share information about the traveler, their flights, their symptoms, and lab results. It uses a technology called FHIR, which allows different computer systems to talk to each other. By using this guide, everyone can understand the information, even if they use different systems.  This will help public health officials respond faster and more effectively to protect the health of the public.
---

# rtls-ig.md

This guide explains how to connect a Real-Time Location System (RTLS) with other healthcare systems.  An RTLS tracks the location of items or people using tags. This guide focuses on sharing location data between the RTLS and systems like electronic health records. 

It describes how a system can ask the RTLS to start or stop sending updates for a specific tag.  It also explains how the RTLS sends out updates when a tag's location changes.  

The guide uses a standard healthcare data format called FHIR (Fast Healthcare Interoperability Resources) to ensure that different systems can understand the messages. This allows healthcare providers to know the location of equipment or patients in real-time, which can improve efficiency and patient care. 

---

# sdc.md

This implementation guide focuses on using questionnaires to collect health information. It defines how to create questionnaires, pre-populate them with existing patient data, and process the answers. This helps healthcare providers gather information in a standardized way, reducing errors and making it easier to share data. 

The guide also addresses how questionnaires can be used in more complex scenarios. For example, questionnaires can adapt based on previous answers, making them more efficient. It also allows for extracting data from questionnaires and converting it into standard healthcare resources like observations or conditions. This makes the collected data useful for a variety of purposes, such as clinical care, research, and public health reporting. 

While the guide aims to improve data collection, it acknowledges that some complex forms may be difficult to automate completely. Human review is still important to ensure accuracy and completeness of the information. 

---

# smart-app-launch.md

This guide helps apps connect to health records in a safe and standard way. It explains how apps can get permission to see your health data and how they can launch from your patient portal. 

Apps can ask for different levels of access, like seeing your allergies or all your medical information. The guide also lets apps get information about you and your doctor.  Apps can even work when you are not online, using refresh tokens to keep your data accessible. 

The guide makes it easier for different health systems to share data and helps apps work smoothly with patient portals. Overall, it improves how apps can access and use health information while keeping your data safe. 

---

# smart-health-cards-and-links.md

This guide defines standards for SMART Health Cards and SMART Health Links. These tools give patients secure and verifiable ways to access and share their health information digitally. 

SMART Health Cards are like digital versions of paper medical records, such as vaccination records or test results. They are tamper-proof and can be stored in a mobile app or printed on paper with a QR code for easy sharing and verification. 

SMART Health Links provide a way to share larger amounts of health information, such as a patient summary or insurance card details. They offer additional privacy options, like time-limited access and PIN protection, and can be shared as a link or QR code. 

These standards aim to empower patients with more control over their health data, making it easier to share information with healthcare providers, schools, or anyone else who needs to see it. 

---

# smart-web-messaging.md

This guide focuses on improving communication between health apps and electronic health records (EHRs).  When apps are launched within an EHR, they often appear as a small window within the larger EHR interface.  This guide provides ways for apps to send information to the EHR, such as new orders or updates to a patient's chart.  It also lets apps ask the EHR to do things, like automatically navigate to a specific section of the patient's chart or close the app window.  

This is achieved through a technology called SMART Web Messaging, which allows secure communication between the app and the EHR.  It's like a messaging system that helps the app and EHR work together seamlessly.  This can lead to a smoother experience for healthcare providers and potentially faster updates to patient information.  However, this approach only works when the app is a web application running inside the EHR, and it doesn't cover all types of data synchronization.  

---

# smp-ig.md

The Standardized Medication Profile (SMP) Implementation Guide helps healthcare providers safely share patient medication information. This is especially important when a patient moves between different care settings, like from a hospital to a nursing home.  

The guide defines how to use the FHIR standard to exchange medication details, including prescriptions and non-prescription drugs. It ensures that important information, like drug names, dosage, and reasons for taking each medication, is accurately shared.  

Using SMP helps reduce medication errors and supports better care coordination during transitions. It enables healthcare providers to quickly access a patient's complete medication history, improving patient safety and treatment decisions. The SMP does not define the medication reconciliation process itself, as that is defined by professional practices. It only seeks to ensure that the necessary information is available. Also, it does not cover the exchange of other health information like allergies or functional abilities.

---

# standard-patient-health-record-ig.md

This guide helps developers create apps that manage patient health records. It uses a standard format called FHIR (Fast Healthcare Interoperability Resources) to make sure the information can be easily understood and shared between different healthcare systems. The guide focuses on how patients can store and share their complete medical history, even if some of it is on paper or older storage devices. It explains how to organize this information, add new data from doctor's visits or personal health trackers, and securely share it with healthcare providers or researchers. The goal is to give patients more control over their health information and make it easier for them to share it with those who need it. 

---

# termchangeset-ig.md

This implementation guide (IG) defines how to share updates to medical terminologies.  Medical terminologies are sets of codes and terms used to represent medical concepts, like diseases, procedures, and medications.  

Healthcare systems need a way to share updates to these terminologies so that everyone is using the same information. This IG uses the FHIR standard to create "change sets". Change sets are packages of updates that can be easily shared and applied to existing terminologies.  

The IG provides specific instructions for creating change sets for common medical terminologies like LOINC and SNOMED CT. It also provides examples to help users understand how to use the change sets.  This helps ensure that healthcare systems can stay up-to-date with the latest terminology changes, which can improve patient safety and care quality. 

---

# terminology-fundamentals-ig.md

This guide explains the basic ideas behind medical terminologies used in healthcare data systems. It focuses on "Value Sets," which are lists of medical terms or codes used for specific purposes.  The guide explains how Value Sets are defined, organized, and used in different healthcare data standards. 

It covers how to ensure Value Sets are accurate and consistent as medical terminologies change over time. This helps healthcare providers and systems exchange information reliably. 

The guide also touches on unique identifiers for medical terms, which are crucial for making sure everyone is talking about the same thing. It explains how these identifiers are managed and registered to avoid confusion. This guide is a resource for anyone who wants to understand the basics of how medical terms are used in digital health records and systems. 

---

# us-behavioral-health-profiles.md

This guide explains how to use a new set of standards for sharing behavioral health information. Called USCDI+ Behavioral Health, it builds on existing healthcare data standards (USCDI) and uses a common format for health information (FHIR). 

This guide helps healthcare providers share important details about patients with mental health and substance use disorders. It covers common assessments, like those for depression or anxiety, and ways to record patient goals and preferences. It also includes information about social factors that can affect health, like housing or food access. 

The guide aims to make it easier for different healthcare systems to talk to each other. This can help providers give better care and improve patient health. However, it is limited by the challenges of standardizing certain health assessments and managing different types of clinical documents. 

---

# US-Core.md

The US Core Implementation Guide defines a standard way to exchange healthcare information in the United States using FHIR (Fast Healthcare Interoperability Resources). It sets minimum requirements for sharing common types of patient data, like medical history, medications, allergies, lab results, and clinical notes. 

This guide helps ensure that different health systems and apps can understand and use this information. It also clarifies how to represent sensitive information, such as data that is missing or has been removed for privacy reasons.  

The US Core Implementation Guide is updated yearly to reflect changes in federal regulations and input from the healthcare community. It serves as a foundation for other implementation guides that address more specific healthcare data sharing needs. 

---

# us-odh.md

This guide defines how to share a patient's job information electronically between healthcare systems using the Fast Healthcare Interoperability Resources (FHIR) standard. It covers details like job title, industry, work schedule, and potential hazards. Sharing this data can help doctors make better decisions about patient care, especially for those with chronic conditions or work-related illnesses. It's also useful for public health reporting and research.

This guide focuses on information needed for healthcare, not for billing or administrative tasks. It doesn't include everything about a person's job, like salary. While designed for the US, it tries to be useful internationally. Some parts, like job titles, are specific to the US, while others are more general. The guide is meant to be used as part of a larger system and not on its own.


---

# UTG.md

This set of files helps create a standard language for healthcare information. It defines common terms for things like medical conditions, procedures, and medications. By having everyone use the same terms, it's easier to share and understand health information between different computer systems, like those used by hospitals, doctors, and pharmacies. This can help improve patient care by making sure everyone is on the same page. The goal is to make health information easier to understand and use, no matter where it comes from.

---

# uv-dx-pq.md

This guide helps improve how information about the quality of medicines is shared. It creates a common, structured way to exchange data between drug companies, labs, and manufacturers. This data includes details about how a medicine is made, its ingredients, packaging, and how it's tested for safety and effectiveness over time. 

The guide focuses on sharing information within the industry. It does not cover how data is submitted to government agencies like the FDA for drug approvals. Companies are still expected to follow the rules of those agencies when submitting data. 

Using a standard format like this can make it faster and easier to share quality information. This can lead to quicker development of new medicines, better manufacturing practices, and safer, more reliable products for patients. 

---

# uv-lab-rep-ig.md

This guide defines a universal standard for sharing laboratory reports, promoting consistency across different healthcare systems. It allows for flexible implementation, accommodating regions that treat lab reports as legal documents and those that handle them as simple result collections. 

The guide specifies how to structure lab reports using FHIR resources like DiagnosticReport and Observation. It covers common scenarios like complete and partial reports, updates, cancellations, and errors. The guide also addresses the representation of complex reports, including panels, reflex tests, and microbiology results. 

By standardizing lab report data, this guide aims to improve information exchange between laboratories, healthcare providers, and patients, ultimately contributing to better healthcare coordination and decision-making. 

---

# uv-pocd.md

This guide explains how to use FHIR (Fast Healthcare Interoperability Resources) to share information from medical devices used in hospitals and clinics. It focuses on devices that measure things like heart rate and blood pressure, and it helps make sure this data is shared accurately and completely.

The guide helps solve the problem of different devices and systems not being able to "talk" to each other. It provides a standard way to represent the device data, including details about the device itself and how the measurements were taken.

This is important for several reasons. Healthcare providers can use the data to make better decisions about patient care. Researchers can use it to study how well treatments work. And clinical engineers can use it to track and maintain medical equipment. The guide also explains how to map data from older systems that use HL7 v2, a different standard.

This guide does not cover all medical devices. It does not include imaging devices or devices used at home by patients. Future versions will address alerts from devices.

---

# v2ig.md

This implementation guide (IG) helps healthcare systems exchange information using an updated version of a common standard called HL7 v2.  It defines how certain data types in HL7 v2 relate to a newer standard called FHIR.  By connecting these two standards, the IG makes it easier for older systems to share data with newer systems.

The guide covers how to represent common data like dates, numbers, and text using both standards.  It also explains where the standards are similar and where they differ.  This helps software developers create systems that can understand and use information from different sources.

While the IG aims to improve data exchange, it acknowledges that not all HL7 v2 data types perfectly match FHIR data types.  This means that some information might need to be converted or interpreted differently when moving between systems.  Understanding these limitations is important for developers and healthcare providers using the IG. 

---

# v2-to-fhir.md

This implementation guide helps healthcare providers exchange patient information between computer systems that use different standards. It focuses on converting healthcare messages from the older HL7 Version 2 (v2) standard to the newer HL7 FHIR standard. 

The guide provides detailed instructions on how to map, or translate, specific parts of v2 messages into equivalent parts of FHIR messages. This includes mapping patient demographics, allergies, orders, results, and other important clinical information. It also addresses special cases where data might be lost or require extra steps to convert properly.

While this guide offers a standardized approach, it recognizes that healthcare systems may have unique needs and local variations in how they use these standards. Therefore, it encourages implementers to review the mappings carefully and make adjustments as needed to fit their specific situations. 

---

# VhDir.md

The Validated Healthcare Directory Implementation Guide (VHDir IG) improves the quality of healthcare provider data by establishing a central source of validated information. This central source, called a Validated Healthcare Directory (VHDir), allows healthcare providers, organizations, and payers to submit information about themselves for validation against trusted sources like state licensing boards. 

The VHDir IG defines a standard way to exchange this validated information using FHIR resources. This makes it easier for different healthcare systems to share accurate provider data, which can support tasks like finding a doctor, verifying insurance coverage, and coordinating care.  

While the VHDir IG was initially envisioned as a national resource, it can also be used for smaller, local directories. It provides a strong foundation for standardizing healthcare provider data, ultimately improving the efficiency and reliability of healthcare operations. 

---

# vr-common-library.md

This guide, the Vital Records Common Profiles Library, helps different computer systems share vital records information. It defines how common pieces of information, like a person's address, race, ethnicity, and education level, should be represented digitally using the FHIR standard. This helps ensure that vital records offices can send birth, death, and fetal death records to the National Center for Health Statistics (NCHS) in a consistent way. 

The guide also defines common profiles for people involved in vital records, like the child, mother, father, or practitioner. This makes it easier to share information about these individuals between different systems.  The guide focuses on making sure that data can be accurately transferred between the old format for vital records (IJE) and the new FHIR format. 

---

# vrdr.md

This implementation guide (IG) defines how to use the FHIR standard to exchange electronic death records. It supports the transfer of death records between state vital records offices and the Centers for Disease Control and Prevention (CDC). This digital approach aims to modernize the reporting process, making it faster, more accurate, and less costly. 

The IG covers all the data elements found on the U.S. Standard Certificate of Death, including decedent demographics, cause of death, and details about the death investigation. It also includes information about the funeral home and the person who certified the death. By standardizing this information, the IG facilitates seamless data exchange between different computer systems.  This implementation guide is a key step in improving how we collect and use mortality data in the United States. 

---

# vulcan-rwd.md

This guide helps researchers access and use real-world data from electronic health records. It focuses on finding groups of patients who fit specific criteria (like age, diagnosis, or treatment) and then gathering their health information.  This data can be used to study how well treatments work or to find patterns in diseases.

The guide defines what information is important to collect, like patient demographics, medications, diagnoses, and lab results. It also explains how to search for patients and retrieve their data in a standard way, which makes it easier to share and analyze information from different hospitals.

Currently, this guide is limited to looking back at existing patient data, not data from ongoing studies. It also focuses on information from electronic health records and not other sources like insurance companies. Future versions of the guide may address these areas. 

---

# Vulcan-schedule-ig.md

This Implementation Guide (IG) helps define how clinical research studies are planned and carried out. It uses a common healthcare data standard called FHIR to describe the steps involved in a research study. This includes things like patient visits, what happens at each visit, and when these activities should occur. 

The IG focuses on making it easier for different computer systems used in healthcare, like electronic health records, to understand and share information about research studies. It also defines ways to handle common situations in research, such as allowing some flexibility in visit schedules or managing investigational product (like new drugs) administration. 

However, this IG doesn't cover every aspect of clinical research. For example, it doesn't address how to handle unplanned events in a study or how to manage data from medical devices. The guide is designed to be a starting point for using FHIR in research, and it is expected to be improved over time to handle more complex situations. 
