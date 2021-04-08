import React from 'react';
import PopUp from './PopUpComponent';
import PopUpSomethingWentWrong from './PopUpSomethingWentWrongComponent';

const PopUpErrorLoading = ({ popupSmthWentWrongActive, setpopupSmthWentWrongActive }) => (
  <PopUp
    active={popupSmthWentWrongActive}
    setActive={setpopupSmthWentWrongActive}
  >
    <PopUpSomethingWentWrong
      text="Попробуйте еще раз"
      setpopupSmthWentWrongActive={setpopupSmthWentWrongActive}
    />
  </PopUp>
);

export default PopUpErrorLoading;
