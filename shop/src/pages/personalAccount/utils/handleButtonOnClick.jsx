const handleButtonOnClick = (
  className, history, setIsPersonalInformationVisible, onEnter = '', onLogin = '', onDelete = '', onDeleteAll = '',
) => {
  if (className === 'historyOrdersColumn' || className === 'historyOrdersRow') { history.push('./orders-history'); }
  if (className === 'basketColumn' || className === 'basketRow') { history.push('./basket'); }
  if (className === 'personalDataColumn' || className === 'personalDataRow') { setIsPersonalInformationVisible(true); }
  if (className === 'exitButton') { history.push('./main-page'); onEnter(true, false); onLogin(false, false, false); onDelete(); onDeleteAll(); }
  if (className === 'categoryColumn' || className === 'categoryRow') { history.push('./edit-category'); }
  if (className === 'catalogOfGoodsColumn' || className === 'catalogOfGoodsRow') { history.push('./edit-products'); }
};

export default handleButtonOnClick;
