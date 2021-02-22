import { Component, React, useState } from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
/* import postBasketItemsRequest from './postBasketItemsRequest'; */
import { act, mockComponent } from 'react-dom/test-utils';
import waitForExpect from 'wait-for-expect';
import Basket from '../../components/BasketComponent';
import PopUp from '../../../../common/popup/components/PopUpComponent';

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const data = [];
  /*   const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]); */

  data.catalogItemsReducer = [
    {
      id: 1,
      description: 'Светильник потолочный Box Silver',
      price: 163,
      counter: 1,
    },
  ];
  let wrapper;
  let instanse;
  let button;

  beforeEach(() => {
    wrapper = shallow(<Basket
      items={data}
    />);
    instanse = wrapper.instance();

    button = wrapper.find('.buttonOrder');
    act(() => {
      button.simulate('click');
    });

    wrapper.update();
  });

  afterEach(() => {
    wrapper = null;
    resetAllMocks();
  });

  it('shows PopUp Thanks after fetches successfully', async () => {
    expect(wrapper.find(PopUp)).toHaveLength(1);
  });
});

/* it('shows PopUp Thanks after fetches successfully', () => {
  const data = [];
  data.catalogItemsReducer = [
    {
      id: 1,
      description: 'Светильник потолочный Box Silver',
      price: 163,
      counter: 1,
    },
  ];

  const MyMethodonIncrease = jest.fn().mockImplementation(() => data.id, data.counter);
  const MyMethodonDecrease = jest.fn().mockImplementation(() => data.id, data.counter);
  const MyMethodOnDelete = jest.fn().mockImplementation(() => data.id);
  const MyMethodOnDeleteAll = jest.fn().mockImplementation(() => data);

  const BasketComponent = shallow(<Basket
    items={data}
    onIncrease={MyMethodonIncrease}
    onDecrease={MyMethodonDecrease}
    OnDelete={MyMethodOnDelete}
    OnDeleteAll={MyMethodOnDeleteAll}

  />);
  const button = BasketComponent.find('.buttonOrder');

  button.simulate('click');
  expect(BasketComponent.find('.popupThanks-box').text()).toBe('Ваш заказ принят!В ближайшее время с вами свяжется наш специалист');
}); */
