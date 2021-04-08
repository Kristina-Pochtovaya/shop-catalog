import React from 'react';
import addRemoveScroll from '../../../utils/addRemoveScroll';
import BackSymbol from '../../icons/components/BackSymbol';

const PopUpSomethingWentWrong = ({ setpopupSmthWentWrongActive, text }) => (
  <div className="popupThanks-box">
    <div
      className="popupThanksButton"
      onClick={() => {
        setpopupSmthWentWrongActive(false);
        addRemoveScroll();
      }}
      role="presentation"
    >
      <BackSymbol className="backSymbol" />
    </div>
    <h2 className="thanksTitle">Sorry! Something went wrong</h2>
    <div className="thanksContent">{text}</div>
  </div>
);

export default PopUpSomethingWentWrong;
