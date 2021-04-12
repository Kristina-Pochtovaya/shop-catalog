function setErrorNotNullName() {
  const newClassInput = document.querySelector('.nameInput');
  const newClassSymbol = document.querySelector('.nameSymbol');

  newClassInput.setAttribute('class', 'nameInput -notNull');
  newClassSymbol.setAttribute('class', 'nameSymbol');
}

export default setErrorNotNullName;
