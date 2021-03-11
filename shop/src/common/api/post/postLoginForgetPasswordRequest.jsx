import axios from 'axios';
import serverUrl from '../../constants/urls';

const loginPath = '/login';
const forgetPasswordPath = '/forget-password';

async function postLoginForgetPassword(
  email, password = '',
) {
  const payload = {
    data: {
      email,
      password,
    },

  };

  try {
    if (payload.data.password === '') {
      const response = await axios.post(`${serverUrl}${forgetPasswordPath}`, payload);
      const result = response.data;
      return result;
    }
    const response = await axios.post(`${serverUrl}${loginPath}`, payload);
    const result = response.data;
    return result;
  } catch (error) {
    return null;
  }
}

export default postLoginForgetPassword;
