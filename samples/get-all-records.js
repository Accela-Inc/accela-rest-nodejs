var accela = require('./../lib/accela');
var config = require('../config').config;

accela.setup(config);

accela.records.getAllRecords({ module: 'ServiceRequest', limit: 3 }, function (error, response) {
    if(!error) {
		console.log(JSON.stringify(response));
	}
	else {
		console.log(JSON.stringify({ error: 'An error ocurred. ' + error.message }));
	}
});