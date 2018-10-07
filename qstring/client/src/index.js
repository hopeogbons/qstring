import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store/configureStore';
import 'sanitize.css/sanitize.css';
import './index.css';
import App from './pages/App';

render(
  <Provider store={ store }>
    <ConnectedRouter history={history}>
      <App history={history}/>
    </ConnectedRouter>
  </Provider>
  , document.querySelector('#root')
);
