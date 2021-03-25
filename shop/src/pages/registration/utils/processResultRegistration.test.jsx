import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import processResultRegistration from './processResultRegistration';

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const firstName = 'Vasya';
  const lastName = 'Pupkin';
  const email = 'test@mail.ru';
  const historyResult = [];
  const password = '123456789';
  const phoneNumber = '+3752911111111';
  const address = 'test';
  const mySetClassIncorrectUser = jest.fn(() => true);
  const onEnter = '';
  const onLogin = '';
  const myExecuteFunctionsIfNoErrorsLoginRegistration = jest.fn(() => true);

  it('mySetClassIncorrectUser has been executed if email is already exists in DB', async () => {
    const postUsers = jest.fn().mockImplementation(() => true);

    await processResultRegistration(firstName, lastName, email,
      historyResult, password, phoneNumber, address, postUsers, mySetClassIncorrectUser,
      onEnter, onLogin, myExecuteFunctionsIfNoErrorsLoginRegistration);
    expect(mySetClassIncorrectUser).toHaveBeenCalledTimes(1);
    expect(myExecuteFunctionsIfNoErrorsLoginRegistration).toHaveBeenCalledTimes(0);
  });

  it('mySetClassIncorrectUser has been executed if email is new', async () => {
    const postUsers = jest.fn().mockImplementation(() => 'New!');

    await processResultRegistration(firstName, lastName, email,
      historyResult, password, phoneNumber, address, postUsers, mySetClassIncorrectUser,
      onEnter, onLogin, myExecuteFunctionsIfNoErrorsLoginRegistration);
    expect(mySetClassIncorrectUser).toHaveBeenCalledTimes(0);
    expect(myExecuteFunctionsIfNoErrorsLoginRegistration).toHaveBeenCalledTimes(1);
  });
});
