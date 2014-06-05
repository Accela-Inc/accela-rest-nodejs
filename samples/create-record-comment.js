require('../lib/records');
var config = require('../config');

var comment = [
	{
		text: "This is a another comment."
	}
]

var records = Records(config.config);
records.createRecordComments({recordID: 'ISLANDTON-14CAP-00000-0003V'}, JSON.stringify(comment), function(error, response, body) {
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
//             "id": 1576205
//         }
//     ]
// }