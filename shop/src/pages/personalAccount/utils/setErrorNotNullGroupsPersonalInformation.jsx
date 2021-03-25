const setErrorNotNullGroupsPersonalInformation = (
  firstName, firstNameInput, firstNameSymbol, lastName, lastNameInput,
  lastNameSymbol, email, emailInput, emailSymbol, passwordNew,
  passwordNewInput, passwordNewSymbol, passwordNewRepeat, passwordRepeatInput,
  passwordRepeatSymbol, setErrorNotNull, setErrorIncorrectLength, errorLength,
) => {
  if (!firstName) {
    setErrorNotNull(firstNameInput, firstNameSymbol);
  } if (!lastName) {
    setErrorNotNull(lastNameInput, lastNameSymbol);
  } if (!email) {
    setErrorNotNull(emailInput, emailSymbol);
  } if (!passwordNew) {
    setErrorNotNull(passwordNewInput, passwordNewSymbol);
  } if (passwordNew !== passwordNewRepeat) {
    setErrorNotNull(passwordRepeatInput, passwordRepeatSymbol);
  }
  if (passwordNew.length < 9) {
    setErrorIncorrectLength(errorLength);
  }
};

export default setErrorNotNullGroupsPersonalInformation;
