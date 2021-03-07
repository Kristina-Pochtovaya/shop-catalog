import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';
import setErrorNotNull from '../../../common/untils/setErrorNotNull';
import removeErrorNotNull from '../../../common/untils/removeErrorNotNull';
import formatPhoneNumber from '../../../common/untils/formatPhoneNumber';
import postUsersRequest from '../api/post/postUsersRequest';
import ErrorSymbol from '../../../common/errorSymbol/components/ErrorSymbolComponent';

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
    };
  }

  render() {
    const {
      firstName, ClassFirstNameInput, ClassFirstNameSymbol, lastName, ClassLastNameInput,
      ClassLastNameSymbol, email, ClassEmailInput, ClassEmailSymbol, phoneNumber,
      clientPhoneInput, clientPhoneSymbol, address, clientAddresInput, clientAddresSymbol, password,
      ClassPasswordNewInput, ClassPasswordNewSymbol, passwordNewRepeat,
      ClassPasswordRepeatInput, ClassPasswordRepeatSymbol,
    } = this.state;
    const { onEnter, onLogin, history } = this.props;

    async function handleButtonClick() {
      const existingUser = document.getElementById('existingUser');
      const result = await postUsersRequest(firstName,
        lastName, email, phoneNumber, address, password);
      result === true ? existingUser.setAttribute('class', 'existingUserString') : history.push('/personal');
    }

    return (
      <>
        <Header linkItem={<button type="button" className="buttonBack">Главная</button>} link="/main-page" disabled={false} />
        <div className="registration-wrap">
          <h2> Регистрация </h2>
          <form className="registration">
            <div className="firstName">
              <p className="firstNameString -required">Имя:</p>
              <input
                className={ClassFirstNameInput}
                type="text"
                name="firstName"
                value={firstName}
                onChange={((event) => {
                  this.setState({ firstName: event.target.value });
                  removeErrorNotNull(ClassFirstNameInput, ClassFirstNameSymbol);
                })}
              />
              <ErrorSymbol Class={`${ClassFirstNameSymbol} -disabled`} />
            </div>
            <div className="lastName">
              <p className="lastNameString -required">Фамилия:</p>
              <input
                className={ClassLastNameInput}
                type="text"
                name="lasttName"
                value={lastName}
                onChange={((event) => {
                  this.setState({ lastName: event.target.value });
                  removeErrorNotNull(ClassLastNameInput, ClassLastNameSymbol);
                })}
              />
              <ErrorSymbol Class={`${ClassLastNameSymbol} -disabled`} />
            </div>
            <div className="email">
              <p className="emailString -required">Email:</p>
              <input
                className={ClassEmailInput}
                type="email"
                name="EMAIL"
                value={email}
                onChange={((event) => {
                  this.setState({ email: event.target.value });
                  removeErrorNotNull(ClassEmailInput, ClassEmailSymbol);
                })}
              />
              <ErrorSymbol Class={`${ClassEmailSymbol} -disabled`} />
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
              <input
                className={clientAddresInput}
                type="text"
                name="ADDRESS"
                value={address}
                onChange={(event) => {
                  this.setState({
                    address: event.target.value,
                  });
                  removeErrorNotNull(clientAddresInput, clientAddresSymbol);
                }}
              />
              <ErrorSymbol Class={`${clientAddresSymbol} -disabled`} />
            </div>
            <div className="passwordNew">
              <p className="passwordNewString -required">Пароль:</p>
              <input
                className={ClassPasswordNewInput}
                type="password"
                name="PASSWORD"
                value={password}
                onChange={((event) => {
                  this.setState({ password: event.target.value });
                  removeErrorNotNull(ClassPasswordNewInput, ClassPasswordNewSymbol);
                })}
              />
              <ErrorSymbol Class={`${ClassPasswordNewSymbol} -disabled`} />
            </div>
            <div className="passwordNewRepeat">
              <p className="passwordNewRepeatString -required">Повторите пароль:</p>
              <input
                className={ClassPasswordRepeatInput}
                type="password"
                name="PASSWORD"
                value={passwordNewRepeat}
                onChange={((event) => {
                  this.setState({ passwordNewRepeat: event.target.value });
                  removeErrorNotNull(ClassPasswordRepeatInput, ClassPasswordRepeatSymbol);
                })}
              />
              <ErrorSymbol Class={`${ClassPasswordRepeatSymbol} -disabled`} />
            </div>
            <p className="existingUserString -disabled" id="existingUser">Пользователь с таким email уже существует</p>
            {(firstName && lastName && email && passwordNewRepeat && phoneNumber)
            && (password === passwordNewRepeat) ? (
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
