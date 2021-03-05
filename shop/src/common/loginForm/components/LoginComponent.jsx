import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ENTER, LOGIN } from '../../../redux/actions/loginPersonalAccountActions';
import setErrorNotNull from '../../untils/setErrorNotNull';
import removeErrorNotNull from '../../untils/removeErrorNotNull';

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
            id={clientLoginInput}
            type="text"
            name="LOGIN"
            value={clientLogin}
            onChange={((event) => {
              this.setState({ clientLogin: event.target.value });
              removeErrorNotNull(clientLoginInput, clientLoginSymbol);
            })}
          />
          <svg className={`${clientLoginSymbol} -disabled`} viewBox="0 0 14.98 15" id={clientLoginSymbol}>
            <g>
              <path d="M7.49,0A7.5,7.5,0,1,0,15,7.51,7.49,7.49,0,0,0,7.49,0Zm0,14.27a6.77,6.77,0,1,1,6.76-6.76A6.78,6.78,0,0,1,7.49,14.27Zm.37-3.71a.39.39,0,1,1-.39-.39A.39.39,0,0,1,7.86,10.57ZM7.1,8.65V4.23a.35.35,0,1,1,.7,0V8.65A.35.35,0,0,1,7.45,9,.34.34,0,0,1,7.1,8.65Z" />
            </g>
          </svg>
        </div>
        <div className="password">
          <p className="passwordString -required">Пароль:</p>
          <input
            className={clientPasswordInput}
            id={clientPasswordInput}
            type="password"
            name="PASSWORD"
            value={clientPassword}
            onChange={((event) => {
              this.setState({ clientPassword: event.target.value });
              removeErrorNotNull(clientPasswordInput, clientPasswordSymbol);
            })}
          />
          <svg className={`${clientPasswordSymbol} -disabled`} viewBox="0 0 14.98 15" id={clientPasswordSymbol}>
            <g>
              <path d="M7.49,0A7.5,7.5,0,1,0,15,7.51,7.49,7.49,0,0,0,7.49,0Zm0,14.27a6.77,6.77,0,1,1,6.76-6.76A6.78,6.78,0,0,1,7.49,14.27Zm.37-3.71a.39.39,0,1,1-.39-.39A.39.39,0,0,1,7.86,10.57ZM7.1,8.65V4.23a.35.35,0,1,1,.7,0V8.65A.35.35,0,0,1,7.45,9,.34.34,0,0,1,7.1,8.65Z" />
            </g>
          </svg>
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
