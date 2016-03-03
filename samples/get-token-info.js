var accela = require('./../lib/accela');

var config = { config: {} };
config.access_token = process.argv[2];

accela.setup(config);

accela.civicid.getTokenInfo(function(error, response) {
	if(!error) {
		console.log(JSON.stringify(response));
	}
	else {
		console.log("Oh, the humanity..." + error);
	}
})