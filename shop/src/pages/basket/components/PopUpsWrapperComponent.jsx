import React from 'react';
import PopUp from '../../../common/components/popup/components/PopUpComponent';
import ConnectedPopUpBasketOrderToUsers from '../containers/ConnectedPopUpBasketOrderComponent';

const PopUpsWrapper = ({
  popupOrderActive, setPopupOrderActive, setPopupThanksActive, setpopupSmthWentWrongActive,
}) => (
  <div
    className={popupOrderActive ? 'popup-box -active' : 'popup-box'}
  >
    { popupOrderActive
      ? (
        <PopUp
          active={popupOrderActive}
          setActive={setPopupOrderActive}
        >
          <ConnectedPopUpBasketOrderToUsers
            setPopupOrderActive={setPopupOrderActive}
            setPopupThanksActive={setPopupThanksActive}
            setpopupSmthWentWrongActive={setpopupSmthWentWrongActive}
          />
        </PopUp>
      ) : null }
  </div>
);

export default PopUpsWrapper;
