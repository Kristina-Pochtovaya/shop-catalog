import React from 'react';
import PopUp from '../../../common/components/popup/components/PopUpComponent';
import PopUpThanks from '../../../common/components/popup/components/PopUpThanksComponent';

const PopUpsThanks = ({ popupThanksActive, setPopupThanksActive, popupOrderActive }) => (
  <div
    className={popupThanksActive ? 'popup-box -active' : 'popup-box'}
  >
    { popupThanksActive ? (
      <PopUp
        active={popupThanksActive}
        setActive={setPopupThanksActive}
        activeOrder={popupOrderActive}
      >
        <PopUpThanks setPopupThanksActive={setPopupThanksActive} />
      </PopUp>
    ) : null }
  </div>
);

export default PopUpsThanks;
