import React from 'react';
import addRemoveScroll from '../../untils/addRemoveScroll';

const PopUp = ({
  activeOrder, active, setActive, children,
}) => {
  if (active || activeOrder) {
    document.body.setAttribute('class', '-noOverflow');
  } else {
    document.body.setAttribute('class', '');
  }
  if (!activeOrder && !active) {
    document.body.setAttribute('class', '');
  } else {
    document.body.setAttribute('class', '-noOverflow');
  }
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
