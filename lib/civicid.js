var client = require('./rest-client');

exports.getToken = function(username, password, scope, callback) {
	client.getToken(username, password, scope, callback);
}

exports.refreshToken = function(refresh_token, callback) {
	client.refreshToken(refresh_token, callback);
}