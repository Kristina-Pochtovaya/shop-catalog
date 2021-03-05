function setClassNotNull() {
  const emailInput = document.getElementById('emailInput');
  const errorSymbol = document.getElementById('errorSymbol');
  const loginInput = document.getElementById('loginInput');
  const passwordInput = document.getElementById('passwordInput');
  const errorSymbolPassword = document.getElementById('errorSymbolPassword');
  const errorText = document.getElementById('errorText');
  const errorTextLogin = document.getElementById('errorTextLogin');
  const errorTextPassword = document.getElementById('errorTextPassword');
  const errorSymbolPasswordNewRepeat = document.getElementById('errorSymbolPasswordNewRepeat');
  const passwordNewRepeatInput = document.getElementById('passwordNewRepeatInput');

  if (emailInput) {
    if (emailInput.className === 'emailInput'
 || errorSymbol.className === 'errorSymbol  -disabled'
  || errorText.className === 'errorText -disabled') {
      emailInput.setAttribute('class', 'emailInput -notNull');
      errorSymbol.setAttribute('class', 'errorSymbol');
      errorText.setAttribute('class', 'errorText');
    }
  } else if (loginInput) {
    if (loginInput.className === 'loginInput'
  || passwordInput.className === 'passwordInput'
  || errorSymbol.className === 'errorSymbol -disabled'
  || errorSymbolPassword.className === 'errorSymbolPassword -disabled'
  || errorTextLogin.className === 'errorTextLogin -disabled'
  || errorTextPassword.className === 'errorTextPassword -disabled') {
      loginInput.setAttribute('class', 'loginInput -notNull');
      passwordInput.setAttribute('class', 'passwordInput -notNull');
      errorSymbol.setAttribute('class', 'errorSymbol');
      errorSymbolPassword.setAttribute('class', 'errorSymbolPassword');
      errorTextLogin.setAttribute('class', 'errorTextLogin');
      errorTextPassword.setAttribute('class', 'errorTextPassword');
    }
  } else if (errorSymbolPasswordNewRepeat) {
    errorSymbolPasswordNewRepeat.setAttribute('class', 'errorSymbolPasswordNewRepeat');
    passwordNewRepeatInput.setAttribute('class', 'passwordNewRepeatInput -notNull');
  }
}

export default setClassNotNull;
