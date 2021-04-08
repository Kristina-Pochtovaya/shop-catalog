import React from 'react';
import ConnectedForgetPassword from '../container/ForgetPasswordContainer';
import BackSymbol from '../../icons/components/BackSymbol';

class LoginFormForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.onClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick, false);
  }

   onClick = (event) => {
     const { divRef } = this.props;
     if (divRef.current.contains(event.target)) {
       this.setState({ isVisible: true });
     } else {
       this.setState({ isVisible: false });
     }
   };

   render() {
     const { isVisible } = this.state;

     if (!isVisible) return null;

     return (
       <div
         className="loginForm"
         onClick={(e) => {
           e.stopPropagation();
           e.preventDefault();
         }}
         role="presentation"
       >
         <h2>Личный кабинет</h2>
         <div
           className="divCard"
           onClick={() => {
             this.setState({ isVisible: false });
           }}
           role="presentation"
         >
           <BackSymbol className="backSymbol" />
         </div>
         <ConnectedForgetPassword />
       </div>
     );
   }
}

export default LoginFormForgetPassword;
