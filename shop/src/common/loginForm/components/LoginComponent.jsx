import React from 'react';
import { Link } from 'react-router-dom';
import InputWitchCkeckingNotNull from '../../input/components/InputWitchCkeckingNotNullComponent';
import removeErrorNotNull from '../../untils/removeErrorNotNull';
import processResultLoginForgetPassword from '../../untils/processResultLoginForgetPassword';
import ButtonLogin from '../../button/components/ButtonLoginComponent';
import setErrorNotNullGroupsLogin from '../../untils/setErrorNotNullGroupsLogin';

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

    function handleButtonClick() {
      clientLogin && clientPassword
        ? processResultLoginForgetPassword(
          onEnter, onLogin, history, onAdd, onEnterEmail, clientLogin, clientPassword,
        )
        : setErrorNotNullGroupsLogin(clientLogin, clientLoginInput, clientLoginSymbol,
          clientPassword, clientPasswordInput, clientPasswordSymbol);
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
            removeErrorNotNull={removeErrorNotNull}
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
            removeErrorNotNull={removeErrorNotNull}
          />
        </div>
        <ButtonLogin
          className="entranceButton"
          handleButtonClick={handleButtonClick}
          onLogin=""
          onEnterEmail=""
          clientLogin=""
        >
          Войти
        </ButtonLogin>
        <ButtonLogin
          className="forgotPasswordButton"
          handleButtonClick=""
          onLogin={onLogin}
          onEnterEmail={onEnterEmail}
          clientLogin={clientLogin}
        >
          Забыли пароль?
        </ButtonLogin>
        <Link to="/registration">
          <ButtonLogin
            className="registrationButton"
            handleButtonClick=""
            onLogin={onLogin}
            onEnterEmail=""
            clientLogin=""
          >
            Регистрация
          </ButtonLogin>
        </Link>
      </form>

    );
  }
}

export default Login;
