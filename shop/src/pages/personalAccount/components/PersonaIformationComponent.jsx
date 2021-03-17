import React from 'react';
import { connect } from 'react-redux';
import setErrorNotNull from '../../../common/untils/setErrorNotNull';
import InputWitchCkeckingNotNull from '../../../common/input/components/InputWitchCkeckingNotNullComponent';
import formatPhoneNumber from '../../../common/untils/formatPhoneNumber';
import PopUp from '../../../common/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../common/popup/components/PopUpSomethingWentWrongComponent';
import getUsers from '../api/get/getUsers';
import postChangeUserInformation from '../api/post/postChangeUserInformation';

class PersonaIformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  async componentDidMount() {
    const { pages } = this.props;
    await getUsers(
      pages.loginPersonalAccountReducer.clientEmail,
      this.updateDataUsers, this.setError,
    );
  }

  setError = (errorMessage) => { this.setState({ ErrorMessage: errorMessage }); }

  setpopupSmthWentWrongActive = (value) => { this.setState({ popupSmthWentWrongActive: value }); }

  updateDataUsers = (firstName, lastName,
    email, phoneNumber, address, valueIsLoading, passwordNew) => {
    this.setState({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      passwordNew,
      passwordNewRepeat: passwordNew,
      isLoading: valueIsLoading,
    });
  }

  updateData = (value, name) => {
    if (name === 'firstName') { this.setState({ firstName: value }); }
    if (name === 'lastName') { this.setState({ lastName: value }); }
    if (name === 'email') { this.setState({ email: value }); }
    if (name === 'passwordNew') { this.setState({ passwordNew: value }); }
    if (name === 'passwordNewRepeat') { this.setState({ passwordNewRepeat: value }); }
  }

  render() {
    const {
      firstName, firstNameInput, firstNameSymbol,
      lastName, lastNameInput, lastNameSymbol,
      email, emailInput, emailSymbol,
      phoneNumber, address,
      passwordNew, passwordNewInput, passwordNewSymbol,
      passwordNewRepeat, passwordRepeatInput, passwordRepeatSymbol,
      popupSmthWentWrongActive, isLoading, ErrorMessage,
    } = this.state;
    const { setIsPersonalInformationVisible } = this.props;

    async function handleButtonClick() {
      await postChangeUserInformation(
        firstName, lastName, email, passwordNew, phoneNumber, address,
      );
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
            />
          </div>
          <div className="phone">
            <p className="phoneString">Телефон:</p>
            <input
              className="phoneInput"
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
              }}
            />
          </div>
          <div className="address">
            <p className="addressString">Адрес:</p>
            <input
              className="addressInput"
              type="text"
              name="address"
              value={address}
              onChange={(e) => {
                this.setState({
                  address: e.target.value,
                });
              }}
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
          {(firstName && lastName && email && passwordNew && passwordNewRepeat)
  && (passwordNew === passwordNewRepeat) ? (
    <button
      type="button"
      className="changePasswordButton"
      onClick={() => {
        handleButtonClick();
        setIsPersonalInformationVisible(false);
      }}
    >
      Сохранить
    </button>
            ) : (
              <button
                type="button"
                className="changePasswordButton"
                onClick={() => {
                  if (!firstName) {
                    setErrorNotNull(firstNameInput, firstNameSymbol);
                  } if (!lastName) {
                    setErrorNotNull(lastNameInput, lastNameSymbol);
                  } if (!email) {
                    setErrorNotNull(emailInput, emailSymbol);
                  } if (!passwordNew) {
                    setErrorNotNull(passwordNewInput, passwordNewSymbol);
                  } if (passwordNew !== passwordNewRepeat) {
                    setErrorNotNull(passwordRepeatInput, passwordRepeatSymbol);
                  }
                }}
              >
                Сохранить
              </button>
            )}
        </form>
      </div>
    );
  }
}

const ConnectedPersonaIformation = connect(
  (state) => ({
    pages: state,
  }),
)(PersonaIformation);

export default ConnectedPersonaIformation;
