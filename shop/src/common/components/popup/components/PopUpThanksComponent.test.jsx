import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PopUpThanks from './PopUpThanksComponent';
import addRemoveScroll from '../../../utils/addRemoveScroll';

jest.mock('../../../utils/addRemoveScroll');

configure({ adapter: new Adapter() });
const mySetPopupThanksActive = jest.fn();
const setUp = () => shallow(
  <PopUpThanks
    setPopupThanksActive={mySetPopupThanksActive}
  />,
);
describe('rendering PopUpSomethingWentWrong component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('mySetPopupThanksActive and addRemoveScroll should be executed after clicking on div popupThanks-box', () => {
    expect(addRemoveScroll).toHaveBeenCalledTimes(0);
    expect(mySetPopupThanksActive).toHaveBeenCalledTimes(0);
    component.find('.thanksButton').simulate('click');
    expect(addRemoveScroll).toHaveBeenCalledTimes(1);
    expect(mySetPopupThanksActive).toHaveBeenCalledTimes(1);
  });
});
