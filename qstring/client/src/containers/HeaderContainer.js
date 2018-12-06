import { connect } from 'react-redux';
import Header from '../components/Header';
import { userLoginReset } from "../actions/users";
import { push } from "connected-react-router";

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(userLoginReset())
        .then(() => {
          dispatch(push('/login'));
        })
        .catch(() => {
          dispatch(push('/'));
        })
    }
  }
}

export default connect(null, mapDispatchToProps)(Header);
