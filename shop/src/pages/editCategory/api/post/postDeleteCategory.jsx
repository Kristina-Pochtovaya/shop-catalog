import postRequest from '../../../../common/api/post/postRequest';

const deleteCategory = '/delete-category';

async function postDeleteCategory(id, updateAfterDelete) {
  const payload = {
    data: {
      id,
    },
  };

  try {
    const response = postRequest(deleteCategory, payload);
    const result = response.data;
    updateAfterDelete();
    return result;
  } catch (error) {
    return null;
  }
}

export default postDeleteCategory;
