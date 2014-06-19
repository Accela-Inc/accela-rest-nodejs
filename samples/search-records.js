var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

var options = { expand: 'addresses' };

accela.search.records({ limit: 3 }, options, function (response, error) {
    if(!error) {
		console.log(JSON.stringify(response));
	}
	else {
		console.log('An error ocurred: ' + error);
	}

});