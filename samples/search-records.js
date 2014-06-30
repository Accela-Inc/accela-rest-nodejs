var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

var options = { module: 'ServiceRequest' };

accela.search.records({ expand: 'addresses' }, options, function (response, error) {
    if(!error) {
		console.log(JSON.stringify(response));
	}
	else {
		console.log('An error ocurred: ' + error);
	}

});