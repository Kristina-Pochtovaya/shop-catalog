function removeClassNotNull() {
  const emailInput = document.getElementById('emailInput');
  const errorSymbol = document.getElementById('errorSymbol');

  if (emailInput.className === 'emailInput -notNull'
   || errorSymbol.className === 'errorSymbol') {
    emailInput.setAttribute('class', 'emailInput');
    errorSymbol.setAttribute('class', 'errorSymbol -disabled');
  }
}

export default removeClassNotNull;
