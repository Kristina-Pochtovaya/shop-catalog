import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getCategoriesCatalogRequest from '../api/get/getCatalogCategories';
import setImg from '../../../../common/utils/setImg';
import addScroll from '../../../../common/utils/addScroll';
import PopUp from '../../../../common/components/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../../common/components/popup/components/PopUpSomethingWentWrongComponent';

const Catalog = () => {
  const [popupSmthWentWrongActive, setpopupSmthWentWrongActive] = useState(true);
  const [categoriesArray, setCategories] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  addScroll();

  useEffect(() => {
    getCategoriesCatalogRequest(
      setCategories, setLoading, setError,
    );
  }, []);
  if (!isLoading) {
    return <div className="-isLoading"> </div>;
  }
  if (error) {
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
    <div className="catalog-wrap">
      <h1 className="catalog"> Каталог </h1>
      <div className="items">
        {categoriesArray.categories.map((category) => (
          <div
            className="item"
            key={category.id}
          >
            <Link to={category.link}>
              {category.image
                ? (
                  <div className="imageCategoryCard">
                    <img
                      className="imageCategory"
                      src={category.image}
                      alt={category.imgAlt}
                      title={category.imgTitle}
                    />
                  </div>
                )
                : (
                  <div className="imageCategoryCard">
                    <img
                      className="imageCategory"
                      src={setImg(category.imgAlt)}
                      alt={category.imgAlt}
                      title={category.imgTitle}
                    />
                  </div>
                )}
            </Link>
            <h3 className={category.className}><span className="titleCategory">{category.category}</span></h3>
          </div>
        ))}
      </div>
    </div>

  );
};
export default Catalog;
