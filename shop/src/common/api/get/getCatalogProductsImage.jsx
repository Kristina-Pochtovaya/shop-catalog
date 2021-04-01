import getRequest from './getRequest';

async function getCatalogProductsImage(id, updateData, url) {
  try {
    const response = await getRequest(url);
    const result = response.data;
    const photo = result.filter((category) => category.id === id).map((item) => item.image);
    updateData(photo);
    return result;
  } catch (error) {
    return null;
  }
}

export default getCatalogProductsImage;
