import React from 'react';
import ConnectedLogin from '../container/LoginComponentContainer';

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
           <svg className="backSymbol" viewBox="0 0 20 20">
             <g>
               <path d="M17.89,0H2.11A2.11,2.11,0,0,0,0,2.11V17.89A2.11,2.11,0,0,0,2.11,20H17.89A2.11,2.11,0,0,0,20,17.89V2.11A2.11,2.11,0,0,0,17.89,0ZM19,17.89A1.11,1.11,0,0,1,17.89,19H2.11A1.11,1.11,0,0,1,1,17.89V2.11A1.11,1.11,0,0,1,2.11,1H17.89A1.11,1.11,0,0,1,19,2.11V17.89Z" />
               <path d="M13,7a.5.5,0,0,0-.71,0L10,9.29,7.68,7A.5.5,0,0,0,7,7.68L9.29,10,7,12.32a.5.5,0,0,0,.71.71L10,10.71,12.32,13a.5.5,0,0,0,.71-.71L10.71,10,13,7.68A.5.5,0,0,0,13,7Z" />
             </g>
           </svg>
         </div>
         <ConnectedLogin />
       </div>
     );
   }
}

export default LoginForm;
