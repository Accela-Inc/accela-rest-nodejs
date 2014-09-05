var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

var username = process.argv[2];
var password = process.argv[3];

accela.civicid.getToken(username, password, 'records', function(response, error) {
	if(!error) {
		console.log(JSON.stringify(response));
	}
	else {
		console.log(error);
	}
});