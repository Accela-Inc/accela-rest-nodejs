var accela = require('./../lib/accela');
var config = require('../config').config;

accela.setup(config);

var options = {};

accela.search.records({ expand: 'addresses' }, options, function (error, response) {
    if(!error) {
		console.log(JSON.stringify(response));
	}
	else {
		console.log('An error ocurred. ' + error.message);
	}

});