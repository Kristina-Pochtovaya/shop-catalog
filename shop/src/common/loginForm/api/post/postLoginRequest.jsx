import axios from 'axios';
import serverUrl from '../../../constants/urls';

const usersPath = '/users';

async function postLogin(
  email, password, firstName = '', lastName = '', phoneNumber = '', address = '',
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

export default postLogin;
