import handleButtonClick from './handleButtonClick';
import postUnautherizedUser from '../api/post/postUnautherizedUserRequest';
import postBasketItemsRequest from '../api/post/postBasketItemsRequest';

jest.mock('../api/post/postUnautherizedUserRequest');
jest.mock('../api/post/postBasketItemsRequest');

describe('test the functionality of handleButtonClick', () => {
  const mySetPopupOrderActive = jest.fn();
  const myOnAddClientInformation = jest.fn();
  const mySetpopupSmthWentWrongActive = jest.fn();
  const mySetPopupThanksActive = jest.fn();
  const clientName = 'clientName';
  const clientPhone = 'clientPhone';
  const clientAddress = 'clientAddress';
  const clientMessage = 'clientMessage';
  const pages = 'pages';
  const items = {
    catalogItemsReducer: 'catalogItemsReducer',
  };

  it('should execute mySetPopupOrderActive, myOnAddClientInformation, postUnautherizedUser, postBasketItemsRequest', async () => {
    expect(mySetPopupOrderActive).toHaveBeenCalledTimes(0);
    expect(myOnAddClientInformation).toHaveBeenCalledTimes(0);
    expect(myOnAddClientInformation).toHaveBeenCalledTimes(0);
    await handleButtonClick(mySetPopupOrderActive, myOnAddClientInformation,
      mySetpopupSmthWentWrongActive, mySetPopupThanksActive, clientName, clientPhone, clientAddress,
      clientMessage, pages, items);
    expect(mySetPopupOrderActive).toHaveBeenCalledTimes(1);
    expect(myOnAddClientInformation).toHaveBeenCalledTimes(1);
    expect(myOnAddClientInformation).toHaveBeenCalledTimes(1);
  });

  it('should execute mySetpopupSmthWentWrongActive if result of postBasketItemsRequest is null', async () => {
    expect(mySetpopupSmthWentWrongActive).toHaveBeenCalledTimes(0);
    expect(mySetPopupThanksActive).toHaveBeenCalledTimes(0);
    postUnautherizedUser.mockReturnValueOnce(true);
    postBasketItemsRequest.mockReturnValueOnce(null);
    await handleButtonClick(mySetPopupOrderActive, myOnAddClientInformation,
      mySetpopupSmthWentWrongActive, mySetPopupThanksActive, clientName, clientPhone, clientAddress,
      clientMessage, pages, items);
    expect(mySetpopupSmthWentWrongActive).toHaveBeenCalledTimes(1);
    expect(mySetPopupThanksActive).toHaveBeenCalledTimes(0);
  });

  it('should execute mySetPopupThanksActive if result of postBasketItemsRequest is not null', async () => {
    expect(mySetpopupSmthWentWrongActive).toHaveBeenCalledTimes(0);
    expect(mySetPopupThanksActive).toHaveBeenCalledTimes(0);
    postUnautherizedUser.mockReturnValueOnce(true);
    postBasketItemsRequest.mockReturnValueOnce(true);
    await handleButtonClick(mySetPopupOrderActive, myOnAddClientInformation,
      mySetpopupSmthWentWrongActive, mySetPopupThanksActive, clientName, clientPhone, clientAddress,
      clientMessage, pages, items);
    expect(mySetpopupSmthWentWrongActive).toHaveBeenCalledTimes(0);
    expect(mySetPopupThanksActive).toHaveBeenCalledTimes(1);
  });
});
