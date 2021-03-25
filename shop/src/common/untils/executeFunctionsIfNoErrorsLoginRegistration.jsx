const executeFunctionsIfNoErrorsLoginRegistration = (
  onEnter, onLogin, history, id = '', onAdd = '', result = '', clientLogin = '',
) => {
  onEnter(false, true) && onLogin(false, false, false)
  && history.push('/personal');
  if (onAdd !== '') { onAdd(result.firstName, result.phoneNumber, result.address); }
};

export default executeFunctionsIfNoErrorsLoginRegistration;
