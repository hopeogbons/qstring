import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { withRouter } from 'react-router-dom';
import {
  userTokenAuthRequest,
  userTokenAuthFailure,
  userTokenAuthSuccess,
  userTokenAuthReset
} from '../actions/users';
import App from '../components/App.js';

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserFromToken: () => {
      dispatch(userTokenAuthRequest())
        .then(res => {
          const { data, error } = res.payload;
          if (data) {
            dispatch(userTokenAuthSuccess(data));
            dispatch(push('/'));
          } else {
            dispatch(userTokenAuthFailure(error));
            dispatch(userTokenAuthReset());
            dispatch(push('/login'));
          }
        })
        .catch(error => {
          dispatch(userTokenAuthFailure(error));
          dispatch(userTokenAuthReset());
          dispatch(push('/login'));
        })
  	 },
     resetUser: () =>{
     	dispatch(userTokenAuthReset());
     }
  }
}


export default withRouter(connect(null, mapDispatchToProps)(App));