## GreenBeanify

### Description
GreenBeanify is an Express-based web service that interfaces (via firstbuild's Green Bean) to your late model GE appliance and exposes all status and control functionality available in the gea-sdk via several different web services. This extensibility enables your appliance to join the Internet of Things (IoT) and will allow you to locally or remotely interface your appliance with other network-attached home services such as home automation and security systems, energy monitoring systems, smart devices and whatever else you can imagine. Since the Green Bean requires USB connectivity to the machine running GreenBeanify, it is recommended that you use a Raspberry Pi or similar SBC with Ethernet or WiFi connectivity to run this application. 


### Example use cases
- Many homes have seperate laundry areas apart from the main living space, so when the end of cycle notification sounds on a laundry pair it is often inaudible to the house occupants. Using GreenBeanify and a Wifi-equipped Raspberry Pi, the laundry pair can send notification messages to a home automation system or external SaaS provider that in turn sends "The load in the dryer is done. Please empty!" Pushover/Notify My Android (NMA) notifications to the house occupant's iOS/Android devices. Notifications can be sent periodically until the dryer's door is opened.

<img src="http://www.praecogito.com/photobucket/green-beanify-reference.jpg">

### Screen Shots
<img src="http://www.praecogito.com/photobucket/greenbeanify-main-screenshot-trimmed.png">
<img src="http://www.praecogito.com/photobucket/greenbeanify-laundry-screenshot-trimmed.png">

### Status
- Alpha-level application. Use at your own risk. YMMV
- Currently only supports gea-plugin-laundry devices.
- The subscription/POST functionality has been only partially implimented.
- Currently only supports read functions. 
- Does not properly handle multiple Green Bean devices connected to the same GreenBeanify instance

### Installation instructions
- Install Node.js
- Install npm
- *npm install brudy/GreenBeanify*
- cd into your GreenBeanify directory
- *npm start*

### History
- Based on Jianguo Jiang's Remote Dryer from the hackathon (https://github.com/jianguoj/BeanStalk).
- v0.0.1 - First version.
- v0.0.2 - Re-wrote update handling using subscriptions rather than reading the device each time. Added initial support for JSON POSTs on update.


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
- /laundry/machineStatus
- /laundry/machineSubCycle
- /laundry/endOfCycle
- /laundry/cycleCount
- /laundry/dryerServiceErrorCodes
- /laundry/dsmOverridesAllowed
- /laundry/maximumWaterTemperature
- /laundry/timeRemainingInSeconds
- /laundry/tankStatus
- /laundry/tankSelected
- /laundry/cycleSelected
- /laundry/washerUserInterfaceServiceErrorCodes
- /laundry/washerInverterServiceErrorCodes
- /laundry/washerMainControlServiceErrorCodes
- /laundry/operatingMode
- /laundry/dryerCriticalResponseEnabled
- /laundry/delayTimeRemainingInMinutes

- /laundry/ provides an index of all the above and their last updated values 

Subscribes to selected set of events and sends callbacks to given URL with JSON in the POST body with details on what has changed.

Example of JSON:
```json
{
	"GreenBeanify":{
		"id":"aaabbbccdddd",
		"created_at":"2014-10-01T21:23:41-08:00",
		"status":"changed",
		"messageType":"laundry.machineStatus", 
		"applianceAddress":36,
		"applianceType":"Clothes washer",
		"modelNumber":"GFWR4805F0MC",
		"serialNumber":"ZAxxxxxxG",
		"applianceVersion":"0.1.1.46.1.91.1.1.3",
		"softwareVersion":"AA.BB.CC.DD",
		"data":{
			"text":"Idle",
			"numeric":0
		}
	}
}
```

### References
- http://market.firstbuild.com/products/greenbean
- https://github.com/GEMakers/gea-plugin-laundry
- http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/
- http://tech.pro/tutorial/1091/posting-json-data-with-nodejs


