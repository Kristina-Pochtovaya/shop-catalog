function addRemoveScroll() {
  const body = document.getElementById('body');
  body.className === '-noOverflow' ? body.setAttribute('class', '') : body.setAttribute('class', '-noOverflow');
}

export default addRemoveScroll;
