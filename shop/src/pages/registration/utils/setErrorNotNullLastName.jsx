function setErrorNotNullLastName() {
  const newClassInput = document.querySelector('.lastNameInput');
  const newClassSymbol = document.querySelector('.lastNameSymbol');

  newClassInput.setAttribute('class', 'lastNameInput -notNull');
  newClassSymbol.setAttribute('class', 'lastNameSymbol');
}

export default setErrorNotNullLastName;
