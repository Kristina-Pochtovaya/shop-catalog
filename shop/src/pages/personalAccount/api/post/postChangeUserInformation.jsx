import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const userInformation = '/user-information';

async function postChangeUserInformation(
  firstName, lastName, email, passwordNew, phoneNumber, address,
) {
  const payload = {
    data: {
      firstName,
      lastName,
      email,
      passwordNew,
      phoneNumber,
      address,
    },
  };

  try {
    const response = await axios.post(`${serverUrl}${userInformation}`, payload);
    const result = response.data;
    return result;
  } catch (error) {
    return null;
  }
}

export default postChangeUserInformation;
