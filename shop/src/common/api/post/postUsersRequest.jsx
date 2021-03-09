import axios from 'axios';
import serverUrl from '../../constants/urls';

const usersPath = '/users';
const loginPath = '/login';
const forgetPasswordPath = '/forget-password';

async function postUsersRequest(
  email, password = '', firstName = '', lastName = '', phoneNumber = '', address = '',
) {
  const payload = {
    data: {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      address,
    },

  };

  try {
    if (payload.data.firstName === '' && payload.data.lastName === '' && payload.data.phoneNumber === '' && payload.data.address === '' && payload.data.password !== '') {
      const response = await axios.post(`${serverUrl}${loginPath}`, payload);
      const result = response.data;
      return result;
    }
    if (payload.data.password === '' && payload.data.firstName === ''
    && payload.data.lastName === '' && payload.data.phoneNumber === ''
     && payload.data.address === '') {
      const response = await axios.post(`${serverUrl}${forgetPasswordPath}`, payload);
      const result = response.data;
      return result;
    }
    const response = await axios.post(`${serverUrl}${usersPath}`, payload);
    const result = response.data;
    return result;
  } catch (error) {
    return null;
  }
}

export default postUsersRequest;
