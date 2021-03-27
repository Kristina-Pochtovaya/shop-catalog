function setErrorNotNullFirstName() {
  const newClassInput = document.querySelector('.firtNameInput');
  const newClassSymbol = document.querySelector('.errorSymbolFirtName');

  newClassInput.setAttribute('class', 'firtNameInput -notNull');
  newClassSymbol.setAttribute('class', 'errorSymbolFirtName');
}

export default setErrorNotNullFirstName;
