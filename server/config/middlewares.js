/** @flow */
import { type $Application } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';

export default (app: $Application) => {
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('dev'));
};
