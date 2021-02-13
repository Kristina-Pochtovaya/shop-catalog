import { ADD } from '../actions/catalogItemsActions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD.type:
      return [...state, action.payload.item];

    default:
      return state;
  }
};
