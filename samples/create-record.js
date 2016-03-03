var accela = require('./../lib/accela');
var config = require('../config').config;

accela.setup(config);

record = {
    module: "ServiceRequest",
    createdBy: "MDEVELOPER",
    serviceProviderCode: "ISLANDTON",
    type: {
        subType: "Graffiti",
        group: "ServiceRequest",
        text: "Graffiti",
        value: "ServiceRequest/Graffiti/Graffiti/NA",
        type: "Graffiti",
        module: "ServiceRequest"
    },
    description: "This is yet another test service request."
}

accela.records.createRecord(null, record, function (error, response) {
    if(!error) {
        console.log(response);
    }
    else {
        console.log('An error ocurred. ' + error.message);
    }
});