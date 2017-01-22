import express from 'express';
import path from 'path';
import { dbConfig, middlewaresConfig } from './config';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/api/v1/hello', (req, res) => {
  res.json({ message: 'hello from the server' });
});

let mongoConf;

if (process.env.NODE_ENV !== 'production') {
  /**
  * Database on dev
  */
  mongoConf = 'mongodb://localhost/myblog';
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });

  /**
  * Database on production
  */
  mongoConf = 'mongodb://localhost/myblog';
}

/**
* DATABASE
*/
dbConfig(mongoConf);
/**
* MIDDLEWARES
*/
middlewaresConfig(app);

app.listen(PORT, err => {
  if (err) { return console.error(err); }

  console.log(`App running to port: ${PORT}`);
});
