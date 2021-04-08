import getRequest from './getRequest';

const url = '/';

const getImages = async (setImages, setFallback) => {
  try {
    const res = await getRequest(url);
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
