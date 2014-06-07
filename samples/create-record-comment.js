var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

var comment = [
    {
        text: "This is a another comment."
    }
]

accela.records.createRecordComments({recordID: 'ISLANDTON-14CAP-00000-0003V'}, JSON.stringify(comment), function (error, response, body) {
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
//             "id": 1576205
//         }
//     ]
// }
