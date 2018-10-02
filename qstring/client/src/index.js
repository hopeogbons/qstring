import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import store, { history } from './store/configureStore';
import setAuthorizationToken from './utils/setAuthorizationToken';

import 'sanitize.css/sanitize.css';
import './index.css';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

setAuthorizationToken(localStorage.getItem('qstring'));

render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Switch>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/" component={ Dashboard } />
      </Switch>
    </ConnectedRouter>
  </Provider>
  , document.querySelector('#root')
);
