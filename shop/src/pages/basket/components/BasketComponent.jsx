import { React, useState } from 'react';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';
import PopUp from '../../../common/popup/components/PopUpComponent';
import ConnectedBusketTable from '../containers/ConnectedBasketTableComponent';
import PopupBasket from '../../catalogItems/components/PopupBasketComponent';
import addRemoveScroll from '../../../common/untils/addRemoveScroll';
import ConnectedPopUpBasketOrderToUsers from '../containers/ConnectedPopUpBasketOrderComponent';
import PopUpSomethingWentWrong from '../../../common/popup/components/PopUpSomethingWentWrongComponent';
import PopUpThanks from '../../../common/popup/components/PopUpThanksComponent';

const Basket = () => {
  const [popupOrderActive, setPopupOrderActive] = useState(false);
  const [popupThanksActive, setPopupThanksActive] = useState(false);
  const [popupSmthWentWrongActive, setpopupSmthWentWrongActive] = useState(false);
  const [popupBasketActive, setPopupBasketctive] = useState(false);

  return (
    <>
      <Header linkItem={<button type="button" className="buttonBack">Главная</button>} link="/main-page" disabled />
      <div className="order-wrap">
        <h2 className="order"> Оформление заказа </h2>
        <ConnectedBusketTable />
        <div className="buttonOrderBox">
          <button
            id="continueBut"
            className="buttonOrderBuy"
            type="button"
            onClick={() => {
              setPopupOrderActive(true);
              addRemoveScroll();
            }}
          >
            Продолжить
          </button>
        </div>
      </div>
      <Footer />
      <div
        className={popupOrderActive ? 'popup-box -active' : 'popup-box'}
      >
        { popupOrderActive ? (
          <PopUp
            active={popupOrderActive}
            setActive={setPopupOrderActive}
          >
            <ConnectedPopUpBasketOrderToUsers
              setPopupOrderActive={setPopupOrderActive}
              setPopupThanksActive={setPopupThanksActive}
              setpopupSmthWentWrongActive={setpopupSmthWentWrongActive}
            />
          </PopUp>
        )
          : null }
      </div>
      <div
        className={popupThanksActive ? 'popup-box -active' : 'popup-box'}
      >
        { popupThanksActive ? (

          <PopUp
            active={popupThanksActive}
            setActive={setPopupThanksActive}
            activeOrder={popupOrderActive}
          >
            <PopUpThanks setPopupThanksActive={setPopupThanksActive} />
          </PopUp>
        )
          : null }
      </div>
      <div
        className={popupSmthWentWrongActive ? 'popup-box -active' : 'popup-box'}
      >
        {popupSmthWentWrongActive ? (
          <PopUp
            active={popupSmthWentWrongActive}
            setActive={setpopupSmthWentWrongActive}
            activeOrder={popupOrderActive}
          >
            <PopUpSomethingWentWrong
              text="Попробуйте, сделать заказ еще раз"
              setpopupSmthWentWrongActive={setpopupSmthWentWrongActive}
            />
          </PopUp>
        )
          : null }
        {popupBasketActive ? (<PopupBasket closePopup={setPopupBasketctive} />) : null }
      </div>
    </>
  );
};

export default Basket;
