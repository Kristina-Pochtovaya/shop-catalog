import React from 'react';

// eslint-disable-next-line no-unused-vars
const PopUp = ({ active, setActive }) => (
  <div
    className={active ? 'popup-box -active' : 'popup-box'}
    onClick={() => setActive(false)}
    onKeyDown={setActive}
    role="button"
    tabIndex="0"
  >
    <div
      className="content"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation}
      role="button"
      tabIndex="0"
    >
      544
    </div>
  </div>
);

export default PopUp;
