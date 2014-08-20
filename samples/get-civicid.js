var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

accela.civicid.getToken('get_owners', function(response, error) {
	if(!error) {
		console.log(response);
	}
	else {
		console.log(error);
	}
});