import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const categoryPath = '/category';

async function getCategories(
  updateData, setError,
) {
  try {
    const response = await axios.get(`${serverUrl}${categoryPath}`);
    const result = response.data;
    updateData({ categories: result }, true);
    return result;
  } catch (error) {
    return setError({ errorMessage: error.message });
  }
}

export default getCategories;
