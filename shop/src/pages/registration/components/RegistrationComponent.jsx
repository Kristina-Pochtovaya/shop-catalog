import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ENTER, LOGIN } from '../../../redux/actions/loginPersonalAccountActions';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';
import setErrorNotNull from '../../../common/untils/setErrorNotNull';
import removeErrorNotNull from '../../../common/untils/removeErrorNotNull';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      idClassFirstNameInput: 'firtNameInput',
      idClassFirstNameSymbol: 'errorSymbolFirtName',
      lastName: '',
      idClassLastNameInput: 'lastNameInput',
      idClassLastNameSymbol: 'errorSymbolLastName',
      clientEmail: '',
      idClassEmailInput: 'emailRegistrationInput',
      idClassEmailSymbol: 'errorSymbolRegistrationEmail',
      passwordNew: '',
      idClassPasswordNewInput: 'passwordNewInputRegistration',
      idClassPasswordNewSymbol: 'errorSymbolPasswordNewRegistration',
      passwordNewRepeat: '',
      idClassPasswordRepeatInput: 'passwordNewRepeatInputRegistration',
      idClassPasswordRepeatSymbol: 'errorSymbolPasswordNewRepeatRegistration',
    };
  }

  render() {
    const {
      firstName, idClassFirstNameInput, idClassFirstNameSymbol,
      lastName, idClassLastNameInput, idClassLastNameSymbol,
      clientEmail, idClassEmailInput, idClassEmailSymbol,
      passwordNew, idClassPasswordNewInput, idClassPasswordNewSymbol,
      passwordNewRepeat, idClassPasswordRepeatInput, idClassPasswordRepeatSymbol,
    } = this.state;
    const { onEnter, onLogin } = this.props;
    return (
      <>
        <Header linkItem={<button type="button" className="buttonBack">Главная</button>} link="/main-page" disabled={false} />
        <div className="registration-wrap">
          <h2> Регистрация </h2>
          <form className="registration">
            <div className="firstName">
              <p className="firstNameString -required">Имя:</p>
              <input
                className={idClassFirstNameInput}
                id={idClassFirstNameInput}
                type="text"
                name="firstName"
                value={firstName}
                onChange={((event) => {
                  this.setState({ firstName: event.target.value });
                  removeErrorNotNull(idClassFirstNameInput, idClassFirstNameSymbol);
                })}
              />
              <svg className={`${idClassFirstNameSymbol} -disabled`} viewBox="0 0 14.98 15" id={idClassFirstNameSymbol}>
                <g>
                  <path d="M7.49,0A7.5,7.5,0,1,0,15,7.51,7.49,7.49,0,0,0,7.49,0Zm0,14.27a6.77,6.77,0,1,1,6.76-6.76A6.78,6.78,0,0,1,7.49,14.27Zm.37-3.71a.39.39,0,1,1-.39-.39A.39.39,0,0,1,7.86,10.57ZM7.1,8.65V4.23a.35.35,0,1,1,.7,0V8.65A.35.35,0,0,1,7.45,9,.34.34,0,0,1,7.1,8.65Z" />
                </g>
              </svg>
            </div>
            <div className="lastName">
              <p className="lastNameString -required">Фамилия:</p>
              <input
                className={idClassLastNameInput}
                id={idClassLastNameInput}
                type="text"
                name="lasttName"
                value={lastName}
                onChange={((event) => {
                  this.setState({ lastName: event.target.value });
                  removeErrorNotNull(idClassLastNameInput, idClassLastNameSymbol);
                })}
              />
              <svg className={`${idClassLastNameSymbol} -disabled`} viewBox="0 0 14.98 15" id={idClassLastNameSymbol}>
                <g>
                  <path d="M7.49,0A7.5,7.5,0,1,0,15,7.51,7.49,7.49,0,0,0,7.49,0Zm0,14.27a6.77,6.77,0,1,1,6.76-6.76A6.78,6.78,0,0,1,7.49,14.27Zm.37-3.71a.39.39,0,1,1-.39-.39A.39.39,0,0,1,7.86,10.57ZM7.1,8.65V4.23a.35.35,0,1,1,.7,0V8.65A.35.35,0,0,1,7.45,9,.34.34,0,0,1,7.1,8.65Z" />
                </g>
              </svg>
            </div>
            <div className="email">
              <p className="emailString -required">Email:</p>
              <input
                className={idClassEmailInput}
                id={idClassEmailInput}
                type="email"
                name="EMAIL"
                value={clientEmail}
                onChange={((event) => {
                  this.setState({ clientEmail: event.target.value });
                  removeErrorNotNull(idClassEmailInput, idClassEmailSymbol);
                })}
              />
              <svg className={`${idClassEmailSymbol} -disabled`} viewBox="0 0 14.98 15" id={idClassEmailSymbol}>
                <g>
                  <path d="M7.49,0A7.5,7.5,0,1,0,15,7.51,7.49,7.49,0,0,0,7.49,0Zm0,14.27a6.77,6.77,0,1,1,6.76-6.76A6.78,6.78,0,0,1,7.49,14.27Zm.37-3.71a.39.39,0,1,1-.39-.39A.39.39,0,0,1,7.86,10.57ZM7.1,8.65V4.23a.35.35,0,1,1,.7,0V8.65A.35.35,0,0,1,7.45,9,.34.34,0,0,1,7.1,8.65Z" />
                </g>
              </svg>
            </div>
            <div className="passwordNew">
              <p className="passwordNewString -required">Пароль:</p>
              <input
                className={idClassPasswordNewInput}
                id={idClassPasswordNewInput}
                type="password"
                name="PASSWORD"
                value={passwordNew}
                onChange={((event) => {
                  this.setState({ passwordNew: event.target.value });
                  removeErrorNotNull(idClassPasswordNewInput, idClassPasswordNewSymbol);
                })}
              />
              <svg className={`${idClassPasswordNewSymbol} -disabled`} viewBox="0 0 14.98 15" id={idClassPasswordNewSymbol}>
                <g>
                  <path d="M7.49,0A7.5,7.5,0,1,0,15,7.51,7.49,7.49,0,0,0,7.49,0Zm0,14.27a6.77,6.77,0,1,1,6.76-6.76A6.78,6.78,0,0,1,7.49,14.27Zm.37-3.71a.39.39,0,1,1-.39-.39A.39.39,0,0,1,7.86,10.57ZM7.1,8.65V4.23a.35.35,0,1,1,.7,0V8.65A.35.35,0,0,1,7.45,9,.34.34,0,0,1,7.1,8.65Z" />
                </g>
              </svg>
            </div>
            <div className="passwordNewRepeat">
              <p className="passwordNewRepeatString -required">Повторите пароль:</p>
              <input
                className={idClassPasswordRepeatInput}
                id={idClassPasswordRepeatInput}
                type="password"
                name="PASSWORD"
                value={passwordNewRepeat}
                onChange={((event) => {
                  this.setState({ passwordNewRepeat: event.target.value });
                  removeErrorNotNull(idClassPasswordRepeatInput, idClassPasswordRepeatSymbol);
                })}
              />
              <svg className={`${idClassPasswordRepeatSymbol} -disabled`} viewBox="0 0 14.98 15" id={idClassPasswordRepeatSymbol}>
                <g>
                  <path d="M7.49,0A7.5,7.5,0,1,0,15,7.51,7.49,7.49,0,0,0,7.49,0Zm0,14.27a6.77,6.77,0,1,1,6.76-6.76A6.78,6.78,0,0,1,7.49,14.27Zm.37-3.71a.39.39,0,1,1-.39-.39A.39.39,0,0,1,7.86,10.57ZM7.1,8.65V4.23a.35.35,0,1,1,.7,0V8.65A.35.35,0,0,1,7.45,9,.34.34,0,0,1,7.1,8.65Z" />
                </g>
              </svg>
            </div>
            {(firstName && lastName && clientEmail && passwordNewRepeat)
            && (passwordNew === passwordNewRepeat) ? (
              <Link to="/personal">
                <button
                  type="button"
                  className="registrationButton"
                  onClick={() => {
                    onEnter(false, true);
                    onLogin(false, false, false);
                  }}
                >
                  Зарегестрироваться
                </button>
              </Link>
              )
              : (
                <button
                  type="button"
                  className="registrationButton"
                  onClick={() => {
                    if (!firstName) {
                      setErrorNotNull(idClassFirstNameInput, idClassFirstNameSymbol);
                    }
                    if (!lastName) {
                      setErrorNotNull(idClassLastNameInput, idClassLastNameSymbol);
                    }
                    if (!clientEmail) {
                      setErrorNotNull(idClassEmailInput, idClassEmailSymbol);
                    }
                    if (!passwordNew) {
                      setErrorNotNull(idClassPasswordNewInput, idClassPasswordNewSymbol);
                    }
                    if (passwordNew !== passwordNewRepeat) {
                      setErrorNotNull(idClassPasswordRepeatInput, idClassPasswordRepeatSymbol);
                    }
                  }}
                >
                  Зарегестрироваться
                </button>
              )}
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

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

export default ConnectedRegistration;
