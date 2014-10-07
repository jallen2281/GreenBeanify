var express = require('express');
var poster = require('./poster');
var router = express.Router();

//var greenBean = require('../greenBean').greenBean;
var greenBean = require("green-bean");


// Get the initial value
function delayTimeRemainingInMinutes_setval(value) {
	console.log("delay time remaining is:", value);
	delayTimeRemainingInMinutes = value.toString();
	poster(delayTimeRemainingInMinutes);
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
	dryerCriticalResponseEnabled = stat;
	poster(dryerCriticalResponseEnabled);
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
	operatingMode = stat;
	poster(operatingMode);
}

// We need to decode the bitfield
function washerMainControlServiceErrorCodes_setval(value) {
	console.log("washer main control service error codes are:", value);
	washerMainControlServiceErrorCodes = value.toString();
	poster(washerMainControlServiceErrorCodes);
}

// We need to decode the bitfield
function washerInverterServiceErrorCodes_setval(value) {
	console.log("washer inverter service error codes are:", value);
	washerInverterServiceErrorCodes = value.toString();
	poster(washerInverterServiceErrorCodes);
}

// We need to decode the bitfield
function washerUserInterfaceServiceErrorCodes_setval(value) {
	console.log("washer user interface error codes are:", value);
	washerUserInterfaceServiceErrorCodes = value.toString();
	poster(washerUserInterfaceServiceErrorCodes);
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
	cycleSelected = stat;
	poster(cycleSelected);
}

// Need to test this to see how to parse tankType, tankEnabled
function tankSelected_setval(value) {
	console.log("selected tank is:", value);
	tankSelected = value.toString();
	poster(tankSelected);
}

// Need to test this  to see how to parse tankType, TankPercentageRemaining
function tankStatus_setval(value) {
	console.log("tank status is:", value);
	tankStatus = value.toString();
	poster(tankStatus);
}

function timeRemainingInSeconds_setval(value) {
	console.log("time remaining is:", value);
	timeRemainingInSeconds = value.toString();
	poster(timeRemainingInSeconds);
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
	maximumWaterTemperature = stat;
	poster(maximumWaterTemperature);
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
	dsmOverridesAllowed = stat;
	poster(dsmOverridesAllowed);
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
	dryerServiceErrorCodes = stat;
	poster(dryerServiceErrorCodes);
}

function cycleCount_setval(value) {
	console.log("cycle count is:", value);
	cycleCount = value.toString();
	poster(cycleCount);
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
	endOfCycle = stat;
	poster(endOfCycle);
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
	machineSubCycle = stat;
	poster(machineSubCycle);
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
	machineStatus = stat;
	poster(machineStatus);
}

greenBean.connect("laundry", function (laundry) {
	laundry.delayTimeRemainingInMinutes.read(function (value) {
		delayTimeRemainingInMinutes_setval(value);
	});
	laundry.delayTimeRemainingInMinutes.subscribe(function (value) {
		delayTimeRemainingInMinutes_setval(value);
	});

	laundry.dryerCriticalResponseEnabled.read(function (value) {
		dryerCriticalResponseEnabled_setval(value);
	});
	laundry.dryerCriticalResponseEnabled.subscribe(function (value) {
		dryerCriticalResponseEnabled_setval(value);
	});

	laundry.operatingMode.read(function (value) {
		operatingMode_setval(value);
	});
	laundry.operatingMode.subscribe(function (value) {
		operatingMode_setval(value);
	});

	laundry.washerMainControlServiceErrorCodes.read(function (value) {
		washerMainControlServiceErrorCodes_setval(value);
	});
	laundry.washerMainControlServiceErrorCodes.subscribe(function (value) {
		washerMainControlServiceErrorCodes_setval(value);
	});
 
	laundry.washerInverterServiceErrorCodes.read(function (value) {
		washerInverterServiceErrorCodes_setval(value);
	});
	laundry.washerInverterServiceErrorCodes.subscribe(function (value) {
		washerInverterServiceErrorCodes_setval(value);
	});

	laundry.washerUserInterfaceServiceErrorCodes.read(function (value) {
		washerUserInterfaceServiceErrorCodes_setval(value);
	});
	laundry.washerUserInterfaceServiceErrorCodes.subscribe(function (value) {
		washerUserInterfaceServiceErrorCodes_setval(value);
	});

	laundry.cycleSelected.read(function (value) {
		cycleSelected_setval(value);
	});
	laundry.cycleSelected.subscribe(function (value) {
		cycleSelected_setval(value);
	});

	laundry.tankSelected.read(function (value) {
		tankSelected_setval(value);
	});
	laundry.tankSelected.subscribe(function (value) {
		tankSelected_setval(value);
	});

	laundry.tankStatus.read(function (value) {
		tankStatus_setval(value);
	});
	laundry.tankStatus.subscribe(function (value) {
		tankStatus_setval(value);
	});

	laundry.timeRemainingInSeconds.read(function (value) {
		timeRemainingInSeconds_setval(value);
	});
	laundry.timeRemainingInSeconds.subscribe(function (value) {
		timeRemainingInSeconds_setval(value);
	});

	laundry.maximumWaterTemperature.read(function (value) {
		maximumWaterTemperature_setval(value);
	});
	laundry.maximumWaterTemperature.subscribe(function (value) {
		maximumWaterTemperature_setval(value);
	});

	laundry.dsmOverridesAllowed.read(function (value) {
		dsmOverridesAllowed_setval(value);
	});
	laundry.dsmOverridesAllowed.subscribe(function (value) {
		dsmOverridesAllowed_setval(value);
	});

	laundry.dryerServiceErrorCodes.read(function (value) {
		dryerServiceErrorCodes_setval(value);
	});
	laundry.dryerServiceErrorCodes.subscribe(function (value) {
		dryerServiceErrorCodes_setval(value);
	});

	laundry.cycleCount.read(function (value) {
		cycleCount_setval(value);
	});
	laundry.cycleCount.subscribe(function (value) {
		cycleCount_setval(value);
	});

	laundry.endOfCycle.read(function (value) {
		endOfCycle_setval(value);
	});
	laundry.endOfCycle.subscribe(function (value) {
		endOfCycle_setval(value);
	});

	laundry.machineSubCycle.read(function (value) {
		machineSubCycle_setval(value);
	});
	laundry.machineSubCycle.subscribe(function (value) {
		machineSubCycle_setval(value);
	});

	laundry.machineStatus.read(function (value) {
		machineStatus_setval(value);
	});
	laundry.machineStatus.subscribe(function (value) {
		machineStatus_setval(value);
	});
});

