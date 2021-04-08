function addRemoveScroll() {
  document.body.className === '-noOverflow' ? document.body.setAttribute('class', '') : document.body.setAttribute('class', '-noOverflow');
}

export default addRemoveScroll;
