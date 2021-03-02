import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const basketItemPath = '/basket';

async function postBasketItemsRequest(
  itemsArray, clientName, clientPhone, clientAddress, clientMessage,
) {
  const payload = {
    data: itemsArray.map((item) => (
      {
        id: item.id,
        category: item.category,
        description: item.description,
        counter: item.counter,
        sum: item.counter * item.price,
        clientName,
        clientPhone,
        clientAddress,
        clientMessage,
      }
    )),
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
