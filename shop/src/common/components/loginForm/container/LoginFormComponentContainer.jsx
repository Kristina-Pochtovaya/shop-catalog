import { connect } from 'react-redux';
import { LOGIN } from '../../../../redux/actions/loginPersonalAccountActions';
import LoginForm from '../components/LoginFormComponent';

const ConnectedLoginForm = connect(
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
)(LoginForm);

export default ConnectedLoginForm;
