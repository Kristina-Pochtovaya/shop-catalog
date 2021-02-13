import { React, useState } from 'react';
import Footer from '../../main/footer/components/FooterComponent';
import Header from '../../main/header/components/HeaderComponent';
import Popup from '../../../common/popup/components/PopUpComponent';
import PopupBasket from './PopupBasketComponent';
import decorationMaterials1 from '../../../assets/catalog-items/decorationMaterials/decorationMaterials1.jpg';
import decorationMaterials2 from '../../../assets/catalog-items/decorationMaterials/decorationMaterials2.jpg';
import basket from '../../../assets/common/basket.png';

const DecorationMaterials = () => {
  const [popupBasketActive, setPopupBasketctive] = useState(false);

  return (
    <>
      <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" disabled={false} />
      <div className="container-wrap">
        <div className="items">
          <div className="item-wrap">
            <div className="info">
              <p className="-yes">
                <svg viewBox="0 0 15 15">
                  <g>
                    <path d="M7.5,0A7.5,7.5,0,1,0,15,7.5,7.51,7.51,0,0,0,7.5,0Zm4.31,6.23L7.09,10.94a1.06,1.06,0,0,1-1.5,0l-2.4-2.4A1.06,1.06,0,1,1,4.69,7L6.34,8.69l4-4a1.06,1.06,0,0,1,1.5,1.5Z" />
                  </g>
                </svg>
                Наличие
              </p>
            </div>
            <img className="imgItem" src={decorationMaterials1} alt="Ковер Cancun 115(120)х170" title="Ковер Cancun 115(120)х170" />
            <h4>Ковер Cancun 115(120)х170</h4>
            <div className="purchase">
              <p>267 РУБ.</p>
              <button
                className="busketButton"
                type="button"
                onClick={() => setPopupBasketctive(true)}
              >
                <img className="imgBascet" src={basket} alt="Корзина" title="Корзина" />
                <span>В корзину</span>
              </button>
            </div>
          </div>
          <div className="item-wrap">
            <div className="info">
              <p className="-yes">
                <svg viewBox="0 0 15 15">
                  <g>
                    <path d="M7.5,0A7.5,7.5,0,1,0,15,7.5,7.51,7.51,0,0,0,7.5,0Zm4.31,6.23L7.09,10.94a1.06,1.06,0,0,1-1.5,0l-2.4-2.4A1.06,1.06,0,1,1,4.69,7L6.34,8.69l4-4a1.06,1.06,0,0,1,1.5,1.5Z" />
                  </g>
                </svg>
                Наличие
              </p>
            </div>
            <img className="imgItem" src={decorationMaterials2} alt="Плитка керамическая Камни" title="Плитка керамическая Камни" />
            <h4>Плитка керамическая Камни</h4>
            <div className="purchase">
              <p>17 РУБ.</p>
              <button
                className="busketButton"
                type="button"
                onClick={() => setPopupBasketctive(true)}
              >
                <img className="imgBascet" src={basket} alt="Корзина" title="Корзина" />
                <span>В корзину</span>
              </button>
            </div>
          </div>
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
