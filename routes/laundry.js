var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('laundry-index', { title: 'Laundry' });
});

router.get('/delayTimeRemainingInMinutes', function(req, res) {
	res.send(laundryVals.delayTimeRemainingInMinutes.text);
});

router.get('/dryerCriticalResponseEnabled', function(req, res) {
	res.send(laundryVals.dryerCriticalResponseEnabled.text);
});

router.get('/operatingMode', function(req, res) {
	res.send(laundryVals.operatingMode.text);
});

router.get('/washerMainControlServiceErrorCodes', function(req, res) {
	res.send(laundryVals.washerMainControlServiceErrorCodes.text);
});

router.get('/washerInverterServiceErrorCodes', function(req, res) {
	res.send(laundryVals.washerInverterServiceErrorCodes.text);
});

router.get('/washerUserInterfaceServiceErrorCodes', function(req, res) {
	res.send(laundryVals.washerUserInterfaceServiceErrorCodes.text);
});

router.get('/cycleSelected', function(req, res) {
	res.send(laundryVals.cycleSelected.text);
});

router.get('/tankSelected', function(req, res) {
	res.send(laundryVals.tankSelected.text);
});

router.get('/tankStatus', function(req, res) {
	res.send(laundryVals.tankStatus.text);
});

router.get('/timeRemainingInSeconds', function(req, res) {
	res.send(laundryVals.timeRemainingInSeconds.text);
});

router.get('/maximumWaterTemperature', function(req, res) {
	res.send(laundryVals.maximumWaterTemperature.text);
});

router.get('/dsmOverridesAllowed', function(req, res) {
	res.send(laundryVals.dsmOverridesAllowed.text);
});

router.get('/dryerServiceErrorCodes', function(req, res) {
	res.send(laundryVals.dryerServiceErrorCodes.text);
});

router.get('/cycleCount', function(req, res) {
	res.send(laundryVals.cycleCount.text);
});

router.get('/endOfCycle', function(req, res) {
	res.send(laundryVals.endOfCycle.text);
});

router.get('/machineSubCycle', function(req, res) {
	res.send(laundryVals.machineSubCycle.text);
});

router.get('/machineStatus', function(req, res) {
        res.send(laundryVals.machineStatus.text);
});


module.exports = router;
