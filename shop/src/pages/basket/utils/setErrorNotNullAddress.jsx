function setErrorNotNullAddress() {
  const newClassInput = document.querySelector('.addressInput');
  const newClassSymbol = document.querySelector('.addressSymbol');

  newClassInput.setAttribute('class', 'addressInput -notNull');
  newClassSymbol.setAttribute('class', 'addressSymbol');
}

export default setErrorNotNullAddress;
