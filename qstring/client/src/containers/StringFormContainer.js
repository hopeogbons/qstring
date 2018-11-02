import { connect } from 'react-redux';
import StringForm from '../components/StringForm';
import {createStringRequest, createStringSuccess, createStringFailure} from "../actions/strings";
import {push} from "connected-react-router";
import {reduxForm} from "redux-form";

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (props) => {
      dispatch(createStringRequest(props))
        .then((res) => {
          const {token, error} = res.payload;

          if (token) {
            dispatch(createStringSuccess(token));
            dispatch(push('/'))
          } else {
            dispatch(createStringFailure(error));
          }
        })
        .catch(e => {
          dispatch(createStringFailure(e));
        });
    }
  }
}

const reduxStringForm = connect(null, mapDispatchToProps)(StringForm);

export default reduxForm({
  form: 'login',
  // validate
})(reduxStringForm);