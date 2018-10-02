import { connect } from 'react-redux';
import Login from '../components/Login';
import {reduxForm} from 'redux-form';
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
        .then((result) => {
          let {data, status} = result.payload;

          if (data.token && status === 200) {
            dispatch(userLoginSuccess(data));
          } else {
            dispatch(userLoginFailure(data));
            throw data;
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
