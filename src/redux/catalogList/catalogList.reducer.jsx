import actionsCatalogList from './catalogList.actions';

const initialState = [];

function reducerCatalogList(state = initialState, action) {
  switch (action.type) {
    case actionsCatalogList.ADD: {
      const itemToAdd = action.item;
      itemToAdd.id = Math.floor(Math.random() * 10);
      return [...state, itemToAdd];
    }

    case actionsCatalogList.DELETE: {
      return state.filter((item) => item.id !== action.itemId);
    }

    default:
      return state;
  }
}

export default reducerCatalogList;
