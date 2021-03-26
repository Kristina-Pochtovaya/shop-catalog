import { connect } from 'react-redux';
import WithRouterAddCategoryPage from './WithRouterAdminPersonalAccountComponent';
import { ENTER, LOGIN } from '../../../redux/actions/loginPersonalAccountActions';

const ConnectedAdminPersonalAccount = connect(
  (state) => ({
    pages: state,
  }),
  (dispatch) => ({
    onEnter: (loginIsVisible, personAccountIsVisible) => dispatch({
      type: ENTER.type,
      payload: { loginIsVisible, personAccountIsVisible },
    }),
    onLogin: (
      loginFormIsVisible, loginFormLoginPageIsVisible, loginFormForgetPasswordIsVisible,
    ) => dispatch({
      type: LOGIN.type,
      payload: {
        loginFormIsVisible, loginFormLoginPageIsVisible, loginFormForgetPasswordIsVisible,
      },
    }),
  }),
)(WithRouterAddCategoryPage);

export default ConnectedAdminPersonalAccount;
