var express = require('express');
var poster = require('./poster');
var router = express.Router();

//var greenBean = require('../greenBean').greenBean;
var greenBean = require("green-bean");

// this is where we will store the latest values
laundryVals = {
	machineStatus: {
		text: "Unknown",
		numeric: -1
		       },
	machineSubCycle: {
		text: "Unknown",
		numeric: -1
			 },
	endOfCycle: {
		text: "Unknown",
		numeric: -1
		    },
	cycleCount: {
		text: "Unknown",
		numeric: -1
		    },
	dryerServiceErrorCodes: {
		text: "Unknown",
		numeric: -1
				},
	dsmOverridesAllowed: {
		text: "Unknown",
		numeric: -1
			     },
	maximumWaterTemperature: {
		text: "Unknown",
		numeric: -1
				 },
	timeRemainingInSeconds: {
		text: "Unknown",
		numeric: -1
				},
	tankType: {
		text: "Unknown",
		numeric: -1
		    },
	tankEnabled: {
		text: "Unknown",
		numeric: -1
		    },
	tankPercentageRemaining: {
		text: "Unknown",
		numeric: -1
		      },
	cycleSelected: {
		text: "Unknown",
		numeric: -1
		       },
	washerUserInterfaceServiceErrorCodes: {
		text: "Unknown",
		numeric: -1
					      },
	washerInverterServiceErrorCodes: {
		text: "Unknown",
		numeric: -1
					 },
	washerMainControlServiceErrorCodes: {
		text: "Unknown",
		numeric: -1
					    },
	operatingMode: {
		text: "Unknown",
		numeric: -1
		       },
	dryerCriticalResponseEnabled: {
		text: "Unknown",
		numeric: -1
				      },
	delayTimeRemainingInMinutes: {
		text: "Unknown",
		numeric: -1
				     }
};

applianceVals = {
	address: {
		text: "Unknown",
		numeric: -1
		 },
	version: {
		text: "Unknown",
		numeric: -1
		 },
	type: {
		text: "Unknown",
		numeric: -1
	      },
	modelNumber: {
		text: "Unknown",
		numeric: -1
		     },
	serialNumber: {
		text: "Unknown",
		numeric: -1
		      }
}

