import { React, useState } from 'react';
import ConnectedHeader from '../../main/header/container/HeaderContainer';
import Footer from '../../main/footer/components/FooterComponent';
import ConnectedBusketTable from '../containers/ConnectedBasketTableComponent';
import WithRouterPopupBasket from '../../catalogItems/containers/WithRouterPopupBasket';
import addRemoveScroll from '../../../common/utils/addRemoveScroll';
import PopUpsWrapper from './PopUpsWrapperComponent';
import PopUpsThanks from './PopUpsThanksComponent';
import PopUpsError from './PopUpsErrorComponent';

const Basket = () => {
  const [popupOrderActive, setPopupOrderActive] = useState(false);
  const [popupThanksActive, setPopupThanksActive] = useState(false);
  const [popupSmthWentWrongActive, setpopupSmthWentWrongActive] = useState(false);
  const [popupBasketActive, setPopupBasketActive] = useState(false);

  return (
    <>
      <ConnectedHeader linkItem={<button type="button" className="buttonBack">Главная</button>} link="/main-page" disabled />
      <div className="order-wrap">
        <h2 className="order"> Оформление заказа </h2>
        <ConnectedBusketTable />
        <div className="buttonOrderBox">
          <button
            id="continueBut"
            className="buttonOrderBuy"
            type="button"
            onClick={() => { setPopupOrderActive(true); addRemoveScroll(); }}
          >
            Продолжить
          </button>
        </div>
      </div>
      <Footer />
      <PopUpsWrapper
        popupOrderActive={popupOrderActive}
        setPopupOrderActive={setPopupOrderActive}
        setPopupThanksActive={setPopupThanksActive}
        setpopupSmthWentWrongActive={setpopupSmthWentWrongActive}
      />
      <PopUpsThanks
        popupThanksActive={popupThanksActive}
        setPopupThanksActive={setPopupThanksActive}
        popupOrderActive={popupOrderActive}
      />
      <div
        className={popupSmthWentWrongActive ? 'popup-box -active' : 'popup-box'}
      >
        <PopUpsError
          popupSmthWentWrongActive={popupSmthWentWrongActive}
          setpopupSmthWentWrongActive={setpopupSmthWentWrongActive}
          popupOrderActive={popupOrderActive}
        />
        {popupBasketActive ? (<WithRouterPopupBasket className="popupBasket" closePopup={setPopupBasketActive} />) : null }
      </div>
    </>
  );
};

export default Basket;
