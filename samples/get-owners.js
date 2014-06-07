var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

accela.owners.getOwners({fullName: 'Smith'}, function (error, response, body) {
    if (error) {
        return console.log(error);
    }
    else if (response.statusCode == 200) {
        var response = JSON.parse(body);
        for (var i = 0; i < response.result.length; i++) {
            console.log(response.result[i].fullName);
        }
    }
    else {
        console.log('An error occurred: ' + response.statusCode);
    }
});
