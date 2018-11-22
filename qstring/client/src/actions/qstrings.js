import axios from 'axios';

// create new qstring
export const CREATE_QSTRING = 'CREATE_QSTRING';
export const CREATE_QSTRING_SUCCESS = 'CREATE_QSTRING_SUCCESS';
export const CREATE_QSTRING_FAILURE = 'CREATE_QSTRING_FAILURE';
export const RESET_NEW_QSTRING = 'RESET_NEW_QSTRING';

const ROOT_URL = 'http://ui.qstring.local:8500/api/v1';

export function createQstringRequest(formValues) {
  const request = axios({
    method: 'post',
    data: formValues,
    url: `${ROOT_URL}/qstrings`
  });

  return {
    type: CREATE_QSTRING,
    payload: request
  };
}

export function createQstringSuccess(newQstring) {
  return {
    type: CREATE_QSTRING_SUCCESS,
    payload: newQstring
  };
}

export function createQstringFailure(error) {
  return {
    type: CREATE_QSTRING_FAILURE,
    payload: error
  };
}

export function resetNewQstring() {
  return {
    type: RESET_NEW_QSTRING
  }
}


