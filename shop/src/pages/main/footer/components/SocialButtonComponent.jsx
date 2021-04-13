import React from 'react';

const SocialButton = ({ type }) => (
  <link href="" className={type === 'facebook' ? 'fa fa-facebook' : 'fa fa-instagram'} />
);

export default SocialButton;
