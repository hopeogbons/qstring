import {
  USER_TOKEN_AUTH_REQUEST, USER_TOKEN_AUTH_SUCCESS, USER_TOKEN_AUTH_FAILURE,
	USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT_REQUEST,
  USER_TOKEN_RESET_REQUEST
} from '../actions/users';

const INITIAL_STATE = {token: null, error:null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case USER_TOKEN_AUTH_REQUEST:
      return {...state, token: null, error:null};
    case USER_TOKEN_AUTH_SUCCESS:
      return {...state, token: action.payload.token, error:null};
    case USER_TOKEN_AUTH_FAILURE:
      return {...state, token: null, error: action.payload.error};

    case USER_TOKEN_RESET_REQUEST:
      return {...state, token: null, error:null};

    case USER_LOGIN_REQUEST:
      return {...state, token: null, error:null};
    case USER_LOGIN_SUCCESS:
      return {...state, token: action.payload.user, error:null };
    case USER_LOGIN_FAILURE:
      return {...state, token: null,  error: action.payload.error };

    case USER_LOGOUT_REQUEST:
      return {...state, token: null,  error: null };
    
    default:
      return state;
  }
}
