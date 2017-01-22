import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import DashboardPlugin from 'webpack-dashboard/plugin';
import webpackConfig from '../../webpack.config';

const compiler = webpack(webpackConfig);
compiler.apply(new DashboardPlugin());

export default (app) => {
  app.use(webpackMiddleware(compiler));
};
