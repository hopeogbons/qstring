import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form';
import user from './user';
import qstring from './qstring';

export default combineReducers({
  form,
  user,
  qstring
})
