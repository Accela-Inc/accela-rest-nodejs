var request = require('request');

var API_ENDPOINT = 'https://apis.accela.com';
var AUTH_ENDPOINT = 'https://apis.accela.com/oauth2/token';
var TOKEN_ENDPOINT = 'https://apis.accela.com/oauth2/tokeninfo';
var _config = null;

exports.setup = function (config) {
    _config = config;
    if(_config !== null){
        if(config.base_url !== null && typeof config.base_url !== "undefined"){
            API_ENDPOINT = `${config.base_url}`;
            AUTH_ENDPOINT = `${config.base_url}/oauth2/token`;
            TOKEN_ENDPOINT = `${config.base_url}/oauth2/tokeninfo`;
        }
    }
}

exports.get = function (path, params, auth_type, callback) {
    if (_config === null) {
        return callback(null, 'Accela api must be setup.');
    }
    var url = API_ENDPOINT + path;
    if (!isEmpty(params)) {
        url += '?' + buildQueryString(escapeCharacters(params));
    }
    var options = {
        url: url,
        headers: setAuthType(auth_type)
    };
    makeRequest(options, callback);
};

exports.post = function (path, params, body, auth_type, callback) {
    if (_config === null) {
        return callback(null, 'Accela api must be setup.');
    }
    var url = API_ENDPOINT + path;
    if (!isEmpty(params)) {
        url += '?' + buildQueryString(escapeCharacters(params));
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
        return callback(null, 'Accela api must be setup.');
    }
    var url = API_ENDPOINT + path;
    if (!isEmpty(params)) {
        url += '?' + buildQueryString(escapeCharacters(params));
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
        return callback(null, 'Accela api must be setup.');
    }
    var url = API_ENDPOINT + path;
    if (!isEmpty(params)) {
        url += '?' + buildQueryString(escapeCharacters(params));
    }
    var options = {
        url: url,
        method: 'DELETE',
        headers: setAuthType(auth_type)
    };
    makeRequest(options, callback);
};

exports.getToken = function(username, password, scope, callback) {
    if (_config === null) {
        return callback(null, 'Accela api must be setup.');
    }
    var params = {
        client_id: _config.app_id,
        client_secret: _config.app_secret,
        grant_type: 'password',
        username: username,
        password: password,
        scope: scope,
        agency_name: _config.agency_name,
        environment: _config.environment
    }
    body = buildQueryString(params);
    var options = {
        url: AUTH_ENDPOINT,
        method: 'POST',
        headers: headers = { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body
    };
    makeRequest(options, callback);
};

exports.refreshToken = function(refresh_token, callback) {
    if (_config === null) {
        return callback(null, 'Accela api must be setup.');
    }
    var params = {
        client_id: _config.app_id,
        client_secret: _config.app_secret,
        grant_type: 'refresh_token',
        refresh_token: refresh_token
    }
    body = buildQueryString(params);
    var options = {
        url: AUTH_ENDPOINT,
        method: 'POST',
        headers: headers = { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body
    };
    makeRequest(options, callback);
};

exports.getTokenInfo = function(callback) {
    if (_config === null) {
        return callback(null, 'Accela api must be setup.');
    }
    var options = {
        url: TOKEN_ENDPOINT,
        headers: setAuthType('AccessToken')
    };
    makeRequest(options, callback);
};

// Method to set authorization type.
function setAuthType(auth_type) {
    var headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    if (auth_type == 'AccessToken') {
        headers['Authorization'] = _config.access_token;
    }
    else if (auth_type == 'AppCredentials') {
        headers['x-accela-appid'] = _config.app_id
        headers['x-accela-appsecret'] = _config.app_secret;
    }
    else {
        headers['x-accela-appid'] = _config.app_id
        headers['x-accela-agency'] = _config.agency;
        headers['x-accela-environment'] = _config.environment;
    }
    return headers;
}

// Method to escape special characters.
function escapeCharacters(params) {
    return params;
    var find = new Array('.','-','%','/','\\\\',':','*','\\','<','>','|','?',' ','&','#');
    var replace = new Array('.0','.1','.2','.3','.4','.5','.6','.7','.8','.9','.a','.b','.c','.d','.e'); 
    var escaped = {};
    for (var param in params) {
        if(typeof(params[param]) == 'string') {
            escaped[param] = replaceCharacter(find, replace, params[param]);
        }
        else {
            escaped[param] = params[param];
        }
    }
    return escaped;
}

// Method for character replacement.
function replaceCharacter(search, replace, subject, count) {
  var i = 0, j = 0, temp = '', repl = '', sl = 0,
    fl = 0, f = [].concat(search), r = [].concat(replace),
    s = subject, ra = Object.prototype.toString.call(r) === '[object Array]',
    sa = Object.prototype.toString.call(s) === '[object Array]', s = [].concat(s);
  
  if(typeof(search) === 'object' && typeof(replace) === 'string' ) {
    temp = replace; 
    replace = new Array();
    for (i=0; i < search.length; i+=1) { 
      replace[i] = temp; 
    }
    temp = ''; 
    r = [].concat(replace); 
    ra = Object.prototype.toString.call(r) === '[object Array]';
  }
  
  if (count) {
    this.window[count] = 0;
  }

  for (i = 0, sl = s.length; i < sl; i++) {
    if (s[i] === '') {
      continue;
    }
    for (j = 0, fl = f.length; j < fl; j++) {
      temp = s[i] + '';
      repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
      s[i] = (temp)
        .split(f[j])
        .join(repl);
      if (count) {
        this.window[count] += ((temp.split(f[j])).length - 1);
      } 
    }
  }
  return sa ? s : s[0];
}

// Check if an object is empty.
function isEmpty(obj) {
    if(Object.keys(obj).length === 0) {
        return true;
    }
    return false;
}

// Utility function to build querystring parameters for API call.
function buildQueryString(params) {
    var querystring = '';
    for(param in params) {
        querystring += '&' + param + '=' + params[param];
    }
    return querystring;
}

// Private method to make API call.
function makeRequest(options, callback) {
    request(options, function (error, response, body){
        if (error) {
            callback(error, null);
        }
        else if (response.statusCode == 200) {
            callback( null, JSON.parse(body));
        }
        else {
            callback(new Error('HTTP Response Code: ' + response.statusCode), null);
        }
    });
}

