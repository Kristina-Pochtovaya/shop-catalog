function setErrorNotNull(IdClassInput, IdClassSymbol) {
  const newClassInput = document.getElementById(IdClassInput);
  const newClassSymbol = document.getElementById(IdClassSymbol);

  newClassInput.setAttribute('class', `${IdClassInput} -notNull`);
  newClassSymbol.setAttribute('class', IdClassSymbol);
}

export default setErrorNotNull;
