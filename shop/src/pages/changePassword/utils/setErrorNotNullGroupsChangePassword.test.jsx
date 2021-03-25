import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import setErrorNotNullGroupsChangePassword from './setErrorNotNullGroupsChangePassword';

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const clientEmailInput = 'clientEmailInput';
  const clientEmailSymbol = 'clientEmailSymbol';
  const passwordNewInput = 'passwordNewInput';
  const passwordNewSymbol = 'passwordNewSymbol';
  const passwordRepeatInput = 'passwordRepeatInput';
  const passwordRepeatSymbol = 'passwordRepeatSymbol';
  const errorLength = 'errorLength';
  const mySetErrorNotNull = jest.fn(() => true);
  const mySetErrorIncorrectLength = jest.fn(() => true);

  it('no functions are executing if there are no errors', () => {
    const clientEmail = 'test@mail.ru';
    const passwordNew = '123456789';
    const passwordNewRepeat = '123456789';
    setErrorNotNullGroupsChangePassword(clientEmail, clientEmailInput, clientEmailSymbol,
      passwordNew, passwordNewInput, passwordNewSymbol, passwordNewRepeat, passwordRepeatInput,
      passwordRepeatSymbol, errorLength, mySetErrorNotNull, mySetErrorIncorrectLength);
    expect(mySetErrorNotNull).toHaveBeenCalledTimes(0);
    expect(mySetErrorIncorrectLength).toHaveBeenCalledTimes(0);
  });

  it('all functions have been executed if email and password are null, pasword is not equal repeatedPassword and pasword length < 9', () => {
    const clientEmail = '';
    const passwordNew = '';
    const passwordNewRepeat = '123456789';
    setErrorNotNullGroupsChangePassword(clientEmail, clientEmailInput, clientEmailSymbol,
      passwordNew, passwordNewInput, passwordNewSymbol, passwordNewRepeat, passwordRepeatInput,
      passwordRepeatSymbol, errorLength, mySetErrorNotNull, mySetErrorIncorrectLength);
    expect(mySetErrorNotNull).toHaveBeenCalledTimes(3);
    expect(mySetErrorIncorrectLength).toHaveBeenCalledTimes(1);
  });

  it('only mySetErrorNotNull has been executed if just pasword is not equal repeatedPassword', () => {
    const clientEmail = 'test@mail.ru';
    const passwordNew = '123456789';
    const passwordNewRepeat = '12345678';
    setErrorNotNullGroupsChangePassword(clientEmail, clientEmailInput, clientEmailSymbol,
      passwordNew, passwordNewInput, passwordNewSymbol, passwordNewRepeat, passwordRepeatInput,
      passwordRepeatSymbol, errorLength, mySetErrorNotNull, mySetErrorIncorrectLength);
    expect(mySetErrorNotNull).toHaveBeenCalledTimes(1);
    expect(mySetErrorIncorrectLength).toHaveBeenCalledTimes(0);
  });
});
