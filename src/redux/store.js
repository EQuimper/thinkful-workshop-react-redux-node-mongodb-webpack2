// @flow

import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

let middlewares: Array<Function> = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, createLogger()];
}

const enhancers = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension()
    : f => f,
);

// $FlowFixMe
const store = createStore(rootReducer, {}, enhancers);

export default store;
