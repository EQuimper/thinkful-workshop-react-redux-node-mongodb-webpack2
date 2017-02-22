/** @flow */
import { type $Application } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import fs from 'fs';
import { join } from 'path';

const isProd = process.env.NODE_ENV === 'production';

export default (app: $Application) => {
  if (isProd) {
    // Make a gzip with the server
    // Better perf with that
    // Only use in production
    app.use(compression());
    // Create a file with the log from morgan
    const accessLogStream = fs.createWriteStream(join(__dirname, 'access.log'), { flags: 'a' });
    app.use(morgan('combined', { stream: accessLogStream }));
  } else {
    // We use morgan here for get the request in the console
    app.use(morgan('dev'));
  }
  // This is for parse the req.body to a json format
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};
