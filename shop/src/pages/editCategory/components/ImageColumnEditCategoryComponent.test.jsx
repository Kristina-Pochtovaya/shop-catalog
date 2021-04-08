import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageColumnEditCategory from './ImageColumnEditCategoryComponent';
import ImagePhotoCategoryProducts from '../../../common/components/image/components/ImagePhotoCategoryProductsComponent';
import EditCategoryImage from './EditCategoryImageComponent';

jest.doMock('../../../common/components/image/components/ImagePhotoCategoryProductsComponent');
jest.doMock('./EditCategoryImageComponent');

configure({ adapter: new Adapter() });
const id = 1;
const image = 'image';
const imgAlt = 'image';
const isEditActiveId = 1;
const myUpdateCategoryImage = jest.fn();

describe('rendering PopUp component', () => {
  jest.doMock('./EditCategoryImageComponent', () => ({
    EditCategoryImage: <div className="EditCategoryImage" />,
  }));
  jest.doMock('../../../common/components/image/components/ImagePhotoCategoryProductsComponent', () => ({
    ImagePhoto: jest.fn().mockImplementation(() => <div className="ImagePhoto" />),
  }));

  it('should render EditCategoryImage if isEditActive is false and id is not equal to isEditActiveId', () => {
    const component = shallow(
      <ImageColumnEditCategory
        isEditActive
        id={id}
        image={image}
        imgAlt={imgAlt}
        isEditActiveId={isEditActiveId}
        updateCategoryImage={myUpdateCategoryImage}
      />,
    );
    expect(component.find(ImagePhotoCategoryProducts)).toHaveLength(0);
    expect(component.find(EditCategoryImage)).toHaveLength(1);
  });

  it('should render ImagePhoto with className imageCategory if isEditActive and id is equal to isEditActiveId and image is not null', () => {
    const component = shallow(
      <ImageColumnEditCategory
        isEditActive={false}
        id={id}
        image={image}
        imgAlt={imgAlt}
        isEditActiveId={isEditActiveId}
        updateCategoryImage={myUpdateCategoryImage}
      />,
    );
    expect(component.find(ImagePhotoCategoryProducts)).toHaveLength(1);
    expect(component.find('.imageCategory')).toHaveLength(1);
    expect(component.find('.setImage')).toHaveLength(0);
    expect(component.find(EditCategoryImage)).toHaveLength(0);
  });

  it('should render ImagePhoto with className setImage if isEditActive and id is equal to isEditActiveId and image is null', () => {
    const component = shallow(
      <ImageColumnEditCategory
        isEditActive={false}
        id={id}
        image=""
        imgAlt={imgAlt}
        isEditActiveId={isEditActiveId}
        updateCategoryImage={myUpdateCategoryImage}
      />,
    );
    expect(component.find(ImagePhotoCategoryProducts)).toHaveLength(1);
    expect(component.find('.imageCategory')).toHaveLength(0);
    expect(component.find('.setImage')).toHaveLength(1);
    expect(component.find(EditCategoryImage)).toHaveLength(0);
  });
});
