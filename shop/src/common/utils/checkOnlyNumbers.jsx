function checkOnlyNumbers(value) {
  let newValue = '';
  const count = (value.match('РУБ') || []).length;
  if (value.slice(-1) === '.' && count === 0) {
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
