const processResultChangePassword = async (
  clientEmail, passwordNew, passwordNewRepeat, history, setClassErrorById,
  postChangePasswordRequest,
) => {
  const result = await postChangePasswordRequest(clientEmail, passwordNew, passwordNewRepeat);
  if (result === true) {
    history.push('/main-page');
  } if (result === 'incorrectUserOrPassword') {
    setClassErrorById('notRealUser', 'userNotFoundBlock');
  }
};

export default processResultChangePassword;
