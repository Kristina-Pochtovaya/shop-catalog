function setInitialValue(name, clientLogin, clientPassword) {
  let result = '';
  if (name === 'clientLogin') { result = clientLogin; }
  if (name === 'clientPassword') { result = clientPassword; }
  return result;
}

export default setInitialValue;
