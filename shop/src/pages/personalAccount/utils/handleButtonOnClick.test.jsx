import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import handleButtonOnClick from './handleButtonOnClick';

configure({ adapter: new Adapter() });

describe('rendering', () => {
  let className = '';
  let history = [];
  const mySetIsPersonalInformationVisible = jest.fn();
  const myOnEnter = jest.fn();
  const myOnLogin = jest.fn();
  const myOnDelete = jest.fn();

  beforeEach(() => {
    history = [];
  });

  it('should push ./orders-history to history array if className is historyOrdersColumn', () => {
    className = 'historyOrdersColumn';
    handleButtonOnClick(className, history, mySetIsPersonalInformationVisible, myOnEnter, myOnLogin,
      myOnDelete);
    expect(history).toEqual(['./orders-history']);
  });

  it('should push ./basket to history array if className is basketColumn', () => {
    className = 'basketColumn';
    handleButtonOnClick(className, history, mySetIsPersonalInformationVisible, myOnEnter, myOnLogin,
      myOnDelete);
    expect(history).toEqual(['./basket']);
  });

  it('should run setIsPersonalInformationVisible className is personalDataRow', () => {
    className = 'personalDataRow';
    expect(mySetIsPersonalInformationVisible).toHaveBeenCalledTimes(0);
    handleButtonOnClick(className, history, mySetIsPersonalInformationVisible, myOnEnter, myOnLogin,
      myOnDelete);
    expect(mySetIsPersonalInformationVisible).toHaveBeenCalledTimes(1);
  });

  it('should run setIsPersonalInformationVisible className is personalDataColumn', () => {
    className = 'personalDataColumn';
    expect(mySetIsPersonalInformationVisible).toHaveBeenCalledTimes(0);
    handleButtonOnClick(className, history, mySetIsPersonalInformationVisible, myOnEnter, myOnLogin,
      myOnDelete);
    expect(mySetIsPersonalInformationVisible).toHaveBeenCalledTimes(1);
  });

  it('should  push ./main-page to history array and run myOnEnter, myOnLogin and myOnDelete if className is exitButton', () => {
    className = 'exitButton';
    expect(myOnEnter).toHaveBeenCalledTimes(0);
    expect(myOnLogin).toHaveBeenCalledTimes(0);
    expect(myOnDelete).toHaveBeenCalledTimes(0);
    handleButtonOnClick(className, history, mySetIsPersonalInformationVisible, myOnEnter, myOnLogin,
      myOnDelete);
    expect(myOnEnter).toHaveBeenCalledTimes(1);
    expect(myOnLogin).toHaveBeenCalledTimes(1);
    expect(myOnDelete).toHaveBeenCalledTimes(1);
    expect(history).toEqual(['./main-page']);
  });

  it('should not push nothing to history array and no run no one of functions if input className is not in the list of className inside the function', () => {
    className = 'test';
    handleButtonOnClick(className, history, mySetIsPersonalInformationVisible, myOnEnter, myOnLogin,
      myOnDelete);
    expect(myOnEnter).toHaveBeenCalledTimes(0);
    expect(myOnLogin).toHaveBeenCalledTimes(0);
    expect(myOnDelete).toHaveBeenCalledTimes(0);
    expect(history).toEqual([]);
  });
});
