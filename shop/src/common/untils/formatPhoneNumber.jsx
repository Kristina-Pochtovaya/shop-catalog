function formatPhoneNumber(value) {
  let phone = '';
  value.split('').forEach((letter) => {
    if ('+0123456789'.includes(letter)) {
      phone += letter;
    }
  });
  return phone;
}

export default formatPhoneNumber;
