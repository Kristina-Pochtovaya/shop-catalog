const executeFunctionsIfNoErrorsLoginRegistration = (
  onEnter, onLogin, history, onAdd = '', result = '',
) => {
  onEnter(false, true) && onLogin(false, false, false)
  && history.push('/personal');
  if (onAdd !== '') { onAdd(result.firstName, result.phoneNumber, result.address); }
};

export default executeFunctionsIfNoErrorsLoginRegistration;
