function setErrorNotNullPasswordNewRepeat() {
  const newClassInput = document.querySelector('.passwordNewRepeatInput');
  const newClassSymbol = document.querySelector('.errorSymbolPasswordNewRepeat');

  newClassInput.setAttribute('class', 'passwordNewRepeatInput -notNull');
  newClassSymbol.setAttribute('class', 'errorSymbolPasswordNewRepeat');
}

export default setErrorNotNullPasswordNewRepeat;
