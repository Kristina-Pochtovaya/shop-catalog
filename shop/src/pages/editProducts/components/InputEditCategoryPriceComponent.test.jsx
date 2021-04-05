import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputEditCategoryPrice from './InputEditCategoryPriceComponent';

import processInputOnChange from '../utils/processInputOnChange';

jest.mock('../utils/processInputOnChange');

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const price = 'price';
  const updateData = 'updateData';
  jest.mock('../utils/processInputOnChange', async () => ({
    processInputOnChange: jest.fn().mockImplementation(() => true),
  }));

  const setUp = () => shallow(<InputEditCategoryPrice
    price={price}
    updateData={updateData}
  />);
  let component;

  it('should call processInputOnChange function after changing the textarea and the value of input should be the text of props price', () => {
    component = setUp();
    expect(processInputOnChange).toHaveBeenCalledTimes(0);
    component.find('.productsPriceInput').simulate('change');
    expect(processInputOnChange).toHaveBeenCalledTimes(1);
    expect(component.find('.productsPriceInput').get(0).props.value).toEqual('price');
  });

  it('should the text of state productsPrice as new value for the value of input', () => {
    component = setUp();
    component.setState({ productsPrice: 'newValue' });
    expect(component.find('.productsPriceInput').get(0).props.value).toEqual('newValue');
  });
});
