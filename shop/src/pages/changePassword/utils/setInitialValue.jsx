function setInitialValue(name, email, passwordNew, passwordNewRepeat) {
  let result = '';
  if (name === 'clientEmail') { result = email; }
  if (name === 'passwordNew') { result = passwordNew; }
  if (name === 'passwordNewRepeat') { result = passwordNewRepeat; }
  return result;
}

export default setInitialValue;
