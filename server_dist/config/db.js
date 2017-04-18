'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = conf => {
  // We pass ur Promise to mongodb cause they have
  // a depracated message
  _mongoose2.default.Promise = global.Promise;
  // The conf come from the index.js file
  _mongoose2.default.connect(conf);
  // Connected mongoose to mongodb
  _mongoose2.default.connection.once('open', () => console.log(`Connected to MongoDb`)) // eslint-disable-line
  .on('error', err => console.warn('Warning', err)); // eslint-disable-line
};