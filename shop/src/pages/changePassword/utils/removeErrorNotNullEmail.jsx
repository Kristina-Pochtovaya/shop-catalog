function removeErrorNotNullEmail() {
  const emailChangePasswordErrorSymbol = document.getElementById('emailChangePasswordErrorSymbol');
  const emailChangePasswordInput = document.getElementById('emailChangePasswordInput');

  emailChangePasswordInput.setAttribute('class', 'emailInput');
  emailChangePasswordErrorSymbol.setAttribute('class', 'errorSymbolEmail -disabled');
}

export default removeErrorNotNullEmail;
