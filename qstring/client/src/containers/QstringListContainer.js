import { connect } from 'react-redux';
import QstringList from '../components/QstringList';
import { push } from 'connected-react-router';

const mapDispatchToProps = (dispatch) => {
  return {
    gotoQstringForm: () => {
      dispatch(push('/create'));
    }
  }
}

export default connect(null, mapDispatchToProps)(QstringList);
