var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'Express' });
});

router.get('/delayTimeRemainingInMinutes', function(req, res) {
	res.send(delayTimeRemainingInMinutes);
});

router.get('/dryerCriticalResponseEnabled', function(req, res) {
	res.send(dryerCriticalResponseEnabled);
});

router.get('/operatingMode', function(req, res) {
	res.send(operatingMode);
});

router.get('/washerMainControlServiceErrorCodes', function(req, res) {
	res.send(washerMainControlServiceErrorCodes);
});

router.get('/washerInverterServiceErrorCodes', function(req, res) {
	res.send(washerInverterServiceErrorCodes);
});

router.get('/washerUserInterfaceServiceErrorCodes', function(req, res) {
	res.send(washerUserInterfaceServiceErrorCodes);
});

router.get('/cycleSelected', function(req, res) {
	res.send(cycleSelected);
});

router.get('/tankSelected', function(req, res) {
	res.send(tankSelected);
});

router.get('/tankStatus', function(req, res) {
	res.send(tankStatus);
});

router.get('/timeRemainingInSeconds', function(req, res) {
	res.send(timeRemainingInSeconds);
});

router.get('/maximumWaterTemperature', function(req, res) {
	res.send(maximumWaterTemperature);
});

router.get('/dsmOverridesAllowed', function(req, res) {
	res.send(dsmOverridesAllowed);
});

router.get('/dryerServiceErrorCodes', function(req, res) {
	res.send(dryerServiceErrorCodes);
});

router.get('/cycleCount', function(req, res) {
	res.send(cycleCount);
});

router.get('/endOfCycle', function(req, res) {
	res.send(endOfCycle);
});

router.get('/machineSubCycle', function(req, res) {
		res.send(machineSubCycle);
});

router.get('/machineStatus', function(req, res) {
        res.send(machineStatus);
});


module.exports = router;
