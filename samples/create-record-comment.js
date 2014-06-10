var accela = require('./../lib/accela');
var config = require('../config');

accela.setup(config);

var comment = [
    {
        text: "This is yet another comment."
    }
]

accela.records.createRecordComments({recordID: 'ISLANDTON-14CAP-00000-0004Q'}, JSON.stringify(comment), function (response, error) {
    if(!error) {
        console.log(response);
    }
    else {
        console.log('An error ocurred: ' + error);
    }
});