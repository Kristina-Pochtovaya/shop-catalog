import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const basketItemPath = '/basket';

async function postBasketItemsRequest(
  itemsArray, clientName, clientPhone, clientAddress, clientMessage, pages,
) {
  const payload = {
    data: itemsArray.map((item) => (
      {

        id: item.id,
        category: item.category,
        description: item.description,
        counter: item.counter,
        sum: item.counter * item.price,
        image: item.img.props.src,
        clientName,
        clientPhone,
        clientAddress,
        clientMessage,
        clientEmail: pages.loginPersonalAccountReducer.clientEmail,
        clientId: pages.loginPersonalAccountReducer.id,
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
