var querystring = require('querystring');
var client = require('./rest-client');
var PATH_BASE = '/v4/owners';

exports.getOwners = function (params, callback) {
    var auth_type = 'AccessToken';
    client.get(PATH_BASE, params, auth_type, callback);
}

exports.getOwner = function (params, callback) {
    var path = PATH_BASE + '/' + params.id;
    var auth_type = 'AccessToken';
    delete params.id;
    client.get(path, params, auth_type, callback);
}
