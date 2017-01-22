import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Routes } from './components';
import App from './layout/App';
import './styles/styles.css';

// const hmrRender = Component => {
//   render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById('app')
//   );
// };

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
);

// hmrRender(App);

// Hot Module Replacement API
if (module.hot) {
  console.log('hello');
  module.hot.accept('./layout/App', () => {
    const NextApp = require('./layout/App').default;

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
