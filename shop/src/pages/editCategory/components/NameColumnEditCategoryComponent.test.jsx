import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NameColumnEditCategory from './NameColumnEditCategoryComponent';
import InputEditCategoryName from './InputEditCategoryNameComponent';

jest.doMock('../../../common/image/components/ImagePhotoComponent');

configure({ adapter: new Adapter() });
const category = { id: 1 };
const errorCategory = { id: 3 };
const isEditActiveId = 1;
const myUpdateCategoryName = jest.fn();

describe('rendering InputEditCategoryNameComponent component', () => {
  jest.doMock('./InputEditCategoryNameComponent', () => ({
    InputEditCategoryName: jest.fn().mockImplementation(() => <div className="InputEditCategoryNameComponent" />),
  }));

  it('should render InputEditCategoryName if isEditActive is true and id is equal to isEditActiveId', () => {
    const component = shallow(
      <NameColumnEditCategory
        isEditActive
        category={category}
        isEditActiveId={isEditActiveId}
        updateCategoryName={myUpdateCategoryName}
      />,
    );
    expect(component.find(InputEditCategoryName)).toHaveLength(1);
    expect(component.find('p')).toHaveLength(0);
  });

  it('should render tag p if  isEditActive is false or id is not equal to isEditActiveId', () => {
    const component = shallow(
      <NameColumnEditCategory
        isEditActive={false}
        category={category}
        isEditActiveId={isEditActiveId}
        updateCategoryName={myUpdateCategoryName}
      />,
    );
    expect(component.find(InputEditCategoryName)).toHaveLength(0);
    expect(component.find('p')).toHaveLength(1);
  });

  it('should render tag p if  isEditActive is false or  id is not equal to isEditActiveId', () => {
    const component = shallow(
      <NameColumnEditCategory
        isEditActive
        category={errorCategory}
        isEditActiveId={isEditActiveId}
        updateCategoryName={myUpdateCategoryName}
      />,
    );
    expect(component.find(InputEditCategoryName)).toHaveLength(0);
    expect(component.find('p')).toHaveLength(1);
  });

  it('should render tag p if  isEditActive is false and id is not equal to isEditActiveId', () => {
    const component = shallow(
      <NameColumnEditCategory
        isEditActive={false}
        category={errorCategory}
        isEditActiveId={isEditActiveId}
        updateCategoryName={myUpdateCategoryName}
      />,
    );
    expect(component.find(InputEditCategoryName)).toHaveLength(0);
    expect(component.find('p')).toHaveLength(1);
  });
});
