import { connect } from 'react-redux';
import WithRouterAddCategoryPage from './WithRouterAdminPersonalAccountComponent';
import { ENTER, LOGIN, CLEAR } from '../../../redux/actions/loginPersonalAccountActions';
import { DELETEALL } from '../../../redux/actions/catalogItemsActions';

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
      type: CLEAR.type,
    }),
    onDeleteAll: () => dispatch({
      type: DELETEALL.type,
    }),
  }),
)(WithRouterAddCategoryPage);

export default ConnectedAdminPersonalAccount;
