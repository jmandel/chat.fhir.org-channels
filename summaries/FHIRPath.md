**TL;DR:** This guide defines FHIRPath, a language for navigating and extracting information from health data. 

The FHIRPath Implementation Guide (IG) defines a language, FHIRPath, for working with health data that is structured according to the FHIR standard.  FHIRPath lets users search through health records, pick out specific pieces of information, and perform calculations on that information. It can be used in a variety of healthcare applications, such as validating data, finding patients who meet certain criteria, and making decisions about patient care. 

FHIRPath is designed to be simple and easy to use, even for people who are not programmers. It works by using "paths" to navigate through the data, similar to how you might use a file path to find a file on your computer. For example, a FHIRPath expression to find a patient's name might look like this: `Patient.name`.

This guide also includes a set of tests that can be used to check if FHIRPath implementations are working correctly.  These tests cover a wide range of FHIRPath features and are designed to help ensure that different systems can share health information reliably. 
