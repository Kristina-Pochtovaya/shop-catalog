import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import postUploadAction from './postUploadAction';
import postRequest from './postRequest';

jest.mock('./postRequest');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const res = {
    data: [{
      category: 'Электротовары и свет',
    }],
  };
  console.log = jest.fn();
  const image = 'image';

  test('it executes console.log with res.data if no errors occurs', async () => {
    expect(postRequest).toHaveBeenCalledTimes(0);
    expect(console.log).toHaveBeenCalledTimes(0);
    postRequest.mockReturnValue(res);
    await postUploadAction(image);
    expect(postRequest).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(res.data);
  });

  test('it executes console.log with res.data iferror occurs', async () => {
    postRequest.mockReturnValue();
    await postUploadAction(image);
    const message = 'Cannot read property \'data\' of undefined';
    expect(console.log).toHaveBeenCalledWith(message);
  });
});
