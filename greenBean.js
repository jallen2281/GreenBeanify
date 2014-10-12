var express = require('express');
var poster = require('./poster');
var router = express.Router();

//var greenBean = require('../greenBean').greenBean;
var greenBean = require("green-bean");

// this is where we will store the latest values
laundryVals = {
	machineStatus: "Unknown",
	machineSubCycle: "Unknown",
	endOfCycle: "Unknown",
	cycleCount: "Unknown",
	dryerServiceErrorCodes: "Unknown",
	maximumWaterTemperature: "Unknown",
	timeRemainingInSeconds: "Unknown",
	tankStatus: "Unknown",
	tankSelected: "Unknown",
	cycleSelected: "Unknown",
	washerUserInterfaceServiceErrorCodes: "Unknown",
	washerInverterServiceErrorCodes: "Unknown",
	washerMainControlServiceErrorCodes: "Unknown",
	operatingMode: "Unknown",
	dryerCriticalResponseEnabled: "Unknown",
	delayTimeRemainingInMinutes: "Unknown"
};

applianceVals = {
	address: "Unknown",
	version: "Unknown",
	type: "Unknown",
	modelNumber: "Unknown",
	serialNumber: "Unknown"
}

// Get the initial value
function delayTimeRemainingInMinutes_setval(value) {
	console.log("delay time remaining is:", value);
	laundryVals.delayTimeRemainingInMinutes = value.toString();
	if (config.post.laundry.delayTimeRemainingInMinutesi && config.post.enabled) {
		poster(laundryVals.delayTimeRemainingInMinutes);
	}
}

function dryerCriticalResponseEnabled_setval(value) {
	console.log("dryer critical response enabled is:", value);
	var stat = "Critical response disabled";
	switch (value) {
		case 0:
			stat = "Critical response disabled";
			break;
		case 1:
			stat = "Critical response enabled";
			break;
	}
	laundryVals.dryerCriticalResponseEnabled = stat;
	if (config.post.laundry.dryerCriticalResponseEnabled && config.post.enabled) {
		poster(laundryVals.dryerCriticalResponseEnabled);
	}
}

function operatingMode_setval(value) {
	console.log("operating mode is:", value);
	var stat = "Consumer mode";
	switch (value) {
		case 0:
			stat = "Consumer mode";
			break;
		case 1:
			stat = "Service mode";
			break;
		case 2:
			stat = "Factory mode";
			break;
		case 3:
			stat = "Evaluation mode";
			break;
		case 4:
			stat = "Rapid delay mode";
			break;
		case 5:
			stat = "Functional control test mode";
			break;
		case 6:
			stat = "Model plug entry mode";
			break;
		case 7:
			stat = "Demo mode";
			break;
		case 8:
			stat = "Consumer error mode";
			break;
		case 9:
			stat = "Floor type selection mode";
			break;
	}
	laundryVals.operatingMode = stat;
	if (config.post.laundry.operatingMode && config.post.enabled) {
		poster(laundryVals.operatingMode);
	}
}

// We need to decode the bitfield
function washerMainControlServiceErrorCodes_setval(value) {
	console.log("washer main control service error codes are:", value);
	laundryVals.washerMainControlServiceErrorCodes = value.toString();
	if (config.post.laundry.washerMainControlServiceErrorCodes && config.post.enabled) {
		poster(laundryVals.washerMainControlServiceErrorCodes);
	}
}

// We need to decode the bitfield
function washerInverterServiceErrorCodes_setval(value) {
	console.log("washer inverter service error codes are:", value);
	laundryVals.washerInverterServiceErrorCodes = value.toString();
	if (config.post.laundry.washerInverterServiceErrorCodes && config.post.enabled) {
		poster(laundryVals.washerInverterServiceErrorCodes);
	}
}

// We need to decode the bitfield
function washerUserInterfaceServiceErrorCodes_setval(value) {
	console.log("washer user interface error codes are:", value);
	laundryVals.washerUserInterfaceServiceErrorCodes = value.toString();
	if (config.post.laundry.washerUserInterfaceServiceErrorCodes && config.post.enabled) {
		poster(laundryVals.washerUserInterfaceServiceErrorCodes);
	}
}

