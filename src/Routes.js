/** @flow */
import React from 'react';
import { Router, browserHistory } from 'react-router';

import App from './layout/App';

const errorLoading = (err: Object): void =>
 console.error('Dynamic page loading failed', err); // eslint-disable-line

const componentRoutes = {
  component: App,
  path: '/',
  childRoutes: [
    {
      path: '/posts',
      async getComponent(location: string, cb: Function) {
        try {
          const module = await import('./modules/posts/Posts');
          cb(null, module.default);
        } catch (e) {
          errorLoading(e);
        }
      },
    },
    {
      path: '/posts/:id',
      async getComponent(location: string, cb: Function) {
        try {
          const module = await import('./modules/posts/SinglePost');
          cb(null, module.default);
        } catch (e) {
          errorLoading(e);
        }
      },
    },
  ],
};

export default () => (
  <Router history={browserHistory} key={Math.random()} routes={componentRoutes} />
);
