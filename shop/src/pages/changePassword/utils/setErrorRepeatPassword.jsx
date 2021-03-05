function setErrorRepeatPassword() {
  const errorSymbolPasswordNewRepeat = document.getElementById('errorSymbolPasswordNewRepeat');
  const passwordNewRepeatInput = document.getElementById('passwordNewRepeatInput');

  passwordNewRepeatInput.setAttribute('class', 'passwordNewRepeatInput -notNull');
  errorSymbolPasswordNewRepeat.setAttribute('class', 'errorSymbolPasswordNewRepeat');
}

export default setErrorRepeatPassword;
