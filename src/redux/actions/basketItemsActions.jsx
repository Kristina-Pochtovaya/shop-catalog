import { createStore } from 'redux';
import reducerCounter from './counter/counter.reducer';

const store = createStore(reducerCounter);

export default store;