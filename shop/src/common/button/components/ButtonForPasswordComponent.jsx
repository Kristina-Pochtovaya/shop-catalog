import React from 'react';

const ButtonForPassword = ({
  className = '', handleButtonClick = '', onEnter = '', onLogin = '', children,
}) => (
  <button
    type="button"
    className={className}
    onClick={() => {
      if (handleButtonClick !== '') { handleButtonClick(); }
      if (onEnter !== '') { onEnter(true, false); }
      if (onLogin !== '') { className === 'registrationButton' ? onLogin(false, false, false) : onLogin(true, true, false); }
    }}
  >
    {children}
  </button>
);
export default ButtonForPassword;
