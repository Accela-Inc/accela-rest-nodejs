require('./accela');
var querystring = require('querystring');

Owners = function(options) {
	
	var accela = Accela(options);

	var getOwners = function(params, callback) {
		var path = '/v4/owners'
		var auth_type = 'AccessToken';
		accela._get(path, params, auth_type, callback);
	}

	var getOwner = function(params, callback) {
		var path = '/v4/owner/' + params.id + '?' + querystring.stringify({lang: params.lang, fields: params.fields});
		console.log(path);
		var auth_type = 'AccessToken';
		accela._get(path, params, auth_type, callback);
	}

	return {
		getOwners: getOwners,
		getOwner: getOwner
	}

}

exports.Owners = Owners;