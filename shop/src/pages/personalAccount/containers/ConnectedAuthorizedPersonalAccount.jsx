import { connect } from 'react-redux';
import WithRouterAuthorizedPersonalAccount from './WithRouterAuthorizedPersonalAccountComponent';
import { ENTER, LOGIN, CLEAR } from '../../../redux/actions/loginPersonalAccountActions';
import { DELETEALL } from '../../../redux/actions/catalogItemsActions';

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
      type: CLEAR.type,
    }),
    onDeleteAll: () => dispatch({
      type: DELETEALL.type,
    }),
  }),
)(WithRouterAuthorizedPersonalAccount);

export default ConnectedAuthorizedPersonalAccount;
