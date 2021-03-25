import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import processResultChangePassword from './processResultChangePassword';

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const clientEmail = 'test@mail.ru';
  const passwordNew = '123456789';
  const passwordNewRepeat = '123456789';
  let historyResult = [];
  const mySetClassIncorrectUser = jest.fn(() => 'incorrectUserOrPassword');

  afterEach(() => {
    historyResult = [];
  });

  it('run history if result of postChangePasswordRequest is true', async () => {
    const postChangePasswordRequest = jest.fn().mockImplementation(() => true);

    await processResultChangePassword(clientEmail, passwordNew, passwordNewRepeat,
      historyResult, mySetClassIncorrectUser, postChangePasswordRequest);
    expect(historyResult).toEqual(['/main-page']);
    expect(mySetClassIncorrectUser).toHaveBeenCalledTimes(0);
  });

  it('run mySetClassIncorrectUser if result of postChangePasswordRequest is incorrectUserOrPassword', async () => {
    const postChangePasswordRequest = jest.fn().mockImplementation(() => 'incorrectUserOrPassword');

    await processResultChangePassword(clientEmail, passwordNew, passwordNewRepeat,
      historyResult, mySetClassIncorrectUser, postChangePasswordRequest);
    expect(historyResult).toEqual([]);
    expect(mySetClassIncorrectUser).toHaveBeenCalledTimes(1);
  });
});
