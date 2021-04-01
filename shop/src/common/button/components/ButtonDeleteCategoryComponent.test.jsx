import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonDeleteCategoryProducts from './ButtonDeleteCategoryProductsComponent';
import postDeleteCategory from '../../../pages/editCategory/api/post/postDeleteCategory';

jest.mock('../../../pages/editCategory/api/post/postDeleteCategory');

configure({ adapter: new Adapter() });
const category = { id: 1 };
const myUpdateAfterDelete = jest.fn();
const setUp = () => shallow(
  <ButtonDeleteCategoryProducts
    item={category}
    updateAfterDelete={myUpdateAfterDelete}
  />,
);

describe('rendering ButtonEditCategory component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  jest.mock('../../../pages/editCategory/api/post/postDeleteCategory', async () => ({
    postDeleteCategory: jest.fn().mockImplementation(() => true),
  }));
  it('should render the text Удалить and execute postDeleteCategory after clicking on button deleteCategoryButton', () => {
    expect(postDeleteCategory.mock.calls.length).toBe(0);
    component.find('.deleteCategoryButton').simulate('click');
    expect(postDeleteCategory.mock.calls.length).toBe(1);
    expect(component.text()).toBe('Удалить');
  });
});
