# ReportOfIllTraveler: Analysis

## 1. Objectives 

This implementation guide aims to create a standardized way for public health officials to share information about sick travelers. This will help them quickly identify and notify people who might have been exposed to contagious diseases during air travel. The goal is to make it easier and faster to track and control the spread of diseases.

## 2. Previous Approaches and Limitations

Previously, information about sick travelers was shared between different health departments manually and without a standard format. This made the process slow and difficult to scale, especially during emergencies like the COVID-19 pandemic. The lack of standardization created bottlenecks and hindered timely responses to potential outbreaks.

## 3. Introduced Approaches and Technical Approach

This IG introduces a standardized approach using FHIR (Fast Healthcare Interoperability Resources), a modern standard for exchanging healthcare information electronically. It defines specific FHIR profiles (like Traveler, IllTravelerBundle, and ReportOfIllTraveler) and extensions (like DateTransferedToStation and PortHealthStation) to structure information about the sick traveler, their flight details, and the potential disease. It also leverages existing standards like US Core profiles and Electronic Case Reporting (eCR) where applicable.

## 4. Scope Decisions, Design Choices, and Contextual Factors

* **Focus on Air Travel:** The IG primarily focuses on data exchange related to air travel and contact tracing for infectious diseases spread during flights.
* **Collaboration and Consensus:** The IG emphasizes collaboration with various stakeholders, including public health experts at different levels (state, local, territorial), data system vendors, and CDC experts, to ensure the solution meets real-world needs.
* **Integration with CDC Front Door:** The IG is designed to be compatible with the CDC Front Door, a centralized platform for public health data exchange, to streamline data submission and access.
* **Phased Approach:** The project includes developing a roadmap to address identified pain points in data exchange and provide recommendations for future improvements in a phased manner.
* **Use of Value Sets and Code Systems:** The IG establishes specific value sets and code systems for key data elements like reportable diseases, symptoms, quarantine stations, and airport codes to ensure consistency and interoperability.
* **Support for Simple and Detailed Reports:** The IG includes profiles for both simple and detailed reports of ill travelers, allowing flexibility based on the specific needs of different situations.
* **Security Considerations:** The IG acknowledges the importance of data security and aligns with general FHIR security guidelines, emphasizing the need for secure data transfer and access control.

