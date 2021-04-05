import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputEditProductsName from './InputEditProductsNameComponent';

import processInputOnChange from '../utils/processInputOnChange';

jest.mock('../utils/processInputOnChange');

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const description = 'description';
  const updateData = 'updateData';
  jest.mock('../utils/processInputOnChange', async () => ({
    processInputOnChange: jest.fn().mockImplementation(() => true),
  }));

  const setUp = () => shallow(<InputEditProductsName
    description={description}
    updateData={updateData}
  />);
  let component;

  it('should call processInputOnChange function after changing the textarea and the value of texarea should be the text of props description', () => {
    component = setUp();
    expect(processInputOnChange).toHaveBeenCalledTimes(0);
    component.find('.productsNameInput').simulate('change');
    expect(processInputOnChange).toHaveBeenCalledTimes(1);
    expect(component.find('.productsNameInput').get(0).props.value).toEqual('description');
  });

  it('should the text of state productsName as new value for the value of texarea', () => {
    component = setUp();
    component.setState({ productsName: 'newValue' });
    expect(component.find('.productsNameInput').get(0).props.value).toEqual('newValue');
  });
});
