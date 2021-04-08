import React from 'react';

const ButtonLogin = ({
  className = '', handleButtonClick = '', onEnterEmail = '', onLogin = '', children, clientLogin = '', link = '', id = '',
}) => (
  <button
    type="button"
    className={className}
    onClick={() => {
      if (handleButtonClick !== '') { handleButtonClick(); }
      if (onEnterEmail !== '') { onEnterEmail(clientLogin, id); }
      if (onLogin !== '') { className === 'registrationButton' ? onLogin(false, false, false) : onLogin(true, false, true); }
      if (link !== '') { link(); }
    }}
  >
    {children}
  </button>
);
export default ButtonLogin;
