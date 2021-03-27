function setErrorNotNullLastName() {
  const newClassInput = document.querySelector('.lastNameInput');
  const newClassSymbol = document.querySelector('.errorSymbolLastName');

  newClassInput.setAttribute('class', 'lastNameInput -notNull');
  newClassSymbol.setAttribute('class', 'errorSymbolLastName');
}

export default setErrorNotNullLastName;
