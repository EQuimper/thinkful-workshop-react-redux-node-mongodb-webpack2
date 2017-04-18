'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _posts = require('./posts');

Object.keys(_posts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _posts[key];
    }
  });
});