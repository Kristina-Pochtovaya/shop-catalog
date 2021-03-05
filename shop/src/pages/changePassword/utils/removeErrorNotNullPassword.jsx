function removeErrorNotNullPassword() {
  const errorSymbolPasswordNew = document.getElementById('errorSymbolPasswordNew');
  const passwordNewInput = document.getElementById('passwordNewInput');

  passwordNewInput.setAttribute('class', 'passwordNewInput');
  errorSymbolPasswordNew.setAttribute('class', 'errorSymbolPasswordNew -disabled');
}

export default removeErrorNotNullPassword;
