import React from 'react';
import buttonAuthorizedPageArray from '../constants/buttonAuthorizedPageArray';
import handleButtonOnClick from '../utils/handleButtonOnClick';

const AuthorizedPersonalAccountRows = ({ setIsPersonalInformationVisible, history }) => (
  <div className="admin-row">
    {buttonAuthorizedPageArray.map((button) => (
      button.type === 'row'
      && (
      <button
        key={button.className}
        className={button.className}
        type="button"
        onClick={() => handleButtonOnClick(button.className, history,
          setIsPersonalInformationVisible)}
      >
        {button.svg}
        <p className={button.classNameString}>{button.text}</p>
      </button>
      )))}
  </div>
);

export default AuthorizedPersonalAccountRows;
