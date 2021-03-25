const setErrorNotNullGroupsRegistration = (
  firstName, ClassFirstNameInput, ClassFirstNameSymbol, lastName, ClassLastNameInput,
  ClassLastNameSymbol, email, ClassEmailInput, ClassEmailSymbol, errorLength, phoneNumber,
  clientPhoneInput, clientPhoneSymbol, address, clientAddresInput, clientAddresSymbol, password,
  ClassPasswordNewInput, ClassPasswordNewSymbol, passwordNewRepeat, ClassPasswordRepeatInput,
  ClassPasswordRepeatSymbol, setErrorNotNull, setErrorIncorrectLength,
) => {
  if (!firstName) {
    setErrorNotNull(ClassFirstNameInput, ClassFirstNameSymbol);
  } if (!lastName) {
    setErrorNotNull(ClassLastNameInput, ClassLastNameSymbol);
  } if (!email) {
    setErrorNotNull(ClassEmailInput, ClassEmailSymbol);
  } if (phoneNumber.length < 13) {
    setErrorNotNull(clientPhoneInput, clientPhoneSymbol);
  } if (!address) {
    setErrorNotNull(clientAddresInput, clientAddresSymbol);
  } if (!password) {
    setErrorNotNull(ClassPasswordNewInput, ClassPasswordNewSymbol);
  } if (password !== passwordNewRepeat) {
    setErrorNotNull(ClassPasswordRepeatInput, ClassPasswordRepeatSymbol);
  }
  if (password.length < 9) {
    setErrorIncorrectLength(errorLength);
  }
};

export default setErrorNotNullGroupsRegistration;
