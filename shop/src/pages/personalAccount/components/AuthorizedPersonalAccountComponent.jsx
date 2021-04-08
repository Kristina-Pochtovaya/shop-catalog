import { React, useState } from 'react';
import ConnectedImageUpload from '../containers/ConnectedImageUpload';
import WithRouterAuthorizedPersonalAccountRows from '../containers/WithRouterAuthorizedPersonalAccountRowsComponent';
import ConnectedPersonaIformation from '../containers/ConnectedPersonaIformation';
import buttonAuthorizedPageArray from '../constants/buttonAuthorizedPageArray';
import handleButtonOnClick from '../utils/handleButtonOnClick';

const AuthorizedPersonalAccount = ({
  onEnter, onLogin, history, onDelete,
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
          {buttonAuthorizedPageArray.map((button) => (
            button.type === 'column' && (
            <button
              key={button.className}
              className={button.className}
              type="button"
              onClick={() => handleButtonOnClick(button.className, history,
                setIsPersonalInformationVisible, onEnter, onLogin, onDelete)}
            >
              {button.text}
            </button>
            )
          ))}
        </div>
        {!isPersonalInformationVisible ? (
          <WithRouterAuthorizedPersonalAccountRows
            className="withRouterAuthorizedPersonalAccountRows"
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
export default AuthorizedPersonalAccount;
