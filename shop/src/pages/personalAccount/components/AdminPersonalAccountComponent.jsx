import { React, useState } from 'react';
import ConnectedImageUpload from '../containers/ConnectedImageUpload';
import WithRouterAdminPersonalAccountRows from '../containers/WithRouterAdminPersonalAccountRowsComponent';
import ConnectedPersonaIformation from '../containers/ConnectedPersonaIformation';
import buttonAdminPageArray from '../constants/buttonAdminPageArray';
import handleButtonOnClick from '../utils/handleButtonOnClick';

const AdminPersonalAccount = ({
  onEnter, onLogin, history, onDelete, onDeleteAll,
}) => {
  const [isPersonalInformationVisible, setIsPersonalInformationVisible] = useState(false);
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
              onClick={() => handleButtonOnClick(button.className, history,
                setIsPersonalInformationVisible, onEnter, onLogin, onDelete, onDeleteAll)}
            >
              {button.text}
            </button>
            )
          ))}
        </div>
        {!isPersonalInformationVisible ? (
          <WithRouterAdminPersonalAccountRows
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
