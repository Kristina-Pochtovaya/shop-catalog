import React from 'react';
import PopUp from '../../../common/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../common/popup/components/PopUpSomethingWentWrongComponent';

const PopUpErrorEditCategory = ({ popupSmthWentWrongActive, setpopupSmthWentWrongActive }) => (
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

export default PopUpErrorEditCategory;
