const updateData = (setState, name, value) => {
  if (name === 'ordersArray') setState({ ordersArray: value });
  if (name === 'isLoading') setState({ isLoading: value });
  if (name === 'error') setState({ errorMessage: value });
};

export default updateData;
