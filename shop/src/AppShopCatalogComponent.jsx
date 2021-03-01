import { React, useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Header from './pages/main/header/components/HeaderComponent';
import Catalog from './pages/main/catalog/components/CatalogComponent';
import Footer from './pages/main/footer/components/FooterComponent';
import About from './pages/about/components/AboutComponent';
import aboutUS from './assets/header/about-us.png';
import ConnectedBasket from './pages/basket/containers/ConnectedBasketComponent';
import createStore from './redux/store';
import getCategoriesCatalogRequest from './pages/main/catalog/api/get/getCategoriesCatalogRequest';
import PopUp from './common/popup/components/PopUpComponent';
import PopupBasket from './pages/catalog/components/PopupBasketComponent';
import getProductsRequest from './common/api/get/getProductsRequest';
import { ConnectedCatalogItem } from './pages/catalog/components/CatalogItemComponent';
import setImg from './common/untils/setImg';
import PopUpSomethingWentWrong from './common/popup/components/PopUpSomethingWentWrongComponent';

const store = createStore();

export function AppShopCatalog() {
  const [categoriesArray, setCategories] = useState(null);
  const [productsArray, setProducts] = useState(null);
  const [isLoadingCategory, setLoadingCategory] = useState(false);
  const [isLoadingProducts, setLoadingProducts] = useState(false);
  const [errorCategory, setErrorCategory] = useState(null);
  const [errorProducts, setErrorProducts] = useState(false);
  const [popupBasketActive, setPopupBasketctive] = useState(false);
  const [popupSmthWentWrongActive, setpopupSmthWentWrongActive] = useState(true);

  useEffect(() => {
    getCategoriesCatalogRequest(
      setCategories, setLoadingCategory, setErrorCategory,
    );
    (getProductsRequest(setProducts, setLoadingProducts, setErrorProducts));
  }, []);

  if (!isLoadingProducts || !isLoadingCategory) {
    return <div className="-isLoading"> </div>;
  }

  if (errorProducts || errorCategory) {
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
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/">
          <Redirect to="/main-page" />
        </Route>
        <Route path="/main-page">
          <Header linkItem={<img src={aboutUS} alt="О нас" />} link="/about" disabled={false} />
          <Catalog />
          <Footer />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/basket">
          <ConnectedBasket />
        </Route>
        {categoriesArray.categories.map((category) => (
          <Route path={category.link} key={category.id}>
            <Header
              linkItem={<button type="button" className="buttonBack">Назад</button>}
              link="/main-page"
              disabled={false}
            />
            <div className="container-wrap">
              <div className="items">
                {productsArray.products.map((product) => (product.categoryId === category.id
                  && (
                  <ConnectedCatalogItem
                    key={product.id}
                    id={product.id}
                    img={(
                      <img
                        className="imgItem"
                        src={setImg(product.description)}
                        alt={product.imgAlt}
                        title={product.imgTitle}
                      />
     )}
                    description={product.description}
                    inStock={product.inStock}
                    price={product.price}
                    setPopupBasketctive={setPopupBasketctive}
                    counter={product.counter}
                    category={product.category}
                  />
                  )
                ))}
              </div>
            </div>
            <PopUp active={popupBasketActive} setActive={setPopupBasketctive}>
              <PopupBasket closePopup={setPopupBasketctive} />
            </PopUp>
            <Footer />
          </Route>
        ))}
      </Provider>
    </BrowserRouter>
  );
}

export default AppShopCatalog;
