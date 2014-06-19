var owners = require('./owners');
var records = require('./records');
var search = require('./search');
var client = require('./rest-client');

module.exports = {
    setup: function(options) {
        client.setup(options);
    },
    owners: owners,
    records: records,
    search: search
};
