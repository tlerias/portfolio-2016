'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../..');

module.exports = {
  root: rootPath,
  ip: process.env.IP ||
        '0.0.0.0',
  port: process.env.PORT || 8080
};