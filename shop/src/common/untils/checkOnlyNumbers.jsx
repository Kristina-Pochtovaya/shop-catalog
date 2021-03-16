function checkOnlyNumbers(value) {
  let newValue = '';
  if (value.slice(-1) === '.') {
    newValue = value.slice(0, -5);
  } else {
    newValue = value;
  }

  if (newValue !== newValue.replace(/[^\d;]/g, '')) {
    return false;
  }
  return newValue;
}

export default checkOnlyNumbers;
