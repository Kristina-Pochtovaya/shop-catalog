import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ENTER, LOGIN } from '../../../redux/actions/loginPersonalAccountActions';
import setErrorNotNull from '../../untils/setErrorNotNull';
import removeErrorNotNull from '../../untils/removeErrorNotNull';
import ErrorSymbol from '../../errorSymbol/components/ErrorSymbolComponent';

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
          <input
            className={clientLoginInput}
            type="text"
            name="LOGIN"
            value={clientLogin}
            onChange={((event) => {
              this.setState({ clientLogin: event.target.value });
              removeErrorNotNull(clientLoginInput, clientLoginSymbol);
            })}
          />
          <ErrorSymbol Class={`${clientLoginSymbol} -disabled`} />
        </div>
        <div className="password">
          <p className="passwordString -required">Пароль:</p>
          <input
            className={clientPasswordInput}
            type="password"
            name="PASSWORD"
            value={clientPassword}
            onChange={((event) => {
              this.setState({ clientPassword: event.target.value });
              removeErrorNotNull(clientPasswordInput, clientPasswordSymbol);
            })}
          />
          <ErrorSymbol Class={`${clientPasswordSymbol} -disabled`} />
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
