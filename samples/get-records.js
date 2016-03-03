var accela = require('./../lib/accela');
var config = require('../config').config;

accela.setup(config);

var record_id = 'ISLANDTON-15CAP-00000-008E8';
accela.records.getRecords({id: record_id}, function (error, response) {
	if(!error) {
		console.log(JSON.stringify(response));
	}
	else {
		console.log('An error ocurred. ' + error.message);
	}
});