import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { reduxForm } from 'redux-form';
import { push } from 'connected-react-router'
import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFailure,
  userLoginReset
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
          const {data, error} = res.payload;

          if (data) {
            dispatch(userLoginSuccess(data));
            dispatch(push('/'))
          } else {
            dispatch(userLoginFailure(error));
            dispatch(userLoginReset());
          }
        })
        .catch(error => {
          dispatch(userLoginFailure(error));
          dispatch(userLoginReset());
        });
    }
  }
}

const reduxLoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default reduxForm({
  form: 'login',
  validate
})(reduxLoginForm);
