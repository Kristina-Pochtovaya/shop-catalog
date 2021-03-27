function setErrorIncorrectLengthPhoneNumber() {
  const newClassInput = document.querySelector('.phoneRegistrationInput');
  const newClassSymbol = document.querySelector('.errorSymbolRegistrationPhone');

  newClassInput.setAttribute('class', 'phoneRegistrationInput -notNull');
  newClassSymbol.setAttribute('class', 'errorSymbolRegistrationPhone');
}

export default setErrorIncorrectLengthPhoneNumber;
