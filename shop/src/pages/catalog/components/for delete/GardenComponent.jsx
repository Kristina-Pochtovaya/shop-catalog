import { React, useState } from 'react';
import Footer from '../../main/footer/components/FooterComponent';
import Header from '../../main/header/components/HeaderComponent';
import Popup from '../../../common/popup/components/PopUpComponent';
import PopupBasket from './PopupBasketComponent';
import { ConnectedCatalogItem } from './CatalogItemComponent';
import garden1 from '../../../assets/catalog-items/garden/garden1.jpg';

const Garden = () => {
  const [popupBasketActive, setPopupBasketctive] = useState(false);

  return (
    <>
      <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" disabled={false} />
      <div className="container-wrap">
        <div className="items">
          <ConnectedCatalogItem
            id={4}
            img={<img className="imgItem" src={garden1} alt="Качели садовые Olsa Элит" title="Качели садовые Olsa Элит" />}
            description="Качели садовые Olsa Элит"
            inStock
            price={390}
            setPopupBasketctive={setPopupBasketctive}
            counter={1}
          />
        </div>
      </div>
      <Popup active={popupBasketActive} setActive={setPopupBasketctive}>
        <PopupBasket closePopup={setPopupBasketctive} />
      </Popup>
      <Footer />
    </>
  );
};

export default Garden;
