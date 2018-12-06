import {
  CREATE_QSTRING_REQUEST, CREATE_QSTRING_SUCCESS, CREATE_QSTRING_FAILURE, CREATE_QSTRING_RESET,
  FETCH_QSTRING_REQUEST, FETCH_QSTRING_SUCCESS, FETCH_QSTRING_FAILURE, FETCH_QSTRING_RESET
} from '../actions/qstrings';

const INITIAL_STATE = {
  createdQstring: { data: null, error: null, loading: false },
  fetchedQstring: { data: [], error: null, loading: false }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    // create
    case CREATE_QSTRING_REQUEST:
      return { ...state, createdQstring: { ...INITIAL_STATE.createdQstring, ...action.payload } };
    case CREATE_QSTRING_SUCCESS:
      return { ...state, createdQstring: { ...INITIAL_STATE.createdQstring, ...action.payload } };
    case CREATE_QSTRING_FAILURE:
      return { ...state, createdQstring: { ...INITIAL_STATE.createdQstring, ...action.payload } };
    case CREATE_QSTRING_RESET:
      return { ...state, createdQstring: { ...INITIAL_STATE.createdQstring } };
    
    // fetch
    case FETCH_QSTRING_REQUEST:
      return { ...state, fetchedQstring: { ...INITIAL_STATE.fetchedQstring, ...action.payload } };
    case FETCH_QSTRING_SUCCESS:
      return { ...state, fetchedQstring: { ...INITIAL_STATE.fetchedQstring, ...action.payload } };
    case FETCH_QSTRING_FAILURE:
      return { ...state, fetchedQstring: { ...INITIAL_STATE.fetchedQstring, ...action.payload } };
    case FETCH_QSTRING_RESET:
      return { ...state, fetchedQstring: { ...INITIAL_STATE.fetchedQstring } };

    default:
      return state;
  }
}
