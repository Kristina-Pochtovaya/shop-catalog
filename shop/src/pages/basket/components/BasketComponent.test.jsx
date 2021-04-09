import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Basket from './BasketComponent';
import addRemoveScroll from '../../../common/utils/addRemoveScroll';

jest.mock('../../../common/utils/addRemoveScroll');

configure({ adapter: new Adapter() });
describe('rendering Basket components', () => {
  let component;
  let setState;
  let init;
  beforeEach(() => {
    setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    init = false;
    useStateSpy.mockImplementation(() => [init, setState]);
    setState.mockReturnValue(true);
    component = shallow(<Basket />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call setState and addRemoveScroll functions after clicking on teh button .buttonOrderBuy', () => {
    expect(addRemoveScroll).toHaveBeenCalledTimes(0);
    expect(setState).toHaveBeenCalledTimes(0);
    component.find('.buttonOrderBuy').simulate('click');
    expect(addRemoveScroll).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalledTimes(1);
  });

  it('should not render WithRouterPopupBasket by default', () => {
    expect(component.find('.popupBasket')).toHaveLength(0);
    init = true;
    component = shallow(<Basket />);
    expect(component.find('.popupBasket')).toHaveLength(1);
  });
});
