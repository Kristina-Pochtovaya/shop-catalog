import getRequest from '../../../../../common/api/get/getRequest';

const categoryPath = '/category';

async function getCatalogCategories(
  setCategories, setLoading, setError,
) {
  try {
    const response = await getRequest(categoryPath);
    const result = response.data;
    setCategories({ categories: result });
    setLoading(true);
    return result;
  } catch (error) {
    return (setLoading(true), setError({ errorMessage: error.message }));
  }
}

export default getCatalogCategories;
