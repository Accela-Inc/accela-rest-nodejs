var client = require('./rest-client');

exports.getToken = function(scope, callback) {
	client.getToken(scope, callback);
}

exports.refreshToken = function(refresh_token, callback) {
	client.refreshToken(refresh_token, callback);
}