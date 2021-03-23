import setClassIncorrectUser from './setClassIncorrectUser';
import executeFunctionsIfLoggedSucessfully from './executeFunctionsIfLoggedSucessfully';
import postLoginForgetPassword from '../api/post/postLoginForgetPasswordRequest';

const processResultLoginForgetPassword = async (
  onEnter, onLogin, history, onAdd, onEnterEmail, clientLogin, clientPassword,
) => {
  const result = await postLoginForgetPassword(clientLogin, clientPassword);
  if (result === 'incorrectUserOrPassword') {
    setClassIncorrectUser('incorrectLoginOrPassword');
  } else {
    executeFunctionsIfLoggedSucessfully(
      onEnter, onLogin, history, onAdd, onEnterEmail, result, clientLogin,
    );
  }
};

export default processResultLoginForgetPassword;
