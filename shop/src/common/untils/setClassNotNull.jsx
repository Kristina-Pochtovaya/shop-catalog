function setClassNotNull() {
  const emailInput = document.getElementById('emailInput');
  const errorSymbol = document.getElementById('errorSymbol');

  if (emailInput.className === 'emailInput'
   || errorSymbol.className === 'errorSymbol -disabled') {
    emailInput.setAttribute('class', 'emailInput -notNull');
    errorSymbol.setAttribute('class', 'errorSymbol');
  }
}

export default setClassNotNull;
