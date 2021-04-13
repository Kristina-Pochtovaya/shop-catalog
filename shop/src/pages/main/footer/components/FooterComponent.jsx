import React from 'react';
import SocialButton from './SocialButtonComponent';

const Footer = () => (
  <div className="footer-wrap">
    <div className="footer-box">
      <div>
        <SocialButton type="facebook" />
        <SocialButton type="instagram" />
      </div>
      <p className="copyright">© 2021 Все для дома</p>
    </div>
  </div>
);

export default Footer;
