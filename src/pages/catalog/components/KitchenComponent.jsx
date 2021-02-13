import { React, useState } from 'react';
import Footer from '../../main/footer/components/FooterComponent';
import Header from '../../main/header/components/HeaderComponent';
import Popup from '../../../common/popup/components/PopUpComponent';
import PopupBasket from './PopupBasketComponent';
import { CatalogItem } from './CatalogItemComponent';
import kitchen1 from '../../../assets/catalog-items/kitchen/kitchen1.jpg';
import kitchen2 from '../../../assets/catalog-items/kitchen/kitchen2.jpg';

const Kitchen = () => {
  const [popupBasketActive, setPopupBasketctive] = useState(false);

  return (
    <>
      <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" disabled={false} />
      <div className="container-wrap">
        <div className="items">
          <CatalogItem
            id={7}
            img={<img className="imgItem" src={kitchen1} alt="Духовой шкаф Electrolux OPEB2320C" title="Духовой шкаф Electrolux OPEB2320C" />}
            description="Духовой шкаф Electrolux OPEB2320C"
            inStock
            price={490}
            setPopupBasketctive={setPopupBasketctive}
          />
          <CatalogItem
            id={8}
            img={<img className="imgItem" src={kitchen2} alt="Духовой шкаф  Electrolux OEF5H70X" title="Духовой шкаф  Electrolux OEF5H70X" />}
            description="Духовой шкаф  Electrolux OEF5H70X"
            inStock
            price={1180}
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

export default Kitchen;
