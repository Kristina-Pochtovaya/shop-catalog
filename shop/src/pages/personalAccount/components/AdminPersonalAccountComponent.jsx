import { React, useState } from 'react';
import ConnectedImageUpload from './PhotoComponent';
import WithRouterAdminPersonalAccount from '../containers/WithRouterAdminPersonalAccountRowsComponent';
import ConnectedPersonaIformation from '../containers/ConnectedPersonaIformation';
import buttonAdminPageArray from '../constants/buttonAdminPageArray';

const AdminPersonalAccount = ({ onEnter, onLogin, history }) => {
  const [isPersonalInformationVisible, setIsPersonalInformationVisible] = useState(false);

  const handleButtonOnClick = (className) => {
    if (className === 'categoryColumn') { history.push('./edit-category'); }
    if (className === 'catalogOfGoodsColumn') { history.push('./edit-products'); }
    if (className === 'personalDataColumn') { setIsPersonalInformationVisible(true); }
    if (className === 'exitButton') { history.push('./main-page'); onEnter(true, false); onLogin(false, false, false); }
  };

  return (
    <div className="admin-box">
      <h1 className="personalAccount"> Личный кабинет </h1>
      <div className="admin-container">
        <div className="admin-column">
          <div className="adminPhotoColumn">
            <ConnectedImageUpload />
          </div>
          {buttonAdminPageArray.map((button) => (
            button.type === 'column' && (
            <button
              key={button.className}
              className={button.className}
              type="button"
              onClick={() => handleButtonOnClick(button.className)}
            >
              {button.text}
            </button>
            )
          ))}
        </div>
        {!isPersonalInformationVisible ? (
          <WithRouterAdminPersonalAccount
            setIsPersonalInformationVisible={setIsPersonalInformationVisible}
          />
        ) : (
          <ConnectedPersonaIformation
            className="connectedPersonaIformation"
            setIsPersonalInformationVisible={setIsPersonalInformationVisible}
          />
        )}
      </div>
    </div>
  );
};
export default AdminPersonalAccount;
