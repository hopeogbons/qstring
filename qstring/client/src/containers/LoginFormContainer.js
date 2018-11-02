import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import {reduxForm} from 'redux-form';
import { push } from 'connected-react-router'
import {
  userLoginRequest,
  userLoginFailure,
  userLoginSuccess
} from '../actions/users';

// client side validation
function validate(values) {
  const errors = {};
  if (!(values.username || '').trim()) errors.username = 'Enter a username';
  if (!(values.password || '').trim()) errors.password = 'Enter a password';
  return errors;
}

function mapStateToProps(state) {
  return {
    loginCredentials: state.form.login.values
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (loginCredentials) => {
      dispatch(userLoginRequest(loginCredentials))
        .then((res) => {
          const {token, error} = res.payload;

          if (token) {
            dispatch(userLoginSuccess(token));
            dispatch(push('/'))
          } else {
            dispatch(userLoginFailure(error));
          }
        })
        .catch(e => {
          dispatch(userLoginFailure(e));
        });
    }
  }
}

const reduxLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default reduxForm({
  form: 'login',
  validate
})(reduxLogin);
