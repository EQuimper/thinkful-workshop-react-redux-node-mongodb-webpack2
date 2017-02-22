/** @flow */
import { type $Application } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';

const isProd = process.env.NODE_ENV === 'production';

export default (app: $Application) => {
  if (isProd) {
    // Make a gzip with the server
    // Better perf with that
    // Only use in production
    app.use(compression());
  }
  // This is for parse the req.body to a json format
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // We use morgan here for get the request in the console
  app.use(morgan('dev'));
};
