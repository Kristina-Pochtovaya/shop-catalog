import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PopUpSomethingWentWrong from './PopUpSomethingWentWrongComponent';
import addRemoveScroll from '../../untils/addRemoveScroll';

jest.mock('../../untils/addRemoveScroll');

configure({ adapter: new Adapter() });
const mySetpopupSmthWentWrongActive = jest.fn();
const text = 'test';
const setUp = () => shallow(
  <PopUpSomethingWentWrong
    setpopupSmthWentWrongActive={mySetpopupSmthWentWrongActive}
    text={text}
  />,
);
describe('rendering PopUpSomethingWentWrong component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  jest.mock('../../untils/addRemoveScroll', async () => ({
    addRemoveScroll: jest.fn().mockImplementation(() => true),
  }));

  it('mySetpopupSmthWentWrongActive and addRemoveScroll should be executed after clicking on div popupThanks-box', () => {
    expect(addRemoveScroll).toHaveBeenCalledTimes(0);
    expect(mySetpopupSmthWentWrongActive).toHaveBeenCalledTimes(0);
    component.find('.popupThanksButton').simulate('click');
    expect(addRemoveScroll).toHaveBeenCalledTimes(1);
    expect(mySetpopupSmthWentWrongActive).toHaveBeenCalledTimes(1);
  });

  it('should render text props in thanksContent box', () => {
    const thanksContent = component.find('.thanksContent');
    expect(thanksContent.text()).toEqual('test');
  });
});
