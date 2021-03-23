import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  ENTER, LOGIN, AUTOCOMPLETE, ENTEREMAIL,
} from '../../../redux/actions/loginPersonalAccountActions';
import Login from '../components/LoginComponent';

const ConnectedLogin = connect(
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
    onAdd: (
      firstName, phone, address,
    ) => dispatch({
      type: AUTOCOMPLETE.type,
      payload: {
        firstName, phone, address,
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
)(Login);

export default withRouter(ConnectedLogin);
