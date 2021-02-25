import axios from 'axios';
import serverUrl from '../../../../../common/constants/urls';

const categoryPath = '/category';

async function getCategoriesCatalogRequest(
  setCategories, setLoading, setError,
) {
  try {
    const response = await axios.get(`${serverUrl}${categoryPath}`);
    const result = response.data;
    setCategories({ categories: result });
    setLoading(true);
    return result;
  } catch (error) {
    return setError({ errorMessage: error.message });
  }
}

export default getCategoriesCatalogRequest;
