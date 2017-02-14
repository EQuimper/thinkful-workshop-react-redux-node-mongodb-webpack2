/** @flow */
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';

export default (app: express$Application) => {
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('dev'));
};
