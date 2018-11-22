import { connect } from 'react-redux';
import QstringForm from '../components/QstringForm';
import {createQstringRequest, createQstringSuccess, createQstringFailure} from '../actions/qstrings';
import { push } from 'connected-react-router';
import { reduxForm } from 'redux-form';

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (props) => {
      dispatch(createQstringRequest(props))
        .then((res) => {
          const {token, error} = res.payload;

          if (token) {
            dispatch(createQstringSuccess(token));
            dispatch(push('/'))
          } else {
            dispatch(createQstringFailure(error));
          }
        })
        .catch(e => {
          dispatch(createQstringFailure(e));
        });
    }
  }
}

const reduxQstringForm = connect(null, mapDispatchToProps)(QstringForm);

export default reduxForm({
  form: 'qstring',
  // validate
})(reduxQstringForm);