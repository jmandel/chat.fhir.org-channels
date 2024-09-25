**TL;DR:** This guide helps computer systems used by healthcare providers and REMS program administrators exchange information electronically when a patient needs a medication with a special safety program.

The Medication REMS FHIR Implementation Guide (IG) aims to improve how healthcare providers and REMS administrators share information. A REMS (Risk Evaluation and Mitigation Strategy) is a safety program required by the FDA for certain medications with serious risks.  These programs help ensure patients use these medications safely.

This guide focuses on what happens when a provider prescribes a REMS medication. It describes how the provider's computer system (like an electronic health record or EHR) can talk to the REMS administrator's system. This helps providers learn about REMS requirements, enroll patients in the program, and share important information with the REMS administrator.

The guide uses two main approaches:
1. It lets the provider's system automatically connect with the REMS administrator's system during the normal prescribing process. This can provide alerts, instructions, or even launch a special application to help with REMS tasks.
2. It also allows providers to use a separate application from the REMS administrator to access and share patient information.

The guide aims to make REMS programs easier for everyone involved. By automating information exchange, it can reduce manual work, help get medications to patients faster, and improve patient safety.

This first version of the guide mainly focuses on the needs of healthcare providers. Future versions may include ways to support other participants in the REMS process, such as pharmacists and patients. The guide also aims to make it easier for computer systems to work with many different REMS programs and medications.
