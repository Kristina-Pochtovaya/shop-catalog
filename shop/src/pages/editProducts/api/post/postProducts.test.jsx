import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import postProducts from './postProducts';
import postRequestMultipartFormData from '../../../../common/api/post/postRequestMultipartFormData';
import setClassErrorById from '../../../../common/utils/setClassErrorById';

jest.mock('../../../../common/api/post/postRequestMultipartFormData');
jest.mock('../../../../common/utils/setClassErrorById');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const res = {
    data: [{
      category: 'Электротовары и свет',
      categoryId: [1],
      description: 'Лампа настольная SURPA SL-27',
      id: 3,
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQA',
      inStock: 1,
      price: '1.1',
    },
    ],
  };
  const state = {
    categoriesArray: [
      {
        id: '1',
        category: 'Электротовары и свет',
      },
    ],
  };
  const errorState = {
    categoriesArray: [
      {
        idError: '1',
        category: 'Электротовары и свет',
      },
    ],
  };
  jest.mock('../../../../common/api/post/postRequestMultipartFormData', async () => ({
    postRequestMultipartFormData: jest.fn().mockImplementation(() => res),
  }));
  jest.mock('../../../../common/utils/setClassErrorById', () => ({
    setClassErrorById: jest.fn().mockImplementation(() => true),
  }));

  test('it exucetes the functions postRequestMultipartFormData  and setClassErrorById and return the array of edited products', async () => {
    postRequestMultipartFormData.mockReturnValueOnce(res);
    expect(postRequestMultipartFormData).toHaveBeenCalledTimes(0);
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    const result = await postProducts(state);
    expect(result).toEqual(res.data);
    expect(postRequestMultipartFormData).toHaveBeenCalledTimes(1);
    expect(setClassErrorById).toHaveBeenCalledTimes(1);
  });

  test('it returns null if error occur and execute fucntion setClassErrorById', async () => {
    postRequestMultipartFormData.mockReturnValueOnce();
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    const result = await postProducts(errorState);
    expect(result).toEqual(null);
    expect(setClassErrorById).toHaveBeenCalledTimes(1);
  });
});
