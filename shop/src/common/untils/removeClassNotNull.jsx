function removeClassNotNull() {
  const emailInput = document.getElementById('emailInput');
  const errorSymbol = document.getElementById('errorSymbol');
  const loginInput = document.getElementById('loginInput');
  const passwordInput = document.getElementById('passwordInput');
  const errorSymbolPassword = document.getElementById('errorSymbolPassword');
  const errorText = document.getElementById('errorText');
  const errorTextLogin = document.getElementById('errorTextLogin');
  const errorTextPassword = document.getElementById('errorTextPassword');

  if (emailInput) {
    if (emailInput.className === 'emailInput -notNull'
   || errorSymbol.className === 'errorSymbol'
   || errorText.className === 'errorText') {
      emailInput.setAttribute('class', 'emailInput');
      errorSymbol.setAttribute('class', 'errorSymbol -disabled');
      errorText.setAttribute('class', 'errorText -disabled');
    }
  }
  if (loginInput) {
    if (loginInput.className === 'loginInput -notNull'
    || passwordInput.className === 'passwordInput -notNull'
    || errorSymbolPassword.className === 'errorSymbolPassword'
    || errorSymbol.className === 'errorSymbolPassword'
    || errorTextLogin.className === 'errorTextLogin'
    || errorTextPassword.className === 'errorTextPassword'
    ) {
      loginInput.setAttribute('class', 'loginInput');
      passwordInput.setAttribute('class', 'passwordInput');
      errorSymbolPassword.setAttribute('class', 'errorSymbolPassword -disabled');
      errorSymbol.setAttribute('class', 'errorSymbolPassword -disabled');
      errorTextLogin.setAttribute('class', 'errorTextLogin -disabled');
      errorTextPassword.setAttribute('class', 'errorTextPassword -disabled');
    }
  }
}
export default removeClassNotNull;
