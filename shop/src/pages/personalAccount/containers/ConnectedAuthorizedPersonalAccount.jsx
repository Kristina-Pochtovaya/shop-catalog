import { connect } from 'react-redux';
import WithRouterAuthorizedPersonalAccount from './WithRouterAuthorizedPersonalAccountComponent';
import { ENTER, LOGIN, DELETE } from '../../../redux/actions/loginPersonalAccountActions';

const ConnectedAuthorizedPersonalAccount = connect(
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
    onDelete: () => dispatch({
      type: DELETE.type,
    }),
  }),
)(WithRouterAuthorizedPersonalAccount);

export default ConnectedAuthorizedPersonalAccount;
