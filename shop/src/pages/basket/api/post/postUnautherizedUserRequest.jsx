import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const unautherizedUser = '/add-unautherizedUser';

async function postUnautherizedUser(
  firstName, phoneNumber, address,
) {
  const payload = {
    data: {
      firstName,
      phoneNumber,
      address,
    },

  };

  try {
    const response = await axios.post(`${serverUrl}${unautherizedUser}`, payload);
    const result = response.data;
    return result;
  } catch (error) {
    return null;
  }
}

export default postUnautherizedUser;
