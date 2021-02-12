export const actionsCatalogList = {
  ADD: 'add',
  DELETE: 'delete',
};

export const ADD = {
  type: actionsCatalogList.ADD,
  item: {
    image: '',
    description: '',
    price: 0,
  },
};

export const DELETE = {
  type: actionsCatalogList.DELETE,
  itemId: 101,
};
