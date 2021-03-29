import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputEditCategoryName from './InputEditCategoryNameComponent';

configure({ adapter: new Adapter() });
const id = 1;
const category = 'Лампы';
const mySetEditActive = jest.fn();
const myUpdateCategoryName = jest.fn();

const setUp = () => shallow(
  <InputEditCategoryName
    id={id}
    category={category}
    setEditActive={mySetEditActive}
    updateCategoryName={myUpdateCategoryName}
  />,
);
describe('rendering LoginForm component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Category Name should be changed if something was written in input', () => {
    expect(component.state().categoryName).toBe('Лампы');
    component.find('.categoryName').simulate('change', { target: { value: 'новые Лампы' } });

    expect(component.state().categoryName).toBe('новые Лампы');
  });
});
