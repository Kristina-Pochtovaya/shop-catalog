import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ConnectedImageUpload from './PhotoComponent';
import { ENTER, LOGIN } from '../../../redux/actions/loginPersonalAccountActions';
import AdminPersonalAccountRows from './AdminPersonalAccountRowsComponent';
import ConnectedPersonaIformation from './PersonaIformationComponent';

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
              setIsPersonalInformationVisible={setIsPersonalInformationVisible}
            />
          )}
      </div>
    </div>
  );
};
const ConnectedAdminPersonalAccount = connect(
  (state) => ({
    pages: state,
  }),
  (dispatch) => ({
    onEnter: (loginIsVisible, personAccountIsVisible) => dispatch({
      type: ENTER.type,
      payload: { loginIsVisible, personAccountIsVisible },
    }),
    onLogin: (
      loginFormIsVisible, loginFormLoginPageIsVisible, loginFormForgetPasswordIsVisible,
    ) => dispatch({
      type: LOGIN.type,
      payload: {
        loginFormIsVisible, loginFormLoginPageIsVisible, loginFormForgetPasswordIsVisible,
      },
    }),
  }),
)(AdminPersonalAccount);

export default ConnectedAdminPersonalAccount;
