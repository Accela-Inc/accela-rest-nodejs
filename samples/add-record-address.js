var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

addresses = [
    {
        xCoordinate: -75.226024,
        yCoordinate: 40.032275,
        streetAddress: '123 Some Street, Philadelphia, PA 19127'
    }
];

accela.records.createRecordAddresses({recordID: 'ISLANDTON-14CAP-00000-0003W'}, JSON.stringify(addresses), function (error, response, body) {
    if (error) {
        return console.log(error);
    }
    else if (response.statusCode == 200) {
        console.log(body);
    }
    else {
        console.log('An error occurred: ' + response.statusCode);
    }
});

// API RESPONSE
//
// {
//     "status": 200,
//     "result": [
//         {
//             "id": 1000600758,
//             "isSuccess": true
//         }
//     ]
//}
