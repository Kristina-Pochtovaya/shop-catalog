import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ENTER, LOGIN, ENTEREMAIL } from '../../../redux/actions/loginPersonalAccountActions';
import WithRouterRegistrationComponent from './WithRouterRegistrationComponent';

const ConnectedRegistration = connect(
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
)(WithRouterRegistrationComponent);

export default withRouter(ConnectedRegistration);
