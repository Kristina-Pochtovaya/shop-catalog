import { connect } from 'react-redux';
import WithRouterAddCategoryPage from './WithRouterAdminPersonalAccountComponent';
import { ENTER, LOGIN, DELETE } from '../../../redux/actions/loginPersonalAccountActions';

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
    onDelete: () => dispatch({
      type: DELETE.type,
    }),
  }),
)(WithRouterAddCategoryPage);

export default ConnectedAdminPersonalAccount;
