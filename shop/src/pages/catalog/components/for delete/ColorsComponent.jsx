import { React, useState } from 'react';
import Footer from '../../main/footer/components/FooterComponent';
import Header from '../../main/header/components/HeaderComponent';
import Popup from '../../../common/popup/components/PopUpComponent';
import PopupBasket from './PopupBasketComponent';
import { ConnectedCatalogItem } from './CatalogItemComponent';
import colors1 from '../../../assets/catalog-items/colors/colors1.jpg';

const Colors = () => {
  const [popupBasketActive, setPopupBasketctive] = useState(false);

  return (
    <>
      <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" disabled={false} />
      <div className="container-wrap">
        <div className="items">
          <ConnectedCatalogItem
            id={12}
            img={<img className="imgItem" src={colors1} alt="Краска стойкая интерьерная Alpina" title="Краска стойкая интерьерная Alpina" />}
            description="Краска стойкая интерьерная Alpina"
            inStock
            price={163}
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

export default Colors;
