function setErrorNotNullPassword() {
  const newClassInput = document.querySelector('.passwordNewInputRegistration');
  const newClassSymbol = document.querySelector('.errorSymbolPasswordNewRegistration');

  newClassInput.setAttribute('class', 'passwordNewInputRegistration -notNull');
  newClassSymbol.setAttribute('class', 'errorSymbolPasswordNewRegistration');
}

export default setErrorNotNullPassword;
