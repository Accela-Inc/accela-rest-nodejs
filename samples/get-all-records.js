var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

accela.records.getAllRecords({ module: 'ServiceRequest', limit: 2 }, function (error, response, body) {
    if (error) {
        return console.log(error);
    }
    else if (!error && response.statusCode == 200) {
        console.log(body);
    }
    else {
        console.log('An error occurred: ' + response.statusCode);
    }
});

// API RESPONSE
//
// {
//   "page": {
//     "hasmore": true,
//     "limit": 2,
//     "offset": 0
//   },
//   "status": 200,
//   "result": [
//     {
//       "value": "14CAP-00000-0003V",
//       "trackingId": 275564346,
//       "id": "ISLANDTON-14CAP-00000-0003V",
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
//       "status": {
//         "text": "Received",
//         "value": "Received"
//       },
//       "serviceProviderCode": "ISLANDTON",
//       "createdBy": "MDEVELOPER",
//       "module": "ServiceRequest",
//       "customId": "SR-2014-00054",
//       "openedDate": "2014-06-04 00:00:00"
//     },
//     {
//       "value": "14CAP-00000-0003W",
//       "trackingId": 259848171,
//       "id": "ISLANDTON-14CAP-00000-0003W",
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
//       "status": {
//         "text": "Received",
//         "value": "Received"
//       },
//       "serviceProviderCode": "ISLANDTON",
//       "createdBy": "MDEVELOPER",
//       "module": "ServiceRequest",
//       "customId": "SR-2014-00055",
//       "openedDate": "2014-06-04 00:00:00"
//     }
//   ]
// }
