var request = require('request');
var querystring = require('querystring');

var ENDPOINT = 'https://apis.accela.com';
var _config = null;

exports.setup = function (config) {
    _config = config.config;
}

exports.get = function (path, params, auth_type, callback) {
    if (_config === null) {
        return callback('Accela api must be setup.');
    }
    var url = ENDPOINT + path;
    if (params) {
        url += '?' + querystring.stringify(escapeCharacters(params));
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
        url += '?' + querystring.stringify(escapeCharacters(params));
    }
    var options = {
        url: url,
        method: 'POST',
        body: JSON.stringify(body),
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
        url += '?' + querystring.stringify(escapeCharacters(params));
    }
    var options = {
        url: url,
        method: 'PUT',
        body: JSON.stringify(body),
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

// Method to set authorization type.
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

// Method to escape special characters.
function escapeCharacters(params) {
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

// Private method to make API call.
function makeRequest(options, callback) {
    request(options, function (error, response, body){
        if (error) {
            callback(null, error);
        }
        else if (response.statusCode == 200) {
            callback(JSON.parse(body), null);
        }
        else {
            callback(null, 'HTTP Response Code: ' + response.statusCode);
        }
    });
}

