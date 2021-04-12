import React from 'react';
import handleButtonClick from '../utils/handleButtonClick';
import setErrorNotNullGroupsPopUpBasket from '../utils/setErrorNotNullGroupsPopUpBasket';

const ButtonPopUpBasket = ({
  state, pages, items, setPopupOrderActive, onAddClientInformation,
  setpopupSmthWentWrongActive, setPopupThanksActive,
}) => (
  <button
    type="submit"
    className="buttonOrder"
    onClick={() => ((state.clientName && (state.clientPhone.length >= 13 && !(state.clientPhone.includes('_'))) && state.clientAddress)
      ? handleButtonClick(setPopupOrderActive, onAddClientInformation,
        setpopupSmthWentWrongActive, setPopupThanksActive, state.clientName, state.clientPhone,
        state.clientAddress, state.clientMessage, pages, items)
      : setErrorNotNullGroupsPopUpBasket(
        state.clientName, state.clientPhone, state.clientAddress,
      ))}
  >
    Купить
  </button>
);
export default ButtonPopUpBasket;
