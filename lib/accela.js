var request = require('request');
var querystring = require('querystring');

Accela = function(options) {

	var ENDPOINT = 'https://apis.accela.com';

	//Public methods.
	function _get(path, params, auth_type, callback) {
		var url = ENDPOINT + path ;
		if(params) {
			url += '?' + querystring.stringify(params);
		}
		var options = {
			url: url,
			headers: setAuthType(auth_type)
		}
		makeRequest(options, callback);
	}

	function _post(path, params, body, auth_type, callback) {
		var url = ENDPOINT + path;
		if(params) {
			url += '?' + querystring.stringify(params);
		}
		var options = {
			url: url,
			method: 'POST',
			body: body,
			headers: setAuthType(auth_type)
		}
		makeRequest(options, callback);
	}

	function _put(path, params, body, auth_type, callback) {
		var url = ENDPOINT + path;
		if(params) {
			url += '?' + querystring.stringify(params);
		}
		var options = {
			url: url,
			method: 'PUT',
			body: body,
			headers: setAuthType(auth_type)
		}
		makeRequest(options, callback);
	}

	function _delete(path, params, auth_type, callback) {
		var url = ENDPOINT + path;
		if(params) {
			url += '?' + querystring.stringify(params);
		}
		var options = {
			url: url,
			method: 'DELETE',
			headers: setAuthType(auth_type)
		}
		makeRequest(options, callback);
	}

	// Private method to make API call.
	function makeRequest(options, callback) {
		request(options, callback);
	}

	// Private method to set authorization type.
	function setAuthType(auth_type) {
		var headers = {
			'Content-Type' : 'application/json',
			'Accept' : 'application/json',
			'x-accela-appid' : options.app_id
		}
		if(auth_type == 'AccessToken') {
			headers['Authorization'] = options.access_token;
			headers['x-accela-agency'] = options.agency;
		}
		else if(auth_type == 'AppCredentials') {
			headers['x-accela-appsecret'] = options.app_secret;
		}
		else {
			headers['x-accela-agency'] = options.agency;
			headers['x-accela-environment'] = options.environment;
		}
		return headers;
	}

	// Private metjod to escape special characters.
	function escapeCharacters() {

	}

	return {
		_get: _get,
		_post: _post,
		_put: _put,
		_delete: _delete
	}

};

exports.Accela = Accela;
