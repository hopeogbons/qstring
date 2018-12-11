import axios from 'axios';

// user login
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_LOGIN_RESET = 'USER_LOGIN_RESET';

// user authentication
export const USER_TOKEN_AUTH_REQUEST = 'USER_TOKEN_AUTH_REQUEST';
export const USER_TOKEN_AUTH_SUCCESS = 'USER_TOKEN_AUTH_SUCCESS';
export const USER_TOKEN_AUTH_FAILURE = 'USER_TOKEN_AUTH_FAILURE';
export const USER_TOKEN_AUTH_RESET = 'USER_TOKEN_AUTH_RESET';

const ROOT_URL = 'http://ui.qstring.local:8500/api/v1';
const TOKEN = localStorage.getItem('qstring');

export function userLoginRequest(formValues) {
  const payload = axios({
    url: `${ROOT_URL}/auth/login/`,
    method: 'post',
    data: formValues
  })
    .then(res => {
      const request = { loading: true };
      const { data, status } = res;
      if (data && status === 200) {
        request.data = data;
      } else {
        request.error = 'Invalid username and password combination.';
      }
      return request
    })

  return {
    type: USER_LOGIN_REQUEST,
    payload: payload
  };
}

export function userLoginSuccess(data) {
  const payload = { data: data };
  localStorage.setItem('qstring', payload.data.token);

  return {
    type: USER_LOGIN_SUCCESS,
    payload: payload
  };
}

export function userLoginFailure(error) {
  const payload = { error: error };

  return {
    type: USER_LOGIN_FAILURE,
    payload: payload
  };
}

export function userLoginReset() {
  const payload = axios.post(`${ROOT_URL}/auth/logout/`)
    .then(res => {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('qstring');
      return res;
    })

  return {
    type: USER_LOGIN_RESET,
    payload: payload
  };
}

// TODO: Revamp to use authentication endpoint
export function userTokenAuthRequest() {
  const payload = new Promise(function (resolve, reject) {
    if (TOKEN) {
      return resolve({ data: { token: TOKEN } });
    } else {
      return reject({ error: 'Token does not exist.' });
    }
  });

  return {
    type: USER_TOKEN_AUTH_REQUEST,
    payload: payload
  };
}

export function userTokenAuthSuccess(data) {
  const payload = { data: data };

  return {
    type: USER_TOKEN_AUTH_SUCCESS,
    payload: payload
  };
}

export function userTokenAuthFailure(error) {
  const payload = { error: error };

  return {
    type: USER_TOKEN_AUTH_FAILURE,
    payload: payload
  };
}

export function userTokenAuthReset() {
  delete axios.defaults.headers.common['Authorization'];
  localStorage.removeItem('qstring');

  return {
    type: USER_TOKEN_AUTH_RESET
  };
}


