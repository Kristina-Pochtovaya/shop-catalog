import React from 'react';
import ConnectedHeader from '../../main/header/container/HeaderContainer';
import Footer from '../../main/footer/components/FooterComponent';
import InputWitchCkeckingNotNull from '../../../common/components/input/components/InputWitchCkeckingNotNullComponent';
import removeErrorNotNull from '../../../common/utils/removeErrorNotNull';
import removeErrorLength from '../../../common/utils/removeErrorLength';
import processResultChangePassword from '../utils/processResultChangePassword';
import setErrorNotNullGroupsChangePassword from '../utils/setErrorNotNullGroupsChangePassword';
import ButtonForPassword from '../../../common/components/button/components/ButtonForPasswordComponent';
import setClassErrorById from '../../../common/utils/setClassErrorById';
import postChangePasswordRequest from '../api/post/postChangePasswordRequest';
import inputChangePasswordArray from '../constants/inputChangePasswordArray';
import setInitialValue from '../utils/setInitialValue';

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    const { pages } = this.props;
    this.state = {
      clientEmail: pages.loginPersonalAccountReducer.clientEmail,
      passwordNew: '',
      passwordNewRepeat: '',
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
      clientEmail, passwordNew, passwordNewRepeat, errorLength,
    } = this.state;
    const { history } = this.props;

    async function handleButtonClick() {
      (clientEmail && passwordNew && passwordNewRepeat)
            && (passwordNew === passwordNewRepeat) && (passwordNew.length >= 9)
        ? processResultChangePassword(clientEmail, passwordNew, passwordNewRepeat, history,
          setClassErrorById, postChangePasswordRequest)
        : setErrorNotNullGroupsChangePassword(clientEmail, passwordNew, passwordNewRepeat,
          errorLength);
    }
    return (
      <>
        <ConnectedHeader linkItem={<button type="button" className="buttonBack">Главная</button>} link="/main-page" disabled={false} />
        <div className="changePassword-wrap">
          <h2> Смена пароля </h2>
          <form className="changePassword">
            <p id="notRealUser" className="userNotFoundBlock -disabled">Пользователя с таким email не существует</p>
            {inputChangePasswordArray.map((input) => (
              <div className={input.name} key={input.name}>
                <p className={input.classNameOfString} key={input.classNameOfString}>
                  {input.nameOfString}
                </p>
                <InputWitchCkeckingNotNull
                  key={input.className}
                  initialValue={setInitialValue(input.name, clientEmail, passwordNew,
                    passwordNewRepeat)}
                  type={input.type}
                  name={input.name}
                  classInput={input.className}
                  classSymbol={input.classNameSymbol}
                  updateData={this.updateData}
                  removeErrorNotNull={input.removeErrorNotNull ? removeErrorNotNull : ''}
                  removeErrorLength={input.removeErrorLength ? removeErrorLength : ''}
                  classerrorLength={input.classerrorLength ? errorLength : ''}
                  classNameOfString={input.classNameOfString}
                  nameOfString={input.nameOfString}
                />
                {input.name === 'passwordNew' && <p className={`${errorLength} -disabled`}>Пароль должен быть не менее 9 символов</p>}
              </div>
            ))}
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
