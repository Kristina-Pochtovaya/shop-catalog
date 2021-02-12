import { React, useState } from 'react';
import Footer from '../../main/footer/components/FooterComponent';
import Header from '../../main/header/components/HeaderComponent';
import Popup from '../../../common/popup/components/PopUpComponent';
import PopupBasket from './PopupBasketComponent';
import light1 from '../../../assets/catalog-items/electricalGoodsAndLights/light1.jpg';
import light2 from '../../../assets/catalog-items/electricalGoodsAndLights/light2.jpg';
import light3 from '../../../assets/catalog-items/electricalGoodsAndLights/light3.jpg';
import basket from '../../../assets/common/basket.png';

const ElectricalGoodsAndLights = () => {
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
            <img className="imgItem" src={light1} alt="Светильник потолочный" title="Светильник потолочный" />
            <h4>Светильник потолочный</h4>
            <div className="purchase">
              <p>163 РУБ.</p>
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
              <p className="-no">
                <svg viewBox="0 0 15 15">
                  <g>
                    <path d="M7.5,0A7.5,7.5,0,1,0,15,7.5,7.51,7.51,0,0,0,7.5,0Zm3.61,8.08H3.89a.58.58,0,0,1,0-1.15h7.21a.58.58,0,1,1,0,1.15Z" />
                  </g>
                </svg>
                Наличие
              </p>
            </div>
            <img className="imgItem" src={light2} alt="Светильник потолочный" title="Светильник потолочный" />
            <h4>Светильник потолочный</h4>
            <div className="purchase">
              <p>101 РУБ.</p>
              <button
                className="busketButton -disabled"
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
            <img className="imgItem" src={light3} alt="Лампа настольная" title="Лампа настольная" />
            <h4>Лампа настольная</h4>
            <div className="purchase">
              <p>78 РУБ.</p>
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

export default ElectricalGoodsAndLights;
