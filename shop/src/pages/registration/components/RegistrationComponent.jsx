import React from 'react';
import { withRouter } from 'react-router-dom';
import ConnectedHeader from '../../main/header/container/HeaderContainer';
import Footer from '../../main/footer/components/FooterComponent';
import setErrorNotNull from '../../../common/untils/setErrorNotNull';
import setErrorIncorrectLength from '../../../common/untils/setErrorIncorrectLength';
import formatPhoneNumber from '../../../common/untils/formatPhoneNumber';
import postUsers from '../api/post/postUsersRequest';
import ErrorSymbol from '../../../common/errorSymbol/components/ErrorSymbolComponent';
import InputWitchCkeckingNotNull from '../../../common/input/components/InputWitchCkeckingNotNullComponent';
import removeErrorNotNull from '../../../common/untils/removeErrorNotNull';
import removeErrorLength from '../../../common/untils/removeErrorLength';
import processResultRegistration from '../utils/processResultRegistration';
import setClassErrorById from '../../../common/untils/setClassErrorById';
import executeFunctionsIfNoErrorsLoginRegistration from '../../../common/untils/executeFunctionsIfNoErrorsLoginRegistration';
import setErrorNotNullGroupsRegistration from '../utils/setErrorNotNullGroupsRegistration';
import ButtonLogin from '../../../common/button/components/ButtonLoginComponent';
import inputRegistrationArray from '../constants/inputRegistrationArray';
import setInitialValue from '../utils/setInitialValue';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '+375(__)___-__-__',
      address: '',
      password: '',
      passwordNewRepeat: '',
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
    if (name === 'phone') { this.setState({ phoneNumber: formatPhoneNumber(value) }); }
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

    function handleButtonClick() {
      if ((firstName && lastName && email && passwordNewRepeat && phoneNumber && address)
       && (password === passwordNewRepeat) && (password.length >= 9)) {
        processResultRegistration(firstName, lastName, email, history, password, phoneNumber,
          address, postUsers, setClassErrorById, onEnter, onLogin,
          executeFunctionsIfNoErrorsLoginRegistration);
      } else {
        setErrorNotNullGroupsRegistration(firstName, ClassFirstNameInput,
          ClassFirstNameSymbol, lastName, ClassLastNameInput, ClassLastNameSymbol,
          email, ClassEmailInput, ClassEmailSymbol, errorLength, phoneNumber,
          clientPhoneInput, clientPhoneSymbol, address, clientAddresInput,
          clientAddresSymbol, password, ClassPasswordNewInput, ClassPasswordNewSymbol,
          passwordNewRepeat, ClassPasswordRepeatInput, ClassPasswordRepeatSymbol,
          setErrorNotNull, setErrorIncorrectLength);
      }
    }
    return (
      <>
        <ConnectedHeader linkItem={<button type="button" className="buttonBack">Главная</button>} link="/main-page" disabled={false} />
        <div className="registration-wrap">
          <h2> Регистрация </h2>
          <form className="registration">
            {inputRegistrationArray.map((input) => (
              <div className={input.name} key={input.name}>
                <p className={input.classNameOfString} key={input.classNameOfString}>
                  {input.nameOfString}
                </p>
                <InputWitchCkeckingNotNull
                  key={input.className}
                  initialValue={setInitialValue(input.name, firstName, lastName, email,
                    phoneNumber, address, password, passwordNewRepeat)}
                  type={input.type}
                  name={input.name}
                  classInput={input.className}
                  classSymbol={input.classNameSymbol}
                  updateData={this.updateData}
                  removeErrorNotNull={input.removeErrorNotNull ? removeErrorNotNull : ''}
                  removeErrorLength={input.removeErrorLength ? removeErrorLength : ''}
                  classerrorLength={input.classerrorLength ? errorLength : ''}
                  minLength={input.minLength ? '13' : ''}
                  maxLength={input.maxLength ? '13' : ''}
                  placeholder={input.placeholder ? '+375 (__) ___-__-__' : ''}
                  updatePhone={input.onFocus ? this.updatePhone : ''}
                  classNameOfString={input.classNameOfString}
                  nameOfString={input.nameOfString}
                />
                {input.name === 'passwordNew' && <p className={`${errorLength} -disabled`}>Пароль должен быть не менее 9 символов</p>}
              </div>
            ))}
            <div className="firstName">
              <p className="firstNameString -required">Имя:</p>
              <InputWitchCkeckingNotNull
                initialValue={firstName}
                type="text"
                name="firstName"
                classInput={ClassFirstNameInput}
                classSymbol={ClassFirstNameSymbol}
                updateData={this.updateData}
                removeErrorNotNull={removeErrorNotNull}
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
                removeErrorNotNull={removeErrorNotNull}
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
                removeErrorNotNull={removeErrorNotNull}
                removeErrorLength=""
                classerrorLength=""
                onEnterEmail={onEnterEmail}
              />
            </div>
            <div className="phone">
              <p className="phoneString -required">Телефон:</p>
              <InputWitchCkeckingNotNull
                initialValue={phoneNumber}
                type="tel"
                name="phone"
                classInput={clientPhoneInput}
                classSymbol={clientPhoneSymbol}
                updateData={this.updateData}
                removeErrorNotNull={removeErrorNotNull}
                minLength="13"
                maxLength="13"
                placeholder="+375 (__) ___-__-__"
                onFocus={() => this.setState({ phoneNumber: '+375' })}
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
                removeErrorNotNull={removeErrorNotNull}
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
                removeErrorNotNull={removeErrorNotNull}
                removeErrorLength={removeErrorLength}
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
                removeErrorNotNull={removeErrorNotNull}
              />
            </div>
            <p className="existingUserString -disabled" id="existingUser">Пользователь с таким email уже существует</p>
            <ButtonLogin
              className="registrationButton"
              handleButtonClick={handleButtonClick}
              onLogin=""
              onEnterEmail=""
              clientLogin=""
            >
              Зарегестрироваться
            </ButtonLogin>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(Registration);
