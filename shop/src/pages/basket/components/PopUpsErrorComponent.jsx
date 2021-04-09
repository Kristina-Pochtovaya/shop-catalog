import React from 'react';
import PopUp from '../../../common/components/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../common/components/popup/components/PopUpSomethingWentWrongComponent';

const PopUpsError = ({
  popupSmthWentWrongActive, setpopupSmthWentWrongActive, popupOrderActive,
}) => (
  <>
    {popupSmthWentWrongActive ? (
      <PopUp
        active={popupSmthWentWrongActive}
        setActive={setpopupSmthWentWrongActive}
        activeOrder={popupOrderActive}
      >
        <PopUpSomethingWentWrong
          text="Попробуйте сделать заказ еще раз"
          setpopupSmthWentWrongActive={setpopupSmthWentWrongActive}
        />
      </PopUp>
    ) : null }
  </>
);

export default PopUpsError;
