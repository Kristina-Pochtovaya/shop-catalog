import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import getUsers from './getUsers';

configure({ adapter: new Adapter() });

describe('Items API', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'));

  const id = 3;
  const idFail = 12546374867825463748367584;
  const myUpdateDataUsers = jest.fn(() => true);
  const mySetError = jest.fn(() => true);

  test('it returns id if user was found', async () => {
    expect.assertions(2);
    const result = await getUsers(id, myUpdateDataUsers, mySetError);
    expect(result.id).toEqual(id);
    expect(mySetError).toHaveBeenCalledTimes(0);
    window.fetch.mockRestore();
  });

  test('the fucntion mySetError has been executed if user was not found', async () => {
    expect.assertions(2);
    const result = await getUsers(idFail, myUpdateDataUsers, mySetError);
    expect(result).not.toBe(idFail);
    expect(mySetError).toHaveBeenCalledTimes(1);
  });
});
