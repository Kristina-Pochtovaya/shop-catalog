import axios from 'axios';
import serverUrl from '../../../constants/urls';

const loginPath = '/login';

async function postLoginRequest(
  email, password,
) {
  const payload = {
    data: {
      email,
      password,
    },

  };

  try {
    const response = await axios.post(`${serverUrl}${loginPath}`, payload);
    const result = response.data;
    return result;
  } catch (error) {
    return null;
  }
}

export default postLoginRequest;
