import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import getProducts from './getProducts';

import getRequest from '../../../../common/api/get/getRequest';

jest.mock('../../../../common/api/get/getRequest');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const res = {
    data: [{
      category: 'Электротовары и свет',
      categoryId: 1,
      counter: 1,
      createdAt: '2021-02-24T13:17:48.000Z',
      description: 'Лампа настольная SURPA SL-27',
      id: 3,
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEA',
      imgAlt: 'Лампа настольная SURPA SL-27',
      imgTitle: 'Лампа настольная SURPA SL-27',
      inStock: false,
      price: '1.11',
      updatedAt: '2021-04-01T10:58:00.000Z',
    },
    {
      category: 'Сад',
      categoryId: 2,
      counter: 1,
      createdAt: '2021-02-24T13:17:48.000Z',
      description: 'Качели садовые Olsa Элит',
      id: 4,
      image: 'data:image/jpeg;base64,/9j/4PL/xAAgFCoRMzUv/aAAwDAQ',
      imgAlt: 'Качели садовые Olsa Элит',
      imgTitle: 'Качели садовые Olsa Элит',
      inStock: false,
      price: '101.11',
      updatedAt: '2021-04-01T09:31:25.000Z',
    },
    ],
  };
  jest.mock('../../../../common/api/get/getRequest', async () => ({
    getRequest: jest.fn().mockImplementation(() => res),
  }));
  const myUpdateData = jest.fn();
  const mySetError = jest.fn();

  test('it exucetes the functions getRequest, myUpdateData and return the array of objects', async () => {
    getRequest.mockReturnValueOnce(res);
    expect(getRequest).toHaveBeenCalledTimes(0);
    expect(myUpdateData).toHaveBeenCalledTimes(0);
    expect(mySetError).toHaveBeenCalledTimes(0);
    const result = await getProducts(myUpdateData, mySetError);
    expect(result).toEqual(res.data);
    expect(myUpdateData).toHaveBeenCalledTimes(1);
    expect(getRequest).toHaveBeenCalledTimes(1);
    expect(mySetError).toHaveBeenCalledTimes(0);
  });

  test('should execute mySetError if error occurs', async () => {
    getRequest.mockReturnValueOnce('Error shold occur');
    expect(getRequest).toHaveBeenCalledTimes(0);
    expect(mySetError).toHaveBeenCalledTimes(0);
    await getProducts('', mySetError);
    expect(getRequest).toHaveBeenCalledTimes(1);
    expect(mySetError).toHaveBeenCalledTimes(1);
  });
});
