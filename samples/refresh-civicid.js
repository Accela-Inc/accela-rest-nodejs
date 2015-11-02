var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);
token = 'your-token-goes-here';

accela.civicid.refreshToken(token, function (error, response) {
	if(!error) {
		console.log(response);
	}
	else {
		console.log(error.message);
	}
});