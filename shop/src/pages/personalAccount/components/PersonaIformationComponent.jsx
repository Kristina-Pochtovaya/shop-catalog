import React from 'react';
import InputWitchCkeckingNotNull from '../../../common/input/components/InputWitchCkeckingNotNullComponent';
import formatPhoneNumber from '../../../common/untils/formatPhoneNumber';
import PopUp from '../../../common/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../common/popup/components/PopUpSomethingWentWrongComponent';
import getUsers from '../api/get/getUsers';
import postChangeUserInformation from '../api/post/postChangeUserInformation';
import removeErrorNotNull from '../../../common/untils/removeErrorNotNull';
import setErrorNotNullGroupsPersonalInformation from '../utils/setErrorNotNullGroupsPersonalInformation';
import removeErrorLength from '../../../common/untils/removeErrorLength';
import inputPersonalInformationArray from '../constants/inputPersonalInformationArray';
import setInitialValue from '../utils/setInitialValue';

class PersonaIformation extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '+375(__)___-__-__',
      address: '',
      passwordNew: '',
      passwordNewRepeat: '',
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
    if (name === 'phone') { this.setState({ phoneNumber: formatPhoneNumber(value) }); }
    if (name === 'address') { this.setState({ address: value }); }
  }

  updatePhone = () => this.setState({ phoneNumber: '+375' });

  render() {
    const {
      firstName, lastName, email, phoneNumber, address, id, errorLength, passwordNew,
      passwordNewRepeat, popupSmthWentWrongActive, isLoading, ErrorMessage,
    } = this.state;

    const { setIsPersonalInformationVisible } = this.props;

    async function handleButtonClick() {
      if ((firstName && lastName && email && passwordNew && passwordNewRepeat)
      && (passwordNew === passwordNewRepeat) && (passwordNew.length >= 9)) {
        await postChangeUserInformation(
          id, firstName, lastName, email, passwordNew, phoneNumber, address,
        ); setIsPersonalInformationVisible(false);
      } else {
        setErrorNotNullGroupsPersonalInformation(firstName, lastName, email, passwordNew,
          passwordNewRepeat, errorLength);
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
          {inputPersonalInformationArray.map((input) => (
            <div className={input.name} key={input.name}>
              <p className={input.classNameOfString} key={input.classNameOfString}>
                {input.nameOfString}
              </p>
              <InputWitchCkeckingNotNull
                key={input.className}
                initialValue={setInitialValue(input.name, firstName, lastName, email,
                  phoneNumber, address, passwordNew, passwordNewRepeat)}
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
