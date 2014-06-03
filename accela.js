var request = require('request');
var querystring = require('querystring');

Accela = function(options) {

	var ENDPOINT = 'https://apis.accela.com/';

	//Public methods.
	function _get(path, params, auth_type, callback) {
		var url = ENDPOINT + path + '?' + querystring.stringify(params);
		var options = {
			url: url,
			headers: setAuthType(auth_type)
		}
		makeRequest(options, callback);
	}

	function _post() {

	}

	function _put() {

	}

	function _delete() {

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
			headers['x-accela-environment'] = options.environment;
		}
		return headers;
	}

	return {
		_get: _get,
		_post: _post,
		_put: _put,
		_delete: _delete
	}

};

exports.Accela = Accela;
