import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const usersPath = '/users';

async function getUsersRequest() {
  try {
    const response = await axios.get(`${serverUrl}${usersPath}`);
    const result = response.data;
    if (result) {
      console.log(result);
    }
    return false;
  } catch (error) {
    return null;
  }
}

export default getUsersRequest;
