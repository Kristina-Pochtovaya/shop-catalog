import { React, useState } from 'react';
import Footer from '../../main/footer/components/FooterComponent';
import Header from '../../main/header/components/HeaderComponent';
import Popup from '../../../common/popup/components/PopUpComponent';
import PopupBasket from './PopupBasketComponent';
import { CatalogItem } from './CatalogItemComponent';
import decorationMaterials1 from '../../../assets/catalog-items/decorationMaterials/decorationMaterials1.jpg';
import decorationMaterials2 from '../../../assets/catalog-items/decorationMaterials/decorationMaterials2.jpg';

const DecorationMaterials = () => {
  const [popupBasketActive, setPopupBasketctive] = useState(false);

  return (
    <>
      <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" disabled={false} />
      <div className="container-wrap">
        <div className="items">
          <CatalogItem
            id={14}
            img={<img className="imgItem" src={decorationMaterials1} alt="Ковер Cancun 115(120)х170" title="Ковер Cancun 115(120)х170" />}
            description="Ковер Cancun 115(120)х170"
            inStock
            price={267}
            setPopupBasketctive={setPopupBasketctive}
          />
          <CatalogItem
            id={15}
            img={<img className="imgItem" src={decorationMaterials2} alt="Плитка керамическая Камни" title="Плитка керамическая Камни" />}
            description="Плитка керамическая Камни"
            inStock
            price={17}
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

export default DecorationMaterials;
