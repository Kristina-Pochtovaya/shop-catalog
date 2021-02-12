/* eslint-disable no-undef */
const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items: [
          ...state.items,
          action.payload,
        ],
      };

    default:
      return state;
  }
};
