import React from 'react';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';

const EditCategoryPage = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/personal" disabled={false} />
    <div className="editCatalog-box">
      <h1 className="personalAccount"> Категории </h1>
      <div className="editCategory-table">
        <button
          type="button"
        >
          Добавить категорию
        </button>
        <div className="title">
          <p className="titleGood">Изображение</p>
          <p className="titlePrice">Название</p>
          <p className="titleEdit"> </p>
          <p className="titleDelete"> </p>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default EditCategoryPage;
