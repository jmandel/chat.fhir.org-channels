**TL;DR:** This guide helps apps securely connect to health records systems and get information about patients and healthcare organizations.

The SMART App Launch Implementation Guide defines a set of rules that allow apps to connect to systems that store health records. It uses a system called OAuth 2.0 to make sure this connection is secure and protects patient privacy. The guide defines two ways apps can get permission to access health data:

* **SMART App Launch:** This is for apps that patients or healthcare providers use directly. The app can launch from within the health records system, or it can launch on its own and then connect to the records system.
* **SMART Backend Services:** This is for apps that run in the background without a user directly interacting with them. These apps are pre-authorized to access specific data.

The guide also defines how apps can prove they are allowed to access the data. There are two ways to do this:

* **Asymmetric Authentication:** The app uses a digital key pair to prove its identity.
* **Symmetric Authentication:** The app uses a secret code that it shares with the health records system.

The guide also helps apps get information about the patient or healthcare provider using the app. It also allows apps to get information about the healthcare organization, like its name, logo, and how users can access their records. This makes it easier for apps to help patients find and connect to their health information. 
