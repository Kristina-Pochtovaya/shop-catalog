import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ENTER, ENTEREMAIL, LOGIN } from '../../../redux/actions/loginPersonalAccountActions';
import setErrorNotNull from '../../untils/setErrorNotNull';
import removeErrorNotNull from '../../untils/removeErrorNotNull';
import ErrorSymbol from '../../errorSymbol/components/ErrorSymbolComponent';

class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: 'emailInput',
      emailSymbol: 'errorSymbol',
    };
  }

  render() {
    const {
      onEnter, onLogin, onEnterEmail, pages,
    } = this.props;
    const { emailInput, emailSymbol } = this.state;
    return (
      <form className="form">
        <div className="login">
          <p className="loginString -required">Email:</p>
          <input
            className={emailInput}
            type="email"
            name="EMAIL"
            value={pages.loginPersonalAccountReducer.clientEmail}
            onChange={((event) => {
              onEnterEmail(event.target.value);
              removeErrorNotNull(emailInput, emailSymbol);
            })}
          />
          <ErrorSymbol Class={`${emailSymbol} -disabled`} />
        </div>
        <div
          type="button"
          className=""
        >
          {pages.loginPersonalAccountReducer.clientEmail ? (
            <Link to="/change-password">
              <button
                type="button"
                className="entranceButton"
                onClick={() => {
                  onEnter(true, false);
                  onLogin(false, false, false);
                }}
              >
                Отправить
              </button>
            </Link>
          ) : (
            <button
              type="button"
              className="entranceButton"
              onClick={() => {
                if (!pages.loginPersonalAccountReducer.clientEmail) {
                  setErrorNotNull(emailInput, emailSymbol);
                }
              }}
            >
              Отправить
            </button>
          )}
        </div>

        <button
          type="button"
          className="forgotPasswordButton"
          onClick={() => {
            onEnter(true, false);
            onLogin(true, true, false);
          }}
        >
          Войти
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

const ConnectedForgetPassword = connect(
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
)(ForgetPassword);

export default ConnectedForgetPassword;
