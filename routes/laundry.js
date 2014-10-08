var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('laundry-index', { title: 'Laundry' });
});

router.get('/delayTimeRemainingInMinutes', function(req, res) {
	res.send(laundryVals.delayTimeRemainingInMinutes);
});

router.get('/dryerCriticalResponseEnabled', function(req, res) {
	res.send(laundryVals.dryerCriticalResponseEnabled);
});

router.get('/operatingMode', function(req, res) {
	res.send(laundryVals.operatingMode);
});

router.get('/washerMainControlServiceErrorCodes', function(req, res) {
	res.send(laundryVals.washerMainControlServiceErrorCodes);
});

router.get('/washerInverterServiceErrorCodes', function(req, res) {
	res.send(laundryVals.washerInverterServiceErrorCodes);
});

router.get('/washerUserInterfaceServiceErrorCodes', function(req, res) {
	res.send(laundryVals.washerUserInterfaceServiceErrorCodes);
});

router.get('/cycleSelected', function(req, res) {
	res.send(laundryVals.cycleSelected);
});

router.get('/tankSelected', function(req, res) {
	res.send(laundryVals.tankSelected);
});

router.get('/tankStatus', function(req, res) {
	res.send(laundryVals.tankStatus);
});

router.get('/timeRemainingInSeconds', function(req, res) {
	res.send(laundryVals.timeRemainingInSeconds);
});

router.get('/maximumWaterTemperature', function(req, res) {
	res.send(laundryVals.maximumWaterTemperature);
});

router.get('/dsmOverridesAllowed', function(req, res) {
	res.send(laundryVals.dsmOverridesAllowed);
});

router.get('/dryerServiceErrorCodes', function(req, res) {
	res.send(laundryVals.dryerServiceErrorCodes);
});

router.get('/cycleCount', function(req, res) {
	res.send(laundryVals.cycleCount);
});

router.get('/endOfCycle', function(req, res) {
	res.send(laundryVals.endOfCycle);
});

router.get('/machineSubCycle', function(req, res) {
	res.send(laundryVals.machineSubCycle);
});

router.get('/machineStatus', function(req, res) {
        res.send(laundryVals.machineStatus);
});


module.exports = router;
