import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getCategoriesCatalogRequest from '../api/get/getCatalogCategories';
import setImg from '../../../../common/untils/setImg';
import addScroll from '../../../../common/untils/addScroll';
import PopUp from '../../../../common/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../../common/popup/components/PopUpSomethingWentWrongComponent';

const CatalogItems = () => {
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
              <img
                src={setImg(category.category)}
                alt={category.imgAlt}
                title={category.imgTitle}
              />
            </Link>
            <h3 className={category.className}>{category.category}</h3>
          </div>
        ))}
      </div>
    </div>

  );
};
export default CatalogItems;
