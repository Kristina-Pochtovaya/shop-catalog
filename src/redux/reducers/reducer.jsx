import { combineReducers } from 'redux';
import catalogItemsReducer from './catalogItemsReducer';

export default () => combineReducers({
  catalogItemsReducer,
});
