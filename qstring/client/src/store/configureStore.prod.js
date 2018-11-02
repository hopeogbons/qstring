import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';
// import authenticator from '../middlewares/authenticator'

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, promise, routerMiddleware(history)];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
);