import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';
import setErrorNotNull from '../../../common/untils/setErrorNotNull';
import removeErrorNotNull from '../../../common/untils/removeErrorNotNull';

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    const { pages } = this.props;
    this.state = {
      clientEmail: pages.loginPersonalAccountReducer.clientEmail,
      clientEmailInput: 'emailChangePasswordInput',
      clientEmailSymbol: 'emailChangePasswordErrorSymbol',
      passwordNew: '',
      passwordNewInput: 'passwordNewInput',
      passwordNewSymbol: 'errorSymbolPasswordNew',
      passwordNewRepeat: '',
      passwordRepeatInput: 'passwordNewRepeatInput',
      passwordRepeatSymbol: 'errorSymbolPasswordNewRepeat',
    };
  }

  render() {
    const {
      clientEmail, clientEmailInput, clientEmailSymbol,
      passwordNew, passwordNewInput, passwordNewSymbol,
      passwordNewRepeat, passwordRepeatInput, passwordRepeatSymbol,
    } = this.state;
    return (
      <>
        <Header linkItem={<button type="button" className="buttonBack">Главная</button>} link="/main-page" disabled={false} />
        <div className="changePassword-wrap">
          <h2> Смена пароля </h2>
          <form className="changePassword">
            <div className="email">
              <p className="emailString -required">Email:</p>
              <input
                className={clientEmailInput}
                id={clientEmailInput}
                type="email"
                name="EMAIL"
                value={clientEmail}
                onChange={((event) => {
                  this.setState({ clientEmail: event.target.value });
                  removeErrorNotNull(clientEmailInput, clientEmailSymbol);
                })}
              />
              <svg className={`${clientEmailSymbol} -disabled`} viewBox="0 0 14.98 15" id={clientEmailSymbol}>
                <g>
                  <path d="M7.49,0A7.5,7.5,0,1,0,15,7.51,7.49,7.49,0,0,0,7.49,0Zm0,14.27a6.77,6.77,0,1,1,6.76-6.76A6.78,6.78,0,0,1,7.49,14.27Zm.37-3.71a.39.39,0,1,1-.39-.39A.39.39,0,0,1,7.86,10.57ZM7.1,8.65V4.23a.35.35,0,1,1,.7,0V8.65A.35.35,0,0,1,7.45,9,.34.34,0,0,1,7.1,8.65Z" />
                </g>
              </svg>
            </div>
            <div className="passwordNew">
              <p className="passwordNewString -required">Пароль:</p>
              <input
                className={passwordNewInput}
                id={passwordNewInput}
                type="password"
                name="PASSWORD"
                value={passwordNew}
                onChange={((event) => {
                  this.setState({ passwordNew: event.target.value });
                  removeErrorNotNull(passwordNewInput, passwordNewSymbol);
                })}
              />
              <svg className={`${passwordNewSymbol} -disabled`} viewBox="0 0 14.98 15" id={passwordNewSymbol}>
                <g>
                  <path d="M7.49,0A7.5,7.5,0,1,0,15,7.51,7.49,7.49,0,0,0,7.49,0Zm0,14.27a6.77,6.77,0,1,1,6.76-6.76A6.78,6.78,0,0,1,7.49,14.27Zm.37-3.71a.39.39,0,1,1-.39-.39A.39.39,0,0,1,7.86,10.57ZM7.1,8.65V4.23a.35.35,0,1,1,.7,0V8.65A.35.35,0,0,1,7.45,9,.34.34,0,0,1,7.1,8.65Z" />
                </g>
              </svg>
            </div>
            <div className="passwordNewRepeat">
              <p className="passwordNewRepeatString -required">Повторите пароль:</p>
              <input
                className={passwordRepeatInput}
                id={passwordRepeatInput}
                type="password"
                name="PASSWORD"
                value={passwordNewRepeat}
                onChange={((event) => {
                  this.setState({ passwordNewRepeat: event.target.value });
                  removeErrorNotNull(passwordRepeatInput, passwordRepeatSymbol);
                })}
              />
              <svg className={`${passwordRepeatSymbol} -disabled`} viewBox="0 0 14.98 15" id={passwordRepeatSymbol}>
                <g>
                  <path d="M7.49,0A7.5,7.5,0,1,0,15,7.51,7.49,7.49,0,0,0,7.49,0Zm0,14.27a6.77,6.77,0,1,1,6.76-6.76A6.78,6.78,0,0,1,7.49,14.27Zm.37-3.71a.39.39,0,1,1-.39-.39A.39.39,0,0,1,7.86,10.57ZM7.1,8.65V4.23a.35.35,0,1,1,.7,0V8.65A.35.35,0,0,1,7.45,9,.34.34,0,0,1,7.1,8.65Z" />
                </g>
              </svg>
            </div>
            {(clientEmail && passwordNew && passwordNewRepeat)
            && (passwordNew === passwordNewRepeat) ? (
              <Link to="/main-page">
                <button
                  type="button"
                  className="changePasswordButton"
                >
                  Изменить пароль
                </button>
              </Link>
              )
              : (
                <button
                  type="button"
                  className="changePasswordButton"
                  onClick={() => {
                    if (!clientEmail) {
                      setErrorNotNull(clientEmailInput, clientEmailSymbol);
                    }
                    if (!passwordNew) {
                      setErrorNotNull(passwordNewInput, passwordNewSymbol);
                    }
                    if (passwordNew !== passwordNewRepeat) {
                      setErrorNotNull(passwordRepeatInput, passwordRepeatSymbol);
                    }
                  }}
                >
                  Изменить пароль
                </button>
              )}
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

const ConnectedChangePassword = connect(
  (state) => ({
    pages: state,
  }),
)(ChangePassword);

export default ConnectedChangePassword;
