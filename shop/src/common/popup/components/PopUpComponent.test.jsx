import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PopUp from './PopUpComponent';
import addRemoveScroll from '../../untils/addRemoveScroll';

jest.mock('../../untils/addRemoveScroll');

configure({ adapter: new Adapter() });
let activeOrder = '';
let active = '';
const mySetActive = jest.fn();
const children = 'test';
const setUp = () => shallow(
  <PopUp
    activeOrder={activeOrder}
    active={active}
    setActive={mySetActive}
  >
    {children}
  </PopUp>,
);
describe('rendering PopUp component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  jest.mock('../../untils/addRemoveScroll', async () => ({
    addRemoveScroll: jest.fn().mockImplementation(() => true),
  }));

  it('body class should be equal to -noOverflow if activeOrder or active values are not null', () => {
    expect(document.body.className).toBe('');
  });

  it('body class should be null if activeOrder or active values are empty', () => {
    activeOrder = 'popup-box -active';
    active = 'popup-box -active';
    setUp();
    expect(document.body.className).toBe('-noOverflow');
  });

  it('mySetActive and addRemoveScroll should be executed after clicking on div popup-box', () => {
    expect(addRemoveScroll).toHaveBeenCalledTimes(0);
    expect(mySetActive).toHaveBeenCalledTimes(0);
    component.find('.popup-box').simulate('click');
    expect(addRemoveScroll).toHaveBeenCalledTimes(1);
    expect(mySetActive).toHaveBeenCalledTimes(1);
  });

  it('should render children between tags PopUp', () => {
    expect(component.text()).toEqual('test');
  });
});
