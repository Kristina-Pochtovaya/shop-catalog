function setErrorNotNullPassword() {
  const newClassInput = document.querySelector('.passwordInput');
  const newClassSymbol = document.querySelector('.errorSymbolPassword');

  newClassInput.setAttribute('class', 'passwordInput -notNull');
  newClassSymbol.setAttribute('class', 'errorSymbolPassword');
}

export default setErrorNotNullPassword;
