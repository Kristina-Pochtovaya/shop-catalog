import axios from 'axios';
import serverUrl from '../../common/constants/urls';

const url = '/';

const getImages = async (setImages, setFallback) => {
  try {
    const res = await axios.get(`${serverUrl}${url}`);
    if (!res.data.files) {
      setFallback(res.data.msg);
      return;
    }
    setImages(res.data.files);
  } catch (err) {
    console.log(err.message);
  }
};

export default getImages;
