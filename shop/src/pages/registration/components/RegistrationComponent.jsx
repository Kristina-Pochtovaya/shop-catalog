import React from 'react';
import { withRouter } from 'react-router-dom';
import ConnectedHeader from '../../main/header/container/HeaderContainer';
import Footer from '../../main/footer/components/FooterComponent';
import setErrorNotNull from '../../../common/untils/setErrorNotNull';
import setErrorIncorrectLength from '../../../common/untils/setErrorIncorrectLength';
import removeErrorNotNull from '../../../common/untils/removeErrorNotNull';
import formatPhoneNumber from '../../../common/untils/formatPhoneNumber';
import postUsers from '../api/post/postUsersRequest';
import ErrorSymbol from '../../../common/errorSymbol/components/ErrorSymbolComponent';
import InputWitchCkeckingNotNull from '../../../common/input/components/InputWitchCkeckingNotNullComponent';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      ClassFirstNameInput: 'firtNameInput',
      ClassFirstNameSymbol: 'errorSymbolFirtName',
      lastName: '',
      ClassLastNameInput: 'lastNameInput',
      ClassLastNameSymbol: 'errorSymbolLastName',
      email: '',
      ClassEmailInput: 'emailRegistrationInput',
      ClassEmailSymbol: 'errorSymbolRegistrationEmail',
      phoneNumber: '+375(__)___-__-__',
      clientPhoneInput: 'phoneRegistrationInput',
      clientPhoneSymbol: 'errorSymbolRegistrationPhone',
      address: '',
      clientAddresInput: 'addressRegistrationInput',
      clientAddresSymbol: 'errorSymbolRegistrationAddress',
      password: '',
      ClassPasswordNewInput: 'passwordNewInputRegistration',
      ClassPasswordNewSymbol: 'errorSymbolPasswordNewRegistration',
      passwordNewRepeat: '',
      ClassPasswordRepeatInput: 'passwordNewRepeatInputRegistration',
      ClassPasswordRepeatSymbol: 'errorSymbolPasswordNewRepeatRegistration',
      errorLength: 'errorlengthString',
    };
  }

  updateData = (value, name) => {
    if (name === 'firstName') { this.setState({ firstName: value }); }
    if (name === 'lastName') { this.setState({ lastName: value }); }
    if (name === 'email') { this.setState({ email: value }); }
    if (name === 'address') { this.setState({ address: value }); }
    if (name === 'password') { this.setState({ password: value }); }
    if (name === 'passwordNewRepeat') { this.setState({ passwordNewRepeat: value }); }
  }

  render() {
    const {
      firstName, ClassFirstNameInput, ClassFirstNameSymbol, lastName, ClassLastNameInput,
      ClassLastNameSymbol, email, ClassEmailInput, ClassEmailSymbol, phoneNumber,
      clientPhoneInput, clientPhoneSymbol, address, clientAddresInput, clientAddresSymbol, password,
      ClassPasswordNewInput, ClassPasswordNewSymbol, passwordNewRepeat,
      ClassPasswordRepeatInput, ClassPasswordRepeatSymbol, errorLength,
    } = this.state;
    const {
      onEnter, onLogin, history, onEnterEmail,
    } = this.props;

    async function handleButtonClick() {
      const existingUser = document.getElementById('existingUser');
      const result = await postUsers(firstName,
        lastName, email, password, phoneNumber, address);
      result === true ? existingUser.setAttribute('class', 'existingUserStringBlock') : history.push('/personal');
    }
    return (
      <>
        <ConnectedHeader linkItem={<button type="button" className="buttonBack">Главная</button>} link="/main-page" disabled={false} />
        <div className="registration-wrap">
          <h2> Регистрация </h2>
          <form className="registration">
            <div className="firstName">
              <p className="firstNameString -required">Имя:</p>
              <InputWitchCkeckingNotNull
                initialValue={firstName}
                type="text"
                name="firstName"
                classInput={ClassFirstNameInput}
                classSymbol={ClassFirstNameSymbol}
                updateData={this.updateData}
              />
            </div>
            <div className="lastName">
              <p className="lastNameString -required">Фамилия:</p>
              <InputWitchCkeckingNotNull
                initialValue={lastName}
                type="text"
                name="lastName"
                classInput={ClassLastNameInput}
                classSymbol={ClassLastNameSymbol}
                updateData={this.updateData}
              />
            </div>
            <div className="email">
              <p className="emailString -required">Email:</p>
              <InputWitchCkeckingNotNull
                initialValue={email}
                type="email"
                name="email"
                classInput={ClassEmailInput}
                classSymbol={ClassEmailSymbol}
                updateData={this.updateData}
                removeErrorLengthFunc=""
                classerrorLength=""
                onEnterEmail={onEnterEmail}
              />
            </div>
            <div className="phone">
              <p className="phoneString -required">Телефон:</p>
              <input
                className={clientPhoneInput}
                name="PHONE"
                type="tel"
                minLength="13"
                maxLength="13"
                placeholder="+375 (__) ___-__-__"
                value={phoneNumber}
                onFocus={() => this.setState({ phoneNumber: '+375' })}
                onChange={(event) => {
                  this.setState({
                    phoneNumber: formatPhoneNumber(event.target.value),
                  });
                  removeErrorNotNull(clientPhoneInput, clientPhoneSymbol);
                }}
              />
              <ErrorSymbol Class={`${clientPhoneSymbol} -disabled`} />
            </div>
            <div className="address">
              <p className="addressString -required">Адрес:</p>
              <InputWitchCkeckingNotNull
                initialValue={address}
                type="text"
                name="address"
                classInput={clientAddresInput}
                classSymbol={clientAddresSymbol}
                updateData={this.updateData}
              />
            </div>
            <div className="passwordNew">
              <p className="passwordNewString -required">Пароль:</p>
              <InputWitchCkeckingNotNull
                initialValue={password}
                type="password"
                name="password"
                classInput={ClassPasswordNewInput}
                classSymbol={ClassPasswordNewSymbol}
                updateData={this.updateData}
                removeErrorLengthFunc="removeErrorLength"
                classerrorLength={errorLength}
              />
              <p className={`${errorLength} -disabled`}>Пароль должен быть не менее 9 символов</p>
            </div>
            <div className="passwordNewRepeat">
              <p className="passwordNewRepeatString -required">Повторите пароль:</p>
              <InputWitchCkeckingNotNull
                initialValue={passwordNewRepeat}
                type="password"
                name="passwordNewRepeat"
                classInput={ClassPasswordRepeatInput}
                classSymbol={ClassPasswordRepeatSymbol}
                updateData={this.updateData}
              />
            </div>
            <p className="existingUserString -disabled" id="existingUser">Пользователь с таким email уже существует</p>
            {(firstName && lastName && email && passwordNewRepeat && phoneNumber && address)
            && (password === passwordNewRepeat) && (password >= 9) ? (
              <button
                type="button"
                className="registrationButton"
                onClick={() => {
                  onEnter(false, true); onLogin(false, false, false); handleButtonClick();
                }}
              >
                Зарегестрироваться
              </button>
              ) : (
                <button
                  type="button"
                  className="registrationButton"
                  onClick={() => {
                    if (!firstName) {
                      setErrorNotNull(ClassFirstNameInput, ClassFirstNameSymbol);
                    } if (!lastName) {
                      setErrorNotNull(ClassLastNameInput, ClassLastNameSymbol);
                    } if (!email) {
                      setErrorNotNull(ClassEmailInput, ClassEmailSymbol);
                    } if (phoneNumber.length > 13) {
                      setErrorNotNull(clientPhoneInput, clientPhoneSymbol);
                    } if (!address) {
                      setErrorNotNull(clientAddresInput, clientAddresSymbol);
                    } if (!password) {
                      setErrorNotNull(ClassPasswordNewInput, ClassPasswordNewSymbol);
                    } if (password !== passwordNewRepeat) {
                      setErrorNotNull(ClassPasswordRepeatInput, ClassPasswordRepeatSymbol);
                    }
                    if (password.length < 9) {
                      setErrorIncorrectLength(errorLength);
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

export default withRouter(Registration);
