import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const basketItemPath = '/basket';

async function postBasketItemsRequest(
  itemsArray,
) {
  const payload = {
    data: itemsArray.map((item) => (
      {
        id: item.id,
        description: item.description,
        counter: item.counter,
        sum: item.counter * item.price,
        category: item.category,
        clientName: item.clientInformation.clientName,
        clientPhone: item.clientInformation.clientPhone,
        clientAddress: item.clientInformation.clientAddress,
        clientMessage: item.clientInformation.clientMessage,
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
