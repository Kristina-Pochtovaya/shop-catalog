import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/logo.png'

export const Header = ({linkItem, link}) => (
  <div className="header-wrap">
    <div className="header-box">
      <div className="logo"> 	
        <img src={logo} alt="Все для дома" title="Все для дома"/>
      </div>
      <Link to={link} >
        {linkItem}
      </Link>
    </div>
  </div>
);



