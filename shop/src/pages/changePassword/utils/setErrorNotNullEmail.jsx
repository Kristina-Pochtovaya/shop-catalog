function setErrorNotNullEmail() {
  const newClassInput = document.querySelector('.emailChangePasswordInput');
  const newClassSymbol = document.querySelector('.emailChangePasswordErrorSymbol');

  newClassInput.setAttribute('class', 'emailChangePasswordInput -notNull');
  newClassSymbol.setAttribute('class', 'emailChangePasswordErrorSymbol');
}

export default setErrorNotNullEmail;
