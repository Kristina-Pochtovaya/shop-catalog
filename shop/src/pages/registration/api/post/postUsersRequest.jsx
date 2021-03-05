import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const usersPath = '/users';

async function postUsersRequest(
  firstName, lastName, email, phoneNumber, address, password,
) {
  const payload = {
    data: {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      password,
    },

  };

  try {
    const response = await axios.post(`${serverUrl}${usersPath}`, payload);
    const result = response.data;
    return result;
  } catch (error) {
    return null;
  }
}

export default postUsersRequest;
