import React from 'react';
import setErrorNotNull from '../../../common/untils/setErrorNotNull';
import InputWitchCkeckingNotNull from '../../../common/input/components/InputWitchCkeckingNotNullComponent';
import formatPhoneNumber from '../../../common/untils/formatPhoneNumber';
import PopUp from '../../../common/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../common/popup/components/PopUpSomethingWentWrongComponent';
import getUsers from '../api/get/getUsers';
import postChangeUserInformation from '../api/post/postChangeUserInformation';
import removeErrorNotNull from '../../../common/untils/removeErrorNotNull';
import setErrorNotNullGroupsPersonalInformation from '../utils/setErrorNotNullGroupsPersonalInformation';
import removeErrorLength from '../../../common/untils/removeErrorLength';
import setErrorIncorrectLength from '../../../common/untils/setErrorIncorrectLength';

class PersonaIformation extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      firstNameInput: 'firstNameInput',
      firstNameSymbol: 'firstNameSymbol',
      lastName: '',
      lastNameInput: 'lastNameInput',
      lastNameSymbol: 'lastNameSymbol',
      email: '',
      emailInput: 'emailInput',
      emailSymbol: 'emailSymbol',
      phoneNumber: '+375(__)___-__-__',
      address: '',
      passwordNew: '',
      passwordNewInput: 'passwordNewInput',
      passwordNewSymbol: 'errorSymbolPasswordNew',
      passwordNewRepeat: '',
      passwordRepeatInput: 'passwordNewRepeatInput',
      passwordRepeatSymbol: 'errorSymbolPasswordNewRepeat',
      popupSmthWentWrongActive: true,
      isLoading: false,
      ErrorMessage: '',
      errorLength: 'errorlengthString',
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    const { pages } = this.props;
    await getUsers(
      pages.loginPersonalAccountReducer.id,
      this.updateDataUsers, this.setError,
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setError = (errorMessage) => { this.setState({ ErrorMessage: errorMessage }); }

  setpopupSmthWentWrongActive = (value) => { this.setState({ popupSmthWentWrongActive: value }); }

  updateDataUsers = (id, firstName, lastName,
    email, phoneNumber, address, valueIsLoading) => {
    if (this._isMounted) {
      this.setState({
        id,
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        passwordNew: '',
        passwordNewRepeat: '',
        isLoading: valueIsLoading,
      });
    }
  }

  updateData = (value, name) => {
    if (name === 'firstName') { this.setState({ firstName: value }); }
    if (name === 'lastName') { this.setState({ lastName: value }); }
    if (name === 'email') { this.setState({ email: value }); }
    if (name === 'passwordNew') { this.setState({ passwordNew: value }); }
    if (name === 'passwordNewRepeat') { this.setState({ passwordNewRepeat: value }); }
    if (name === 'PHONE') { this.setState({ phoneNumber: formatPhoneNumber(value) }); }
    if (name === 'address') { this.setState({ address: value }); }
  }

  updatePhone = () => this.setState({ phoneNumber: '+375' });

  render() {
    const {
      firstName, firstNameInput, firstNameSymbol,
      lastName, lastNameInput, lastNameSymbol,
      email, emailInput, emailSymbol,
      phoneNumber, address, id, errorLength,
      passwordNew, passwordNewInput, passwordNewSymbol,
      passwordNewRepeat, passwordRepeatInput, passwordRepeatSymbol,
      popupSmthWentWrongActive, isLoading, ErrorMessage,
    } = this.state;

    const { setIsPersonalInformationVisible } = this.props;

    async function handleButtonClick() {
      if ((firstName && lastName && email && passwordNew && passwordNewRepeat)
      && (passwordNew === passwordNewRepeat) && (passwordNew.length >= 9)) {
        await postChangeUserInformation(
          id, firstName, lastName, email, passwordNew, phoneNumber, address,
        ); setIsPersonalInformationVisible(false);
      } else {
        setErrorNotNullGroupsPersonalInformation(
          firstName, firstNameInput, firstNameSymbol, lastName, lastNameInput, lastNameSymbol,
          email, emailInput, emailSymbol, passwordNew, passwordNewInput, passwordNewSymbol,
          passwordNewRepeat, passwordRepeatInput, passwordRepeatSymbol, setErrorNotNull,
          setErrorIncorrectLength, errorLength,
        );
      }
    }

    if (!isLoading) {
      return <div className="-isLoading"> </div>;
    }
    if (ErrorMessage) {
      return (
        <PopUp
          active={popupSmthWentWrongActive}
          setActive={this.setpopupSmthWentWrongActive}
        >
          <PopUpSomethingWentWrong
            text="Попробуйте еще раз"
            setpopupSmthWentWrongActive={this.setpopupSmthWentWrongActive}
          />
        </PopUp>
      );
    }
    return (
      <div className="personalInformation-wrap">
        <form className="personalInformation">
          <div className="firstName">
            <p className="firstNameString -required">Имя:</p>
            <InputWitchCkeckingNotNull
              initialValue={firstName}
              type="text"
              name="firstName"
              classInput={firstNameInput}
              classSymbol={firstNameSymbol}
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
              classInput={lastNameInput}
              classSymbol={lastNameSymbol}
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
              classInput={emailInput}
              classSymbol={emailSymbol}
              updateData={this.updateData}
              removeErrorNotNull={removeErrorNotNull}
            />
          </div>
          <div className="phone">
            <p className="phoneString">Телефон:</p>
            <InputWitchCkeckingNotNull
              initialValue={phoneNumber}
              type="tel"
              name="PHONE"
              classInput="phoneInput"
              classSymbol=""
              updateData={this.updateData}
              removeErrorNotNull=""
              removeErrorLength=""
              classerrorLength=""
              onEnterEmail=""
              minLength="13"
              maxLength="13"
              placeholder='+375 (__) ___-__-__"'
              onFocus={this.updatePhone}
            />
          </div>
          <div className="address">
            <p className="addressString">Адрес:</p>
            <InputWitchCkeckingNotNull
              initialValue={address}
              type="text"
              name="address"
              classInput="addressInput"
              classSymbol=""
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
              classInput={passwordRepeatInput}
              classSymbol={passwordRepeatSymbol}
              updateData={this.updateData}
              removeErrorNotNull={removeErrorNotNull}
            />
          </div>
          <button
            type="button"
            className="changePasswordButton"
            onClick={() => {
              handleButtonClick();
            }}
          >
            Сохранить
          </button>
        </form>
      </div>
    );
  }
}

export default PersonaIformation;
