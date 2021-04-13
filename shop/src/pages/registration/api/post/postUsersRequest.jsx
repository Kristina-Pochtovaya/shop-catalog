import postRequest from '../../../../common/api/post/postRequest';

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
    const response = await postRequest(usersPath, payload);
    const result = response.data;
    return result;
  } catch (error) {
    return null;
  }
}

export default postUsers;
