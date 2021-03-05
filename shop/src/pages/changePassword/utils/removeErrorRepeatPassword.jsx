function removeErrorRepeatPassword() {
  const errorSymbolPasswordNewRepeat = document.getElementById('errorSymbolPasswordNewRepeat');
  const passwordNewRepeatInput = document.getElementById('passwordNewRepeatInput');

  passwordNewRepeatInput.setAttribute('class', 'passwordNewRepeatInput');
  errorSymbolPasswordNewRepeat.setAttribute('class', 'errorSymbolPasswordNewRepeat -disabled');
}

export default removeErrorRepeatPassword;
