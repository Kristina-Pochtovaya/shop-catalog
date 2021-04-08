import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImagePhotoCategoryProducts from './ImagePhotoCategoryProductsComponent';

import setPhotoImage from '../../../utils/setPhotoImage';

jest.mock('../../../utils/setPhotoImage');

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const myUpdateData = jest.fn();
  const className = 'className';
  const imagePreviewUrl = 'imagePreviewUrl';

  const setUp = () => shallow(<ImagePhotoCategoryProducts
    updateData={myUpdateData}
    className={className}
    imagePreviewUrl={imagePreviewUrl}
  />);
  let component;

  it('should execute  setPhotoImage while rendering the ImagePhotoCategoryProducts component', () => {
    component = setUp();
    expect(setPhotoImage).toHaveBeenCalledTimes(1);
  });

  it('should set the className for img tag as the value that was get from props className', () => {
    component = setUp();
    expect(component.find('.className')).toHaveLength(1);
  });
});
