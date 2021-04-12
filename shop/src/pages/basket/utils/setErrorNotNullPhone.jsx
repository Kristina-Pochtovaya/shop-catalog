function setErrorNotNullPhone() {
  const newClassInput = document.querySelector('.phoneInput');
  const newClassSymbol = document.querySelector('.phoneSymbol');

  newClassInput.setAttribute('class', 'phoneInput -notNull');
  newClassSymbol.setAttribute('class', 'phoneSymbol');
}

export default setErrorNotNullPhone;
