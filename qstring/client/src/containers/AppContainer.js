import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { withRouter } from 'react-router-dom';
import {
  userTokenAuthRequest,
  userTokenAuthFailure,
  userTokenAuthSuccess,
  userTokenResetRequest
} from '../actions/users';
import App from '../components/App.js';

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserFromToken: () => {
      const token = localStorage.getItem('qstring');
      dispatch(userTokenAuthRequest(token))
        .then(res => {
          const { token, error } = res.payload;
          if (token) {
            dispatch(userTokenAuthSuccess(token));
            dispatch(push('/'));
          } else {
            dispatch(userTokenAuthFailure(error));
            dispatch(userTokenResetRequest());
            dispatch(push('/login'));
          }
        })
        .catch(error => {
          dispatch(userTokenAuthFailure(error));
          dispatch(userTokenResetRequest());
          dispatch(push('/login'));
        })
  	 },
     resetUser: () =>{
     	dispatch(userTokenResetRequest());
     }
  }
}


export default withRouter(connect(null, mapDispatchToProps)(App));