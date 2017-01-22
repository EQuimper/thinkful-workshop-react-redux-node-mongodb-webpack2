import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../layout/App';
import { Posts } from '../modules';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="posts" component={Posts} />
    </Route>
  </Router>
);
