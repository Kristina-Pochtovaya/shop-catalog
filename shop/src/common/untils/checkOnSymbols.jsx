function checkOnSymbols(value) {
  const lettersDigits = /^[0-9a-zA-Z]+$/;
  let result = '';
  result = value.match(lettersDigits);
  if (result !== null) return value;

  return 'Prohibited symbols';
}

export default checkOnSymbols;
