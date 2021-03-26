function setErrorNotNullLogin() {
  const newClassInput = document.querySelector('.loginInput');
  const newClassSymbol = document.querySelector('.errorSymbol');

  newClassInput.setAttribute('class', 'loginInput -notNull');
  newClassSymbol.setAttribute('class', 'errorSymbol');
}

export default setErrorNotNullLogin;
