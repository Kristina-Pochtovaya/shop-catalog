import React from 'react';
import addRemoveScroll from '../../untils/addRemoveScroll';

const PopUp = ({
  activeOrder, active, setActive, children,
}) => {
  const body = document.getElementById('body');
  if (active || activeOrder) {
    body.setAttribute('class', '-noOverflow');
  } else {
    body.setAttribute('class', '');
  }
  if (!activeOrder && !active) {
    body.setAttribute('class', '');
  } else {
    body.setAttribute('class', '-noOverflow');
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
