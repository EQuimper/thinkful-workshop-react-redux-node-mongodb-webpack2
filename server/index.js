import express from 'express';
import { join } from 'path';
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

if (process.env.NODE_ENV !== 'production') {
  /**
  * Database on dev
  */
  const mongoConf = 'mongodb://localhost/myblog';
  dbConfig(mongoConf);
} else {
  require('dotenv').config();

  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });

  const mongoConf = process.env.MONGODB;
  dbConfig(mongoConf);
}

app.listen(PORT, err => {
  if (err) { return console.error(err); }

  console.log(`App running to port: ${PORT}`);
});
