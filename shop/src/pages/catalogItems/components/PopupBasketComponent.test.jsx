import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PopupBasket from './PopupBasketComponent';
import addRemoveScroll from '../../../common/utils/addRemoveScroll';
import createButtonPopupBasketArray from '../constants/ButtonPopupBasketArray';

jest.mock('../../../common/utils/addRemoveScroll');
configure({ adapter: new Adapter() });

describe('rendering', () => {
  let history = [];
  const myClosePopup = jest.fn();

  let component;
  const setUp = () => shallow(<PopupBasket
    history={history}
    closePopup={myClosePopup}
  />);

  beforeEach(() => {
    history = [];
    component = setUp();
  });

  it('execute the function myClosePopup after clicking on the div .popupBasket', () => {
    expect(myClosePopup).toHaveBeenCalledTimes(0);
    component.find('.popupBasket').simulate('click');
    expect(myClosePopup).toHaveBeenCalledTimes(1);
  });

  it('should render 2 buttons', () => {
    expect(component.find('button')).toHaveLength(2);
  });

  it('should call the function addRemoveScrolland push the value to the array history if myButtonPopupBasketArray.addRemoveScroll is true and  myButtonPopupBasketArray.history is true too', () => {
    expect(myClosePopup).toHaveBeenCalledTimes(0);
    expect(addRemoveScroll).toHaveBeenCalledTimes(0);
    expect(history).toEqual([]);
    component.find('button').at(1).simulate('click');
    expect(myClosePopup).toHaveBeenCalledTimes(1);
    expect(addRemoveScroll).toHaveBeenCalledTimes(1);
    expect(history).toEqual(['./basket']);
  });

  it('should just call the function myClosepopup if myButtonPopupBasketArray.closepopup is true', () => {
    expect(myClosePopup).toHaveBeenCalledTimes(0);
    expect(addRemoveScroll).toHaveBeenCalledTimes(0);
    expect(history).toEqual([]);
    component.find('button').at(0).simulate('click');
    expect(myClosePopup).toHaveBeenCalledTimes(1);
    expect(addRemoveScroll).toHaveBeenCalledTimes(0);
    expect(history).toEqual([]);
  }); 
});
