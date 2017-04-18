'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('express');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isProd = process.env.NODE_ENV === 'production';

exports.default = app => {
  if (isProd) {
    // Make a gzip with the server
    // Better perf with that
    // Only use in production
    app.use((0, _compression2.default)());
  }
  // We use morgan here for get the request in the console
  app.use((0, _morgan2.default)('dev'));
  // This is for parse the req.body to a json format
  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
};