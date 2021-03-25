import React from 'react';
import ConnectedHeader from '../../main/header/container/HeaderContainer';
import Footer from '../../main/footer/components/FooterComponent';
import InputWitchCkeckingNotNull from '../../../common/input/components/InputWitchCkeckingNotNullComponent';
import removeErrorNotNull from '../../../common/untils/removeErrorNotNull';
import removeErrorLength from '../../../common/untils/removeErrorLength';
import processResultChangePassword from '../utils/processResultChangePassword';
import setErrorNotNullGroupsChangePassword from '../utils/setErrorNotNullGroupsChangePassword';
import ButtonForPassword from '../../../common/button/components/ButtonForPasswordComponent';
import setClassErrorById from '../../../common/untils/setClassErrorById';
import postChangePasswordRequest from '../api/post/postChangePasswordRequest';
import setErrorNotNull from '../../../common/untils/setErrorNotNull';
import setErrorIncorrectLength from '../../../common/untils/setErrorIncorrectLength';

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
      errorLength: 'errorlengthString',
    };
  }

  componentDidMount() {
    const { pages } = this.props;
    this.setState({
      clientEmail: pages.loginPersonalAccountReducer.clientEmail,
    });
  }

  componentDidUpdate(previousProps, previousState) {
    const { pages } = this.props;
    if (previousProps.pages.loginPersonalAccountReducer.clientEmail
      !== pages.loginPersonalAccountReducer.clientEmail) {
      this.updateEmail(pages.loginPersonalAccountReducer.clientEmail);
    }
  }

  updateData = (value, name) => {
    if (name === 'clientEmail') { this.setState({ clientEmail: value }); }
    if (name === 'passwordNew') { this.setState({ passwordNew: value }); }
    if (name === 'passwordNewRepeat') { this.setState({ passwordNewRepeat: value }); }
  }

  updateEmail = (value) => { this.setState({ clientEmail: value }); }

  render() {
    const {
      clientEmail, clientEmailInput, clientEmailSymbol,
      passwordNew, passwordNewInput, passwordNewSymbol,
      passwordNewRepeat, passwordRepeatInput, passwordRepeatSymbol, errorLength,
    } = this.state;
    const { history } = this.props;

    async function handleButtonClick() {
      (clientEmail && passwordNew && passwordNewRepeat)
            && (passwordNew === passwordNewRepeat) && (passwordNew.length >= 9)
        ? processResultChangePassword(clientEmail, passwordNew, passwordNewRepeat, history,
          setClassErrorById, postChangePasswordRequest)
        : setErrorNotNullGroupsChangePassword(clientEmail, clientEmailInput, clientEmailSymbol,
          passwordNew, passwordNewInput, passwordNewSymbol, passwordNewRepeat, passwordRepeatInput,
          passwordRepeatSymbol, errorLength, setErrorNotNull, setErrorIncorrectLength);
    }
    return (
      <>
        <ConnectedHeader linkItem={<button type="button" className="buttonBack">Главная</button>} link="/main-page" disabled={false} />
        <div className="changePassword-wrap">
          <h2> Смена пароля </h2>
          <form className="changePassword">
            <p id="notRealUser" className="userNotFoundBlock -disabled">Пользователя с таким email не существует</p>
            <div className="email">
              <p className="emailString -required">Email:</p>
              <InputWitchCkeckingNotNull
                initialValue={clientEmail}
                type="email"
                name="clientEmail"
                classInput={clientEmailInput}
                classSymbol={clientEmailSymbol}
                updateData={this.updateData}
                removeErrorNotNull={removeErrorNotNull}
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
            <ButtonForPassword
              className="changePasswordButton"
              handleButtonClick={handleButtonClick}
            >
              Изменить пароль
            </ButtonForPassword>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default ChangePassword;