// Get the initial value
function delayTimeRemainingInMinutes_setval(value) {
	console.log("delay time remaining is:", value);
	laundryVals.delayTimeRemainingInMinutes.text = value.toString();
	laundryVals.delayTimeRemainingInMinutes.numeric = value;
	if (config.post.laundry.delayTimeRemainingInMinutesi && config.post.enabled) {
		var jsondata = {
			text: laundryVals.delayTimeRemainingInMinutes.text,
			numeric: laundryVals.delayTimeRemainingInMinutes.numeric,
			type: "laundry.delayTimeRemainingInMinutes",
			stat: "update"
		};
		poster(jsondata);
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
	laundryVals.dryerCriticalResponseEnabled.text = stat;
	laundryVals.dryerCriticalResponseEnabled.numeric = value;
	if (config.post.laundry.dryerCriticalResponseEnabled && config.post.enabled) {
		var jsondata = {
			text: laundryVals.dryerCriticalResponseEnabled.text,
			numeric: laundryVals.dryerCriticalResponseEnabled.numeric,
			type: "laundry.dryerCriticalResponseEnabled",
			stat: "update"
		};
		poster(jsondata);
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
	laundryVals.operatingMode.text = stat;
	laundryVals.operatingMode.numeric = value;
	if (config.post.laundry.operatingMode && config.post.enabled) {
		var jsondata = {
			text: laundryVals.operatingMode.text,
			numeric: laundryVals.operatingMode.numeric,
			type: "laundry.operatingMode",
			stat: "update"
		};
		poster(jsondata);
	}
}

// We need to decode the bitfield
function washerMainControlServiceErrorCodes_setval(value) {
	console.log("washer main control service error codes are:", value);
	var stat = "";

	function addstr(instr) {
		if (stat.length == 0) {
			stat = instr;
		} else {
			stat = stat.concat(", ",instr);
		}
	}

	// bit 0-7
	if (value & 0xFF) {
		addstr("Reserved");
	}
	// bit 8
	if (value & 256) {
		addstr("Door lock feedbacks");
	}
	// bit 9
	if (value & 512) {
		addstr("Bulk detergent pressure sensor");
	}
	// bit 10
	if (value & 1024) {
		addstr("Bulk softener pressure sensor");
	}
	// bit 11-15
	if (value & 0xF800) {
		addstr("Reserved");
	}
	// bit 16
	if (value & 0x10000) {
		addstr("Volume slow fill");
	}
	// bit 17
	if (value & 0x20000) {
		addstr("Drain system");
	}
	// bit 18
	if (value & 0x40000) {
		addstr("Main control EEPROM");
	}
	// bit 19
	if (value & 0x80000) {
		addstr("Target volume overflow");
	}
	// bit 20
	if (value & 0x100000) {
		addstr("Overflow");
	}
	// bit 21
	if (value & 0x200000) {
		addstr("Inverter redundancy");
	}
	// bit 22
	if (value & 0x400000) {
		addstr("Flow meter");
	}
	// bit 23
	if (value & 0x800000) {
		addstr("Max errors");
	}
	// bit 24
	if (value & 0x1000000) {
		addstr("Door lock");
	}
	// bit 25
	if (value & 0x2000000) {
		addstr("Door unlock");
	}
	// bit 26
	if (value & 0x4000000) {
		addstr("Door open");
	}
	// bit 27
	if (value & 0x8000000) {
		addstr("Pressure switch");
	}
	// bit 28
	if (value & 0x10000000) {
		addstr("Dispenser motor");
	}
	// bit 29
	if (value & 0x20000000) {
		addstr("Thermal open");
	}
	// bit 30
	if (value & 0x40000000) {
		addstr("Thermal open");
	}
	// bit 31
	if (value & 0x80000000) {
		addstr("Level slow fill");
	}
	// No errors
	if (value == 0) {
		stat = "None";
	}

	laundryVals.washerMainControlServiceErrorCodes.text = stat;
	laundryVals.washerMainControlServiceErrorCodes.numeric = value;
	if (config.post.laundry.washerMainControlServiceErrorCodes && config.post.enabled) {
		var jsondata = {
			text: laundryVals.washerMainControlServiceErrorCodes.text,
			numeric: laundryVals.washerMainControlServiceErrorCodes.numeric,
			type: "laundry.washerMainControlServiceErrorCodes",
			stat: "update"
		};
		poster(jsondata);
	}
}

// We need to decode the bitfield
function washerInverterServiceErrorCodes_setval(value) {
	console.log("washer inverter service error codes are:", value);
	var stat = "";

	function addstr(instr) {
		if (stat.length == 0) {
			stat = instr;
		} else {
			stat = stat.concat(", ",instr);
		}
	}

	// bit 0
	if (value & 1) {
		addstr("CPU register failure");
	}
	// bit 1
	if (value & 2) {
		addstr("ADC failure");
	}
	// bit 2
	if (value & 4) {
		addstr("Clock failure");
	}
	// bit 3
	if (value & 8) {
		addstr("Demo mode fault");
	}
	// bit 4
	if (value & 16) {
		addstr("Reset");
	}
	// bit 5
	if (value & 32) {
		addstr("Harness fault");
	}
	// bit 6
	if (value & 64) {
		addstr("Motor temperature watchdog");
	}
	// bit 7
	if (value & 128) {
		addstr("Motor over temperature");
	}
	// bit 8
	if (value & 256) {
		addstr("Door switch fault");
	}
	// bit 9
	if (value & 512) {
		addstr("Door lock fault");
	}
	// bit 10
	if (value & 1024) {
		addstr("AC loss");
	}
	// bit 11
	if (value & 2048) {
		addstr("VB2 brown out");
	}
	// bit 12
	if (value & 0x1000) {
		addstr("Over speed");
	}
	// bit 13
	if (value & 0x2000) {
		addstr("Software reset");
	}
	// bit 14
	if (value & 0x4000) {
		addstr("ROM failure");
	}
	// bit 15
	if (value & 0x8000) {
		addstr("RAM failure");
	}
	// bit 16
	if (value & 0x10000) {
		addstr("Phase current critically high");
	}
	// bit 17
	if (value & 0x20000) {
		addstr("Locked rotor");
	}
	// bit 18
	if (value & 0x40000) {
		addstr("Hall sensor fault");
	}
	// bit 19
	if (value & 0x80000) {
		addstr("Communications fault");
	}
	// bit 20
	if (value & 0x100000) {
		addstr("Profiler fault");
	}
	// bit 21
	if (value & 0x200000) {
		addstr("Watchdog timeout");
	}
	// bit 22
	if (value & 0x400000) {
		addstr("Resource watchdog timeout");
	}
	// bit 23
	if (value & 0x800000) {
		addstr("Stack fault");
	}
	// bit 24
	if (value & 0x1000000) {
		addstr("Gate driver fault");
	}
	// bit 25
	if (value & 0x2000000) {
		addstr("VCC brown out");
	}
	// bit 26
	if (value & 0x4000000) {
		addstr("DCBUS brown out");
	}
	// bit 27
	if (value & 0x8000000) {
		addstr("DCBUS critically high");
	}
	// bit 28
	if (value & 0x10000000) {
		addstr("IGBT temperature critically low");
	}
	// bit 29
	if (value & 0x20000000) {
		addstr("IGBT temperature critically high");
	}
	// bit 30
	if (value & 0x40000000) {
		addstr("GEA2 inverter action timeout");
	}
	// bit 31
	if (value & 0x80000000) {
		addstr("Motor temperature critically high");
	}
	// No error
	if (value == 0) {
		stat = "None";
	}

	laundryVals.washerInverterServiceErrorCodes.text = stat;
	laundryVals.washerInverterServiceErrorCodes.numeric = value;
	if (config.post.laundry.washerInverterServiceErrorCodes && config.post.enabled) {
		var jsondata = {
			text: laundryVals.washerInverterServiceErrorCodes.text,
			numeric: laundryVals.washerInverterServiceErrorCodes.numeric,
			type: "laundry.washerInverterServiceErrorCodes",
			stat: "update"
		};
		poster(jsondata);
	}
}

// We need to decode the bitfield
function washerUserInterfaceServiceErrorCodes_setval(value) {
	console.log("washer user interface error codes are:", value);
	laundryVals.washerUserInterfaceServiceErrorCodes.text = value.toString();
	laundryVals.washerUserInterfaceServiceErrorCodes.numeric = value;
	if (config.post.laundry.washerUserInterfaceServiceErrorCodes && config.post.enabled) {
		var jsondata = {
			text: laundryVals.washerUserInterfaceServiceErrorCodes.text,
			numeric: laundryVals.washerUserInterfaceServiceErrorCodes.numeric,
			type: "laundry.washerUserInterfaceServiceErrorCodes",
			stat: "update"
		};
		poster(jsondata);
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
	laundryVals.cycleSelected.text = stat;
	laundryVals.cycleSelected.numeric = value;
	if (config.post.laundry.cycleSelected && config.post.enabled) {
		var jsondata = {
			text: laundryVals.cycleSelected.text,
			numeric: laundryVals.cycleSelected.numeric,
			type: "laundry.cycleSelected",
			stat: "update"
		};
		poster(jsondata);
	}
}

// Need to test this to see how to parse tankType, tankEnabled
function tankSelected_setval(value) {
	console.log("selected tank type is:", value.tankType, ", enabled is:", value.tankEnabled);
	var prev_tankType = laundryVals.tankType.numeric;
	var prev_tankEnabled = laundryVals.tankEnabled.numeric;
	var stat = "Detergent";
	switch (value.tankType) {
		case 0:
			stat = "Detergent";
			break;
		case 1:
			stat = "Softener";
			break;
		case 2:
			stat = "Bleach";
			break;
		case 3:
			stat = "Other";
			break;

	}
	laundryVals.tankType.text = stat;
	laundryVals.tankType.numeric = value.tankType;
	laundryVals.tankEnabled.text = value.tankEnabled.toString();
	laundryVals.tankEnabled.numeric = value.tankEnabled;

	if (config.post.laundry.tankType && config.post.enabled && (prev_tankType != value.tankType)) {
		var jsondata = {
			text: laundryVals.tankType.text,
			numeric: laundryVals.tankType.numeric,
			type: "laundry.tankType",
			stat: "update"
		};
		poster(jsondata);
	}

	if (config.post.laundry.tankEnabled && config.post.enabled && (prev_tankEnabled != value.tankEnabled)) {
		var jsondata = {
			text: laundryVals.tankEnabled.text,
			numeric: laundryVals.tankEnabled.numeric,
			type: "laundry.tankEnabled",
			stat: "update"
		};
		poster(jsondata);
	}
}

// Need to test this  to see how to parse tankType, TankPercentageRemaining
function tankStatus_setval(value) {
	console.log("tank status tanktype is:", value.tankType, ", percentage remaining is:", value.tankPercentageRemaining);
	var prev_tankType = laundryVals.tankType.numeric;
	var prev_tankPercentageRemaining = laundryVals.tankPercentageRemaining.numeric;
	var stat = "Detergent";
	switch (value.tankType) {
		case 0:
			stat = "Detergent";
			break;
		case 1:
			stat = "Softener";
			break;
		case 2:
			stat = "Bleach";
			break;
		case 3:
			stat = "Other";
			break;

	}
	laundryVals.tankType.text = stat;
	laundryVals.tankType.numeric = value.tankType;
	laundryVals.tankPercentageRemaining.text = value.tankPercentageRemaining.toString();
	laundryVals.tankPercentageRemaining.numeric = value.tankPercentageRemaining;
	if (config.post.laundry.tankType && config.post.enabled && (prev_tankType != value.tankType)) {
		var jsondata = {
			text: laundryVals.tankType.text,
			numeric: laundryVals.tankType.numeric,
			type: "laundry.tankType",
			stat: "update"
		};
		poster(jsondata);
	}

	if (config.post.laundry.tankPercentageRemaining && config.post.enabled && (prev_tankPercentageRemaining != value.tankPercentageRemaining)) {
		var jsondata = {
			text: laundryVals.tankPercentageRemaining.text,
			numeric: laundryVals.tankPercentageRemaining.numeric,
			type: "laundry.tankPercentageRemaining",
			stat: "update"
		};
		poster(jsondata);
	}
}

function timeRemainingInSeconds_setval(value) {
	console.log("time remaining is:", value);
	laundryVals.timeRemainingInSeconds.text = value.toString();
	laundryVals.timeRemainingInSeconds.numeric = value;
	if (config.post.laundry.timeRemainingInSeconds && config.post.enabled) {
		var jsondata = {
			text: laundryVals.timeRemainingInSeconds.text,
			numeric: laundryVals.timeRemainingInSeconds.numeric,
			type: "laundry.timeRemainingInSeconds",
			stat: "update"
		};
		poster(jsondata);
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
	laundryVals.maximumWaterTemperature.text = stat;
	laundryVals.maximumWaterTemperature.numeric = value;
	if (config.post.laundry.maximumWaterTemperature && config.post.enabled) {
		var jsondata = {
			text: laundryVals.maximumWaterTemperature.text,
			numeric: laundryVals.maximumWaterTemperature.numeric,
			type: "laundry.maximumWaterTemperature",
			stat: "update"
		};
		poster(jsondata);
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
	laundryVals.dsmOverridesAllowed.text = stat;
	laundryVals.dsmOverridesAllowed.numeric = value;
	if (config.post.laundry.dsmOverridesAllowed && config.post.enabled) {
		var jsondata = {
			text: laundryVals.dsmOverridesAllowed.text,
			numeric: laundryVals.dsmOverridesAllowed.numeric,
			type: "laundry.dsmOverridesAllowed",
			stat: "update"
		};
		poster(jsondata);
	}
}

/* We need to decode the bit field */
function dryerServiceErrorCodes_setval(value) {
	console.log("dryer service error codes are:", value);
	var stat = "";

	function addstr(instr) {
		if (stat.length == 0) {
			stat = instr;
		} else {
			stat = stat.concat(", ",instr);
		}
	}

	// bit 0
	if (value & 1) {
		addstr("Inlet short");
	}
	// bit 1
	if (value & 2) {
		addstr("Outlet short");
	}
	// bit 2
	if (value & 4) {
		addstr("inlet open");
	}
	// bit 3
	if (value & 8) {
		addstr("Outlet open");
	}
	// bit 4
	if (value & 16) {
		addstr("EEPROM error");
	}
	// bit 5		
	if (value & 32) {
		addstr("Stuck button");
	}
	// bit 6	
	if (value & 64) {
		addstr("Door switch open");
	}
	// bit 7
	if (value & 128) {
		addstr("Door brown out");
	}
	// bit 8
	if (value & 256) {
		addstr("Door drum motor");
	}
	// bit 9
	if (value & 512) {
		addstr("User interface flash CRC error");
	}
	// bit 10
	if (value & 1024) {
		addstr("User interface watchdog reset");
	}
	// bit 11
	if (value & 2048) {
		addstr("User interface assertion");
	}
	// bits 12-31
	if (value & 0xFFFFF000) {
		addstr("Reserved");
	}
	// If there is no error, set the text to none
	if (value == 0) {
		stat = "None";
	}

	laundryVals.dryerServiceErrorCodes.text = stat;
	laundryVals.dryerServiceErrorCodes.numeric = value;
	if (config.post.laundry.dryerServiceErrorCodes && config.post.enabled) {
		var jsondata = {
			text: laundryVals.dryerServiceErrorCodes.text,
			numeric: laundryVals.dryerServiceErrorCodes.numeric,
			type: "laundry.dryerServiceErrorCodes",
			stat: "update"
		};
		poster(jsondata);
	}
}

function cycleCount_setval(value) {
	console.log("cycle count is:", value);
	laundryVals.cycleCount.text = value.toString();
	laundryVals.cycleCount.numeric = value;
	if (config.post.laundry.cycleCount && config.post.enabled) {
		var jsondata = {
			text: laundryVals.cycleCount.text,
			numeric: laundryVals.cycleCount.numeric,
			type: "laundry.cycleCount",
			stat: "update"
		};
		poster(jsondata);
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
	laundryVals.endOfCycle.text = stat;
	laundryVals.endOfCycle.numeric = value;
	if (config.post.laundry.endOfCycle && config.post.enabled) {
		var jsondata = {
			text: laundryVals.endOfCycle.text,
			numeric: laundryVals.endOfCycle.numeric,
			type: "laundry.endOfCycle",
			stat: "update"
		};
		poster(jsondata);
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
	laundryVals.machineSubCycle.text = stat;
	laundryVals.machineSubCycle.numeric = value;
	if (config.post.laundry.machineSubCycle && config.post.enabled) {
		var jsondata = {
			text: laundryVals.machineSubCycle.text,
			numeric: laundryVals.machineSubCycle.numeric,
			type: "laundry.machineSubCycle",
			stat: "update"
		};
		poster(jsondata);
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
	laundryVals.machineStatus.text = stat;
	laundryVals.machineStatus.numeric = value;
	if (config.post.laundry.machineStatus && config.post.enabled) {
		var jsondata = {
			text: laundryVals.machineStatus.text,
			numeric: laundryVals.machineStatus.numeric,
			type: "laundry.machineStatus",
			stat: "update"
		};
		poster(jsondata);
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
	applianceVals.type.text = stat;
	applianceVals.type.numeric = value;
}

greenBean.connect("laundry", function (laundry) {
	var pacingInterval = 250; //500ms
	var timeout = 0;
	// Get the appliance info
	applianceVals.address.text = laundry.address;
	applianceVals.address.numeric = parseInt(laundry.address);
	console.log("address is: ", applianceVals.address.text);
	applianceVals.version.text = laundry.version.join(".");
	applianceVals.version.numeric = parseInt(laundry.version);
	console.log("version is: ", applianceVals.version.text);

	console.log("Reading data and setting up subscriptions...");
	laundry.applianceType.read(function (value) {
		applianceType_setval(value);
	});

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.modelNumber.read()");
		laundry.modelNumber.read(function (modelNumber) {
			applianceVals.modelNumber.text = modelNumber.trim();
			applianceVals.modelNumber.numeric = parseInt(modelNumber);
			console.log("model number is: ", applianceVals.modelNumber.text);
		});
	}, timeout);

	timeout += pacingInterval;
	setTimeout(function() {
		console.log("laundry.serialNumber.read()");
		laundry.serialNumber.read(function (serialNumber) {
			applianceVals.serialNumber.text = serialNumber.trim();
			applianceVals.serialNumber.numeric = parseInt(serialNumber);
			console.log("serial number is: ", applianceVals.serialNumber.text);
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

