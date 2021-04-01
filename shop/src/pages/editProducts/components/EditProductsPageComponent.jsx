import React from 'react';
import { Link } from 'react-router-dom';
import ConnectedHeader from '../../main/header/container/HeaderContainer';
import Footer from '../../main/footer/components/FooterComponent';
import EditProductsPageHeader from './EditProductsPageHeaderComponent';
import EditProductsPageColumns from './EditProductsPageColumnsComponent';

const EditProductsPage = ({ isProductsUpdated, setIsProductsUpdated, pages }) => (
  <>
    <ConnectedHeader linkItem={<button type="button" className="buttonBack">Назад</button>} link="/personal" disabled={false} />
    {pages.loginPersonalAccountReducer.personAccountIsVisible ? (
      <div className="editProducts-box">
        <h1 className="personalAccount"> Товары </h1>
        <div className="editProducts-table">
          <Link to="/add-product">
            <button
              type="button"
              className="addNewProductButton"
            >
              Добавить товар
            </button>
          </Link>
          <div className="listOrder-wrap">
            <EditProductsPageHeader />
            <EditProductsPageColumns
              isProductsUpdated={isProductsUpdated}
              setIsProductsUpdated={setIsProductsUpdated}
            />
          </div>
        </div>
      </div>
    ) : null }
    <Footer />
  </>
);

export default EditProductsPage;
