import { React, useState } from 'react';
import Footer from '../../main/footer/components/FooterComponent';
import Header from '../../main/header/components/HeaderComponent';
import Popup from '../../../common/popup/components/PopUpComponent';
import PopupBasket from './PopupBasketComponent';
import { ConnectedCatalogItem } from './CatalogItemComponent';
import householdAppliancies1 from '../../../assets/catalog-items/householdAppliancies/householdAppliancies1.jpg';
import householdAppliancies2 from '../../../assets/catalog-items/householdAppliancies/householdAppliancies2.jpg';

const HouseholdAppliancies = () => {
  const [popupBasketActive, setPopupBasketctive] = useState(false);

  return (
    <>
      <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" disabled={false} />
      <div className="container-wrap">
        <div className="items">
          <ConnectedCatalogItem
            id={5}
            img={<img className="imgItem" src={householdAppliancies1} alt="Кофемашина MAUNFELD MF-720S PRO" title="Кофемашина MAUNFELD MF-720S PRO" />}
            description="Кофемашина MAUNFELD MF-720S PRO"
            inStock
            price={370}
            setPopupBasketctive={setPopupBasketctive}
            counter={1}
          />
          <ConnectedCatalogItem
            id={6}
            img={<img className="imgItem" src={householdAppliancies2} alt="Печь микроволновая MAUNFELD MBMO.20.2PGB" title="Печь микроволновая MAUNFELD MBMO.20.2PGB" />}
            description="Печь микроволновая MAUNFELD MBMO.20.2PGB"
            inStock
            price={490}
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

export default HouseholdAppliancies;
