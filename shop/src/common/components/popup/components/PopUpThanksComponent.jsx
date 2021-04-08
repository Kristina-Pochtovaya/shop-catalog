import React from 'react';
import addRemoveScroll from '../../../utils/addRemoveScroll';
import BackSymbol from '../../icons/components/BackSymbol';

const PopUpThanks = ({ setPopupThanksActive }) => (
  <div className="popupThanks-box">
    <div
      className="thanksButton"
      onClick={() => {
        setPopupThanksActive(false);
        addRemoveScroll();
      }}
      role="presentation"
    >
      <BackSymbol className="backSymbol" />
    </div>
    <h2 className="thanksTitle">Ваш заказ принят!</h2>
    <div className="thanksContent">В ближайшее время с вами свяжется наш специалист</div>
  </div>
);

export default PopUpThanks;
