/** @flow */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import store from './redux/store';
import './styles/styles.css';

(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
})();

require('offline-plugin/runtime').install();

const renderApp = Component => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewApp = require('./Root').default;

    renderApp(NewApp);
  });
}
