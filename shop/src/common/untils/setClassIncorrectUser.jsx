function setClassIncorrectUser(Id) {
  const incorrectLoginOrPassword = document.getElementById(Id);

  incorrectLoginOrPassword.setAttribute('class', 'incorrectLoginOrPassword');
}

export default setClassIncorrectUser;
