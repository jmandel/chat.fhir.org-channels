# MyPatient: Analysis

## 1. Objectives 

This Implementation Guide (IG) aims to improve how health and human services data is shared and used. Specifically, it focuses on making it easier to exchange information about people's social service needs, like housing or food assistance, alongside their healthcare data. The goal is to have a more complete picture of a person's well-being, which can lead to better, more coordinated care. 

## 2. Previous Approaches and Limitations

Previously, health and human services data were often kept separate, making it difficult to get a full understanding of a person's needs. There was a lack of common standards for how this data was structured and shared, especially in the human services sector. This made it hard for different systems and organizations to talk to each other. The HHS Data Strategy document highlights that while healthcare data exchange benefited from investments like the HITECH Act, similar efforts haven't been made for human services data.

## 3.  Approaches Introduced

This IG is trying to bridge this gap by leveraging the FHIR standard, which is already widely used in healthcare. FHIR provides a common language for exchanging healthcare information. This IG seems to be focused on extending FHIR to include data relevant to social services, creating a more holistic view of a person. This is indicated by the "MyPatient" profile, which likely builds upon the standard FHIR "Patient" resource to include additional information relevant to social services.

## 4. Important Context and Design Decisions

It's important to understand that this IG is part of a larger effort by the US Department of Health and Human Services (HHS) to improve data sharing and use across health and human services. They are working to develop new data standards and address gaps in existing ones, like those related to consent management and connecting people's family information.

The decision to build upon FHIR is significant because it leverages an existing, widely adopted standard, rather than creating something entirely new. This can help with adoption and interoperability. The development of "USCDI+" data standards mentioned in the HHS document is also relevant, as it indicates a broader effort to standardize data elements across health and human services.

It's also important to note that the IG acknowledges the challenges of applying FHIR in social service settings and aims to provide guidance and solutions for implementers facing these difficulties. 
