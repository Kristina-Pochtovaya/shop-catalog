import { React, useState } from 'react';
import { connect } from 'react-redux';
import ConnectedHeader from '../../main/header/container/HeaderContainer';
import Footer from '../../main/footer/components/FooterComponent';
import ConnectedAdminPersonalAccount from '../containers/ConnectedAdminPersonalAccount';
import postUsersRoles from '../api/post/postUsersRoles';

const PersonalAccount = ({ pages }) => {
  const [isAdminVisible, setAdminVisible] = useState(false);
  const [isAutherizedVisible, setAutherizedVisible] = useState(false);

  async function handleOnLoad() {
    const result = await postUsersRoles(
      pages.loginPersonalAccountReducer.clientEmail,
    );
    result === 'admin' ? setAdminVisible(true) : setAdminVisible(false);
  }

  handleOnLoad();

  return (
    <>
      <ConnectedHeader linkItem={<button type="button" className="buttonBack">Главная</button>} link="/main-page" disabled={false} />
      {
         isAdminVisible ? <ConnectedAdminPersonalAccount /> : null
        }
      <Footer />
    </>
  );
};
const ConnectedPersonalAccount = connect(
  (state) => ({
    pages: state,
  }),
)(PersonalAccount);

export default ConnectedPersonalAccount;
