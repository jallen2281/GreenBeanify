var express = require('express');
var router = express.Router();

var greenBean = require("green-bean");

/* Define the results variables */
/*
var machineStatus;
var machineSubCycle;
var endOfCycle;
var cycleCount;
var dryerServiceErrorCodes;
var maximumWaterTemperature;
var timeRemainingInSeconds;
var tankStatus;
var tankSelected;
var cycleSelected;
var washerUserInterfaceServiceErrorCodes;
var washerInverterServiceErrorCodes;
var washerMainControlServiceErrorCodes;
var operatingMode;
var dryerCriticalResponseEnabled;
var delayTimeRemainingInMinutes;
*/

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'Express' });
});

greenBean.connect("laundry", function (laundry) {

  router.get('/delayTimeRemainingInMinutes', function(req, res) {
	laundry.delayTimeRemainingInMinutes.read(function (value) {
		console.log("delay time remainingis:", value);
		res.send(value.toString());
	});
  });

  router.get('/dryerCriticalResponseEnabled', function(req, res) {
	laundry.dryerCriticalResponseEnabled.read(function (value) {
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
		res.send(stat);
	});
  });

  router.get('/operatingMode', function(req, res) {
	laundry.operatingMode.read(function (value) {
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
		res.send(stat);
	});
  });

  // We need to decode the bitfield
  router.get('/washerMainControlServiceErrorCodes', function(req, res) {
	laundry.washerMainControlServiceErrorCodes.read(function (value) {
		console.log("washer main control service error codes are:", value);
		res.send(value.toString());
	});
  });

  // We need to decode the bitfield
  router.get('/washerInverterServiceErrorCodes', function(req, res) {
	laundry.washerInverterServiceErrorCodes.read(function (value) {
		console.log("washer inverter service error codes are:", value);
		res.send(value.toString());
	});
  });

  // We need to decode the bitfield
  router.get('/washerUserInterfaceServiceErrorCodes', function(req, res) {
	laundry.washerUserInterfaceServiceErrorCodes.read(function (value) {
		console.log("washer user interface error codes are:", value);
		res.send(value.toString());
	});
  });

  router.get('/cycleSelected', function(req, res) {
	laundry.cycleSelected.read(function (value) {
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
		res.send(stat);
	});
  });

  // Need to test this to see how to parse tankType, tankEnabled
  router.get('/tankSelected', function(req, res) {
	laundry.tankSelected.read(function (value) {
		console.log("selected tank is:", value);
		res.send(value.toString());
	});
  });

  // Need to test this  to see how to parse tankType, TankPercentageRemaining
  router.get('/tankStatus', function(req, res) {
	laundry.tankStatus.read(function (value) {
		console.log("tank status is:", value);
		res.send(value.toString());
	});
  });

  router.get('/timeRemainingInSeconds', function(req, res) {
	laundry.timeRemainingInSeconds.read(function (value) {
		console.log("time remaining is:", value);
		res.send(value.toString());
	});
  });

  router.get('/maximumWaterTemperature', function(req, res) {
	laundry.maximumWaterTemperature.read(function (value) {
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
		res.send(stat);
	});
  });

  router.get('/dsmOverridesAllowed', function(req, res) {
	laundry.dsmOverridesAllowed.read(function (value) {
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
		res.send(stat);
	});
  });

  router.get('/dryerServiceErrorCodes', function(req, res) {
	laundry.dryerServiceErrorCodes.read(function (value) {
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
		res.send(stat);
	});
  });

  router.get('/cycleCount', function(req, res) {
	laundry.cycleCount.read(function (value) {
		console.log("cycle count is:", value);
		res.send(value.toString());
	});
  });

  router.get('/endOfCycle', function(req, res) {
	laundry.endOfCycle.read(function (value) {
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
		res.send(stat);
	});
  });

  router.get('/machineSubCycle', function(req, res) {
	laundry.machineSubCycle.read(function (value) {
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
		res.send(stat);
	});
  });

  router.get('/machineStatus', function(req, res) {
     laundry.machineStatus.read(function (value) {
        console.log("read:", value);
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
        res.send(stat);
     });
  });
});


module.exports = router;
