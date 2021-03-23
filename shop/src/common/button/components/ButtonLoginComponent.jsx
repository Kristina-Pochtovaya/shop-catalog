import React from 'react';

const ButtonLogin = ({
  className = '', handleButtonClick = '', onEnterEmail = '', onLogin = '', children, clientLogin = '',
}) => (
  <button
    type="button"
    className={className}
    onClick={() => {
      if (handleButtonClick !== '') { handleButtonClick(); }
      if (onEnterEmail !== '') { onEnterEmail(clientLogin); }
      if (onLogin !== '') { className === 'registrationButton' ? onLogin(false, false, false) : onLogin(true, false, true); }
    }}
  >
    {children}
  </button>
);
export default ButtonLogin;
