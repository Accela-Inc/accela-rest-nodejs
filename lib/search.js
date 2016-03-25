var client = require('./rest-client');
var PATH_BASE = '/v4/search';

exports.addresses = function (params, body, callback) {
	var path = PATH_BASE + '/addresses'
    var auth_type = 'NoAuth';
    client.post(path, params, body, auth_type, callback);
}

exports.contacts = function (params, body, callback) {
	var path = PATH_BASE + '/contacts'
    var auth_type = 'AccessToken';
    client.post(path, params, body, auth_type, callback);
}

exports.global = function (params, body, callback) {
	var path = PATH_BASE + '/global'
    var auth_type = 'AccessToken';
    client.post(path, params, body, auth_type, callback);
}

exports.inspections = function (params, body, callback) {
	var path = PATH_BASE + '/inspections'
    var auth_type = 'AccessToken';
    client.post(path, params, body, auth_type, callback);
}

exports.owners = function (params, body, callback) {
	var path = PATH_BASE + '/owners'
    var auth_type = 'AccessToken';
    client.post(path, params, body, auth_type, callback);
}

exports.parcels = function (params, body, callback) {
	var path = PATH_BASE + '/parcels'
    var auth_type = 'NoAuth';
    client.post(path, params, body, auth_type, callback);
}

exports.professionals = function (params, body, callback) {
	var path = PATH_BASE + '/professionals'
    var auth_type = 'AccessToken';
    client.post(path, params, body, auth_type, callback);
}

exports.records = function (auth_type, params, body, callback) {
    if(typeof(auth_type) == 'object') {
        callback = body;
        body = params;
        params = auth_type;
        auth_type = null;
    }
    var path = PATH_BASE + '/records'
    var auth_type = auth_type || 'NoAuth';
    client.post(path, params, body, auth_type, callback);
}