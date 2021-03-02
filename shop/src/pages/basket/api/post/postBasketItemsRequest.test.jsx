import { configure } from 'enzyme';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import postBasketItemsRequest from './postBasketItemsRequest';
import 'whatwg-fetch';
import serverUrl from '../../../../common/constants/urls';

configure({ adapter: new Adapter() });

describe('Items API', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'));

  const data = [];

  const clientName = 'Kristina';
  const clientPhone = '+375293335577';
  const clientAddress = 'city Minsk';
  const clientMessage = 'Notes';
  data.catalogItemsReducer = [
    {
      id: 1,
      description: 'Светильник потолочный Box Silver',
      price: 163,
      counter: 1,
      sum: 1 * 163,
      clientName,
      clientPhone,
      clientAddress,
      clientMessage,
    },
  ];

  test('it returns an array of items', async () => {
    expect.assertions(1);
    const expected = [
      {
        id: 1,
        description: 'Светильник потолочный Box Silver',
        counter: 1,
        sum: 1 * 163,
        clientName: 'Kristina',
        clientAddress: 'city Minsk',
        clientMessage: 'Notes',
      },
    ];
    jest.spyOn(window, 'fetch').mockImplementation(() => {
      const fetchResponse = {
        ok: true,
        json: () => Promise.resolve(expected),
      };
      return Promise.resolve(fetchResponse);
    });
    const json = await postBasketItemsRequest(data.catalogItemsReducer,
      clientName, clientPhone, clientAddress, clientMessage);
    expect(json.data).toMatchObject(expected);
    window.fetch.mockRestore();
  });

  test('it returns null when error occurs', async () => {
    expect.assertions(1);
    async function postBasketItemsRequestFail(
      itemsArraytest, clientNametest, clientPhonetest, clientAddresstest, clientMessagetest,
    ) {
      const payload = {
        data: itemsArraytest.map((item) => (
          {
            id: item.id,
            category: item.category,
            description: item.description,
            counter: item.counter,
            sum: item.counter * item.price,
            clientNametest,
            clientPhonetest,
            clientAddresstest,
            clientMessagetest,
          }
        )),
      };

      try {
        const response = await axios.post(`${serverUrl}/basketsad`, payload);
        const result = response.data;
        return result;
      } catch (error) {
        return null;
      }
    }

    jest.spyOn(window, 'fetch').mockImplementation(() => {
      new Promise((reject) => {
        reject(new Error('error'));
      }).catch((err) => err);
    });
    const error = await postBasketItemsRequestFail(data.catalogItemsReducer,
      clientName, clientPhone, clientAddress, clientMessage);
    await expect(error).toBe(null);
    window.fetch.mockRestore();
  });
});
