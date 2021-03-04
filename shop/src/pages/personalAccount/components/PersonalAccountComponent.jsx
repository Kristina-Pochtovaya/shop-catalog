import React from 'react';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';

const PersonalAccount = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" disabled={false} />

    <div className="about-wrap">
      test
    </div>
    <Footer />
  </>
);

export default PersonalAccount;
