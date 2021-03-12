import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';
import transliterate from '../../../../common/untils/transliterate';

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
    const response = await axios.post(`${serverUrl}${newCategory}`, {
      payload,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const result = response.data;
    errorImage.setAttribute('class', 'errorNewImage -disabled');
    return result;
  } catch (error) {
    errorImage.setAttribute('class', 'errorNewImage');
    return null;
  }
}

export default postNewCategory;
