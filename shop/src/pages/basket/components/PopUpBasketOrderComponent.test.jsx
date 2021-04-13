import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PopUpBasketOrder from './PopUpBasketOrderComponent';
import addRemoveScroll from '../../../common/utils/addRemoveScroll';

jest.mock('../../../common/utils/addRemoveScroll');

configure({ adapter: new Adapter() });
describe('rendering PopUpBasketOrder component', () => {
  const onAddClientInformation = 'onAddClientInformation';
  const items = 'items';
  const mySetPopupOrderActive = jest.fn();
  const setpopupSmthWentWrongActive = 'setpopupSmthWentWrongActive';
  const setPopupThanksActive = 'setPopupThanksActive';
  const pages = {
    loginPersonalAccountReducer: {
      firstName: 'firstName',
      phone: '+3752933361177',
      addres: 'addres',
    },
  };
  const initialValue = 'test';
  let component;
  const setUp = () => shallow(<PopUpBasketOrder
    onAddClientInformation={onAddClientInformation}
    items={items}
    setPopupOrderActive={mySetPopupOrderActive}
    setpopupSmthWentWrongActive={setpopupSmthWentWrongActive}
    setPopupThanksActive={setPopupThanksActive}
    pages={pages}
  />);

  beforeEach(() => {
    component = setUp();
  });

  it('should execute mySetPopupOrderActive and addRemoveScroll after clicking on div .popupOrder', () => {
    expect(mySetPopupOrderActive).toHaveBeenCalledTimes(0);
    expect(addRemoveScroll).toHaveBeenCalledTimes(0);
    component.find('.popupOrder').simulate('click');
    expect(mySetPopupOrderActive).toHaveBeenCalledTimes(1);
    expect(addRemoveScroll).toHaveBeenCalledTimes(1);
  });

  it('should render three inputs', () => {
    expect(component.find('InputWitchCkeckingNotNull')).toHaveLength(3);
  });

  it('should change state value clientMessage after changing the textarea .messageInput', () => {
    expect(component.state().clientMessage).toBe('');
    component.find('.messageInput').simulate('change', { target: { value: initialValue } });
    expect(component.state().clientMessage).toBe('test');
  });
});
