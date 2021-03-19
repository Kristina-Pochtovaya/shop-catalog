import React from 'react';
import { Link } from 'react-router-dom';
import ConnectedHeader from '../../main/header/container/HeaderContainer';
import Footer from '../../main/footer/components/FooterComponent';
import EditCategoryPageHeader from './EditCategoryPageHeaderComponent';
import EditCategoryPageColumns from './EditCategoryPageColumnsComponent';

const EditCategoryPage = () => (
  <>
    <ConnectedHeader linkItem={<button type="button" className="buttonBack">Назад</button>} link="/personal" disabled={false} />
    <div className="editCatalog-box">
      <h1 className="personalAccount"> Категории </h1>
      <div className="editCategory-table">
        <Link to="/add-category">
          <button
            type="button"
            className="addCategoryButton"
          >
            Добавить категорию
          </button>
        </Link>
        <ul className="listOrder-wrap">
          <EditCategoryPageHeader />
          <EditCategoryPageColumns />
        </ul>
      </div>
    </div>
    <Footer />
  </>
);

export default EditCategoryPage;
