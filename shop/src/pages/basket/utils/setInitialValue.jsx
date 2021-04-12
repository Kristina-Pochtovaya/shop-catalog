function setInitialValue(name, clientName, clientPhone, clientAddress) {
  let result = '';
  if (name === 'clientName') { result = clientName; }
  if (name === 'phone') { result = clientPhone; }
  if (name === 'clientAddress') { result = clientAddress; }
  return result;
}

export default setInitialValue;
