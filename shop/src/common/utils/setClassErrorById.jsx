function setClassErrorById(Id, className) {
  const incorrectLoginOrPassword = document.getElementById(Id);

  incorrectLoginOrPassword.setAttribute('class', className);
}

export default setClassErrorById;
