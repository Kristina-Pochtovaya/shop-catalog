function setErrorNotNull(ClassInput, ClassSymbol) {
  const newClassInput = document.querySelector(`.${ClassInput}`);
  const newClassSymbol = document.querySelector(`.${ClassSymbol}`);

  newClassInput.setAttribute('class', `${ClassInput} -notNull`);
  newClassSymbol.setAttribute('class', ClassSymbol);
}

export default setErrorNotNull;
