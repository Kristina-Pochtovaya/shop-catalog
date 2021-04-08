import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputEditProductsInStock from './InputEditProductsInStockComponent';

import handleInStockProductsChange from '../utils/handleInStockProductsChange';
import PopUpErrorLoading from '../../../common/components/popup/components/PopUpErrorLoadingComponent';

jest.mock('../utils/handleInStockProductsChange');
jest.mock('../../../common/components/popup/components/PopUpErrorLoadingComponent');

configure({ adapter: new Adapter() });

describe('rendering', () => {
  let inStock = 1;
  const updateData = 'updateData';
  jest.mock('../utils/handleInStockProductsChange', async () => ({
    handleInStockProductsChange: jest.fn().mockImplementation(() => true),
  }));

  const setUp = () => shallow(<InputEditProductsInStock
    inStock={inStock}
    updateData={updateData}
  />);
  let component;

  it('should Loading div at first rendering', async () => {
    component = setUp();
    expect(component.find('.-isLoading')).toHaveLength(1);
    expect(component.find('.productsInStockInput')).toHaveLength(0);
  });

  it('should render PopUpErrorLoading pop up if error occurs', async () => {
    component = setUp();
    component.setState({ isLoading: true });
    component.setState({ errorMessage: true });
    expect(component.find('.-isLoading')).toHaveLength(0);
    expect(component.find('PopUpErrorLoading')).toHaveLength(1);
  });

  it('should call processInStockOnChange functionafter changing the select and the value of select should be да if props.inStock is 1', async () => {
    component.setState({ isLoading: true });
    component.setState({ errorMessage: false });
    expect(component.find('.-isLoading')).toHaveLength(0);
    expect(handleInStockProductsChange).toHaveBeenCalledTimes(0);
    component.find('.productsInStockInput').simulate('change');
    expect(handleInStockProductsChange).toHaveBeenCalledTimes(1);
    expect(component.find('.productsInStockInput').get(0).props.value).toEqual('да');
  });

  it('the value of select should be нет if props.inStock is 0', async () => {
    inStock = 0;
    component = setUp();
    component.setState({ isLoading: true });
    expect(component.find('.productsInStockInput').get(0).props.value).toEqual('нет');
  });
});
