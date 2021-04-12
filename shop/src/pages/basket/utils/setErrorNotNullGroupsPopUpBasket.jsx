import setErrorNotNullName from './setErrorNotNullName';
import setErrorNotNullPhone from './setErrorNotNullPhone';
import setErrorNotNullAddress from './setErrorNotNullAddress';

const setErrorNotNullGroupsPopUpBasket = (clientName, clientPhone, clientAddress) => {
  if (!clientName) {
    setErrorNotNullName();
  } if (clientPhone.length < 13 || (clientPhone.includes('_'))) {
    setErrorNotNullPhone();
  } if (!clientAddress) {
    setErrorNotNullAddress();
  } if (clientPhone.length === 4) {
    setErrorNotNullPhone();
  }
};

export default setErrorNotNullGroupsPopUpBasket;
