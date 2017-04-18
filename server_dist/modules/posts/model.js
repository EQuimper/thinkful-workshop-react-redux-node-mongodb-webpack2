'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PostSchema = new _mongoose.Schema({
  title: {
    type: String,
    unique: true,
    minLength: [5, 'Title need to be at least 5 characters'],
    required: true
  },
  text: {
    type: String,
    minLength: [30, 'Title need to be at least 30 characters'],
    required: true
  }
});
exports.default = _mongoose2.default.model('Post', PostSchema);