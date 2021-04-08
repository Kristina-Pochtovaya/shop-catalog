import transliterate from '../../../../common/utils/transliterate';
import postRequestMultipartFormData from '../../../../common/api/post/postRequestMultipartFormData';
import setClassErrorById from '../../../../common/utils/setClassErrorById';

const newCategory = '/add-category';

async function postNewCategory(category, image, titleColor) {
  const errorImage = document.getElementById('errorNewImage');
  const imgAlt = transliterate(category);
  const imgTitle = imgAlt;
  const link = `/${imgAlt}`;
  let className = '';

  if (titleColor === '1') {
    className = 'titleElectricalGoodsAndLights';
  } else if (titleColor === '2') {
    className = 'titleKitchen';
  } else if (titleColor === '3') {
    className = 'titleGarden';
  }

  const payload = {
    data: {
      category,
      link,
      className,
      imgAlt,
      imgTitle,
      image,
    },
  };

  try {
    const response = await postRequestMultipartFormData(newCategory, payload);
    const result = (response.data).toString();
    setClassErrorById('errorNewImage', 'errorNewImage -disabled');
    return result;
  } catch (error) {
    setClassErrorById('errorNewImage', 'errorNewImage');
    return null;
  }
}

export default postNewCategory;
