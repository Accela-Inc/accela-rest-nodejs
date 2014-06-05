# Node.js module for the Accela API (v4)

## Installation

npm install accela-construct

## Provisioning an API test token:

1. Go to the API v3 [reference page](https://developer.accela.com/Resource/Index).
2. On the lower left, click on [Get an API Test Token](https://developer.accela.com/TestToken/Index).
3. Enter the agency name (Islandton for testing).
4. Enter the scope for the test token - this is a space delimited list of scope identifiers from the [API reference page](https://developer.accela.com/docs/index.htm).
5. Put the generated token in your config file.

## Example

```javascript
require('accela-construct');
var config = require('./path/to/config');

var owners = Owners(config.config);
owners.getOwners({fullName: 'Smith'}, function(error, response, body) {
	if (!error && response.statusCode == 200) {
		var response = JSON.parse(body);
        for (var i=0; i<response.result.length; i++) {
        	console.log(response.result[i].fullName);
        }
    }
    else {
    	console.log('An error occured: ' + response.statusCode);
    }
});
```

Additional examples available in the [samples](tree/master/samples) directory.