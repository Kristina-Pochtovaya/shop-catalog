import React from 'react';

const PopUp = ({
  activeOrder, active, setActive, children,
}) => {
  const body = document.getElementById('body');
  if (active || activeOrder) {
    body.setAttribute('class', '-noOverflow');
  }
  /*   else {
    body.setAttribute('class', '');
  } */
  return (
    <div
      className={active ? 'popup-box -active' : 'popup-box'}
      onClick={() => {
        setActive(false);
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
