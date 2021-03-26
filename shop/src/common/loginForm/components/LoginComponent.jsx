import React from 'react';
import InputWitchCkeckingNotNull from '../../input/components/InputWitchCkeckingNotNullComponent';
import removeErrorNotNull from '../../untils/removeErrorNotNull';
import processResultLoginForgetPassword from '../../untils/processResultLoginForgetPassword';
import ButtonLogin from '../../button/components/ButtonLoginComponent';
import setErrorNotNullGroupsLogin from '../utils/setErrorNotNullGroupsLogin';
import buttonLoginArray from '../constants/buttonLoginArray';
import inputLoginArray from '../constants/inputLoginArray';
import setInitialValue from '../utils/setInitialValue';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      clientLogin: '',
      clientPassword: '',
    };
  }

  updateId = (value) => this.setState({ id: value });

  handleButtonClick = () => {
    const { clientLogin, clientPassword } = this.state;
    const {
      onLogin, onEnter, history, onAdd, onEnterEmail,
    } = this.props;
    (clientLogin && clientPassword)
      ? processResultLoginForgetPassword(
        onEnter, onLogin, history, onAdd, onEnterEmail, clientLogin, clientPassword, this.updateId,
      ) : setErrorNotNullGroupsLogin(clientLogin, clientPassword);
  };

   link = () => {
     const { history } = this.props;
     history.push('/registration');
   };

  updateData = (value, name) => {
    if (name === 'clientLogin') { this.setState({ clientLogin: value }); }
    if (name === 'clientPassword') { this.setState({ clientPassword: value }); }
  }

  render() {
    const { clientLogin, clientPassword, id } = this.state;
    const { onLogin, onEnterEmail } = this.props;

    return (
      <form className="form">
        <p id="incorrectLoginOrPassword" className="userNotFoundBlock -disabled">Пользователя с таким email не существует или неверный пароль</p>
        {inputLoginArray.map((input) => (
          <InputWitchCkeckingNotNull
            key={input.className}
            initialValue={setInitialValue(input.name, clientLogin, clientPassword)}
            type={input.type}
            name={input.name}
            classInput={input.className}
            classSymbol={input.classNameSymbol}
            updateData={this.updateData}
            removeErrorNotNull={removeErrorNotNull}
          />
        ))}
        {buttonLoginArray.map((button) => (
          <ButtonLogin
            key={button.className}
            className={button.className}
            handleButtonClick={button.handleButtonClick ? this.handleButtonClick : ''}
            onEnterEmail={button.onEnterEmail ? onEnterEmail : ''}
            onLogin={button.onLogin ? onLogin : ''}
            link={button.link ? this.link : ''}
            clientLogin={button.clientLogin ? clientLogin : ''}
            id={id}
          >
            {button.text}
          </ButtonLogin>
        ))}
      </form>
    );
  }
}

export default Login;