function cycleSelected_setval(value) {
	console.log("selected cycle is:", value);
	var stat = "Not defined";
	switch (value) {
		case 0:
			stat = "Not defined";
			break;
		case 1:
			stat = "Basket clean";
			break;
		case 2:
			stat = "Drain and spin";
			break;
		case 3:
			stat = "Quick rinse";
			break;
		case 4:
			stat = "Bunky items";
			break;
		case 5:
			stat = "Sanitize";
			break;
		case 6:
			stat = "Towels or sheets";
			break;
		case 7:
			stat = "Steam refresh";
			break;
		case 8:
			stat = "Normal or mixed load";
			break;
		case 9:
			stat = "Whites";
			break;
		case 10:
			stat = "Dark colors";
			break;
		case 11:
			stat = "Jeans";
			break;
		case 12:
			stat = "Hand wash";
			break;
		case 13:
			stat = "Delicates";
			break;
		case 14:
			stat = "Speed wash";
			break;
		case 15:
			stat = "Heavy duty";
			break;
		case 16:
			stat = "Allergen";
			break;
		case 17:
			stat = "Power clean";
			break;
		case 18:
			stat = "Rinse and spin";
			break;
		case 19:
			stat = "Single item wash";
			break;
		case 128:
			stat = "Cottons";
			break;
		case 129:
			stat = "Easy care";
			break;
		case 130:
			stat = "Active wear";
			break;
		case 131:
			stat = "Timed dry";
			break;
		case 132:
			stat = "Dewrinkle";
			break;
		case 133:
			stat = "Quick air fluff";
			break;
		case 134:
			stat = "Steam refresh";
			break;
		case 135:
			stat = "Steam dewrinkle";
			break;
		case 136:
			stat = "Speed dry";
			break;
		case 137:
			stat = "Mixed";
			break;
		case 138:
			stat = "Quick dry";
			break;
		case 139:
			stat = "Casuals";
			break;
		case 140:
			stat = "Warm up";
			break;
	}
	laundryVals.cycleSelected = stat;
	if (config.post.laundry.cycleSelected && config.post.enabled) {
		poster(laundryVals.cycleSelected);
	}
}

// Need to test this to see how to parse tankType, tankEnabled
function tankSelected_setval(value) {
	console.log("selected tank is:", value);
	laundryVals.tankSelected = value.toString();
	if (config.post.laundry.tankSelected && config.post.enabled) {
		poster(laundryVals.tankSelected);
	}
}

// Need to test this  to see how to parse tankType, TankPercentageRemaining
function tankStatus_setval(value) {
	console.log("tank status is:", value);
	laundryVals.tankStatus = value.toString();
	if (config.post.laundry.tankStatus && config.post.enabled) {
		poster(laundryVals.tankStatus);
	}
}

function timeRemainingInSeconds_setval(value) {
	console.log("time remaining is:", value);
	laundryVals.timeRemainingInSeconds = value.toString();
	if (config.post.laundry.timeRemainingInSeconds && config.post.enabled) {
		poster(laundryVals.timeRemainingInSeconds);
	}
}

function maximumWaterTemperature_setval(value) {
	console.log("Maximum water temperature is:", value);
	var stat = "Specified by the cycle selected";
	switch (value) {
		case 0:
			stat = "Specified by the cycle selected";
			break;
		case 1:
			stat = "Tap cold";
			break;
		case 2:
			stat = "Cold";
			break;
		case 3:
			stat = "Cool";
			break;
		case 4:
			stat = "Colors";
			break;
		case 5:
			stat = "Warm";
			break;
		case 6:
			stat = "Hot";
			break;
		case 7:
			stat = "Extra hot";
			break;
	}
	laundryVals.maximumWaterTemperature = stat;
	if (config.post.laundry.maximumWaterTemperature && config.post.enabled) {
		poster(laundryVals.maximumWaterTemperature);
	}
}

function dsmOverridesAllowed_setval(value) {
	console.log("DSM overrides allowed is:", value);
	var stat = "DSM override not allowed";
	switch (value) {
		case 0:
			stat = "DSM override not allowed";
			break;
		case 1:
			stat = "DSM override allowed";
			break;
	}
	laundryVals.dsmOverridesAllowed = stat;
	if (config.post.laundry.dsmOverridesAllowed && config.post.enabled) {
		poster(laundryVals.dsmOverridesAllowed);
	}
}

