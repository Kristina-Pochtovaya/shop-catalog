import { React, useState, useEffect } from 'react';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';
import getCategories from '../api/get/getCategories';
import PopUp from '../../../common/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../common/popup/components/PopUpSomethingWentWrongComponent';
import setImg from '../../../common/untils/setImg';
import InputEditCategoryName from './InputEditCategoryNameComponent';

const EditCategoryPage = () => {
  const [categoriesArray, setCategories] = useState(null);
  const [isLoadingCategory, setLoadingCategory] = useState(false);
  const [errorCategory, setErrorCategory] = useState(null);
  const [popupSmthWentWrongActive, setpopupSmthWentWrongActive] = useState(true);
  const [isEditActive, setEditActive] = useState(false);
  const [isEditActiveId, setEditActiveId] = useState('');

  useEffect(() => {
    getCategories(
      setCategories, setLoadingCategory, setErrorCategory,
    );
  }, []);

  if (!isLoadingCategory) {
    return <div className="-isLoading"> </div>;
  }

  if (errorCategory) {
    return (
      <PopUp
        active={popupSmthWentWrongActive}
        setActive={setpopupSmthWentWrongActive}
      >
        <PopUpSomethingWentWrong
          text="Попробуйте еще раз"
          setpopupSmthWentWrongActive={setpopupSmthWentWrongActive}
        />
      </PopUp>
    );
  }

  return (
    <>
      <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/personal" disabled={false} />
      <div className="editCatalog-box">
        <h1 className="personalAccount"> Категории </h1>
        <div className="editCategory-table">
          <button
            type="button"
            className="addCategoryButton"
          >
            Добавить категорию
          </button>
          <ul className="listOrder-wrap">
            <div className="title">
              <p className="titleImage">Изображение</p>
              <p className="titleName">Название</p>
              <p className="titleEdit"> </p>
              <p className="titleDelete"> </p>
            </div>
            {categoriesArray.categories.map((category) => (
              <li key={category.id}>
                <div className="columns">
                  <div className="columnImage">
                    {category.img
                      ? (
                        <img
                          className="imageCategory"
                          src={category.image}
                          alt={category.imgAlt}
                          title={category.imgTitle}
                        />
                      )
                      : (
                        <img
                          src={setImg(category.category)}
                          alt={category.imgAlt}
                          title={category.imgTitle}
                        />
                      )}
                  </div>

                  <div className="columnName">
                    {isEditActive && category.id === isEditActiveId
                      ? (
                        <InputEditCategoryName
                          id={category.id}
                          category={category.category}
                          setEditActive={setEditActive}
                        />
                      )
                      : <p>{category.category}</p>}
                  </div>

                  <div className="columnEdit">
                    <button
                      type="button"
                      className="editCategoryButton"
                      onClick={() => {
                        setEditActive(true);
                        setEditActiveId(category.id);
                      }}
                    >
                      Редактировать
                    </button>
                  </div>

                  <div className="columnDelete">
                    <button
                      type="button"
                      className="deleteCategoryButton"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditCategoryPage;
