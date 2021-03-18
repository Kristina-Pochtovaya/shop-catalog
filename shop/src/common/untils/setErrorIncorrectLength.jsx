function setErrorIncorrectLength(ClassBox) {
  const newClassBox = document.querySelector(`.${ClassBox}`);

  newClassBox.setAttribute('class', `${ClassBox}`);
}

export default setErrorIncorrectLength;
