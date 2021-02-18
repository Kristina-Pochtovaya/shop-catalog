import { React, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';
import PopUp from '../../../common/popup/components/PopUpComponent';
import {
  INCREASE, DECREASE, DELETE, DELETEALL,
} from '../../../redux/actions/catalogItemsActions';
import InputPhone from '../../../common/inputPhone/components/InputPhoneComponent';
import  axios  from 'axios';

const Busket = ({
  items, onIncrease, onDecrease, OnDelete, OnDeleteAll,
}) => {
  const [popupOrderActive, setPopupOrderActive] = useState(false);
  const [popupThanksActive, setPopupThanksActive] = useState(false);
  const [popupSmthWentWrongActive, setpopupSmthWentWrongActive] = useState(false);

  async function makeGetRequest() {
                  
    let payload = { 
      id: items.catalogItemsReducer.map((item) => item.id),
      description: items.catalogItemsReducer.map((item) => item.description),
      price: items.catalogItemsReducer.map((item) => item.price),
      counter: items.catalogItemsReducer.map((item) => item.counter),
    };

    let res = await axios.post('http://localhost:8080/data', payload);

    let data = res.data;
    let status = res.status;
    console.log(data,status);
    res.status === 200 ? 
    setPopupThanksActive(true): 
    setpopupSmthWentWrongActive(true);
}

  return (
    <>
      <Header linkItem={<button type="button" className="buttonBack">Главная</button>} link="/main-page" disabled />
      <div className="order-wrap">
        <h2 className="order"> Оформление заказа </h2>
        <ul className="listOrder-wrap">
          <div className="title">
            <p className="titleGood">Товар</p>
            <p className="titlePrice">Цена</p>
            <p className="titleQuantity">Количество</p>
            <p className="titleAmount">Сумма</p>
            <p className="titleDelete"> </p>
          </div>
          {items.catalogItemsReducer.map((item) => (
            <li key={item.id}>
              <div className="columns">
                <div className="columnGood">
                  {item.img}
                  <h4 className="columnGoodNameTitle">{item.description}</h4>
                </div>
                <p className="columnPrice">
                  <span className="priceNumbers">{item.price}</span>
                  {' '}
                  <br />
                  <span className="priceLetters">руб. за шт</span>
                </p>
                <div className="columnQuantity">
                  <div className="counter-box">
                    <div
                      className="plus"
                      onClick={() => {
                        onIncrease(item.id, item.counter);
                      }}
                      role="presentation"
                    >
                      +
                    </div>
                    <div
                      className="counter"
                    >
                      {item.counter}
                    </div>
                    <div
                      className="minus"
                      onClick={() => {
                        onDecrease(item.id, item.counter);
                      }}
                      role="presentation"
                    >
                      -
                    </div>
                  </div>
                </div>
                <p className="columnAmount">
                  {item.price * item.counter}
                  {' '}
                  руб.
                </p>
                <div className="columnDelete">
                  <div
                    onClick={() => {
                      OnDelete(item.id);
                    }}
                    onKeyPress={OnDelete}
                    role="button"
                    tabIndex="0"
                    className="deleteOneItem"
                  >
                    <svg viewBox="0 0 20 20">
                      <g>
                        <path d="M17.89,0H2.11A2.11,2.11,0,0,0,0,2.11V17.89A2.11,2.11,0,0,0,2.11,20H17.89A2.11,2.11,0,0,0,20,17.89V2.11A2.11,2.11,0,0,0,17.89,0ZM19,17.89A1.11,1.11,0,0,1,17.89,19H2.11A1.11,1.11,0,0,1,1,17.89V2.11A1.11,1.11,0,0,1,2.11,1H17.89A1.11,1.11,0,0,1,19,2.11V17.89Z" />
                        <path d="M13,7a.5.5,0,0,0-.71,0L10,9.29,7.68,7A.5.5,0,0,0,7,7.68L9.29,10,7,12.32a.5.5,0,0,0,.71.71L10,10.71,12.32,13a.5.5,0,0,0,.71-.71L10.71,10,13,7.68A.5.5,0,0,0,13,7Z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </li>
          ))}
          <div
            className="deleteAll"
          >
            <span
              className="deleteAllSpan"
              onClick={() => {
                OnDeleteAll(items);
              }}
              onKeyPress={OnDeleteAll}
              role="button"
              tabIndex="0"
            >
              <span className="deleteAllString">Удалить все товары</span>
              <svg className="deleteAllSymbol" viewBox="0 0 20 20">
                <g>
                  <path d="M17.89,0H2.11A2.11,2.11,0,0,0,0,2.11V17.89A2.11,2.11,0,0,0,2.11,20H17.89A2.11,2.11,0,0,0,20,17.89V2.11A2.11,2.11,0,0,0,17.89,0ZM19,17.89A1.11,1.11,0,0,1,17.89,19H2.11A1.11,1.11,0,0,1,1,17.89V2.11A1.11,1.11,0,0,1,2.11,1H17.89A1.11,1.11,0,0,1,19,2.11V17.89Z" />
                  <path d="M13,7a.5.5,0,0,0-.71,0L10,9.29,7.68,7A.5.5,0,0,0,7,7.68L9.29,10,7,12.32a.5.5,0,0,0,.71.71L10,10.71,12.32,13a.5.5,0,0,0,.71-.71L10.71,10,13,7.68A.5.5,0,0,0,13,7Z" />
                </g>
              </svg>
            </span>

          </div>
          <div className="result">
            <h2 className="resultSum">
              Итого:
              {' '}
              {items.catalogItemsReducer.reduce((sum, current) => sum
              + (current.price * current.counter), 0)}
              {' '}
              руб
            </h2>
          </div>
        </ul>
        <div className="buttonOrderBox">
          <button
            id="continueBut"
            className="buttonOrder"
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
              onClick= {(event) => {
                event.preventDefault()
                event.stopPropagation()
                setPopupOrderActive(false);
                makeGetRequest();
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

const ConnectedBusket = connect(
  (state) => ({
    items: state,
  }),
  (dispatch) => ({
    onIncrease: (itemId, counter) => dispatch({
      type: INCREASE.type,
      payload: { itemId, counter },
    }),
    onDecrease: (itemId, counter) => dispatch({
      type: DECREASE.type,
      payload: { itemId, counter },
    }),
    OnDelete: (itemId) => dispatch({
      type: DELETE.type,
      payload: { itemId },
    }),
    OnDeleteAll: (items) => dispatch({
      type: DELETEALL.type,
      payload: { items },
    }),
  }),
)(Busket);

export default ConnectedBusket;
