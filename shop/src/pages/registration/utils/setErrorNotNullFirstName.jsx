function setErrorNotNullFirstName() {
  const newClassInput = document.querySelector('.firstNameInput');
  const newClassSymbol = document.querySelector('.firstNameSymbol');

  newClassInput.setAttribute('class', 'firstNameInput -notNull');
  newClassSymbol.setAttribute('class', 'firstNameSymbol');
}

export default setErrorNotNullFirstName;
