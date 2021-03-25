const executeFunctionsIfRegistratedSucessfully = (
  onEnter, onLogin, history,
) => {
  onEnter(false, true) && onLogin(false, false, false)
  && history.push('/personal');
};

export default executeFunctionsIfRegistratedSucessfully;
