import getRequest from '../../../../common/api/get/getRequest';

const categoryPath = '/category';

async function getCategories(updateData) {
  try {
    const response = await getRequest(categoryPath);
    const result = response.data;
    updateData({ categories: result }, true, 'updateCategories');
    return result;
  } catch (error) {
    return null;
  }
}

export default getCategories;
