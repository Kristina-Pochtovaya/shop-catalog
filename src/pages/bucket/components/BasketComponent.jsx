import React from 'react';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';

const Busket = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Главная</button>} link="/main-page" disabled />
    <div className="order-wrap">
      <h2 className="order"> Оформление заказа </h2>
      <ul className="listOrder-wrap">
        <div className="title">
          <p className="column1">Товар</p>
          <p className="column2">Цена</p>
          <p className="column3">Количество</p>
          <p className="column4">Сумма</p>
        </div>
        <li />
        <button type="button">Удалить все товары</button>
      </ul>
      <div className="result">
        <p>Всего 1 товара на сумму</p>
        <h2 className="resultSum">
          44.9 руб
        </h2>
      </div>
      <button type="button">Продолжить</button>
    </div>
    <Footer />
  </>

);

export default Busket;
