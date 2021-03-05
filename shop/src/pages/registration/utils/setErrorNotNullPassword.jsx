function setErrorNotNullPassword() {
  const errorSymbolPasswordNew = document.getElementById('errorSymbolPasswordNew');
  const passwordNewInput = document.getElementById('passwordNewInput');

  passwordNewInput.setAttribute('class', 'passwordNewInput -notNull');
  errorSymbolPasswordNew.setAttribute('class', 'errorSymbolPasswordNew');
}

export default setErrorNotNullPassword;
