import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddCategoryPage from './AddCategoryPageComponent';

configure({ adapter: new Adapter() });
const setUp = () => shallow(
  <AddCategoryPage />,
);
describe('rendering LoginForm component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Category Name should be changed if something was written in input', () => {
    expect(component.state().categoryName).toBe('');
    component.find('.categoryNameInput').simulate('change', { target: { value: 'testCategory' } });
    expect(component.state().categoryName).toBe('testCategory');
  });

  it('Color should be changed if user select another color', () => {
    expect(component.state().titleColor).toBe('1');
    component.find('.imageColors').simulate('change', { target: { value: '2' } });
    expect(component.state().titleColor).toBe('2');
  });
});
