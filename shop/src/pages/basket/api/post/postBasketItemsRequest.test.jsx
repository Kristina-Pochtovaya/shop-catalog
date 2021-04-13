import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import postBasketItemsRequest from './postBasketItemsRequest';
import postRequest from '../../../../common/api/post/postRequest';

jest.mock('../../../../common/api/post/postRequest');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const payload = {
    data: {
      id: '1',
      category: 'category',
      description: 'description',
      counter: 1,
      sum: 11,
      image: 'src',
      clientName: 'testName',
      clientPhone: '+375291113355',
      clientAddress: 'testAddress',
      clientMessage: 'testMessage',
      clientEmail: 'test@mail.ru',
      clientId: 3,
    },
  };
  const itemsArray = [{
    id: 1,
    category: 'category',
    description: 'description',
    counter: 1,
    price: 11,
    img: { props: { src: 'src' } },
  }];
  const clientName = 'testName';
  const clientPhone = '+375291113355';
  const clientAddress = 'testAddress';
  const clientMessage = 'testMessage';
  const pages = {
    loginPersonalAccountReducer: {
      clientEmail: 'test@mail.ru',
      clientId: 3,
    },
  };

  test('it executes postRequest return result if no errors occurs', async () => {
    expect(postRequest).toHaveBeenCalledTimes(0);
    postRequest.mockReturnValue(payload);
    const result = await postBasketItemsRequest(itemsArray, clientName, clientPhone,
      clientAddress, clientMessage, pages);
    expect(postRequest).toHaveBeenCalledTimes(1);
    expect(result).toBe(payload.data);
  });

  test('it return null if error occurs', async () => {
    postRequest.mockReturnValue();
    const result = await postBasketItemsRequest(itemsArray, clientName, clientPhone,
      clientAddress, clientMessage, pages);
    expect(result).toBe(null);
  });
});
