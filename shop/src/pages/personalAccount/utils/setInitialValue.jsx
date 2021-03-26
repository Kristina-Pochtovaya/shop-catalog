function setInitialValue(name, firstName, lastName, email,
  phoneNumber, address, passwordNew, passwordNewRepeat) {
  let result = '';
  if (name === 'firstName') { result = firstName; }
  if (name === 'lastName') { result = lastName; }
  if (name === 'email') { result = email; }
  if (name === 'phone') { result = phoneNumber; }
  if (name === 'address') { result = address; }
  if (name === 'passwordNew') { result = passwordNew; }
  if (name === 'passwordNewRepeat') { result = passwordNewRepeat; }
  return result;
}

export default setInitialValue;
