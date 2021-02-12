/* import { createStore } from 'redux';
import reducerCounter from './counter/counter.reducer';

const store = createStore(reducerCounter);

export default store;
 */

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers/reducer';

export default () => {
  const store = createStore(reducer, applyMiddleware(logger));

  return store;
};
