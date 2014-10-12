var http = require('http');

// send an update
module.exports = function postUpdate(jsondata){
	
	var data = {
		text: jsondata,
		numeric: 1
	};

	var postdata = {
		GreenBeanify: { 
			id: "aaabbbccdddd",
			created_at: "2014-10-01T21:23:41-08:00",
			"status": "changed",
			type: "laundry.machineStatus", 
			applianceAddress: applianceVals.address,
			applianceType: applianceVals.type,
			modelNumber: applianceVals.modelNumber,
			serialNumber: applianceVals.serialNumber,
			applianceVersion: applianceVals.version,
			softwareVersion: "AA.BB.CC.DD",
			data: data
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



