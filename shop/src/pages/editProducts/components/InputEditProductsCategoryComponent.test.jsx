import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputEditProductsCategory from './InputEditProductsCategoryComponent';

import handleCategoryProductsChange from '../utils/handleCategoryProductsChange';
import PopUpErrorLoading from '../../../common/popup/components/PopUpErrorLoadingComponent';

jest.mock('../utils/handleCategoryProductsChange');
jest.mock('../../../common/popup/components/PopUpErrorLoadingComponent');

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const category = 'category';
  const updateData = 'updateData';
  jest.mock('../utils/handleCategoryProductsChange', async () => ({
    handleCategoryProductsChange: jest.fn().mockImplementation(() => true),
  }));

  const setUp = () => shallow(<InputEditProductsCategory
    category={category}
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
    component.setState({
      categoriesArray: {
        categories: [
          {
            id: 1,
            category: 'category',
          },
          {
            id: 2,
            category: 'category',
          },
          {
            id: 3,
            category: 'category',
          },
        ],
      },
    });
    component.setState({ isLoading: true });
    component.setState({ errorMessage: true });
    expect(component.find('.-isLoading')).toHaveLength(0);
    expect(component.find('PopUpErrorLoading')).toHaveLength(1);
  });

  it('should call handleCategoryProductsChange function after changing the select and the value of select should be equal  the value of props category after first rendering', async () => {
    component.setState({ isLoading: true });
    component.setState({ errorMessage: false });
    expect(component.find('.-isLoading')).toHaveLength(0);
    expect(handleCategoryProductsChange).toHaveBeenCalledTimes(0);
    component.find('.productsCategory').simulate('change');
    expect(handleCategoryProductsChange).toHaveBeenCalledTimes(1);
    expect(component.find('.productsCategory').get(0).props.value).toEqual('category');
  });

  it('the value of select should be equal to value of state categoryName after changing the value of select', async () => {
    component.setState({ categoryName: 'newValue' });
    expect(component.find('.productsCategory').get(0).props.value).toEqual('newValue');
  });
});
