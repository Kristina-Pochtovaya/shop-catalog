import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';
import setErrorNotNull from '../../../common/untils/setErrorNotNull';
import removeErrorNotNull from '../../../common/untils/removeErrorNotNull';
import ErrorSymbol from '../../../common/errorSymbol/components/ErrorSymbolComponent';

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
                type="email"
                name="EMAIL"
                value={clientEmail}
                onChange={((event) => {
                  this.setState({ clientEmail: event.target.value });
                  removeErrorNotNull(clientEmailInput, clientEmailSymbol);
                })}
              />
              <ErrorSymbol Class={`${clientEmailSymbol} -disabled`} />
            </div>
            <div className="passwordNew">
              <p className="passwordNewString -required">Пароль:</p>
              <input
                className={passwordNewInput}
                type="password"
                name="PASSWORD"
                value={passwordNew}
                onChange={((event) => {
                  this.setState({ passwordNew: event.target.value });
                  removeErrorNotNull(passwordNewInput, passwordNewSymbol);
                })}
              />
              <ErrorSymbol Class={`${passwordNewSymbol} -disabled`} />
            </div>
            <div className="passwordNewRepeat">
              <p className="passwordNewRepeatString -required">Повторите пароль:</p>
              <input
                className={passwordRepeatInput}
                type="password"
                name="PASSWORD"
                value={passwordNewRepeat}
                onChange={((event) => {
                  this.setState({ passwordNewRepeat: event.target.value });
                  removeErrorNotNull(passwordRepeatInput, passwordRepeatSymbol);
                })}
              />
              <ErrorSymbol Class={`${passwordRepeatSymbol} -disabled`} />
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
                    } if (!passwordNew) {
                      setErrorNotNull(passwordNewInput, passwordNewSymbol);
                    } if (passwordNew !== passwordNewRepeat) {
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
