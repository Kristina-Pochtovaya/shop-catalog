import React from 'react';
import setErrorNotNull from '../../../utils/setErrorNotNull';
import checkIfUserExists from '../../../utils/checkIfUserExists';
import InputWitchCkeckingNotNull from '../../input/components/InputWitchCkeckingNotNullComponent';
import ButtonForPassword from '../../button/components/ButtonForPasswordComponent';
import removeErrorNotNull from '../../../utils/removeErrorNotNull';
import buttonForPasswordArray from '../constants/buttonForPasswordArray';

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

   link = () => {
     const { history } = this.props;
     history.push('/registration');
   }

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
         {buttonForPasswordArray.map((button) => (
           <ButtonForPassword
             key={button.className}
             className={button.className}
             handleButtonClick={button.handleButtonClick ? this.handleButtonClick : ''}
             onEnter={button.onEnter ? onEnter : ''}
             onLogin={button.onLogin ? onLogin : ''}
             link={button.link ? this.link : ''}
           >
             {button.text}
           </ButtonForPassword>
         ))}
       </form>
     );
   }
}

export default ForgetPassword;
