require('./owners');
var config = require('./config');

var owners = Owners(config.config);
owners.getOwners({fullName: 'Smith'}, function(error, response, body) {
	if (!error && response.statusCode == 200) {
		var response =JSON.parse(body);
        for (var i=0; i< response.result.length; i++) {
        	console.log(response.result[i].fullName);
        }
    }
});