/** @flow */
import { applyMiddleware, compose, createStore } from 'redux';
// import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let middlewares: Array<Function> = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, logger()];
}

const enhancers = compose(
  applyMiddleware(...middlewares),
  (window.devToolsExtension && process.env.NODE_ENV !== 'production')
  ? window.devToolsExtension()
  : f => f
);

// Create the store with the (reducer, initialState, compose)
const store = createStore(
  rootReducer,
  {},
  enhancers
);

export default store;
