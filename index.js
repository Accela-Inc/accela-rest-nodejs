require('./owners');
require('./records');
var config = require('./config');

// var owners = Owners(config.config);
// owners.getOwners({fullName: 'Smith'}, function(error, response, body) {
// 	if (!error && response.statusCode == 200) {
// 		var response =JSON.parse(body);
//         for (var i=0; i< response.result.length; i++) {
//         	console.log(response.result[i].fullName);
//         }
//     }
//     else {
//     	console.log('An error occured: ' + response.statusCode);
//     }
// });

var records = Records(config.config);
records.getAllRecords({limit: 2}, function(error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body);
    }
    else {
    	console.log('An error occured: ' + response.statusCode);
    }
});

// records.getRecords({id: 'ISLANDTON-14CAP-00000-0003U'}, function(error, response, body) {
// 	if (!error && response.statusCode == 200) {
// 		console.log(body);
//     }
//     else {
//     	console.log('An error occured: ' + response.statusCode);
//     }
// });