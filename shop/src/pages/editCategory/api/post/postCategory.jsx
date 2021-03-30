import postRequestMultipartFormData from '../../../../common/api/post/postRequestMultipartFormData';
import setClassErrorById from '../../../../common/untils/setClassErrorById';

const categoryEdit = '/category-edit';

async function postCategory(id, category, image) {
  const payload = {
    data: {
      id,
      category,
      image,
    },
  };
  try {
    const response = postRequestMultipartFormData(categoryEdit, payload);
    const result = response.data;
    setClassErrorById('errorImageString', 'errorImageString -disabled');
    return result;
  } catch (error) {
    setClassErrorById('errorImageString', 'errorImageString');
    return null;
  }
}

export default postCategory;
