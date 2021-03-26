function setErrorNotNullPassword() {
  const newClassInput = document.querySelector('.passwordNewInput');
  const newClassSymbol = document.querySelector('.errorSymbolPasswordNew');

  newClassInput.setAttribute('class', 'passwordNewInput -notNull');
  newClassSymbol.setAttribute('class', 'errorSymbolPasswordNew');
}

export default setErrorNotNullPassword;
