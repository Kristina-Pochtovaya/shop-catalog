import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/header/logo.png';
import basket from '../../../../assets/common/basket.png';

const Header = ({ linkItem, link, disabled }) => (
  <div className="header-wrap">
    <div className="header-box">
      <div className="logo">
        <img src={logo} alt="Все для дома" title="Все для дома" />
      </div>
      <div className={!disabled ? 'basket' : 'basket -disabled'}>
        <Link to="/basket">
          <img src={basket} alt="Корзина" title="Корзина" />
        </Link>
      </div>
      <Link to={link}>
        {linkItem}
      </Link>
    </div>
  </div>
);

export default Header;
