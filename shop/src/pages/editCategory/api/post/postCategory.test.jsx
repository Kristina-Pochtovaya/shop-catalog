import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import postCategory from './postCategory';
import postRequestMultipartFormData from '../../../../common/api/post/postRequestMultipartFormData';
import setClassErrorById from '../../../../common/utils/setClassErrorById';

jest.mock('../../../../common/api/post/postRequestMultipartFormData');
jest.mock('../../../../common/utils/setClassErrorById');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const res = {
    data: [{
      category: 'Электротовары и свет',
      id: 1,
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD',
    },
    ],
  };
  const id = 1;
  const category = 'Электротовары и свет';
  const image = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD';
  jest.mock('../../../../common/api/post/postRequestMultipartFormData', async () => ({
    postRequestMultipartFormData: jest.fn().mockImplementation(() => res),
  }));
  jest.mock('../../../../common/utils/setClassErrorById', () => ({
    setClassErrorById: jest.fn().mockImplementation(() => true),
  }));

  test('it exucetes the functions postRequestMultipartFormData  and setClassErrorById and return the array of edited category', async () => {
    postRequestMultipartFormData.mockReturnValueOnce(res);
    expect(postRequestMultipartFormData).toHaveBeenCalledTimes(0);
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    const result = await postCategory(id, category, image);
    expect(result).toEqual(res.data);
    expect(postRequestMultipartFormData).toHaveBeenCalledTimes(1);
    expect(setClassErrorById).toHaveBeenCalledTimes(1);
  });

  test('it returns null if error occur and execute fucntion setClassErrorById', async () => {
    postRequestMultipartFormData.mockReturnValueOnce();
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    const result = await postCategory();
    expect(result).toEqual(null);
    expect(setClassErrorById).toHaveBeenCalledTimes(1);
  });
});
