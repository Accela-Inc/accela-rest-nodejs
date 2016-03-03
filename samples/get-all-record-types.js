var accela = require('./../lib/accela');
var config = require('../config').config;

accela.setup(config);

accela.records.getAllRecordTypes({module: 'ServiceRequest'}, function (error, response) {
    if(!error) {
        for (var i = 0; i < response.result.length; i++) {
            console.log(response.result[i].type + ': ' + response.result[i].text);
        }
    }
    else {
        console.log('An error ocurred. ' + error.message);
    }
});
