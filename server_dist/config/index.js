'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middlewaresConfig = exports.dbConfig = undefined;

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _middlewares = require('./middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.dbConfig = _db2.default;
exports.middlewaresConfig = _middlewares2.default;