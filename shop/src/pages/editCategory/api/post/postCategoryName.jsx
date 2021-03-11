import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const categoryName = '/category-name';

async function postCategoryName(id, category) {
  const payload = {
    data: {
      id,
      category,
    },
  };

  try {
    const response = await axios.post(`${serverUrl}${categoryName}`, payload);
    const result = response.data;

    return result;
  } catch (error) {
    return null;
  }
}

export default postCategoryName;
