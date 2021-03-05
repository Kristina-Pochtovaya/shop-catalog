function setErrorNotNullEmail() {
  const emailChangePasswordErrorSymbol = document.getElementById('emailChangePasswordErrorSymbol');
  const emailChangePasswordInput = document.getElementById('emailChangePasswordInput');

  emailChangePasswordInput.setAttribute('class', 'emailInput -notNull');
  emailChangePasswordErrorSymbol.setAttribute('class', 'errorSymbolEmail');
}

export default setErrorNotNullEmail;