function dryerServiceErrorCodes_setval(value) {
	console.log("dryer service error codes are:", value);
	var stat = "Reserved";
	switch (value) {
		case 0:
			stat = "Inlet short";
			break;
		case 1:
			stat = "Outlet short";
			break;
		case 2:
			stat = "inlet open";
			break;
		case 3:
			stat = "Outlet open";
			break;
		case 4:
			stat = "EEPROM error";
			break;
		case 5:
			stat = "Stuck button";
			break;
		case 6:
			stat = "Door switch open";
			break;
		case 7:
			stat = "Door brown out";
			break;
		case 8:
			stat = "Door drum motor";
			break;
		case 9:
			stat = "User interface flash CRC error";
			break;
		case 10:
			stat = "User interface watchdog reset";
			break;
		case 11:
			stat = "User interface assertion";
			break;
	}
	laundryVals.dryerServiceErrorCodes = stat;
	if (config.post.laundry.dryerServiceErrorCodes && config.post.enabled) {
		poster(laundryVals.dryerServiceErrorCodes);
	}
}

function cycleCount_setval(value) {
	console.log("cycle count is:", value);
	laundryVals.cycleCount = value.toString();
	if (config.post.laundry.cycleCount && config.post.enabled) {
		poster(laundryVals.cycleCount);
	}
}

function endOfCycle_setval(value) {
	console.log("end of cycle is:", value);
	var stat = "Not end of cycle";
	switch (value) {
		case 0:
			stat = "Not end of cycle";
			break;
		case 1:
			stat = "End of cycle";
			break;
	}
	laundryVals.endOfCycle = stat;
	if (config.post.laundry.endOfCycle && config.post.enabled) {
		poster(laundryVals.endOfCycle);
	}
}

function machineSubCycle_setval(value) {
	console.log("machine sub-cycle is:", value);
	var stat = "Not applicable";
	switch (value) {
		case 0:
			stat = "Not applicable";
			break;
		case 1:
			stat = "Fill";
			break;
		case 2:
			stat = "Soak";
			break;
		case 3:
			stat = "Wash";
			break;
		case 4:
			stat = "Rinse";
			break;
		case 5:
			stat = "Spin";
			break;
		case 6:
			stat = "Drain";
			break;
		case 7:
			stat = "Extra spin";
			break;
		case 8:
			stat = "Extra rinse";
			break;
		case 9:
			stat = "Tumble";
			break;
		case 10:
			stat = "Load size detection";
			break;
		case 128:
			stat = "Drying";
			break;
		case 129:
			stat = "Mist steam";
			break;
		case 130:
			stat = "Cool down";
			break;
		case 131:
			stat = "Extended tumble";
			break;
		case 132:
			stat = "Damp";
			break;
		case 133:
			stat = "Air fluff";
			break;
	}
	laundryVals.machineSubCycle = stat;
	if (config.post.laundry.machineSubCycle && config.post.enabled) {
		poster(laundryVals.machineSubCycle);
	}
}

function machineStatus_setval(value) {
	console.log("machine status is:", value);
	var stat = "Idle";
	switch (value) {
		case 0:
			stat = "Idle";
			break;
		case 1:
			stat = "Standby";
			break;
		case 2:
			stat = "Run";
			break;
		case 3:
			stat = "Pause";
			break;
		case 4:
			stat = "End of cycle";
			break;
		case 5:
			stat = "DSM delay run";
			break;
		case 6:
			stat = "Delay run";
			break;
		case 7:
			stat = "Delay pause";
			break;
		case 8:
			stat = "Drain timeout";
			break;
		case 128:
			stat = "Clean speak";
			break;
	} 
	laundryVals.machineStatus = stat;
	if (config.post.laundry.machineStatus && config.post.enabled) {
		poster(laundryVals.machineStatus);
	}
}


