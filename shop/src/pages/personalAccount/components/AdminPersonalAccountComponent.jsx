import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import ConnectedImageUpload from './PhotoComponent';
import AdminPersonalAccountRows from './AdminPersonalAccountRowsComponent';
import ConnectedPersonaIformation from '../containers/ConnectedPersonaIformation';

const AdminPersonalAccount = ({ onEnter, onLogin }) => {
  const [isPersonalInformationVisible, setIsPersonalInformationVisible] = useState(false);

  return (
    <div className="admin-box">
      <h1 className="personalAccount"> Личный кабинет </h1>
      <div className="admin-container">
        <div className="admin-column">
          <div className="adminPhotoColumn">
            <ConnectedImageUpload />
          </div>
          <Link to="/edit-category" className="exitLink">
            <button
              type="button"
              className="categoryColumn"
            >
              Категории
            </button>
          </Link>
          <Link to="/edit-products" className="exitLink">
            <button
              type="button"
              className="catalogOfGoodsColumn"
            >
              Каталог товаров
            </button>
          </Link>
          <button
            type="button"
            className="personalDataColumn"
            onClick={() => setIsPersonalInformationVisible(true)}
          >
            Личные данные
          </button>
          <Link to="/main-page" className="exitLink">
            <button
              type="button"
              className="exitButton"
              onClick={() => {
                onEnter(true, false); onLogin(false, false, false);
              }}
            >
              Выйти
            </button>
          </Link>
        </div>
        {!isPersonalInformationVisible ? (
          <AdminPersonalAccountRows
            setIsPersonalInformationVisible={setIsPersonalInformationVisible}
          />
        )
          : (
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
