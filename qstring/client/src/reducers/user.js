import {
  USER_TOKEN_AUTH_REQUEST, USER_TOKEN_AUTH_SUCCESS, USER_TOKEN_AUTH_FAILURE,
	USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT_REQUEST,
  USER_TOKEN_RESET_REQUEST
} from '../actions/users';

const INITIAL_STATE = {user: null, status:null, error:null, loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;

  switch(action.type) {
    case USER_TOKEN_AUTH_REQUEST:
      return {...state, user: null, status:'storage', error:null, loading: true};
    case USER_TOKEN_AUTH_SUCCESS:
      return {...state, user: action.payload.data.user, status:'authenticated', error:null, loading: false};
    case USER_TOKEN_AUTH_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return {...state, user: null, status:'storage', error:error, loading: false};

    case USER_TOKEN_RESET_REQUEST:
      return {...state, user: null, status:'storage', error:null, loading: false};

    case USER_LOGIN_REQUEST:
      return {...state, user: null, status:'login', error:null, loading: true};
    case USER_LOGIN_SUCCESS:
      return {...state, user: action.payload.user, status:'authenticated', error:null, loading: false};
    case USER_LOGIN_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return {...state, user: null, status:'login', error:error, loading: false};

    case USER_LOGOUT_REQUEST:
      return {...state, user:null, status:'logout', error:null, loading: false};
    
    default:
      return state;
  }
}
