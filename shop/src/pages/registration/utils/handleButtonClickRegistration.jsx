const handleButtonClickRegistration = (
  firstName, lastName, email, history, password, phoneNumber, address, postUsers,
  setClassErrorById, onEnter, onLogin, executeFunctionsIfNoErrorsLoginRegistration,
  passwordNewRepeat, processResultRegistration, setErrorNotNullGroupsRegistration,
  ClassFirstNameInput, ClassFirstNameSymbol, ClassEmailInput, ClassLastNameInput,
  ClassLastNameSymbol, ClassEmailSymbol, errorLength, clientPhoneInput, clientPhoneSymbol,
  clientAddresSymbol, clientAddresInput, ClassPasswordNewInput, ClassPasswordNewSymbol,
  ClassPasswordRepeatInput, ClassPasswordRepeatSymbol, setErrorNotNull, setErrorIncorrectLength,
) => {
  if ((firstName && lastName && email && passwordNewRepeat && phoneNumber && address)
  && (password === passwordNewRepeat) && (password.length >= 9)) {
    processResultRegistration(firstName, lastName, email, history, password, phoneNumber,
      address, postUsers, setClassErrorById, onEnter, onLogin,
      executeFunctionsIfNoErrorsLoginRegistration);
  } else {
    setErrorNotNullGroupsRegistration(firstName, ClassFirstNameInput,
      ClassFirstNameSymbol, lastName, ClassLastNameInput, ClassLastNameSymbol,
      email, ClassEmailInput, ClassEmailSymbol, errorLength, phoneNumber,
      clientPhoneInput, clientPhoneSymbol, address, clientAddresInput,
      clientAddresSymbol, password, ClassPasswordNewInput, ClassPasswordNewSymbol,
      passwordNewRepeat, ClassPasswordRepeatInput, ClassPasswordRepeatSymbol,
      setErrorNotNull, setErrorIncorrectLength);
  }
};

export default handleButtonClickRegistration;
