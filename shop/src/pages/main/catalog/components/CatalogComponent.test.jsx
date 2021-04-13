import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Catalog from './CatalogComponent';
import addScroll from '../../../../common/utils/addScroll';

jest.mock('../../../../common/utils/addScroll');

configure({ adapter: new Adapter() });

describe('rendering PopUpBasketOrder component', () => {
  const setUp = () => shallow(<Catalog />);

  it('should render .-isLoading and call function addScroll after firts render', () => {
    const component = setUp();
    expect(addScroll).toHaveBeenCalledTimes(1);
    expect(component.find('.-isLoading')).toHaveLength(1);
  });

  it('should render PopUpErrorLoading if error occurs', async () => {
    const setpopupSmthWentWrongActive = 'My First Initial State';
    const categoriesArray = 'My Second Initial State';
    const isLoading = true;
    const error = true;
    React.useState = jest.fn()
      .mockReturnValueOnce([setpopupSmthWentWrongActive, {}])
      .mockReturnValueOnce([categoriesArray, {}])
      .mockReturnValueOnce([isLoading, {}])
      .mockReturnValueOnce([error, {}]);
    const component = setUp();
    expect(component.find('.-isLoading')).toHaveLength(0);
    expect(component.find('PopUpErrorLoading')).toHaveLength(1);
  });

  it('should render catalog-wrap if no errors and categoriesArray is loaded', async () => {
    const setpopupSmthWentWrongActive = true;
    const categoriesArray = {
      categories: [
        {
          id: 1,
          link: 'link',
          image: 'image',
          imgAlt: 'imgAlt',
          imgTitle: 'imgTitle',
          className: 'className',
          category: 'category',
        },
      ],
    };
    const isLoading = true;
    const error = '';
    React.useState = jest.fn()
      .mockReturnValueOnce([setpopupSmthWentWrongActive, {}])
      .mockReturnValueOnce([categoriesArray, {}])
      .mockReturnValueOnce([isLoading, {}])
      .mockReturnValueOnce([error, {}]);
    const component = setUp();
    expect(component.find('.-isLoading')).toHaveLength(0);
    expect(component.find('PopUpErrorLoading')).toHaveLength(0);
    expect(component.find('.catalog-wrap')).toHaveLength(1);
  });
});
