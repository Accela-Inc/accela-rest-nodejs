var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

accela.records.getRecords({id: 'ISLANDTON-14CAP-00000-0003V', expand: 'addresses'}, function (error, response, body) {
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
//   "result": [
//     {
//       "value": "14CAP-00000-0003V",
//       "trackingId": 275564346,
//       "openedDate": "2014-06-04 00:00:00",
//       "recordClass": "COMPLETE",
//       "defendantSignature": false,
//       "offenseWitnessed": false,
//       "misdemeanor": false,
//       "publicOwned": false,
//       "customId": "SR-2014-00054",
//       "booking": false,
//       "createdBy": "MDEVELOPER",
//       "totalJobCost": 0,
//       "statusDate": "2014-06-04 07:27:44",
//       "serviceProviderCode": "ISLANDTON",
//       "status": {
//         "text": "Received",
//         "value": "Received"
//       },
//       "description": "This is a test service request.",
//       "type": {
//         "subType": "Graffiti",
//         "group": "ServiceRequest",
//         "text": "Graffiti ",
//         "category": "NA",
//         "id": "ServiceRequest-Graffiti-Graffiti-NA",
//         "value": "ServiceRequest/Graffiti/Graffiti/NA",
//         "type": "Graffiti",
//         "module": "ServiceRequest"
//       },
//       "id": "ISLANDTON-14CAP-00000-0003V",
//       "module": "ServiceRequest",
//       "balance": 0,
//       "initiatedProduct": "AV360",
//       "totalFee": 0,
//       "totalPay": 0,
//       "undistributedCost": 0,
//       "infraction": false,
//       "jobValue": 0
//     }
//   ]
// }
