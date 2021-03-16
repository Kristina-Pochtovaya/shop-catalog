import React from 'react';
import { Link } from 'react-router-dom';
import adminCatalog from '../../../assets/personal-account/admin-catalog.jpg';
import adminProducts from '../../../assets/personal-account/admin-products.png';

const AdminPersonalAccountRows = ({ setIsPersonalInformationVisible }) => (

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
    <Link to="/edit-products">
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
    </Link>
    <button
      type="button"
      className="personalDataRow"
      onClick={() => setIsPersonalInformationVisible(true)}
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
);

export default AdminPersonalAccountRows;
