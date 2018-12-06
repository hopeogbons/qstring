import { connect } from 'react-redux';
import QstringForm from '../components/QstringForm';
import { reduxForm } from 'redux-form';
import { push } from 'connected-react-router';
import {
  createQstringRequest,
  createQstringSuccess,
  createQstringFailure,
  createQstringReset
} from '../actions/qstrings';

// client side validation
function validate(values) {
  const errors = {};
  if (!(values.title || '').trim()) errors.title = 'Enter a title';
  if (!(values.desc || '').trim()) errors.desc = 'Enter a description';
  if (!(values.mappingset || '').trim()) errors.mapping_id = 'Enter a mappingset';
  if (!(values.revision || '').trim()) errors.revision_id = 'Enter a revision';
  if (!(values.submission_url || '').trim()) errors.submission_url = 'Enter a submission url';
  if (!(values.is_active || '').trim()) errors.is_active = 'Select a status';
  return errors;
}

function mapStateToProps(state) {
  return {
    qstringDetails: state.form.qstring.values
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (qstringDetails) => {
      dispatch(createQstringRequest(qstringDetails))
        .then((res) => {
          const { data, error } = res.payload;

          if (data) {
            dispatch(createQstringSuccess(data));
            dispatch(push('/'))
          } else {
            dispatch(createQstringFailure(error));
            dispatch(createQstringReset());
          }
        })
        .catch(error => {
          dispatch(createQstringFailure(error));
          dispatch(createQstringReset());
        });
    }
  }
}

const reduxQstringForm = connect(mapStateToProps, mapDispatchToProps)(QstringForm);

export default reduxForm({
  form: 'qstring',
  validate
})(reduxQstringForm);