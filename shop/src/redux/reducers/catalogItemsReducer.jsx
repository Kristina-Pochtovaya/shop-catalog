import {
  ADD, DELETE, INCREASE, DECREASE, DELETEALL, ADDCLIENTINFORMATION,
} from '../actions/catalogItemsActions';

const initialState = [];

const catalogItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD.type: {
      const index = state.findIndex((item) => item.id === action.payload.item.id);
      if (index === -1) {
        return [...state, action.payload.item];
      } return state;
    }

    case INCREASE.type: {
      const index = state.findIndex((item) => item.id === action.payload.itemId);
      return [
        ...state.slice(0, index),
        { ...state[index], counter: action.payload.counter + 1 },
        ...state.slice(index + 1),
      ];
    }

    case DECREASE.type: {
      if (action.payload.counter > 1) {
        const index = state.findIndex((item) => item.id === action.payload.itemId);
        return [
          ...state.slice(0, index),
          { ...state[index], counter: action.payload.counter - 1 },
          ...state.slice(index + 1),
        ];
      } return state;
    }

    case DELETE.type: {
      return [
        ...state.filter((item) => item.id !== action.payload.itemId),
      ];
    }

    case DELETEALL.type: {
      return [];
    }

    case ADDCLIENTINFORMATION.type: {
      let i = 0;
      for (i; i <= state.length; i += 1) {
        const item = state[i];
        if (item !== undefined) {
          item.clientInformation = action.payload.clientName;
        }
      }

      return state;
    }

    default:
      return state;
  }
};

export default catalogItemsReducer;
