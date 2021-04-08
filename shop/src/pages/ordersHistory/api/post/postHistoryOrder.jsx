import postRequest from '../../../../common/api/post/postRequest';

const ordersHistory = '/orders-history';

async function postHistoryOrder(id, updateData, setState) {
  const payload = { data: { id } };
  try {
    const response = await postRequest(ordersHistory, payload);
    const result = response.data;
    updateData(setState, 'ordersArray', result);
    updateData(setState, 'isLoading', false);
    return result;
  } catch (error) {
    updateData(setState, 'error', error.message);
    updateData(setState, 'isLoading', false);
    return null;
  }
}

export default postHistoryOrder;
