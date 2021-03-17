import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  ENTER, LOGIN, AUTOCOMPLETE, ENTEREMAIL,
} from '../../../redux/actions/loginPersonalAccountActions';
import setErrorNotNull from '../../untils/setErrorNotNull';
import InputWitchCkeckingNotNull from '../../input/components/InputWitchCkeckingNotNullComponent';
import postLoginForgetPassword from '../../api/post/postLoginForgetPasswordRequest';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientLogin: '',
      clientLoginInput: 'loginInput',
      clientLoginSymbol: 'errorSymbol',
      clientPassword: '',
      clientPasswordInput: 'passwordInput',
      clientPasswordSymbol: 'errorSymbolPassword',
    };
  }

  updateData = (value, name) => {
    if (name === 'clientLogin') { this.setState({ clientLogin: value }); }
    if (name === 'clientPassword') { this.setState({ clientPassword: value }); }
  }

  render() {
    const {
      clientLogin, clientLoginInput, clientLoginSymbol,
      clientPassword, clientPasswordInput, clientPasswordSymbol,
    } = this.state;
    const {
      onLogin, onEnter, history, onAdd, onEnterEmail,
    } = this.props;
    async function handleButtonClick() {
      const incorrectLoginOrPassword = document.getElementById('incorrectLoginOrPassword');
      const result = await postLoginForgetPassword(clientLogin, clientPassword);
      if (result === 'incorrectUserOrPassword') {
        incorrectLoginOrPassword.setAttribute('class', 'incorrectLoginOrPassword');
      } else {
        onEnter(false, true) && onLogin(false, false, false) && history.push('/personal');
        onAdd(result.firstName, result.phoneNumber, result.address);
        onEnterEmail(clientLogin);
      }
    }
    return (
      <form className="form">
        <p id="incorrectLoginOrPassword" className="userNotFoundBlock -disabled">Пользователя с таким email не существует или неверный пароль</p>
        <div className="login">
          <p className="loginString -required">Email:</p>
          <InputWitchCkeckingNotNull
            initialValue={clientLogin}
            type="email"
            name="clientLogin"
            classInput={clientLoginInput}
            classSymbol={clientLoginSymbol}
            updateData={this.updateData}
          />
        </div>
        <div className="password">
          <p className="passwordString -required">Пароль:</p>
          <InputWitchCkeckingNotNull
            initialValue={clientPassword}
            type="password"
            name="clientPassword"
            classInput={clientPasswordInput}
            classSymbol={clientPasswordSymbol}
            updateData={this.updateData}
          />
        </div>
        {clientLogin && clientPassword ? (
          <button
            type="button"
            className="entranceButton"
            onClick={() => {
              handleButtonClick();
            }}
          >
            Войти
          </button>
        ) : (
          <button
            type="button"
            className="entranceButton"
            onClick={() => {
              if (!clientLogin) {
                setErrorNotNull(clientLoginInput, clientLoginSymbol);
              }
              if (!clientPassword) {
                setErrorNotNull(clientPasswordInput, clientPasswordSymbol);
              }
            }}
          >
            Войти
          </button>
        )}
        <button
          type="button"
          className="forgotPasswordButton"
          onClick={() => {
            onLogin(true, false, true);
          }}
        >
          Забыли пароль?
        </button>
        <Link to="/registration">
          <button
            type="button"
            className="registrationButton"
            onClick={() => onLogin(false, false, false)}
          >
            Регистрация
          </button>
        </Link>
      </form>

    );
  }
}

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
