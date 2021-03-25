const processResultRegistration = async (
  firstName, lastName, email, history, password, phoneNumber, address, postUsers,
  setClassErrorById, onEnter, onLogin, executeFunctionsIfNoErrorsLoginRegistration,
) => {
  const result = await postUsers(firstName,
    lastName, email, password, phoneNumber, address);
  if (result === true) {
    setClassErrorById('existingUser', 'existingUserStringBlock');
  } else {
    executeFunctionsIfNoErrorsLoginRegistration(onEnter, onLogin, history);
  }
};

export default processResultRegistration;
