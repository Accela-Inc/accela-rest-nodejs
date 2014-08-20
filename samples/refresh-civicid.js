var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);
access_token = 'your-token-goes-here';

accela.civicid.refreshToken(access_token, function(response, error) {
	if(!error) {
		console.log(response);
	}
	else {
		console.log(error);
	}
});