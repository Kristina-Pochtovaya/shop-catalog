import { React, useState } from 'react';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';
import PopUp from '../../../common/popup/components/PopUpComponent';
import InputPhone from '../../../common/inputPhone/components/InputPhoneComponent';
import ConnectedBusketTable from '../containers/ConnectedBasketTableComponent';
import postBasketItemsRequest from '../api/get/postBasketItemsRequest';

const Basket = ({
  items,
}) => {
  const [popupOrderActive, setPopupOrderActive] = useState(false);
  const [popupThanksActive, setPopupThanksActive] = useState(false);
  const [popupSmthWentWrongActive, setpopupSmthWentWrongActive] = useState(false);

  async function handleButtonClick() {
    setPopupOrderActive(false);

    const reslut = await postBasketItemsRequest();

    (async () => {
      (await postBasketItemsRequest(
        items.catalogItemsReducer,
      )) === null
        ? setpopupSmthWentWrongActive(true) : setPopupThanksActive(true);
    })();
  }

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
            }}
          >
            Продолжить
          </button>
        </div>
      </div>
      <Footer />
      <PopUp
        active={popupOrderActive}
        setActive={setPopupOrderActive}
      >
        <div className="popupOrder-box">
          <h2>Купить в 1 клик</h2>
          <div
            onClick={() => {
              setPopupOrderActive(false);
            }}
            role="presentation"
          >
            <svg className="backSymbol" viewBox="0 0 20 20">
              <g>
                <path d="M17.89,0H2.11A2.11,2.11,0,0,0,0,2.11V17.89A2.11,2.11,0,0,0,2.11,20H17.89A2.11,2.11,0,0,0,20,17.89V2.11A2.11,2.11,0,0,0,17.89,0ZM19,17.89A1.11,1.11,0,0,1,17.89,19H2.11A1.11,1.11,0,0,1,1,17.89V2.11A1.11,1.11,0,0,1,2.11,1H17.89A1.11,1.11,0,0,1,19,2.11V17.89Z" />
                <path d="M13,7a.5.5,0,0,0-.71,0L10,9.29,7.68,7A.5.5,0,0,0,7,7.68L9.29,10,7,12.32a.5.5,0,0,0,.71.71L10,10.71,12.32,13a.5.5,0,0,0,.71-.71L10.71,10,13,7.68A.5.5,0,0,0,13,7Z" />
              </g>
            </svg>
          </div>
          <form className="form">
            <div className="name">
              <p className="nameString -required">Имя</p>
              <input
                className="nameInput"
                type="text"
                name="NAME"
                required
              />
            </div>
            <div className="phone">
              <p className="phoneString -required">Телефон</p>
              <InputPhone
                className="phoneInput"
                name="PHONE"
                type="tel"
                minLength="13"
                maxLength="13"
                placeholder="+375 (__) ___-__-__"
              />
            </div>
            <div className="address">
              <p className="addressString -required">Адрес</p>
              <input
                className="addressInput"
                type="text"
                name="ADDRESS"
                required
              />
            </div>
            <div className="message">
              <p className="messageString">Сообщение</p>
              <textarea className="messageInput" name="MESSAGE" />
            </div>
            <button
              type="submit"
              className="buttonOrder"
              onClick={() => {
                handleButtonClick();
              }}
            >
              Купить
            </button>
          </form>
        </div>
      </PopUp>
      <PopUp
        active={popupThanksActive}
        setActive={setPopupThanksActive}
        activeOrder={popupOrderActive}
      >
        <div className="popupThanks-box">
          <div
            onClick={() => {
              setPopupThanksActive(false);
            }}
            role="presentation"
          >
            <svg className="backSymbol" viewBox="0 0 20 20">
              <g>
                <path d="M17.89,0H2.11A2.11,2.11,0,0,0,0,2.11V17.89A2.11,2.11,0,0,0,2.11,20H17.89A2.11,2.11,0,0,0,20,17.89V2.11A2.11,2.11,0,0,0,17.89,0ZM19,17.89A1.11,1.11,0,0,1,17.89,19H2.11A1.11,1.11,0,0,1,1,17.89V2.11A1.11,1.11,0,0,1,2.11,1H17.89A1.11,1.11,0,0,1,19,2.11V17.89Z" />
                <path d="M13,7a.5.5,0,0,0-.71,0L10,9.29,7.68,7A.5.5,0,0,0,7,7.68L9.29,10,7,12.32a.5.5,0,0,0,.71.71L10,10.71,12.32,13a.5.5,0,0,0,.71-.71L10.71,10,13,7.68A.5.5,0,0,0,13,7Z" />
              </g>
            </svg>
          </div>
          <h2 className="thanksTitle">Ваш заказ принят!</h2>
          <div className="thanksContent">В ближайшее время с вами свяжется наш специалист</div>
        </div>
      </PopUp>
      <PopUp
        active={popupSmthWentWrongActive}
        setActive={setpopupSmthWentWrongActive}
        activeOrder={popupOrderActive}
      >
        <div className="popupThanks-box">
          <div
            onClick={() => {
              setpopupSmthWentWrongActive(false);
            }}
            role="presentation"
          >
            <svg className="backSymbol" viewBox="0 0 20 20">
              <g>
                <path d="M17.89,0H2.11A2.11,2.11,0,0,0,0,2.11V17.89A2.11,2.11,0,0,0,2.11,20H17.89A2.11,2.11,0,0,0,20,17.89V2.11A2.11,2.11,0,0,0,17.89,0ZM19,17.89A1.11,1.11,0,0,1,17.89,19H2.11A1.11,1.11,0,0,1,1,17.89V2.11A1.11,1.11,0,0,1,2.11,1H17.89A1.11,1.11,0,0,1,19,2.11V17.89Z" />
                <path d="M13,7a.5.5,0,0,0-.71,0L10,9.29,7.68,7A.5.5,0,0,0,7,7.68L9.29,10,7,12.32a.5.5,0,0,0,.71.71L10,10.71,12.32,13a.5.5,0,0,0,.71-.71L10.71,10,13,7.68A.5.5,0,0,0,13,7Z" />
              </g>
            </svg>
          </div>
          <h2 className="thanksTitle">Sorry! Something went wrong</h2>
          <div className="thanksContent">Попробуйте, сделать заказ еще раз</div>
        </div>
      </PopUp>
    </>
  );
};

export default Basket;
