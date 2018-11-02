import {
  userTokenAuthFailure,
  userTokenAuthRequest,
  userTokenAuthSuccess,
  userTokenResetRequest
} from "../actions/users";
import {push} from "connected-react-router";

const authenticator = store => next => action => {
  if (action.type === "@@router/LOCATION_CHANGE") {
    const token = localStorage.getItem('qstring');
    store.dispatch(userTokenAuthRequest(token))
      .then(res => {
        const { token, error } = res.payload;
        if (token) {
          store.dispatch(userTokenAuthSuccess(token));
          store.dispatch(push('/'));
        } else {
          store.dispatch(userTokenAuthFailure(error));
          store.dispatch(userTokenResetRequest());
          store.dispatch(push('/login'));
        }
      })
      .catch(error => {
        store.dispatch(userTokenAuthFailure(error));
        store.dispatch(userTokenResetRequest());
        store.dispatch(push('/login'));
      })
  }
  return next(action);
}

export default authenticator;