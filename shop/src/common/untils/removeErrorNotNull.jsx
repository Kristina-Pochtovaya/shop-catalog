function removeErrorNotNull(ClassInput, ClassSymbol) {
  const newClassInput = document.querySelector(`.${ClassInput}`);
  const newClassSymbol = document.querySelector(`.${ClassSymbol}`);

  newClassInput.setAttribute('class', ClassInput);
  newClassSymbol.setAttribute('class', `${ClassSymbol} -disabled`);
}

export default removeErrorNotNull;
