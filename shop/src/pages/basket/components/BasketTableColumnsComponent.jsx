import React from 'react';
import BackSymbol from '../../../common/components/icons/components/BackSymbol';

const BasketTableColumns = ({
  items, onIncrease, onDecrease, OnDelete,
}) => (
  <>
    {items.catalogItemsReducer.map((item) => (
      <li key={item.id}>
        <div className="columns">
          <div className="columnGood">
            {item.img}
            <h4 className="columnGoodNameTitle">{item.description}</h4>
          </div>
          <p className="columnPrice">
            <span className="priceNumbers">{item.price}</span>
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
              className="deleteOneItem"
              onClick={() => {
                OnDelete(item.id);
              }}
              role="presentation"
            >
              <BackSymbol className="backSymbol" />
            </div>
          </div>
        </div>
      </li>
    ))}
  </>
);

export default BasketTableColumns;
