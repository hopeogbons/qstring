import axios from 'axios';

// create qstring
export const CREATE_QSTRING_REQUEST = 'CREATE_QSTRING_REQUEST';
export const CREATE_QSTRING_SUCCESS = 'CREATE_QSTRING_SUCCESS';
export const CREATE_QSTRING_FAILURE = 'CREATE_QSTRING_FAILURE';
export const CREATE_QSTRING_RESET = 'CREATE_QSTRING_RESET';

// fetch qstring
export const FETCH_QSTRING_REQUEST = 'FETCH_QSTRING_REQUEST';
export const FETCH_QSTRING_SUCCESS = 'FETCH_QSTRING_SUCCESS';
export const FETCH_QSTRING_FAILURE = 'FETCH_QSTRING_FAILURE';
export const FETCH_QSTRING_RESET = 'FETCH_QSTRING_RESET';

const ROOT_URL = 'http://ui.qstring.local:8500/api/v1';
const TOKEN = localStorage.getItem('qstring');

export function createQstringRequest(formValues) {
  const payload = axios({
    headers: {'Authorization': `Token ${TOKEN}`},
    method: 'post',
    data: formValues,
    url: `${ROOT_URL}/qstrings/`
  })
    .then(res => {
      const request = { loading: true };
      const {data, status} = res;
      if (data && status === 201) {
        request.data = data;
      } else {
        request.error = 'Unable to create qstring at the moment. Please, try again later.';
      }
      return request
    })

  return {
    type: CREATE_QSTRING_REQUEST,
    payload: payload
  };
}
export function createQstringSuccess(data) {
  const payload = { data: data };

  return {
    type: CREATE_QSTRING_SUCCESS,
    payload: payload
  };
}
export function createQstringFailure(error) {
  const payload = { error: error };

  return {
    type: CREATE_QSTRING_FAILURE,
    payload: payload
  };
}
export function createQstringReset() {
  return {
    type: CREATE_QSTRING_RESET
  }
}

export function fetchQstringRequest() {
  const payload = axios({
    headers: {'Authorization': `Token ${TOKEN}`},
    method: 'get',
    url: `${ROOT_URL}/qstrings/`
  })
    .then(res => {
      const request = { loading: true };
      const {data, status} = res;
      if (data && status === 200) {
        request.data = data;
      } else {
        request.error = 'Unable to fetch qstrings at the moment. Please, try again later.';
      }
      return request
    })

  return {
    type: FETCH_QSTRING_REQUEST,
    payload: payload
  }
}
export function fetchQstringSuccess(data) {
  const payload = { data: data };

  return {
    type: FETCH_QSTRING_SUCCESS,
    payload: payload
  };
}
export function fetchQstringFailure(error) {
  const payload = { error: error };

  return {
    type: FETCH_QSTRING_FAILURE,
    payload: payload
  };
}
export function fetchQstringReset() {
  return {
    type: FETCH_QSTRING_RESET
  };
}


