import express from 'express';
import path from 'path';
import { dbConfig, middlewaresConfig } from './config';

const app = express();

const PORT = process.env.PORT || 3000;

let mongoConf;

if (process.env.NODE_ENV !== 'production') {
  const { devMiddlewaresConfig } = require('./config');

  devMiddlewaresConfig(app);
  mongoConf = 'mongodb://localhost/myblog';
} else {
  app.use(express.static('dist'));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
  mongoConf = process.env.MONGO_URL;
}

/**
* DATABASE
*/
dbConfig(mongoConf);
/**
* MIDDLEWARES
*/
middlewaresConfig(app);

app.get('/api/v1/hello', (req, res) => {
  res.send('Hello Hello');
});

app.listen(PORT, err => {
  if (err) { return console.error(err); }

  console.log(`App running to port: ${PORT}`);
});
