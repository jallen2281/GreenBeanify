## GreenBeanify

### Description
GreenBeanify is an Express-based web service that interfaces (via firstbuild's Green Bean) to your late model GE appliance and exposes all status and control functionality available in the gea-sdk via several different web services. This extensibility enables your appliance to join the Internet of Things (Iot) and will allow you to locally or remotely interface your appliance with other network-attached home services such as home automation and security systems, energy monitoring systems, smart devices and whatever else you can imagine. Since the Green Bean requires USB connectivity to the machine running GreenBeanify, it is recommended that you use a Raspberry Pi or similar SBC with Ethernet or WiFi connectivity to run this application. 


### Example use cases
- Many homes have seperate laundry areas apart from the main living space, so when the end of cycle notification sounds on a laundry pair it is often inaudible to the house occupants. Using GreenBeanify and a Wifi-equipped Raspberry Pi, the laundry pair can send notification messages to a home automation system or external SaaS provider that in turn sends "The load in the dryer is done. Please empty!" Pushover/Notify My Android (NMA) notifications to the house occupant's iOS/Android devices. Notifications can be sent periodically until the dryer's door is opened.


### Status
- Alpha-level application. Use at your own risk. YMMV
- Currently only supports gea-plugin-laundry devices.
- The subscription/POST functionality has not been implimented yet.
- Currently only supports read functions. 

### Installation instructions
- Install Node.js
- Install npm
- npm install brudy/GreenBeanify
- cd into your GreenBeanify directory
- npm start

### History
- Based on JJ's Remote Dryer from the hackathon (https://github.com/jianguoj/BeanStalk).
- v0.0.1 - First version.


### Design Goals
- Supports polling and subscription-based updates
- Multiple data formatting options (JSON, raw, etc)
- Easily extensible
- Portable


### Planned Implimentation

Provides two methods of getting/setting the appliance state:
- HTTP GET requests that will read or set a value on the device and return the result
- HTTP POST with JSON formatted data to given URL for subscription updates

The HTTP GET request paths correspond with the gea-plugin-laundry's API call.
/machineStatus
/machineSubCycle
/endOfCycle
/cycleCount
/dryerServiceErrorCodes
/dsmOverridesAllowed
/maximumWaterTemperature
/timeRemainingInSeconds
/tankStatus
/tankSelected
/cycleSelected
/washerUserInterfaceServiceErrorCodes
/washerInverterServiceErrorCodes
/washerMainControlServiceErrorCodes
/operatingMode
/dryerCriticalResponseEnabled
/delayTimeRemainingInMinutes


Subscribes to selected set of events and sends callbacks to given URL with JSON in the POST body with details on what has changed.

Example of JSON:
```json
{
	“GBUpdate”:{
		“id”:“aaabbbccdddd”,
		“created_at”:"2014-10-01T21:23:41-08:00”,
		“status”:“changed”,
		“type”:“laundry.machineStatus”, 
		“interface”:“HID1”,
		“modelNumber”:“GFWR4805F0MC”,
		“serialNumber”:“ZA222222G”,
		“softwareVersion”:“AA.BB.CC.DD”,
		“data”:{
			“text”:“Idle”,
			“numeric”:0
		}
	}
}
```

### References
- http://market.firstbuild.com/products/greenbean
- https://github.com/GEMakers/gea-plugin-laundry
- http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/
- http://tech.pro/tutorial/1091/posting-json-data-with-nodejs


