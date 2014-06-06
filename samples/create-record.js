var accela = require('./../lib/accela');
var config = require('../config');

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
    description: "This is another test service request."
}

accela.records.createRecord(null, JSON.stringify(record), function (error, response, body) {
    if (error) {
        return console.log(error);
    }
    else if (response.statusCode == 200) {
        console.log(body);
    }
    else {
        console.log('An error occured: ' + response.statusCode);
    }
});

// API RESPONSE
//
// {
//   "status": 200,
//   "result": {
//     "publicOwned": false,
//     "defendantSignature": false,
//     "offenseWitnessed": false,
//     "misdemeanor": false,
//     "infraction": false,
//     "booking": false,
//     "module": "ServiceRequest",
//     "createdBy": "MDEVELOPER",
//     "statusDate": "2014-06-04 14:04:40",
//     "serviceProviderCode": "ISLANDTON",
//     "status": {
//       "text": "Received",
//       "value": "Received"
//     },
//     "description": "This is another test service request.",
//     "type": {
//       "subType": "Graffiti",
//       "group": "ServiceRequest",
//       "text": "Graffiti ",
//       "category": "NA",
//       "id": "ServiceRequest-Graffiti-Graffiti-NA",
//       "value": "ServiceRequest/Graffiti/Graffiti/NA",
//       "type": "Graffiti",
//       "module": "ServiceRequest"
//     },
//     "id": "ISLANDTON-14CAP-00000-0003W",
//     "initiatedProduct": "AV360",
//     "customId": "SR-2014-00055",
//     "recordClass": "COMPLETE",
//     "trackingId": 259848171,
//     "value": "14CAP-00000-0003W",
//     "totalFee": 0,
//     "totalPay": 0,
//     "balance": 0
//   }
// }
