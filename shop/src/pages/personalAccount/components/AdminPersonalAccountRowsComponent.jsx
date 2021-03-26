import React from 'react';
import buttonAdminPageArray from '../constants/buttonAdminPageArray';

const AdminPersonalAccountRows = ({ setIsPersonalInformationVisible, history }) => {
  const handleButtonOnClick = (className) => {
    if (className === 'categoryRow') { history.push('./edit-category'); }
    if (className === 'catalogOfGoodsRow') { history.push('./edit-products'); }
    if (className === 'personalDataRow') { setIsPersonalInformationVisible(true); }
  };

  return (
    <div className="admin-row">
      {buttonAdminPageArray.map((button) => (
        button.type === 'row'
      && (
      <button
        key={button.className}
        className={button.className}
        type="button"
        onClick={() => handleButtonOnClick(button.className)}
      >
        { button.className !== 'personalDataRow' ? (
          <img
            src={button.src}
            title={button.image}
            alt={button.image}
            className={button.image}
          />
        ) : (
          <svg viewBox="0 0 12.61 15" className="personalAccountIcon">
            <g>
              <circle cx="6.3" cy="3.48" r="3.48" />
              <path d="M6.3,8.7A6.3,6.3,0,0,0,0,15H12.61A6.3,6.3,0,0,0,6.3,8.7Z" />
            </g>
          </svg>
        )}
        <p className={button.classNameString}>{button.text}</p>
      </button>
      )))}
    </div>
  );
};

export default AdminPersonalAccountRows;
