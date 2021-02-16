import { React, useState } from 'react';
import Footer from '../../main/footer/components/FooterComponent';
import Header from '../../main/header/components/HeaderComponent';
import Popup from '../../../common/popup/components/PopUpComponent';
import PopupBasket from './PopupBasketComponent';
import { ConnectedCatalogItem } from './CatalogItemComponent';
import decor1 from '../../../assets/catalog-items/decor/decor1.jpg';
import decor2 from '../../../assets/catalog-items/decor/decor2.jpg';
import decor3 from '../../../assets/catalog-items/decor/decor3.jpg';

const Decor = () => {
  const [popupBasketActive, setPopupBasketctive] = useState(false);

  return (
    <>
      <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" disabled={false} />
      <div className="container-wrap">
        <div className="items">
          <ConnectedCatalogItem
            id={9}
            img={<img className="imgItem" src={decor1} alt="Часы настенные Troyka 91900929 (230)" title="Часы настенные Troyka 91900929 (230)" />}
            description="Часы настенные Troyka 91900929 (230)"
            inStock
            price={33}
            setPopupBasketctive={setPopupBasketctive}
            counter={1}
          />
          <ConnectedCatalogItem
            id={10}
            img={<img className="imgItem" src={decor2} alt="Репродукция в раме Styler Осень-1 (OB-02591) 500x500" title="Репродукция в раме Styler Осень-1 (OB-02591) 500x500" />}
            description="Репродукция в раме Styler Осень-1 (OB-02591) 500x500"
            inStock
            price={42}
            setPopupBasketctive={setPopupBasketctive}
            counter={1}
          />
          <ConnectedCatalogItem
            id={11}
            img={<img className="imgItem" src={decor3} alt="Подушка декоративная Nivasan Дино" title="Подушка декоративная Nivasan Дино" />}
            description="Подушка декоративная Nivasan Дино"
            inStock
            price={28}
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

export default Decor;
