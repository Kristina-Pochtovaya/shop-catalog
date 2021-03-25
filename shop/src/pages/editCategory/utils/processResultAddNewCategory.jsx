const processResultAddNewCategory = async (
  postNewCategory, categoryName, image, titleColor, history, setClassErrorById,
) => {
  const result = await postNewCategory(categoryName, image, titleColor);
  if (result === true) {
    history.push('/edit-category');
  } if (result === false) {
    setClassErrorById('errorNewImage', 'errorNewImage');
  }
};

export default processResultAddNewCategory;
