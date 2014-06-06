var request = require('request');
var querystring = require('querystring');

var ENDPOINT = 'https://apis.accela.com';
var _config = null;

exports.setup = function (config) {
    _config = config;
}

exports.get = function (path, params, auth_type, callback) {
    if (_config === null) {
        return callback('Accela api must be setup.');
    }

    var url = ENDPOINT + path;
    if (params) {
        url += '?' + querystring.stringify(params);
    }
    var options = {
        url: url,
        headers: setAuthType(auth_type)
    };
    makeRequest(options, callback);
};

exports.post = function (path, params, body, auth_type, callback) {
    if (_config === null) {
        return callback('Accela api must be setup.');
    }

    var url = ENDPOINT + path;
    if (params) {
        url += '?' + querystring.stringify(params);
    }
    var options = {
        url: url,
        method: 'POST',
        body: body,
        headers: setAuthType(auth_type)
    };
    makeRequest(options, callback);
};

exports.put = function (path, params, body, auth_type, callback) {
    if (_config === null) {
        return callback('Accela api must be setup.');
    }

    var url = ENDPOINT + path;
    if (params) {
        url += '?' + querystring.stringify(params);
    }
    var options = {
        url: url,
        method: 'PUT',
        body: body,
        headers: setAuthType(auth_type)
    };
    makeRequest(options, callback);
};

exports.delete = function (path, params, auth_type, callback) {
    if (_config === null) {
        return callback('Accela api must be setup.');
    }

    var url = ENDPOINT + path;
    if (params) {
        url += '?' + querystring.stringify(params);
    }
    var options = {
        url: url,
        method: 'DELETE',
        headers: setAuthType(auth_type)
    };
    makeRequest(options, callback);
};

// Private method to set authorization type.
function setAuthType(auth_type) {
    var headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-accela-appid': _config.app_id
    };

    if (auth_type == 'AccessToken') {
        headers['Authorization'] = _config.access_token;
        headers['x-accela-agency'] = _config.agency;
    }
    else if (auth_type == 'AppCredentials') {
        headers['x-accela-appsecret'] = _config.app_secret;
    }
    else {
        headers['x-accela-agency'] = _config.agency;
        headers['x-accela-environment'] = _config.environment;
    }
    return headers;
}

// Private method to make API call.
function makeRequest(options, callback) {
    request(options, callback);
}

// Private method to escape special characters.
function escapeCharacters() {

}

