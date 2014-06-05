require('./accela');
var querystring = require('querystring');

Records = function(options) {

	var PATH_BASE = '/v4/records'; 

	var accela = Accela(options);

	var getAllRecords = function(params, callback) {
		var auth_type = 'NoAuth';
		accela._get(PATH_BASE, params, auth_type, callback);
	}

	var getRecords = function(params, callback) {
		var path = PATH_BASE + '/' + params.id + '?' + querystring.stringify({lang: params.lang, fields: params.fields});
		var auth_type = 'NoAuth';
		accela._get(path, params, auth_type, callback);
	}

	var getAllRecordTypes = function(params, callback) {
		var path = '/v4/settings/records/types';
		var auth_type = 'AccessToken';
		accela._get(path, params, auth_type, callback);
	}

	var createRecord = function(params, record, callback) {
		var auth_type = 'AccessToken';
		accela._post(PATH_BASE, params, record, auth_type, callback);
	}

	var createRecordAddresses = function(params, addresses, callback) {
		var path = PATH_BASE + '/' + params.recordID + '/addresses';
		var auth_type = 'AccessToken';
		accela._post(path, params, addresses, auth_type, callback);
	}

	var createRecordComments = function(params, comments, callback) {
		var path = PATH_BASE + '/' + params.recordID + '/comments';
		var auth_type = 'AccessToken';
		accela._post(path, params, comments, auth_type, callback);
	}

	var getAllAddressesForRecord = function(params, callback) {
		var path = PATH_BASE + '/' + params.recordID + '/addresses';
		var auth_type = 'NoAuth';
		accela._get(path, params, auth_type, callback);
	}

	var getAllCommentsForRecord = function(params, callback) {
		var path = PATH_BASE + '/' + params.recordID + '/comments';
		var auth_type = 'AccessToken';
		accela._get(path, params, auth_type, callback);
	}

	var createRecordDocuments = function() {}

	var updateRecord = function(params, record, callback) {
		var auth_type = 'AccessToken';
		accela._put(PATH_BASE, params, record, auth_type, callback);
	}

	return {
		getAllRecords: getAllRecords,
		getRecords: getRecords,
		getAllRecordTypes: getAllRecordTypes,
		createRecord: createRecord,
		createRecordAddresses: createRecordAddresses,
		createRecordComments: createRecordComments,
		getAllAddressesForRecord: getAllAddressesForRecord,
		getAllCommentsForRecord: getAllCommentsForRecord,
		updateRecord: updateRecord
	}
}

exports.Records = Records;