import postRequest from '../../../../common/api/post/postRequest';

const unautherizedUser = '/add-unautherizedUser';

async function postUnautherizedUser(firstName, phoneNumber, address, pages) {
  const payload = {
    data: {
      firstName,
      phoneNumber,
      address,
    },
  };

  try {
    if (!pages.loginPersonalAccountReducer.firstName
      && !pages.loginPersonalAccountReducer.phone
      && !pages.loginPersonalAccountReducer.address) {
      const response = await postRequest(unautherizedUser, payload);
      const result = response.data;
      return result;
    }
    return '';
  } catch (error) {
    return null;
  }
}

export default postUnautherizedUser;
