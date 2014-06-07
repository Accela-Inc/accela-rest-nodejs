var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

accela.records.getAllRecordTypes({module: 'ServiceRequest'}, function (error, response, body) {
    if (error) {
        return console.log(error);
    }
    else if (response.statusCode == 200) {
        var json = JSON.parse(body);
        for (var i = 0; i < json.result.length; i++) {
            console.log(json.result[i].type + ': ' + json.result[i].text);
        }
    }
    else {
        console.log('An error occurred: ' + response.statusCode);
    }
});
