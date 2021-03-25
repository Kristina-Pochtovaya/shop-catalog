const setErrorNotNullGroupsChangePassword = async (
  clientEmail, clientEmailInput, clientEmailSymbol, passwordNew, passwordNewInput,
  passwordNewSymbol, passwordNewRepeat, passwordRepeatInput, passwordRepeatSymbol, errorLength,
  setErrorNotNull, setErrorIncorrectLength,
) => {
  if (!clientEmail) {
    setErrorNotNull(clientEmailInput, clientEmailSymbol);
  } if (!passwordNew) {
    setErrorNotNull(passwordNewInput, passwordNewSymbol);
  } if (passwordNew !== passwordNewRepeat) {
    setErrorNotNull(passwordRepeatInput, passwordRepeatSymbol);
  }
  if (passwordNew.length < 9) {
    setErrorIncorrectLength(errorLength);
  }
};

export default setErrorNotNullGroupsChangePassword;
