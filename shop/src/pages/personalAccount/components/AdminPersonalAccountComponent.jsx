import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ConnectedImageUpload from './PhotoComponent';
import { ENTER, LOGIN } from '../../../redux/actions/loginPersonalAccountActions';
import adminCatalog from '../../../assets/personal-account/admin-catalog.jpg';
import adminProducts from '../../../assets/personal-account/admin-products.png';

const AdminPersonalAccount = ({ onEnter, onLogin }) => (
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
        <button
          type="button"
          className="catalogOfGoodsColumn"
        >
          Каталог товаров
        </button>
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
      <div className="admin-row">
        <Link to="/edit-category">
          <button
            type="button"
            className="categoryRow"
          >
            <img
              src={adminCatalog}
              title="adminCatalog"
              alt="adminCatalog"
              className="adminCatalog"
            />
            <p className="categoryString">Категории</p>
          </button>
        </Link>
        <button
          type="button"
          className="catalogOfGoodsRow"
        >
          <img
            src={adminProducts}
            title="adminCatalog"
            alt="adminCatalog"
            className="adminCatalog"
          />
          <p className="productsString">Каталог товаров</p>
        </button>
        <button
          type="button"
          className="personalDataRow"
        >
          <div className="personalAccountDiv">
            <svg viewBox="0 0 12.61 15" className="personalAccountIcon">
              <g>
                <circle cx="6.3" cy="3.48" r="3.48" />
                <path d="M6.3,8.7A6.3,6.3,0,0,0,0,15H12.61A6.3,6.3,0,0,0,6.3,8.7Z" />
              </g>
            </svg>
            <p className="personalAccountString">Личные данные</p>
          </div>
        </button>
      </div>
    </div>
  </div>
);

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
