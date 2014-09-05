var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

var record_id = 'ISLANDTON-14CAP-00000-000DQ';
accela.records.getRecords({id: record_id}, function (response, error) {
	if(!error) {
		console.log(JSON.stringify(response));
	}
	else {
		console.log('An error ocurred: ' + error);
	}
});