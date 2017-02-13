/** @flow */
import express from 'express';
import { join } from 'path';
import { dbConfig, middlewaresConfig } from './config';
import { PostRoutes } from './modules';

const app = express();

const PORT: string | number = process.env.PORT || 3000;

middlewaresConfig(app);

if (process.env.NODE_ENV !== 'production') {
  /**
  * Database on dev
  */
  const mongoConf: string = 'mongodb://localhost/myblog';
  dbConfig(mongoConf);
} else {
  require('dotenv').config();

  app.use(express.static('dist'));
  app.get('*', (req: express$Request, res: express$Response) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });

  const mongoConf = process.env.MONGODB;
  if (!mongoConf) {
    throw new Error('Error with mongodb Process');
  } else {
    dbConfig(mongoConf);
  }
}

app.use('/api/v1', PostRoutes);

app.listen(PORT, err => {
  if (err) { return console.error(err); }

  console.log(`App running to port: ${PORT}`);
});
