import React from 'react';
import addRemoveScroll from '../../../utils/addRemoveScroll';
import addRemoveClassForBody from '../utils/addRemoveClassForBody';

const PopUp = ({
  activeOrder, active, setActive, children,
}) => {
  addRemoveClassForBody(active, activeOrder);
  return (
    <div
      className={active ? 'popup-box -active' : 'popup-box'}
      onClick={() => {
        setActive(false);
        addRemoveScroll();
      }}
      role="presentation"
    >
      <div
        className={active ? 'content -active' : 'content'}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        role="presentation"
      >
        {children}
      </div>
    </div>
  );
};
export default PopUp;
