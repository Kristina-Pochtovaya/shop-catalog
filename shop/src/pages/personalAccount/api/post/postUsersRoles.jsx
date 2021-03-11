import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const userRole = '/user-role';

async function postUsersRoles(email) {
  const payload = {
    data: {
      email,
    },
  };

  try {
    const response = await axios.post(`${serverUrl}${userRole}`, payload);
    const result = response.data;
    return result;
  } catch (error) {
    return null;
  }
}

export default postUsersRoles;
