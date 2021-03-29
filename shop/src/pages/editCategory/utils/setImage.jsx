function setImage(reader, updateData, updateCategoryImage, file) {
  const result = reader;
  result.onloadend = async () => {
    updateData(reader.result);
    updateCategoryImage(reader.result);
  };
  result.readAsDataURL(file);
}
export default setImage;
