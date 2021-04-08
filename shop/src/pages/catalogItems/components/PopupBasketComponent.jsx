import React from 'react';
import { Link } from 'react-router-dom';
import addRemoveScroll from '../../../common/utils/addRemoveScroll';
import BackSymbol from '../../../common/components/icons/components/BackSymbol';

const PopupBasket = ({ closePopup }) => (
  <div className="popupBasket-box">
    <div
      onClick={() => closePopup(false)}
      role="presentation"
    >
      <BackSymbol className="backSymbol" />
    </div>
    <h2>Товар добавлен в корзину</h2>
    <div className="popupBasketButtons-box">
      <button
        type="button"
        className="popupBasketButton"
        onClick={() => closePopup(false)}
      >
        Продолжить покупки
      </button>
      <Link to="/basket">
        <button
          type="button"
          className="popupBasketButton"
          onClick={() => {
            closePopup(false);
            addRemoveScroll();
          }}
        >
          Перейти в корзину
        </button>
      </Link>
    </div>
  </div>
);

export default PopupBasket;
