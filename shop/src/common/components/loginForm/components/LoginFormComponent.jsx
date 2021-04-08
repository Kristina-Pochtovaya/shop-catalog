import React from 'react';
import ConnectedLogin from '../container/LoginComponentContainer';
import BackSymbol from '../../icons/components/BackSymbol';

class LoginForm extends React.Component {
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
     const { divRef, onLogin } = this.props;
     if (divRef.current.contains(event.target)) {
       this.setState({ isVisible: true });
     } else {
       this.setState({ isVisible: false });
       onLogin(false, false, false);
     }
   };

   render() {
     const {
       isVisible,
     } = this.state;

     if (!isVisible) {
       return null;
     }
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
         <ConnectedLogin />
       </div>
     );
   }
}

export default LoginForm;
