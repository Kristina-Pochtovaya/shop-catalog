import postRequest from './postRequest';

const loginPath = '/login';
const forgetPasswordPath = '/forget-password';

async function postLoginForgetPassword(
  email, password = '', updateId = false, onEnterEmail = false,
) {
  const payload = {
    data: {
      email,
      password,
    },

  };

  try {
    if (!payload.data.password) {
      const response = await postRequest(forgetPasswordPath, payload);
      const result = response.data;
      return result;
    }
    const response = await postRequest(loginPath, payload);
    const result = response.data;
    if (updateId) { updateId(response.data.id); }
    if (onEnterEmail) { onEnterEmail(response.data.email, response.data.id); }
    return result;
  } catch (error) {
    return null;
  }
}

export default postLoginForgetPassword;
