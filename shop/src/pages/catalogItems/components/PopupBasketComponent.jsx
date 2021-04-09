import React from 'react';
import addRemoveScroll from '../../../common/utils/addRemoveScroll';
import BackSymbol from '../../../common/components/icons/components/BackSymbol';
import buttonPopupBasketArray from '../constants/ButtonPopupBasketArray';

const PopupBasket = ({ closePopup, history }) => (
  <div className="popupBasket-box">
    <div
      className="popupBasket"
      onClick={() => closePopup(false)}
      role="presentation"
    >
      <BackSymbol className="backSymbol" />
    </div>
    <h2>Товар добавлен в корзину</h2>
    <div className="popupBasketButtons-box">
      {buttonPopupBasketArray.map((button) => (
        <button
          key={button.id}
          type="button"
          className={button.className}
          onClick={() => {
            if (button.closePopup) { closePopup(false); }
            if (button.addRemoveScroll) { addRemoveScroll(); }
            if (button.link) { history.push('./basket'); }
          }}
        >
          {button.text}
        </button>
      ))}
    </div>
  </div>
);
export default PopupBasket;
