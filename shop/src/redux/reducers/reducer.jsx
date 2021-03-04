import { combineReducers } from 'redux';
import catalogItemsReducer from './catalogItemsReducer';
import loginPersonalAccountReducer from './loginPersonalAccountReducer';

export default combineReducers({
  catalogItemsReducer, loginPersonalAccountReducer,
});
