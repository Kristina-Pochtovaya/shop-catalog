export const CatalogItemsActions = {
  ADD: 'add',
  DELETE: 'delete',
};

export const ADD = {
  type: CatalogItemsActions.ADD,
  item: {
    id: 0,
    description: '',
    img: '',
    price: 0,
  },
};

export const DELETE = {
  type: CatalogItemsActions.DELETE,
  itemId: 0,
};
