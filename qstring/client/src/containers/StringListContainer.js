import { connect } from 'react-redux';
import StringList from '../components/StringList';
import {push} from "connected-react-router";

const mapDispatchToProps = (dispatch) => {
  return {
    gotoStringForm: () => {
      dispatch(push('/create'));
    }
  }
}

export default connect(null, mapDispatchToProps)(StringList);
