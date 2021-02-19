import axios from 'axios';
import { serverUrl, basketItemPath } from '../../../../common/constants/constants';

async function getBasketItemsRequests(
  itemsArray, setPopupThanksActive, setpopupSmthWentWrongActive,
) {
  const payload = {
    id: itemsArray.map((item) => item.id),
    description: itemsArray.map((item) => item.description),
    price: itemsArray.map((item) => item.price),
    counter: itemsArray.map((item) => item.counter),
  };

  try {
    await axios.post(`${serverUrl}${basketItemPath}`, payload);
    setPopupThanksActive(true);
  } catch (error) {
    setpopupSmthWentWrongActive(true);
  }
}

export default getBasketItemsRequests;
