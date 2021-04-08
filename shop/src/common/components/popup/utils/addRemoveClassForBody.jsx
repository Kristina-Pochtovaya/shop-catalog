const addRemoveClassForBody = (active, activeOrder) => {
  if (active || activeOrder) {
    document.body.setAttribute('class', '-noOverflow');
  } else {
    document.body.setAttribute('class', '');
  }
  if (!activeOrder && !active) {
    document.body.setAttribute('class', '');
  } else {
    document.body.setAttribute('class', '-noOverflow');
  }
};

export default addRemoveClassForBody;
