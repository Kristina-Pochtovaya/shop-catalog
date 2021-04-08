import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import postHistoryOrder from './postHistoryOrder';
import postRequest from '../../../../common/api/post/postRequest';

jest.mock('../../../../common/api/post/postRequest');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const id = 1;
  const myUpdateData = jest.fn();
  const mySetState = jest.fn();
  const res = {
    data: [{
      category: 'Электротовары и свет',
      clientAddress: 'Minsk, ul.Kulman 81',
      clientEmail: 'v.pupkin@gmail.com',
      clientId: 1,
      clientName: 'Vasyaa',
      clientNotes: '',
      clientPhone: '+375111111111',
      counter: 1,
      description: 'es',
      id: 1,
      image: 'data:image/jpeg;base64,/9j/4AAQ',
      productId: 206,
    }, {
      category: 'Электротовары и свет',
      clientAddress: 'Minsk, ul.Kulman 81',
      clientEmail: 'v.pupkin@gmail.com',
      clientId: 1,
      clientName: 'Vasyaa',
      clientNotes: '',
      clientPhone: '+375111111111',
      counter: 5,
      description: 'TETS',
      id: 2,
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRg',
      productId: 207,
      sum: '105.00',
    }],
  };
  jest.mock('../../../../common/api/post/postRequest', async () => ({
    postRequest: jest.fn(),
  }));

  test('it exucetes the functions postRequest  and myUpdateData with arguments mySetState, \'ordersArray\', result and mySetState, \'isLoading\', false and return result', async () => {
    postRequest.mockReturnValue(res);
    expect(postRequest).toHaveBeenCalledTimes(0);
    expect(myUpdateData).toHaveBeenCalledTimes(0);
    const result = await postHistoryOrder(id, myUpdateData, mySetState);
    expect(result).toEqual(res.data);
    expect(postRequest).toHaveBeenCalledTimes(1);
    expect(myUpdateData).toHaveBeenCalledTimes(2);
    expect(myUpdateData).toHaveBeenCalledWith(mySetState, 'ordersArray', result);
    expect(myUpdateData).toHaveBeenCalledWith(mySetState, 'isLoading', false);
  });

  test('it returns null if error occur and executes myUpdateData with arguments mySetState, \'error\', Cannot read property \'data\' of undefined and mySetState, \'isLoading\', false and return null', async () => {
    postRequest.mockReturnValueOnce();
    expect(myUpdateData).toHaveBeenCalledTimes(0);
    const result = await postHistoryOrder('error', myUpdateData, mySetState);
    expect(myUpdateData).toHaveBeenCalledTimes(2);
    expect(myUpdateData).toHaveBeenCalledWith(mySetState, 'isLoading', false);
    expect(myUpdateData).toHaveBeenCalledWith(mySetState, 'error', 'Cannot read property \'data\' of undefined');
    expect(result).toEqual(null);
  });
});
