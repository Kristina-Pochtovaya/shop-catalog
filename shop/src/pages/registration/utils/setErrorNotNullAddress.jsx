function setErrorNotNullAddress() {
  const newClassInput = document.querySelector('.addressRegistrationInput');
  const newClassSymbol = document.querySelector('.errorSymbolRegistrationAddress');

  newClassInput.setAttribute('class', 'addressRegistrationInput -notNull');
  newClassSymbol.setAttribute('class', 'errorSymbolRegistrationAddress');
}

export default setErrorNotNullAddress;
