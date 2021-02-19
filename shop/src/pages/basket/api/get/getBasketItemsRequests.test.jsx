import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as axios from 'axios';
import getBasketItemsRequests from 'getBasketItemsRequests';
import ConnectedBusket from '../../components/BasketComponent';

jest.mock('axios');

jest.mock('axios');

configure({ adapter: new Adapter() });

it('fetches successfully data from an API', async () => {
  shallow(<ConnectedBusket />);
});
/* axios.get.mockImplementation(() => Promise.resolve({ status: 200, data: {...} }));

 */
