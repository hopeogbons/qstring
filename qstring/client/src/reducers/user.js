import {
  USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_RESET,
  USER_TOKEN_AUTH_REQUEST, USER_TOKEN_AUTH_SUCCESS, USER_TOKEN_AUTH_FAILURE, USER_TOKEN_AUTH_RESET
} from '../actions/users';

const INITIAL_STATE = {
  activeUser: { data: null, error: null, loading: false }
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    // login
    case USER_LOGIN_REQUEST:
      return { ...state, activeUser: { ...INITIAL_STATE.activeUser, ...action.payload } };
    case USER_LOGIN_SUCCESS:
      return { ...state, activeUser: { ...INITIAL_STATE.activeUser, ...action.payload } };
    case USER_LOGIN_FAILURE:
      return { ...state, activeUser: { ...INITIAL_STATE.activeUser, ...action.payload } };
    case USER_LOGIN_RESET:
      return { ...state, activeUser: { ...INITIAL_STATE.activeUser } };

    // authenticate
    case USER_TOKEN_AUTH_REQUEST:
      return { ...state, activeUser: { ...INITIAL_STATE.activeUser, ...action.payload } };
    case USER_TOKEN_AUTH_SUCCESS:
      return { ...state, activeUser: { ...INITIAL_STATE.activeUser, ...action.payload } };
    case USER_TOKEN_AUTH_FAILURE:
      return { ...state, activeUser: { ...INITIAL_STATE.activeUser, ...action.payload } };
    case USER_TOKEN_AUTH_RESET:
      return { ...state, activeUser: { ...INITIAL_STATE.activeUser } };

    default:
      return state;
  }
}
