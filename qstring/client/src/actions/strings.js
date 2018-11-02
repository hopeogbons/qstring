import axios from 'axios';

// create new string
export const CREATE_STRING = 'CREATE_STRING';
export const CREATE_STRING_SUCCESS = 'CREATE_STRING_SUCCESS';
export const CREATE_STRING_FAILURE = 'CREATE_STRING_FAILURE';
export const RESET_NEW_STRING = 'RESET_NEW_STRING';

const ROOT_URL = 'http://ui.qstring.local:8500/api/v1';

export function createStringRequest(formValues) {
  const request = axios({
    method: 'post',
    data: formValues,
    url: `${ROOT_URL}/strings`
  });

  return {
    type: CREATE_STRING,
    payload: request
  };
}

export function createStringSuccess(newString) {
  return {
    type: CREATE_STRING_SUCCESS,
    payload: newString
  };
}

export function createStringFailure(error) {
  return {
    type: CREATE_STRING_FAILURE,
    payload: error
  };
}

export function resetNewString() {
  return {
    type: RESET_NEW_STRING
  }
}


