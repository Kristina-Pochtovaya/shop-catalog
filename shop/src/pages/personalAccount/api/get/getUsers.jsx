import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const usersPath = '/users';

async function getUsers(
  email, updateDataUsers, setError,
) {
  try {
    const response = await axios.get(`${serverUrl}${usersPath}`);
    const result = response.data;
    const oneUser = result.filter((user) => user.email === email)[0];
    updateDataUsers(
      oneUser.firstName, oneUser.lastName, oneUser.email,
      oneUser.phoneNumber, oneUser.address, true, oneUser.password,
    );
    return oneUser;
  } catch (error) {
    return setError({ errorMessage: error.message });
  }
}

export default getUsers;
