import React from 'react';
import buttonAdminPageArray from '../constants/buttonAdminPageArray';
import handleButtonOnClick from '../utils/handleButtonOnClick';
import PersonalAccountSymbol from '../../../common/components/icons/components/PersonalAccountSymbol';

const AdminPersonalAccountRows = ({ setIsPersonalInformationVisible, history }) => (
  <div className="admin-row">
    {buttonAdminPageArray.map((button) => (
      button.type === 'row'
      && (
      <button
        key={button.className}
        className={button.className}
        type="button"
        onClick={() => handleButtonOnClick(button.className, history,
          setIsPersonalInformationVisible)}
      >
        { button.className !== 'personalDataRow' ? (
          <img
            src={button.src}
            title={button.image}
            alt={button.image}
            className={button.image}
          />
        ) : (
          <PersonalAccountSymbol className="personalAccountIcon" />
        )}
        <p className={button.classNameString}>{button.text}</p>
      </button>
      )))}
  </div>
);

export default AdminPersonalAccountRows;
