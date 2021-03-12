import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const catalogImage = '/category-image';

async function getCatalogImage(id, updateData) {
  try {
    const response = await axios.get(`${serverUrl}${catalogImage}`);
    const result = response.data;
    const photo = result.filter((category) => category.id === id).map((item) => item.image);
    updateData(photo);
    return result;
  } catch (error) {
    return null;
  }
}

export default getCatalogImage;
