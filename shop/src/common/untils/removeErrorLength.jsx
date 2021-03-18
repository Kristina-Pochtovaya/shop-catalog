function removeErrorLength(ClassBox) {
  const newClassSymbol = document.querySelector(`.${ClassBox}`);

  newClassSymbol.setAttribute('class', `${ClassBox} -disabled`);
}

export default removeErrorLength;
