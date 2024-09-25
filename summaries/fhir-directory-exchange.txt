**TL;DR:** This guide defines a standard way for healthcare directories to share information about providers, organizations, and insurance plans using FHIR.

The National Directory Implementation Guide (National Directory IG) defines a standardized way for healthcare directories to use FHIR to exchange information. It focuses on enabling the sharing of data about healthcare providers, organizations like hospitals and clinics, and insurance plans.

The guide addresses the need for accurate and up-to-date provider information in the healthcare ecosystem. It aims to reduce the burden on providers who often have to submit the same information to multiple directories. Instead, providers could attest their information to a central directory that meets the National Directory IG's standards. From there, other directories, such as those maintained by insurance companies or healthcare providers, could access this validated information.

The guide specifies how to represent key information, such as provider demographics, locations, specialties, insurance networks, and electronic endpoints for health information exchange. It also includes ways to describe restrictions on data sharing and the processes used to verify information accuracy.

While initially envisioned as a national standard, the guide's flexible design allows for implementation by smaller directories as well. It does not mandate a specific technical architecture but focuses on ensuring data can be exchanged in a consistent and interoperable way using FHIR, regardless of the directory's size or purpose.
