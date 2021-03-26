import setClassErrorById from './setClassErrorById';
import executeFunctionsIfNoErrorsLoginRegistration from './executeFunctionsIfNoErrorsLoginRegistration';
import postLoginForgetPassword from '../api/post/postLoginForgetPasswordRequest';

const processResultLoginForgetPassword = async (
  onEnter, onLogin, history, onAdd, onEnterEmail, clientLogin, clientPassword, updateId,
) => {
  const result = await postLoginForgetPassword(clientLogin, clientPassword, updateId, onEnterEmail);
  if (result === 'incorrectUserOrPassword') {
    setClassErrorById('incorrectLoginOrPassword', 'incorrectLoginOrPassword');
  } else {
    executeFunctionsIfNoErrorsLoginRegistration(
      onEnter, onLogin, history, onAdd, result,
    );
  }
};

export default processResultLoginForgetPassword;
