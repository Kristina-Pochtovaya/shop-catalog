import { React, useState } from 'react';
import Footer from '../../main/footer/components/FooterComponent';
import Header from '../../main/header/components/HeaderComponent';
import Popup from '../../../common/popup/components/PopUpComponent';
import PopupBasket from './PopupBasketComponent';
import { CatalogItem } from './CatalogItemComponent';
import householdGoods1 from '../../../assets/catalog-items/householdGoods/householdGoods1.jpg';

const HouseholdGoods = () => {
  const [popupBasketActive, setPopupBasketctive] = useState(false);

  return (
    <>
      <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" disabled={false} />
      <div className="container-wrap">
        <div className="items">
          <CatalogItem
            id={13}
            img={<img className="imgItem" src={householdGoods1} alt="Комлект постельного белья евро Mona Liza Chalet" title="Комлект постельного белья евро Mona Liza Chalet" />}
            description="Комлект постельного белья евро Mona Liza Chalet"
            inStock
            price={25}
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

export default HouseholdGoods;
