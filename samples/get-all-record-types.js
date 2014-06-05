require('../lib/records');
var config = require('../config');

var records = Records(config.config);

records.getAllRecordTypes({module: 'ServiceRequest'}, function(error, response, body){
	if (!error && response.statusCode == 200) {
		var json = JSON.parse(body);
		for(var i=0; i<json.result.length; i++) {
			console.log(json.result[i].type + ': ' + json.result[i].text);
		}
		
    }
    else {
    	console.log('An error occured: ' + response.statusCode);
    }
});