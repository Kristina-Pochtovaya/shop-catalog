import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const changePassword = '/change-password';

async function postChangePasswordRequest(
  email, password, newPaswword,
) {
  const payload = {
    data: {
      email,
      password,
      newPaswword,
    },

  };

  try {
    const response = await axios.post(`${serverUrl}${changePassword}`, payload);
    const result = response.data;
    return result;
  } catch (error) {
    return null;
  }
}

export default postChangePasswordRequest;
