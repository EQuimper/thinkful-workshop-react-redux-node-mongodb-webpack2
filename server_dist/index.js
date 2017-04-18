'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _config = require('./config');

var _modules = require('./modules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

const PORT = process.env.PORT || 3000;

(0, _config.middlewaresConfig)(app);

app.use('/api/v1', _modules.PostRoutes);

if (process.env.NODE_ENV !== 'production') {
  /**
  * Database on dev
  */
  const mongoConf = 'mongodb://localhost/myblog';
  (0, _config.dbConfig)(mongoConf);
} else {
  require('dotenv').config();

  app.use(_express2.default.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile((0, _path.join)(__dirname, '../dist/index.html'));
  });

  const mongoConf = process.env.MONGODB;
  if (!mongoConf) {
    throw new Error('Error with mongodb Process');
  } else {
    (0, _config.dbConfig)(mongoConf);
  }
}

app.listen(PORT, err => {
  if (err) {
    return console.error(err);
  } // eslint-disable-line

  console.log(`App running to port: ${PORT}`); // eslint-disable-line
});