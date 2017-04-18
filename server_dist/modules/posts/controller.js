'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPostById = exports.fetchPosts = exports.createPost = undefined;

require('express');

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Create
*/
const createPost = exports.createPost = async (req, res) => {
  const { title, text } = req.body;

  if (!title) {
    return res.status(401).json({ error: true, message: 'Title required' });
  } else if (typeof title !== 'string') {
    return res.status(401).json({ error: true, message: 'Title must be a string' });
  } else if (title.length < 6) {
    return res.status(401).json({ error: true, message: 'Title must be 5 characters long' });
  }

  if (!text) {
    return res.status(401).json({ error: true, message: 'Text required' });
  } else if (typeof text !== 'string') {
    return res.status(401).json({ error: true, message: 'Text must be a string' });
  } else if (text.length < 31) {
    return res.status(401).json({ error: true, message: 'Text must be 30 characters long' });
  }

  const newPost = new _model2.default({ title, text });

  try {
    return res.status(200).json({ error: false, post: await newPost.save() });
  } catch (e) {
    return res.status(500).json({ error: true, message: 'Error Server' });
  }
};

/**
* GET ALL
*/
const fetchPosts = exports.fetchPosts = async (req, res) => {
  try {
    return res.status(200).json({ error: false, posts: await _model2.default.find({}) });
  } catch (e) {
    return res.status(500).json({ error: false, message: 'Error server' });
  }
};

/**
* GET BY ID
*/
const fetchPostById = exports.fetchPostById = async (req, res) => {
  try {
    return res.status(200).json({ error: false, post: await _model2.default.findById(req.params.id) });
  } catch (e) {
    return res.status(500).json({ error: false, message: 'Error server' });
  }
};