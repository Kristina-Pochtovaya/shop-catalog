import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ENTER, LOGIN } from '../../../redux/actions/loginPersonalAccountActions';
import Registration from '../components/RegistrationComponent';

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
  }),
)(Registration);

export default withRouter(ConnectedRegistration);
