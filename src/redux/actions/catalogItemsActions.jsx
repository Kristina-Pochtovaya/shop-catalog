export const CatalogItemsActions = {
  ADD: 'add',
  DELETE: 'delete',
  INCREASE: 'increaseCounter',
  DECREASE: 'decreaseCounter',
};

export const ADD = {
  type: CatalogItemsActions.ADD,
  itemId: 0,
  item: {
    id: 0,
    description: '',
    img: '',
    price: 0,
    counter: 1,
  },
};

export const INCREASE = {
  type: CatalogItemsActions.INCREASE,
  itemId: 0,
};

export const DECREASE = {
  type: CatalogItemsActions.DECREASE,
  itemId: 0,
};

export const DELETE = {
  type: CatalogItemsActions.DELETE,
  itemId: 0,
};
