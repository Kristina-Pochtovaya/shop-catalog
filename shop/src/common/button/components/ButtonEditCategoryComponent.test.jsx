import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonEditCategory from './ButtonEditCategoryComponent';

configure({ adapter: new Adapter() });
const category = { id: 1 };
const errorCategory = { id: 3 };
const className = 'test';
const myHandleButtonOnSave = jest.fn();
const myHandleButtonOnEdit = jest.fn();
const isEditActiveId = 1;

describe('rendering ButtonEditCategory component', () => {
  it('should render the text Сохранить and execute myHandleButtonOnSave if isEditActive and IsEditButtonVisible is true and id is equal to isEditActiveId', () => {
    const component = shallow(
      <ButtonEditCategory
        className={className}
        category={category}
        handleButtonOnSave={myHandleButtonOnSave}
        handleButtonOnEdit={myHandleButtonOnEdit}
        IsEditButtonVisible
        isEditActive
        isEditActiveId={isEditActiveId}
      />,
    );
    component.find('.test').simulate('click');
    expect(myHandleButtonOnSave.mock.calls.length).toBe(1);
    expect(myHandleButtonOnEdit.mock.calls.length).toBe(0);
    expect(component.text()).toBe('Сохранить');
  });

  it('should render the text Изменить and execute myHandleButtonOnEdit if isEditActive is false', () => {
    const component = shallow(
      <ButtonEditCategory
        className={className}
        category={category}
        handleButtonOnSave={myHandleButtonOnSave}
        handleButtonOnEdit={myHandleButtonOnEdit}
        IsEditButtonVisible
        isEditActive={false}
        isEditActiveId={isEditActiveId}
      />,
    );
    component.find('.test').simulate('click');
    expect(myHandleButtonOnSave.mock.calls.length).toBe(0);
    expect(myHandleButtonOnEdit.mock.calls.length).toBe(1);
    expect(component.text()).toBe('Изменить');
  });

  it('should render the text Изменить and execute myHandleButtonOnEdit if IsEditButtonVisible is false', () => {
    const component = shallow(
      <ButtonEditCategory
        className={className}
        category={category}
        handleButtonOnSave={myHandleButtonOnSave}
        handleButtonOnEdit={myHandleButtonOnEdit}
        IsEditButtonVisible={false}
        isEditActive
        isEditActiveId={isEditActiveId}
      />,
    );
    component.find('.test').simulate('click');
    expect(myHandleButtonOnSave.mock.calls.length).toBe(0);
    expect(myHandleButtonOnEdit.mock.calls.length).toBe(1);
    expect(component.text()).toBe('Изменить');
  });

  it('should render the text Изменить and execute myHandleButtonOnEdit if  id is not equal to isEditActiveId', () => {
    const component = shallow(
      <ButtonEditCategory
        className={className}
        category={errorCategory}
        handleButtonOnSave={myHandleButtonOnSave}
        handleButtonOnEdit={myHandleButtonOnEdit}
        IsEditButtonVisible
        isEditActive
        isEditActiveId={isEditActiveId}
      />,
    );
    component.find('.test').simulate('click');
    expect(myHandleButtonOnSave.mock.calls.length).toBe(0);
    expect(myHandleButtonOnEdit.mock.calls.length).toBe(1);
    expect(component.text()).toBe('Изменить');
  });

  it('should render the text Изменить and execute myHandleButtonOnEdit if isEditActive and  IsEditButtonVisible and id is not equal to isEditActiveId', () => {
    const component = shallow(
      <ButtonEditCategory
        className={className}
        category={errorCategory}
        handleButtonOnSave={myHandleButtonOnSave}
        handleButtonOnEdit={myHandleButtonOnEdit}
        IsEditButtonVisible={false}
        isEditActive={false}
        isEditActiveId={isEditActiveId}
      />,
    );
    component.find('.test').simulate('click');
    expect(myHandleButtonOnSave.mock.calls.length).toBe(0);
    expect(myHandleButtonOnEdit.mock.calls.length).toBe(1);
    expect(component.text()).toBe('Изменить');
  });
});
