import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonPopUpBasket from './ButtonPopUpBasketComponent';
import handleButtonClick from '../utils/handleButtonClick';
import setErrorNotNullGroupsPopUpBasket from '../utils/setErrorNotNullGroupsPopUpBasket';

jest.mock('../utils/handleButtonClick');
jest.mock('../utils/setErrorNotNullGroupsPopUpBasket');

configure({ adapter: new Adapter() });
describe('rendering ButtonPopUpBasket component', () => {
  const state = {
    clientName: 'clientName',
    clientPhone: '+375297775511',
    clientAddress: 'testAddress',
    clientMessage: 'testMessage',
  };
  const pages = 'pages';
  const items = 'items';
  const setPopupOrderActive = 'setPopupOrderActive';
  const onAddClientInformation = 'onAddClientInformation';
  const setpopupSmthWentWrongActive = 'setpopupSmthWentWrongActive';
  const setPopupThanksActive = 'setPopupThanksActive';
  let component;
  const setUp = () => shallow(<ButtonPopUpBasket
    state={state}
    pages={pages}
    items={items}
    setPopupOrderActive={setPopupOrderActive}
    onAddClientInformation={onAddClientInformation}
    setpopupSmthWentWrongActive={setpopupSmthWentWrongActive}
    setPopupThanksActive={setPopupThanksActive}
  />);

  beforeEach(() => {
    state.clientName = 'clientName';
    state.clientPhone = '+375297775511';
    state.clientAddress = 'testAddress';
    component = setUp();
  });

  it('should execute handleButtonClick if clientName and clientAddress are not null and clientPhone.length is more or equal 13 and does not contain _ ', () => {
    expect(handleButtonClick).toHaveBeenCalledTimes(0);
    expect(setErrorNotNullGroupsPopUpBasket).toHaveBeenCalledTimes(0);
    component.find('.buttonOrder').simulate('click');
    expect(handleButtonClick).toHaveBeenCalledTimes(1);
    expect(setErrorNotNullGroupsPopUpBasket).toHaveBeenCalledTimes(0);
  });

  it('should execute setErrorNotNullGroupsPopUpBasket if clientName is null and clientPhone.length is less or equal 13', () => {
    state.clientName = 'clientName';
    state.clientPhone = '+37529777551';
    component = setUp();
    expect(handleButtonClick).toHaveBeenCalledTimes(0);
    expect(setErrorNotNullGroupsPopUpBasket).toHaveBeenCalledTimes(0);
    component.find('.buttonOrder').simulate('click');
    expect(handleButtonClick).toHaveBeenCalledTimes(0);
    expect(setErrorNotNullGroupsPopUpBasket).toHaveBeenCalledTimes(1);
  });

  it('should execute setErrorNotNullGroupsPopUpBasket if clientAddress is null and clientPhone contains _ ', () => {
    state.clientAddress = '';
    state.clientPhone = '+37529777551_';
    component = setUp();
    expect(handleButtonClick).toHaveBeenCalledTimes(0);
    expect(setErrorNotNullGroupsPopUpBasket).toHaveBeenCalledTimes(0);
    component.find('.buttonOrder').simulate('click');
    expect(handleButtonClick).toHaveBeenCalledTimes(0);
    expect(setErrorNotNullGroupsPopUpBasket).toHaveBeenCalledTimes(1);
  });

  it('should execute setErrorNotNullGroupsPopUpBasket if clientName and clientAddress are null and clientPhone.length is less than 13 and it contains _ ', () => {
    state.clientName = '';
    state.clientAddress = '';
    state.clientPhone = '+375297_';
    component = setUp();
    expect(handleButtonClick).toHaveBeenCalledTimes(0);
    expect(setErrorNotNullGroupsPopUpBasket).toHaveBeenCalledTimes(0);
    component.find('.buttonOrder').simulate('click');
    expect(handleButtonClick).toHaveBeenCalledTimes(0);
    expect(setErrorNotNullGroupsPopUpBasket).toHaveBeenCalledTimes(1);
  });
});
