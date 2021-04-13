import postRequest from '../../../../common/api/post/postRequest';

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
    const response = await postRequest(changePassword, payload);
    const result = response.data;
    return result;
  } catch (error) {
    return null;
  }
}

export default postChangePasswordRequest;
