function setErrorNotNullEmail() {
  const newClassInput = document.querySelector('.emailRegistrationInput');
  const newClassSymbol = document.querySelector('.errorSymbolRegistrationEmail');

  newClassInput.setAttribute('class', 'emailRegistrationInput -notNull');
  newClassSymbol.setAttribute('class', 'errorSymbolRegistrationEmail');
}

export default setErrorNotNullEmail;
