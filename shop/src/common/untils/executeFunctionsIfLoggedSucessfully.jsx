const executeFunctionsIfLoggedSucessfully = (
  onEnter, onLogin, history, onAdd, onEnterEmail, result, clientLogin,
) => {
  onEnter(false, true) && onLogin(false, false, false)
  && history.push('/personal');
  onAdd(result.firstName, result.phoneNumber, result.address);
  onEnterEmail(clientLogin);
};

export default executeFunctionsIfLoggedSucessfully;
