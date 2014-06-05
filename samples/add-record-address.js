require('../lib/records');
var config = require('../config');

addresses = [
	{
		xCoordinate: -75.226024,
		yCoordinate: 40.032275,
		streetAddress: '123 Some Street, Philadelphia, PA 19127'
	}
]

var records = Records(config.config);
records.createRecordAddresses({recordID: 'ISLANDTON-14CAP-00000-0003W'}, JSON.stringify(addresses), function(error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body);
    }
    else {
    	console.log('An error occured: ' + response.statusCode);
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
}