function applianceType_setval(value) {
	console.log("appliance type is:", value);
	var stat = "Water heater";
	switch (value) {
		case 0:
			stat = "Water heater";
			break;
		case 1:
			stat = "Clothes dryer";
			break;
		case 2:
			stat = "Clothes washer";
			break;
		case 3:
			stat = "Refrigerator";
			break;
		case 4:
			stat = "Microwave";
			break;
		case 5:
			stat = "Advantium";
			break;
		case 6:
			stat = "Dishwasher";
			break;
		case 7:
			stat = "Oven";
			break;
		case 8:
			stat = "Electric range";
			break;
		case 9:
			stat = "Gas range";
			break;
	}
	applianceVals.type = stat;
}

greenBean.connect("laundry", function (laundry) {
	var pacingInterval = 250; //500ms
	var timeout = 0;
	// Get the appliance info
	applianceVals.address = laundry.address;
	console.log("address is: ", applianceVals.address);
	applianceVals.version = laundry.version.join(".");
	console.log("version is: ", applianceVals.version);

	console.log("Reading data and setting up subscriptions...");
	laundry.applianceType.read(function (value) {
		applianceType_setval(value);
	});

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.modelNumber.read()");
		laundry.modelNumber.read(function (modelNumber) {
			applianceVals.modelNumber = modelNumber.trim();
			console.log("model number is: ", applianceVals.modelNumber);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.serialNumber.read()");
		laundry.serialNumber.read(function (serialNumber) {
			applianceVals.serialNumber = serialNumber.trim();
			console.log("serial number is: ", applianceVals.serialNumber);
		});
	}, timeout);

	// Setup subscriptions for all updates
	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.delayTimeRemainingInMinutes.subscribe()");
		laundry.delayTimeRemainingInMinutes.subscribe(function (value) {
			delayTimeRemainingInMinutes_setval(value);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.dryerCriticalResponseEnabled.subscribe()");
		laundry.dryerCriticalResponseEnabled.subscribe(function (value) {
			dryerCriticalResponseEnabled_setval(value);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.operatingMode.subscribe()");
		laundry.operatingMode.subscribe(function (value) {
			operatingMode_setval(value);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.washerMainControlServiceErrorCodes.subscribe()");
		laundry.washerMainControlServiceErrorCodes.subscribe(function (value) {
			washerMainControlServiceErrorCodes_setval(value);
		});
 	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.washerInverterServiceErrorCodes.subscribe()");
		laundry.washerInverterServiceErrorCodes.subscribe(function (value) {
			washerInverterServiceErrorCodes_setval(value);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.washerUserInterfaceServiceErrorCodes.subscribe()");
		laundry.washerUserInterfaceServiceErrorCodes.subscribe(function (value) {
			washerUserInterfaceServiceErrorCodes_setval(value);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.cycleSelected.subscribe()");
		laundry.cycleSelected.subscribe(function (value) {
			cycleSelected_setval(value);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.tankSelected.subscribe()");
		laundry.tankSelected.subscribe(function (value) {
			tankSelected_setval(value);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.tankStatus.subscribe()");
		laundry.tankStatus.subscribe(function (value) {
			tankStatus_setval(value);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.timeRemainingInSeconds.subscribe()");
		laundry.timeRemainingInSeconds.subscribe(function (value) {
			timeRemainingInSeconds_setval(value);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.maximumWaterTemperature.subscribe()");
		laundry.maximumWaterTemperature.subscribe(function (value) {
			maximumWaterTemperature_setval(value);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.dsmOverridesAllowed.subscribe()");
		laundry.dsmOverridesAllowed.subscribe(function (value) {
			dsmOverridesAllowed_setval(value);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.dryerServiceErrorCodes.subscribe()");
		laundry.dryerServiceErrorCodes.subscribe(function (value) {
			dryerServiceErrorCodes_setval(value);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.cycleCount.subscribe()");
		laundry.cycleCount.subscribe(function (value) {
			cycleCount_setval(value);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.endOfCycle.subscribe()");
		laundry.endOfCycle.subscribe(function (value) {
			endOfCycle_setval(value);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.machineSubCycle.subscribe()");
		laundry.machineSubCycle.subscribe(function (value) {
			machineSubCycle_setval(value);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.machineStatus.subscribe()");
		laundry.machineStatus.subscribe(function (value) {
			machineStatus_setval(value);
		});
		console.log("Setup complete!");
	}, timeout);

});

