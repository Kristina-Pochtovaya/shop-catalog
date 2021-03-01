import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import waitForExpect from 'wait-for-expect';
import Basket from '../../components/BasketComponent';

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const data = [];
  data.catalogItemsReducer = [
    {
      id: 1,
      description: 'Светильник потолочный Box Silver',
      price: 163,
      counter: 1,
    },
  ];

  const BasketComponent = shallow(<Basket
    items={data}
  />);
  const button = BasketComponent.find('.buttonOrderBuy');
  button.simulate('click');

  it('shows PopUp Thanks after fetches successfully', () => {
    waitForExpect(() => {
      const SecondButton = BasketComponent.find('.buttonOrder');
      SecondButton.simulate('click');
      expect(BasketComponent.find('.popupThanks-box').text()).toBe('Ваш заказ принят!В ближайшее время с вами свяжется наш специалист');
    });
  });
});
