import React from 'react';
// eslint-disable-next-line no-unused-vars
import ConnectedCounter from '../../../common/counter/components/CounterComponent';

// eslint-disable-next-line no-unused-vars
const CatalogListBusket = ({ items }) => (
  <ul className="listOrder-wrap">
    <div className="title">
      <p className="titleGood">Товар</p>
      <p className="titlePrice">Цена</p>
      <p className="titleQuantity">Количество</p>
      <p className="titleAmount">Сумма</p>
      <p className="titleDelete"> </p>
    </div>
    {items.map(((item) => (
      <li>
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
            {/*   <ConnectedCounter /> */}
            123
          </div>
          <p className="columnAmount">
            163 руб.
          </p>
          <p className="columnDelete">
            <svg viewBox="0 0 20 20">
              <g>
                <path d="M17.89,0H2.11A2.11,2.11,0,0,0,0,2.11V17.89A2.11,2.11,0,0,0,2.11,20H17.89A2.11,2.11,0,0,0,20,17.89V2.11A2.11,2.11,0,0,0,17.89,0ZM19,17.89A1.11,1.11,0,0,1,17.89,19H2.11A1.11,1.11,0,0,1,1,17.89V2.11A1.11,1.11,0,0,1,2.11,1H17.89A1.11,1.11,0,0,1,19,2.11V17.89Z" />
                <path d="M13,7a.5.5,0,0,0-.71,0L10,9.29,7.68,7A.5.5,0,0,0,7,7.68L9.29,10,7,12.32a.5.5,0,0,0,.71.71L10,10.71,12.32,13a.5.5,0,0,0,.71-.71L10.71,10,13,7.68A.5.5,0,0,0,13,7Z" />
              </g>
            </svg>
          </p>
        </div>
      </li>

    )))}
    <div className="deleteAll">
      <span className="deleteAllString">Удалить все товары</span>
      <svg className="deleteAllSymbol" viewBox="0 0 20 20">
        <g>
          <path d="M17.89,0H2.11A2.11,2.11,0,0,0,0,2.11V17.89A2.11,2.11,0,0,0,2.11,20H17.89A2.11,2.11,0,0,0,20,17.89V2.11A2.11,2.11,0,0,0,17.89,0ZM19,17.89A1.11,1.11,0,0,1,17.89,19H2.11A1.11,1.11,0,0,1,1,17.89V2.11A1.11,1.11,0,0,1,2.11,1H17.89A1.11,1.11,0,0,1,19,2.11V17.89Z" />
          <path d="M13,7a.5.5,0,0,0-.71,0L10,9.29,7.68,7A.5.5,0,0,0,7,7.68L9.29,10,7,12.32a.5.5,0,0,0,.71.71L10,10.71,12.32,13a.5.5,0,0,0,.71-.71L10.71,10,13,7.68A.5.5,0,0,0,13,7Z" />
        </g>
      </svg>
    </div>
  </ul>
);
