import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImagePhotoProducts from './ImagePhotoProductsComponent';

import setPhotoImage from '../../../utils/setPhotoImage';

jest.mock('../../../utils/setPhotoImage');

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const className = 'className';
  const product = {
    imgTitle: 'imgTitle',
    imgAlt: 'imgAlt',
  };

  const setUp = () => shallow(<ImagePhotoProducts
    className={className}
    product={product}
  />);
  let component;

  it('should execute  setPhotoImage while rendering the ImagePhotoCategoryProducts component', () => {
    component = setUp();
    expect(setPhotoImage).toHaveBeenCalledTimes(1);
  });

  it('should set the className for img tag as the value that was get from props className and imgAlt as value of product.imgAlt', () => {
    component = setUp();
    expect(component.find('.className')).toHaveLength(1);
    expect(component.find('img').prop('alt')).toEqual('imgAlt');
  });
});
