import express from 'express';
import path from 'path';
import { dbConfig, middlewaresConfig } from './config';
import { PostRoutes } from './modules';

const app = express();

const PORT = process.env.PORT || 3000;

/**
* MIDDLEWARES
*/
middlewaresConfig(app);

app.get('/api/v1/hello', (req, res) => {
  res.json({ message: 'hello from the server' });
});

app.use('/api/v1', [PostRoutes]);

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
  mongoConf = process.env.MONGODB;
}

/**
* DATABASE
*/
dbConfig(mongoConf);

app.listen(PORT, err => {
  if (err) { return console.error(err); }

  console.log(`App running to port: ${PORT}`);
});
