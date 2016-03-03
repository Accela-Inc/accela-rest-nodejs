var client = require('./rest-client');
var PATH_BASE = '/v4/civicid';

exports.getLinkedAccounts = function(params, callback) {
	var path = PATH_BASE + '/' + 'accounts';
	var auth_type = 'AccessToken';
	client.get(path, params, auth_type, callback);
}

exports.getCivicIdProfile = function(params, callback) {
	var path = PATH_BASE + '/' + 'profile';
	var auth_type = 'AccessToken';
	client.get(path, params, auth_type, callback);
}

exports.getUserAccount = function(params, callback) {
	var path = PATH_BASE + '/' + 'accounts' + params.id;
	var auth_type = 'AccessToken';
	delete params.id;
	client.get(path, params, auth_type, callback);
}

exports.getToken = function(username, password, scope, callback) {
	client.getToken(username, password, scope, callback);
}

exports.refreshToken = function(refresh_token, callback) {
	client.refreshToken(refresh_token, callback);
}

exports.getTokenInfo = function(callback) {
	client.getTokenInfo(callback);
}