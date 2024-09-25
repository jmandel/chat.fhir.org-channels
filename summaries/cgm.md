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
