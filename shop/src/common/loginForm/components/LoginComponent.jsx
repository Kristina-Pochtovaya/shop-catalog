import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientLogin: '',
      clientPassword: '',
    };
  }

  render() {
    const {
      clientLogin, clientPassword,
    } = this.state;
    const { setLoginFormLoginPage, setLoginLoginFormForgetPassword } = this.props;
    return (
      <form className="form">
        <div className="login">
          <p className="loginString">Логин:</p>
          <input
            className="loginInput"
            type="text"
            name="LOGIN"
            value={clientLogin}
            onChange={((event) => this.setState({ clientLogin: event.target.value }))}
          />
        </div>
        <div className="password">
          <p className="passwordString">Пароль:</p>
          <input
            className="passwordInput"
            type="password"
            name="PASSWORD"
            value={clientPassword}
            onChange={((event) => this.setState({ clientPassword: event.target.value }))}
          />
        </div>
        <button
          type="button"
          className="entranceButton"
        >
          Войти
        </button>
        <button
          type="button"
          className="forgotPasswordButton"
          onClick={() => {
            setLoginFormLoginPage(false);
            setLoginLoginFormForgetPassword(true);
          }}
        >
          Забыли пароль?
        </button>
        <button
          type="button"
          className="registrationButton"
        >
          Регистрация
        </button>
      </form>

    );
  }
}

export default Login;
