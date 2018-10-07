import axios from 'axios';

// authenticate user
export const USER_TOKEN_AUTH_REQUEST = 'USER_TOKEN_AUTH_REQUEST';
export const USER_TOKEN_AUTH_SUCCESS = 'USER_TOKEN_AUTH_SUCCESS';
export const USER_TOKEN_AUTH_FAILURE = 'USER_TOKEN_AUTH_FAILURE';
export const USER_TOKEN_RESET_REQUEST = 'USER_TOKEN_RESET_REQUEST';

// login user
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

// logout user
export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';

const ROOT_URL = 'http://ui.qstring.local:8000/api/v1';

export function userLoginRequest(formValues) {
  const payload = axios.post(`${ROOT_URL}/auth/login`, formValues)
    .then(res => {
      const payload = {};
      const {data, status} = res;
      if (data.token && status === 200) {
        payload.token = data.token;
        payload.error = null;
      } else {
        payload.token = null;
        payload.error = 'Invalid username and password combination';
      }
      return payload
    })

  return {
    type: USER_LOGIN_REQUEST,
    payload: payload
  };
}

export function userLoginSuccess(token) {
  localStorage.setItem('qstring', token);

  return {
    type: USER_LOGIN_SUCCESS,
    payload: { token: token, error: null }
  };
}

export function userLoginFailure(error) {
  localStorage.removeItem('qstring');

  return {
    type: USER_LOGIN_FAILURE,
    payload: { token: null, error: error }
  };
}

export function userTokenAuthRequest(tokenFromStorage) {
  // check if the token is still valid, if so, get me from the server

  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/me/from/token?token=${tokenFromStorage}`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });

  return {
    type: USER_TOKEN_AUTH_REQUEST,
    payload: request
  };
}

export function userTokenAuthSuccess(currentUser) {
  return {
    type: USER_TOKEN_AUTH_SUCCESS,
    payload: currentUser
  };
}

export function userTokenAuthFailure(error) {
  return {
    type: USER_TOKEN_AUTH_FAILURE,
    payload: error
  };
}

export function userLogoutReqest() {
  localStorage.removeItem('qstring');

  return {
    type: USER_LOGOUT_REQUEST
  };
}

export function userTokenResetRequest() {
  localStorage.removeItem('qstring');

  return {
    type: USER_TOKEN_RESET_REQUEST
  };
}


