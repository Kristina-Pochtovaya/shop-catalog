import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const deleteCategory = '/delete-category';

async function postDeleteCategory(id, updateAfterDelete) {
  const payload = {
    data: {
      id,
    },
  };

  try {
    const response = await axios.post(`${serverUrl}${deleteCategory}`, payload);
    const result = response.data;
    updateAfterDelete();
    return result;
  } catch (error) {
    return null;
  }
}

export default postDeleteCategory;
