function setErrorNotNullLastName() {
  const newClassInput = document.querySelector('.emailInput');
  const newClassSymbol = document.querySelector('.emailSymbol');

  newClassInput.setAttribute('class', 'emailInput -notNull');
  newClassSymbol.setAttribute('class', 'emailSymbol');
}

export default setErrorNotNullLastName;
