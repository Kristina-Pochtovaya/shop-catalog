import postLoginForgetPassword from '../api/post/postLoginForgetPasswordRequest';

const checkIfUserExists = async (pages, onEnter, onLogin, history) => {
  const userNotFound = document.getElementById('userNotFoundChangePassword');
  const result = await postLoginForgetPassword(pages.loginPersonalAccountReducer.clientEmail);
  if (result === true) {
    onEnter(true, false) && onLogin(false, false, false) && history.push('/change-password');
  } if (result === 'incorrectUserOrPassword') {
    userNotFound.setAttribute('class', 'userNotFoundBlock');
  }
};

export default checkIfUserExists;
