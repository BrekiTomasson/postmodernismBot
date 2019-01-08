var fs = require('fs');
var path = require('path');
var appRoot = require('app-root-path');
var config = require('./tslint.json');

var rulesPath = 'node_modules/tslint-eslint-rules/dist/rules';

if (!fs.existsSync(path.resolve(__dirname, rulesPath))) {
  rulesPath = appRoot + '/' + rulesPath;
}

config.rulesDirectory = [rulesPath];

module.exports = config;
