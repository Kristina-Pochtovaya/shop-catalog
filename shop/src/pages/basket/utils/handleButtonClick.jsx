import postUnautherizedUser from '../api/post/postUnautherizedUserRequest';
import postBasketItemsRequest from '../api/post/postBasketItemsRequest';

async function handleButtonClick(setPopupOrderActive, onAddClientInformation,
  setpopupSmthWentWrongActive, setPopupThanksActive, clientName, clientPhone, clientAddress,
  clientMessage, pages, items) {
  setPopupOrderActive(false);
  onAddClientInformation({
    clientName, clientPhone, clientAddress, clientMessage,
  });
  await postUnautherizedUser(clientName, clientPhone, clientAddress, pages);
  const result = await postBasketItemsRequest(items.catalogItemsReducer,
    clientName, clientPhone, clientAddress, clientMessage, pages);
  result === null ? setpopupSmthWentWrongActive(true) : setPopupThanksActive(true);
}

export default handleButtonClick;
