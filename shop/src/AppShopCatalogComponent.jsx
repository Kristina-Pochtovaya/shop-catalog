import { React, useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import ConnectedHeader from './pages/main/header/container/HeaderContainer';
import Catalog from './pages/main/catalog/components/CatalogComponent';
import Footer from './pages/main/footer/components/FooterComponent';
import About from './pages/about/components/AboutComponent';
import aboutUS from './assets/header/about-us.png';
import ConnectedBasket from './pages/basket/containers/ConnectedBasketComponent';
import createStore from './redux/store';
import getCatalogCategories from './pages/main/catalog/api/get/getCatalogCategories';
import PopUp from './common/popup/components/PopUpComponent';
import PopupBasket from './pages/catalogItems/components/PopupBasketComponent';
import ConnectedChangePassword from './pages/changePassword/containers/ChangePasswordContainer';
import PersonalAccount from './pages/personalAccount/components/PersonalAccountComponent';
import ConnectedRegistration from './pages/registration/containers/ConnectedRegistrationComponent';
import getProductsRequest from './common/api/get/getProductsRequest';
import { ConnectedCatalogItem } from './pages/catalogItems/components/CatalogItemComponent';
import setImg from './common/untils/setImg';
import PopUpSomethingWentWrong from './common/popup/components/PopUpSomethingWentWrongComponent';
import ConnectedEditCategoryPage from './pages/editCategory/containers/ConnectedEditCategoryPage';
import WithRouterAddCategoryPage from './pages/editCategory/containers/WithRouterAddCategoryPageComponent';
import WithRouterAddProductPage from './pages/editProducts/containers/WithRouterAddCategoryPageComponent';
import ConnectedEditProductsPage from './pages/editProducts/containers/ConnectedEditProductsPage';
import ImageContainer from './ImageContainterComponent';
import ImageForm from './ImageFormComponent';

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
  const [isProductsUpdated, setIsProductsUpdated] = useState(false);
  const [newImage, setNewImage] = useState([]);

  useEffect(() => {
    getProductsRequest(setProducts, setLoadingProducts, setErrorProducts);
    getCatalogCategories(
      setCategories, setLoadingCategory, setErrorCategory,
    );
  }, [isProductsUpdated]);

  const handleNewImage = () => {
    setNewImage([...newImage, 'New Image!']);
  };

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
        <Route path="/shop-catalog">
          <Redirect to="/main-page" />
        </Route>
        <Route path="/main-page">
          <ConnectedHeader linkItem={<img src={aboutUS} alt="О нас" />} link="/about" disabled={false} />
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
            <ConnectedHeader
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
                        src={product.image ? product.image : setImg(product.imgAlt)}
                        alt={product.imgAlt}
                        title={product.imgTitle}
                      />
                        )}
                    className="imgItem"
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
        <Route path="/change-password">
          <ConnectedChangePassword />
        </Route>
        <Route path="/personal">
          <PersonalAccount />
        </Route>
        <Route path="/registration">
          <ConnectedRegistration />
        </Route>
        <Route path="/edit-category">
          <ConnectedEditCategoryPage />
        </Route>
        <Route path="/add-category">
          <WithRouterAddCategoryPage
            setIsProductsUpdated={setIsProductsUpdated}
            isProductsUpdated={isProductsUpdated}
          />
        </Route>
        <Route path="/add-product">
          <WithRouterAddProductPage
            setIsProductsUpdated={setIsProductsUpdated}
            isProductsUpdated={isProductsUpdated}
          />
        </Route>
        <Route path="/edit-products">
          <ConnectedEditProductsPage
            setIsProductsUpdated={setIsProductsUpdated}
            isProductsUpdated={isProductsUpdated}
          />
        </Route>
        <Route path="/test">
          <ImageContainer newImage={newImage} />
          <ImageForm handleNewImage={handleNewImage} />
        </Route>
      </Provider>
    </BrowserRouter>
  );
}

export default AppShopCatalog;
