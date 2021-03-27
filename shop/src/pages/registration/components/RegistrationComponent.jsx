import React from 'react';
import ConnectedHeader from '../../main/header/container/HeaderContainer';
import Footer from '../../main/footer/components/FooterComponent';
import formatPhoneNumber from '../../../common/untils/formatPhoneNumber';
import postUsers from '../api/post/postUsersRequest';
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
    if (name === 'passwordNew') { this.setState({ password: value }); }
    if (name === 'passwordNewRepeat') { this.setState({ passwordNewRepeat: value }); }
    if (name === 'phone') { this.setState({ phoneNumber: formatPhoneNumber(value) }); }
  }

  updatePhone = () => this.setState({ phoneNumber: '+375' });

  render() {
    const {
      firstName, lastName, email, phoneNumber, address, password, passwordNewRepeat, errorLength,
    } = this.state;
    const {
      onEnter, onLogin, history, onEnterEmail,
    } = this.props;

    function handleButtonClick() {
      if ((firstName && lastName && email && passwordNewRepeat && (phoneNumber.length >= 13 || !(phoneNumber.includes('_')))
        && address) && (password === passwordNewRepeat) && (password.length >= 9)) {
        processResultRegistration(firstName, lastName, email, history, password, phoneNumber,
          address, postUsers, setClassErrorById, onEnter, onLogin,
          executeFunctionsIfNoErrorsLoginRegistration);
      } else {
        setErrorNotNullGroupsRegistration(firstName, lastName, email, errorLength, phoneNumber,
          address, password, passwordNewRepeat);
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
                  onEnterEmail={input.onEnterEmail ? onEnterEmail : ''}
                  classNameOfString={input.classNameOfString}
                  nameOfString={input.nameOfString}
                />
                {input.name === 'passwordNew' && <p className={`${errorLength} -disabled`}>Пароль должен быть не менее 9 символов</p>}
              </div>
            ))}
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

export default Registration;
