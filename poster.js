var http = require('http');
var pkgjson = require('./package');

// send an update
module.exports = function postUpdate(jsondata){
	// fast rfc4122 v4 compliant UUID generator from 
	// https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136 
	var lut = [];
	for (var i=0; i<256; i++) { 
		lut[i] = (i<16?'0':'')+(i).toString(16); 
	}
	function uuid() {
		var d0 = Math.random()*0xffffffff|0;
		var d1 = Math.random()*0xffffffff|0;
		var d2 = Math.random()*0xffffffff|0;
		var d3 = Math.random()*0xffffffff|0;
		return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+'-'+
			lut[d1&0xff]+lut[d1>>8&0xff]+'-'+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff]+'-'+
			lut[d2&0x3f|0x80]+lut[d2>>8&0xff]+'-'+lut[d2>>16&0xff]+lut[d2>>24&0xff]+
			lut[d3&0xff]+lut[d3>>8&0xff]+lut[d3>>16&0xff]+lut[d3>>24&0xff];
	}

	var date = new Date();

	var postdata = {
		GreenBeanify: { 
			id: uuid(),
			created_at: date.toISOString(), //ISO formatted date such as 2014-10-13T20:07:15.667Z
			"status": jsondata.stat,
			type: jsondata.type, 
			applianceAddress: applianceVals.address,
			applianceType: applianceVals.type,
			modelNumber: applianceVals.modelNumber,
			serialNumber: applianceVals.serialNumber,
			applianceVersion: applianceVals.version,
			softwareVersion: pkgjson.version,
			data: {
				text: jsondata.text,
				numeric: jsondata.numeric
			}
		}
	};

	var postDataString = JSON.stringify(postdata);
	
	var headers = {
		'Content-Type': 'application/json',
		'Content-Length': postDataString.length
	};

	var options = {
		host: config.post.post_host,
		port: config.post.post_port,
		path: config.post.post_path,
		method: 'POST',
		headers: headers
	};

	var req = http.request(options, function(res) {
		res.setEncoding('utf-8');
		var responseString = '';

		res.on('data', function(data) {
			responseString += data;
		});

		res.on('end', function() {
			// var resultObject = JSON.parse(responseString);
			console.log("We got a complete response to our POST: " + responseString);
		});
	});
	req.write(postDataString);
	req.end();

	req.on('error', function(e) {
  		// TODO: handle error.
		console.log("We got an error when POSTing:", e);
	});
};



