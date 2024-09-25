**TL;DR:** This guide explains how to share real-time location data of medical devices and patients within a hospital using a standard format.

The Real-Time Location Services (RTLS) Integration Guide describes how healthcare systems can share location information. It focuses on sharing the location of medical devices or patients that are tracked by an RTLS with other systems in a hospital. This allows different systems to know where things are, which can be helpful for managing equipment or finding patients quickly.

The guide uses the FHIR standard, which is a common way to exchange healthcare information electronically. It describes how to send messages to tell the RTLS to start or stop sharing location updates for a specific tag. It also describes the type of message that is sent when the location of a tag is updated.

The guide does not say how often location updates should be sent or what should cause an update to be sent. This is left up to the specific RTLS being used. The main goal of the guide is to make sure that different systems can understand each other when they are sharing location information.

This can be helpful in many situations. For example, if a doctor needs a specific piece of equipment, they can use a system that integrates with the RTLS to find the nearest one. Or, if a nurse needs to find a patient quickly, they can use the RTLS to see their current location. By standardizing how this information is shared, the guide helps to improve efficiency and coordination in healthcare settings.
