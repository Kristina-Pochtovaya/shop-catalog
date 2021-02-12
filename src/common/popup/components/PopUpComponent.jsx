import React from 'react';

const PopUp = ({ active, setActive, children }) => (
  <div
    className={active ? 'popup-box -active' : 'popup-box'}
    onClick={() => setActive(false)}
    onKeyDown={setActive}
    role="button"
    tabIndex="0"
  >
    <div
      className={active ? 'content -active' : 'content'}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation}
      role="button"
      tabIndex="0"
    >
      {children}
    </div>
  </div>
);

export default PopUp;
