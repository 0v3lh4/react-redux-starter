import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; 
import configureStore from './store/configureStore';
import { browserHistory } from 'react-router';
import Root from './Root';

const store = configureStore();
const app = document.getElementById('app');

ReactDOM.render (
  <AppContainer>
    <Root history={browserHistory} store={store} />
  </AppContainer>,
  app
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./Root', () => {
     
      /*eslint-disable no-unused-vars*/

      const nextRoot = require('./Root').default;

      ReactDOM.render (
        <AppContainer>
          <Root history={browserHistory} store={store} />
        </AppContainer>,
        app
      );

    });
  }
}
