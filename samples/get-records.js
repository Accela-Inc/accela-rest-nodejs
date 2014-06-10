var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

var record_id = 'ISLANDTON-14CAP-00000-0003V';
accela.records.getRecords({id: record_id}, function (response, error) {
	if(!error) {
		console.log(response);
	}
	else {
		console.log('An error ocurred: ' + error);
	}
});