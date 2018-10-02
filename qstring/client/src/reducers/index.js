import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form';
import user from './user'

export default combineReducers({
  form: form,
  user
})
