import { connect } from 'react-redux';
import QstringList from '../components/QstringList';
import { push } from 'connected-react-router';
import {
  fetchQstringRequest,
  fetchQstringSuccess,
  fetchQstringFailure,
  fetchQstringReset
} from '../actions/qstrings';

function mapStateToProps(state) {
  return {
    qstrings: state.qstring.fetchedQstring
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadQstringForm: () => {
      dispatch(push('/create'));
    },
    fetchQstrings: () => {
      dispatch(fetchQstringRequest())
      .then(res => {
        const { data, error } = res.payload;
        if (data) {
          dispatch(fetchQstringSuccess(data));
          dispatch(push('/'));
        } else {
          dispatch(fetchQstringFailure(error));
          dispatch(fetchQstringReset());
        }
      })
      .catch(error => {
        dispatch(fetchQstringFailure(error));
        dispatch(fetchQstringReset());
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QstringList);
