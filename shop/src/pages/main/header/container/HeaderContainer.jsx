import { connect } from 'react-redux';
import Header from '../components/HeaderComponent';

import { LOGIN } from '../../../../redux/actions/loginPersonalAccountActions';

const ConnectedHeader = connect(
  (state) => ({
    pages: state,
  }),
  (dispatch) => ({
    onLogin: (
      loginFormIsVisible, loginFormLoginPageIsVisible, loginFormForgetPasswordIsVisible,
    ) => dispatch({
      type: LOGIN.type,
      payload: {
        loginFormIsVisible, loginFormLoginPageIsVisible, loginFormForgetPasswordIsVisible,
      },
    }),
  }),
)(Header);

export default ConnectedHeader;
