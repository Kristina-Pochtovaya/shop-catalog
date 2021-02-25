import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const basketItemPath = '/basket';

async function postBasketItemsRequest(
  itemsArray,
) {
  const payload = {
    id: itemsArray.map((item) => item.id),
    description: itemsArray.map((item) => item.description),
    price: itemsArray.map((item) => item.price),
    counter: itemsArray.map((item) => item.counter),
  };

  try {
    const response = await axios.post(`${serverUrl}${basketItemPath}`, payload);
    const result = response.data;
    return result;
  } catch (error) {
    return null;
  }
}

export default postBasketItemsRequest;
