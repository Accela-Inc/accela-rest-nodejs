var querystring = require('querystring');
var client = require('./rest-client');
var PATH_BASE = '/v4/batch';

exports.request = function(params, payload, callback) {
	var auth_type = 'AccessToken';
	client.post(PATH_BASE, params, payload, auth_type, callback);
};