import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormAddCategory from './FormAddCategoryComponent';

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const categoryName = 'testCategory';
  const myUpdateImage = jest.fn();
  const myUpdateName = jest.fn((e) => true);
  const myUpdateColor = jest.fn();
  const myHandleButtonClick = jest.fn();

  const component = shallow(<FormAddCategory
    categoryName={categoryName}
    updateImage={myUpdateImage}
    updateName={myUpdateName}
    updateColor={myUpdateColor}
    handleButtonClick={myHandleButtonClick}
  />);

  it('should render the prop categoryName as initialValue for input .categoryNameInput', () => {
    const input = component.find('.categoryNameInput');
    expect(input.props().value).toBe('testCategory');
  });

  it('should execute only myUpdateName function after changing the input .categoryNameInput', () => {
    const input = component.find('.categoryNameInput');
    expect(myUpdateName).toHaveBeenCalledTimes(0);
    expect(myUpdateImage).toHaveBeenCalledTimes(0);
    expect(myUpdateColor).toHaveBeenCalledTimes(0);
    expect(myHandleButtonClick).toHaveBeenCalledTimes(0);
    input.simulate('change');
    expect(myUpdateName).toHaveBeenCalledTimes(1);
    expect(myUpdateImage).toHaveBeenCalledTimes(0);
    expect(myUpdateColor).toHaveBeenCalledTimes(0);
    expect(myHandleButtonClick).toHaveBeenCalledTimes(0);
  });

  it('should execute only myUpdateColor function after changing the select .imageColors', () => {
    const select = component.find('.imageColors');
    expect(myUpdateName).toHaveBeenCalledTimes(0);
    expect(myUpdateImage).toHaveBeenCalledTimes(0);
    expect(myUpdateColor).toHaveBeenCalledTimes(0);
    expect(myHandleButtonClick).toHaveBeenCalledTimes(0);
    select.simulate('change');
    expect(myUpdateName).toHaveBeenCalledTimes(0);
    expect(myUpdateImage).toHaveBeenCalledTimes(0);
    expect(myUpdateColor).toHaveBeenCalledTimes(1);
    expect(myHandleButtonClick).toHaveBeenCalledTimes(0);
  });

  it('should execute only myHandleButtonClick function after clicking on the button .addNewCategoryButton', () => {
    const button = component.find('.addNewCategoryButton');
    expect(myUpdateName).toHaveBeenCalledTimes(0);
    expect(myUpdateImage).toHaveBeenCalledTimes(0);
    expect(myUpdateColor).toHaveBeenCalledTimes(0);
    expect(myHandleButtonClick).toHaveBeenCalledTimes(0);
    button.simulate('click');
    expect(myUpdateName).toHaveBeenCalledTimes(0);
    expect(myUpdateImage).toHaveBeenCalledTimes(0);
    expect(myUpdateColor).toHaveBeenCalledTimes(0);
    expect(myHandleButtonClick).toHaveBeenCalledTimes(1);
  });
});
