var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

var options = { parcelNumber: 113060003, module: 'ServiceRequest' };

accela.search.records({ limit: 2 }, options, function (response, error) {
    if(!error) {
		console.log(JSON.stringify(response));
	}
	else {
		console.log('An error ocurred: ' + error);
	}

});