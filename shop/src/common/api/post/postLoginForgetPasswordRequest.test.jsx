import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import postLoginForgetPassword from './postLoginForgetPasswordRequest';
import postRequest from './postRequest';

jest.mock('./postRequest');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const payload = {
    data: {
      email: 'test@mail.ru',
      password: '',
    },
  };
  const email = 'test@mail.ru';
  const myUpdateId = jest.fn();
  const myOnEnterEmail = jest.fn();

  test('it executes postRequest with arguments forgetPasswordPath, payload if no errors occurs and password is null', async () => {
    const password = '';
    expect(postRequest).toHaveBeenCalledTimes(0);
    await postLoginForgetPassword(email, password, myUpdateId, myOnEnterEmail);
    expect(postRequest).toHaveBeenCalledWith('/forget-password', payload);
    expect(myUpdateId).toHaveBeenCalledTimes(0);
    expect(myOnEnterEmail).toHaveBeenCalledTimes(0);
  });

  test('it executes postRequest with arguments loginPath, payload if no errors occurs and password is not null', async () => {
    const password = '123456789';
    payload.data.password = '123456789';
    expect(postRequest).toHaveBeenCalledTimes(0);
    await postLoginForgetPassword(email, password, myUpdateId, myOnEnterEmail);
    expect(postRequest).toHaveBeenCalledWith('/login', payload);
  });

  test('it executes myUpdateId and myOnEnterEmail is they are not false', async () => {
    const password = '123456789';
    payload.data.password = '123456789';
    expect(myUpdateId).toHaveBeenCalledTimes(0);
    expect(myOnEnterEmail).toHaveBeenCalledTimes(0);
    postRequest.mockReturnValueOnce(payload);
    await postLoginForgetPassword(email, password, myUpdateId, myOnEnterEmail);
    expect(myUpdateId).toHaveBeenCalledTimes(1);
    expect(myOnEnterEmail).toHaveBeenCalledTimes(1);
  });

  test('it does not execute myUpdateId and myOnEnterEmail if they are not in arguments of postLoginForgetPassword function', async () => {
    const password = '123456789';
    payload.data.password = '123456789';
    expect(myUpdateId).toHaveBeenCalledTimes(0);
    expect(myOnEnterEmail).toHaveBeenCalledTimes(0);
    postRequest.mockReturnValueOnce(payload);
    await postLoginForgetPassword(email, password, false, false);
    expect(myUpdateId).toHaveBeenCalledTimes(0);
    expect(myOnEnterEmail).toHaveBeenCalledTimes(0);
  });

  test('it does execute myUpdateId and not execute myOnEnterEmail if myOnEnterEmail is onlly not in arguments of postLoginForgetPassword function', async () => {
    const password = '123456789';
    payload.data.password = '123456789';
    expect(myUpdateId).toHaveBeenCalledTimes(0);
    expect(myOnEnterEmail).toHaveBeenCalledTimes(0);
    postRequest.mockReturnValueOnce(payload);
    await postLoginForgetPassword(email, password, myUpdateId, false);
    expect(myUpdateId).toHaveBeenCalledTimes(1);
    expect(myOnEnterEmail).toHaveBeenCalledTimes(0);
  });

  test('it return null if error occurs', async () => {
    postRequest.mockReturnValue();
    const result = await postLoginForgetPassword(email, '', myUpdateId, false);
    expect(result).toBe(null);
  });
});
