import { React, useState } from 'react';
import Footer from '../../main/footer/components/FooterComponent';
import Header from '../../main/header/components/HeaderComponent';
import Popup from '../../../common/popup/components/PopUpComponent';
import PopupBasket from './PopupBasketComponent';
import { ConnectedCatalogItem } from './CatalogItemComponent';
import light1 from '../../../assets/catalog-items/electricalGoodsAndLights/light1.jpg';
import light2 from '../../../assets/catalog-items/electricalGoodsAndLights/light2.jpg';
import light3 from '../../../assets/catalog-items/electricalGoodsAndLights/light3.jpg';

const ElectricalGoodsAndLights = () => {
  const [popupBasketActive, setPopupBasketctive] = useState(false);

  return (
    <>
      <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" disabled={false} />
      <div className="container-wrap">
        <div className="items">
          <ConnectedCatalogItem
            id={1}
            img={<img className="imgItem" src={light1} alt="Светильник потолочный Box Silver" title="Светильник потолочный Box Silver" />}
            description="Светильник потолочный Box Silver"
            inStock
            price={163}
            setPopupBasketctive={setPopupBasketctive}

          />

          <ConnectedCatalogItem
            id={2}
            img={<img className="imgItem" src={light2} alt="Светильник потолочный Globo FORREST" title="Светильник потолочный Globo FORREST" />}
            description="Светильник потолочный Globo FORREST"
            inStock={false}
            price={101}
            setPopupBasketctive={setPopupBasketctive}
          />
          <ConnectedCatalogItem
            id={3}
            img={<img className="imgItem" src={light3} alt="Светильник потолочный SURPA SL-27" title="Светильник потолочный SURPA SL-27" />}
            description="Лампа настольная SURPA SL-27"
            inStock
            price={78}
            setPopupBasketctive={setPopupBasketctive}
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

export default ElectricalGoodsAndLights;
