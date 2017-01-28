import React from 'react';
import { Router, browserHistory } from 'react-router';
import App from './layout/App';

const componentRoutes = {
  component: App,
  path: '/',
  childRoutes: [
    {
      path: '/posts',
      getComponent(location, cb) {
        System.import('./modules/posts/Posts')
          .then(module => cb(null, module.default));
      }
    }
  ]
};

export default () => (
  <Router history={browserHistory} key={Math.random()} routes={componentRoutes} />
);
