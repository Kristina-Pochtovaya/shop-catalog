import React from 'react';
import { Link } from 'react-router-dom';
import setErrorNotNull from '../../untils/setErrorNotNull';
import checkIfUserExists from '../../untils/checkIfUserExists';
import InputWitchCkeckingNotNull from '../../input/components/InputWitchCkeckingNotNullComponent';
import ButtonForPassword from '../../button/components/ButtonForPasswordComponent';
import removeErrorNotNull from '../../untils/removeErrorNotNull';

class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: 'emailInput',
      emailSymbol: 'errorSymbol',
    };
  }

   handleButtonClick = async () => {
     const {
       pages, onEnter, onLogin, history,
     } = this.props;
     const { emailInput, emailSymbol } = this.state;
     pages.loginPersonalAccountReducer.clientEmail
       ? checkIfUserExists(pages, onEnter, onLogin, history)
       : setErrorNotNull(emailInput, emailSymbol);
   };

   render() {
     const {
       onEnter, onLogin, onEnterEmail, pages,
     } = this.props;
     const { emailInput, emailSymbol } = this.state;
     return (
       <form className="formForgetPassword">
         <p id="userNotFoundChangePassword" className="userNotFoundBlock -disabled">Пользователя с таким email не существует</p>
         <div className="login">
           <p className="loginString -required">Email:</p>
           <InputWitchCkeckingNotNull
             initialValue={pages.loginPersonalAccountReducer.clientEmail}
             type="email"
             name="emailInput"
             classInput={emailInput}
             classSymbol={emailSymbol}
             updateData=""
             removeErrorNotNull={removeErrorNotNull}
             removeErrorLength=""
             classerrorLength=""
             onEnterEmail={onEnterEmail}
           />
         </div>
         <div
           type="button"
           className=""
         >
           <ButtonForPassword
             className="entranceButton"
             handleButtonClick={this.handleButtonClick}
             onEnter=""
             onLogin=""
           >
             Отправить
           </ButtonForPassword>
         </div>
         <ButtonForPassword
           className="forgotPasswordButton"
           handleButtonClick=""
           onEnter={onEnter}
           onLogin={onLogin}
         >
           Войти
         </ButtonForPassword>
         <Link to="/registration">
           <ButtonForPassword
             className="registrationButton"
             handleButtonClick=""
             onEnter=""
             onLogin={onLogin}
           >
             Регистрация
           </ButtonForPassword>
         </Link>
       </form>
     );
   }
}

export default ForgetPassword;
