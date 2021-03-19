import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ENTER, ENTEREMAIL, LOGIN } from '../../../redux/actions/loginPersonalAccountActions';
import ForgetPassword from '../components/ForgetPasswordComponent';

const ConnectedForgetPassword = connect(
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
    onEnterEmail: (
      clientEmail,
    ) => dispatch({
      type: ENTEREMAIL.type,
      payload: {
        clientEmail,
      },
    }),
  }),
)(ForgetPassword);

export default withRouter(ConnectedForgetPassword);
