require('./accela');
var querystring = require('querystring');

Owners = function(options) {
	
	var PATH_BASE = '/v4/owners'; 

	var accela = Accela(options);

	var getOwners = function(params, callback) {
		var auth_type = 'AccessToken';
		accela._get(PATH_BASE, params, auth_type, callback);
	}

	var getOwner = function(params, callback) {
		var path = PATH_BASE + '/' + params.id + '?' + querystring.stringify({lang: params.lang, fields: params.fields});
		var auth_type = 'AccessToken';
		accela._get(path, params, auth_type, callback);
	}

	return {
		getOwners: getOwners,
		getOwner: getOwner
	}

}

exports.Owners = Owners;