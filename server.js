var express = require('express');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./server/config/main');

var app = express();

// Start server
app.listen(config.port, config.ip, function () {
  console.log('Express server listening on %s:%d, in %s mode', config.ip, config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;