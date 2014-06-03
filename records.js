require('./accela');
var querystring = require('querystring');

Records = function(options) {

	var PATH_BASE = '/v4/records'; 

	var accela = Accela(options);

	var getAllRecords = function(params, callback) {
		var auth_type = 'AccessToken';
		accela._get(PATH_BASE, params, auth_type, callback);
	}

	var getRecords = function(params, callback) {
		var path = PATH_BASE + '/' + params.id + '?' + querystring.stringify({lang: params.lang, fields: params.fields});
		var auth_type = 'AccessToken';
		accela._get(path, params, auth_type, callback);
	}

	var createRecord = function(params, record, callback) {
		var auth_type = 'AccessToken';
		accela._post(PATH_BASE, params, record, auth_type, callback);
	}

	var updateRecord = function(params, record, callback) {
		var auth_type = 'AccessToken';
		accela._put(PATH_BASE, params, record, auth_type, callback);
	}

	return {
		getAllRecords: getAllRecords,
		getRecords: getRecords,
		createRecord: createRecord,
		updateRecord: updateRecord
	}
}

exports.Records = Records;