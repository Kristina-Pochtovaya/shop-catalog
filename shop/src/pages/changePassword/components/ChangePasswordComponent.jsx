import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';
import setErrorNotNull from '../../../common/untils/setErrorNotNull';
import InputWitchCkeckingNotNull from '../../../common/input/components/InputWitchCkeckingNotNullComponent';

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
    this.updateData = this.updateData.bind(this);
  }

  updateData(value, name) {
    if (name === 'clientEmail') { this.setState({ clientEmail: value }); }
    if (name === 'passwordNew') { this.setState({ passwordNew: value }); }
    if (name === 'passwordNewRepeat') { this.setState({ passwordNewRepeat: value }); }
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
              <InputWitchCkeckingNotNull
                initialValue={clientEmail}
                type="email"
                name="clientEmail"
                classInput={clientEmailInput}
                classSymbol={clientEmailSymbol}
                updateData={this.updateData}
              />
            </div>
            <div className="passwordNew">
              <p className="passwordNewString -required">Пароль:</p>
              <InputWitchCkeckingNotNull
                initialValue={passwordNew}
                type="password"
                name="passwordNew"
                classInput={passwordNewInput}
                classSymbol={passwordNewSymbol}
                updateData={this.updateData}
              />
            </div>
            <div className="passwordNewRepeat">
              <p className="passwordNewRepeatString -required">Повторите пароль:</p>
              <InputWitchCkeckingNotNull
                initialValue={passwordNewRepeat}
                type="password"
                name="passwordNewRepeat"
                classInput={passwordRepeatInput}
                classSymbol={passwordRepeatSymbol}
                updateData={this.updateData}
              />
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
              ) : (
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
