export const CatalogItemsActions = {
  ADD: 'add',
  DELETE: 'delete',
  DELETEALL: 'deleteAll',
  INCREASE: 'increaseCounter',
  DECREASE: 'decreaseCounter',
  ADDCLIENTINFORMATION: 'add client infrormation',
};

export const ADD = {
  type: CatalogItemsActions.ADD,
  itemId: 0,
  item: {
    id: 0,
    description: '',
    category: '',
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

export const DELETEALL = {
  type: CatalogItemsActions.DELETEALL,
};

export const ADDCLIENTINFORMATION = {
  type: CatalogItemsActions.ADDCLIENTINFORMATION,
  item: {
    clientName: '',
    clientPhone: '',
    clientAddress: '',
    clientMessage: '',
  },
};
