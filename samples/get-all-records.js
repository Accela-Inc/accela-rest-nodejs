var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

accela.records.getAllRecords({ module: 'ServiceRequest', limit: 3 }, function (response, error) {
    if(!error) {
		console.log(response);
	}
	else {
		console.log('An error ocurred: ' + error);
	}
});