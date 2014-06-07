var querystring = require('querystring');
var client = require('./rest-client');
var PATH_BASE = '/v4/records';

exports.getAllRecords = function (params, callback) {
    var auth_type = 'NoAuth';
    client.get(PATH_BASE, params, auth_type, callback);
}

exports.getRecords = function (params, callback) {
    var path = PATH_BASE + '/' + params.id + '?' + querystring.stringify({lang: params.lang, fields: params.fields});
    var auth_type = 'NoAuth';
    client.get(path, params, auth_type, callback);
}

exports.getAllRecordTypes = function (params, callback) {
    var path = '/v4/settings/records/types';
    var auth_type = 'AccessToken';
    client.get(path, params, auth_type, callback);
}

exports.createRecord = function (params, record, callback) {
    var auth_type = 'AccessToken';
    client.post(PATH_BASE, params, record, auth_type, callback);
}

exports.createRecordAddresses = function (params, addresses, callback) {
    var path = PATH_BASE + '/' + params.recordID + '/addresses';
    var auth_type = 'AccessToken';
    client.post(path, params, addresses, auth_type, callback);
}

exports.createRecordComments = function (params, comments, callback) {
    var path = PATH_BASE + '/' + params.recordID + '/comments';
    var auth_type = 'AccessToken';
    client.post(path, params, comments, auth_type, callback);
}

exports.getAllAddressesForRecord = function (params, callback) {
    var path = PATH_BASE + '/' + params.recordID + '/addresses';
    var auth_type = 'NoAuth';
    client.get(path, params, auth_type, callback);
}

exports.getAllCommentsForRecord = function (params, callback) {
    var path = PATH_BASE + '/' + params.recordID + '/comments';
    var auth_type = 'AccessToken';
    client.get(path, params, auth_type, callback);
}

exports.createRecordDocuments = function () {
}

exports.updateRecord = function (params, record, callback) {
    var auth_type = 'AccessToken';
    client.put(PATH_BASE, params, record, auth_type, callback);
}
