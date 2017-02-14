/** @flow */
import React from 'react';
import { Router, browserHistory } from 'react-router';
import App from './layout/App';

type Module = {
  default: Object
}

const errorLoading = (err: Object): void =>
 console.error('Dynamic page loading failed', err);

const loadRoute = (cb: (err: ?Object, module: Module) => void): Function =>
  (module: Module) => cb(null, module.default);

const componentRoutes = {
  component: App,
  path: '/',
  childRoutes: [
    {
      path: '/posts',
      getComponent(location: string, cb: Function) {
        System.import('./modules/posts/Posts')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: '/posts/:id',
      getComponent(location: string, cb: Function) {
        System.import('./modules/posts/SinglePost')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    }
  ]
};

export default () => (
  <Router history={browserHistory} key={Math.random()} routes={componentRoutes} />
);
