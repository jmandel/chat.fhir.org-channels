**TL;DR:** This guide helps developers build apps that can share at-home test results with healthcare providers and public health agencies in a standardized way.

The At-Home In-Vitro Test Implementation Guide defines a common way to share the results of at-home tests, like those for COVID-19, using a technology called FHIR. This guide focuses on sharing single test results and includes information about the patient, the test itself, and any supporting details like symptoms.

Currently, most public health departments can only receive test results in an older format called HL7 V2. This guide helps bridge that gap by allowing app developers to collect information in the FHIR format and then translate it to HL7 V2 for public health reporting. 

The guide also provides a framework for sharing at-home test results for other conditions beyond COVID-19. Developers can use this framework to create specific ways to share information for different types of tests, making it easier for healthcare providers and public health agencies to receive and use at-home test results. 
