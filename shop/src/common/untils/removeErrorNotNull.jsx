function removeErrorNotNull(IdClassInput, IdClassSymbol) {
  const newClassInput = document.getElementById(IdClassInput);
  const newClassSymbol = document.getElementById(IdClassSymbol);

  newClassInput.setAttribute('class', IdClassInput);
  newClassSymbol.setAttribute('class', `${IdClassSymbol} -disabled`);
}

export default removeErrorNotNull;
