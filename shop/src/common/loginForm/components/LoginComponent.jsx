import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ENTER, LOGIN } from '../../../redux/actions/loginPersonalAccountActions';
import setErrorNotNull from '../../untils/setErrorNotNull';
import InputWitchCkeckingNotNull from '../../input/components/InputWitchCkeckingNotNullComponent';

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
      onLogin, onEnter,
    } = this.props;
    return (
      <form className="form">
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
          <Link to="/personal">
            <button
              type="button"
              className="entranceButton"
              onClick={() => {
                onEnter(false, true);
                onLogin(false, false, false);
              }}
            >
              Войти
            </button>
          </Link>
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

export default ConnectedLogin;
