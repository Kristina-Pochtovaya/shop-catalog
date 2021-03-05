import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ENTER, ENTEREMAIL, LOGIN } from '../../../redux/actions/loginPersonalAccountActions';
import setErrorNotNull from '../../untils/setErrorNotNull';
import removeErrorNotNull from '../../untils/removeErrorNotNull';

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
            id={emailInput}
            type="email"
            name="EMAIL"
            value={pages.loginPersonalAccountReducer.clientEmail}
            onChange={((event) => {
              onEnterEmail(event.target.value);
              removeErrorNotNull(emailInput, emailSymbol);
            })}
          />
          <svg className={`${emailSymbol} -disabled`} viewBox="0 0 14.98 15" id={emailSymbol}>
            <g>
              <path d="M7.49,0A7.5,7.5,0,1,0,15,7.51,7.49,7.49,0,0,0,7.49,0Zm0,14.27a6.77,6.77,0,1,1,6.76-6.76A6.78,6.78,0,0,1,7.49,14.27Zm.37-3.71a.39.39,0,1,1-.39-.39A.39.39,0,0,1,7.86,10.57ZM7.1,8.65V4.23a.35.35,0,1,1,.7,0V8.65A.35.35,0,0,1,7.45,9,.34.34,0,0,1,7.1,8.65Z" />
            </g>
          </svg>
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
