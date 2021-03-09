import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ENTER, LOGIN } from '../../../redux/actions/loginPersonalAccountActions';
import setErrorNotNull from '../../untils/setErrorNotNull';
import InputWitchCkeckingNotNull from '../../input/components/InputWitchCkeckingNotNullComponent';
import postUsersRequest from '../../../pages/registration/api/post/postUsersRequest';

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
    this.updateData = this.updateData.bind(this);
  }

  updateData(value, name) {
    if (name === 'clientLogin') { this.setState({ clientLogin: value }); }
    if (name === 'clientPassword') { this.setState({ clientPassword: value }); }
  }

  render() {
    const {
      clientLogin, clientLoginInput, clientLoginSymbol,
      clientPassword, clientPasswordInput, clientPasswordSymbol,
    } = this.state;
    const {
      onLogin, onEnter, history,
    } = this.props;
    async function handleButtonClick() {
      const userNotFound = document.getElementById('userNotFound');
      const incorrectLogin = document.getElementById('incorrectLogin');
      const result = await postUsersRequest(clientLogin, clientPassword);
      if (result === true) {
        onEnter(false, true) && onLogin(false, false, false) && history.push('/personal');
      } if (result === 'incorrectPassword') {
        incorrectLogin.setAttribute('class', 'incorrectLogin');
      } if (result === 'incorrectEmail') {
        userNotFound.setAttribute('class', 'userNotFoundBlock');
      }
    }

    return (
      <form className="form">
        <p id="userNotFound" className="userNotFoundBlock -disabled">Пользователя с таким email не существует</p>
        <p id="incorrectLogin" className="incorrectLogin -disabled">Неверный пароль</p>
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
  }),
)(Login);

export default withRouter(ConnectedLogin);
