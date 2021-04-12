import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const unautherizedUser = '/add-unautherizedUser';

async function postUnautherizedUser(
  firstName, phoneNumber, address, pages,
) {
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
      const response = await axios.post(`${serverUrl}${unautherizedUser}`, payload);
      const result = response.data;
      return result;
    }
    return '';
  } catch (error) {
    return null;
  }
}

export default postUnautherizedUser;
