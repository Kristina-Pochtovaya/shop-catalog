import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const usersPath = '/users';

async function postUsers(
  firstName, lastName, email, password, phoneNumber, address,
) {
  const payload = {
    data: {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      address,
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

export default postUsers;
