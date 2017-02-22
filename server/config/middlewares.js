/** @flow */
import { type $Application } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';

const isProd = process.env.NODE_ENV === 'production';

export default (app: $Application) => {
  if (isProd) {
    console.log('hello');
    app.use(compression());
  }
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('dev'));
};
