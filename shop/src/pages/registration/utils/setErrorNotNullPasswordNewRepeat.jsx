function setErrorNotNullPasswordNewRepeat() {
  const newClassInput = document.querySelector('.passwordNewRepeatInputRegistration');
  const newClassSymbol = document.querySelector('.errorSymbolPasswordNewRepeatRegistration');

  newClassInput.setAttribute('class', 'passwordNewRepeatInputRegistration -notNull');
  newClassSymbol.setAttribute('class', 'errorSymbolPasswordNewRepeatRegistration');
}

export default setErrorNotNullPasswordNewRepeat;
