var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

accela.owners.getOwners({fullName: 'Smith'}, function (error, response) {
    if(!error) {
        for (var i = 0; i < response.result.length; i++) {
            console.log(response.result[i].fullName);
        }
    }
    else {
        console.log('An error ocurred. ' + error.message);
    }
});
