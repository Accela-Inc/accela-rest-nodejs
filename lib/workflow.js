
var client = require('./rest-client');
var PATH_BASE = '/v4/workflowTasks/mine';

exports.getMyWorkflowTasks = function (params, callback) {
	var auth_type = 'AccessToken';
	client.get(PATH_BASE, params, auth_type, callback);
};