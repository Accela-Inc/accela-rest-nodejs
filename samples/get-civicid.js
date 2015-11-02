var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

var username = process.argv[2];
var password = process.argv[3];
var scope = process.argv[4];

accela.civicid.getToken(username, password, scope, function (error, response) {
	if(!error) {
		console.log(response.access_token);
	}
	else {
		console.log('An error ocurred. ' + error.message);
	}
});